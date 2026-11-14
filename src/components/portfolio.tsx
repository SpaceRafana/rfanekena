import { useCallback, useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";

const M = "/media/";

const tools = [
  { name: "Canva", icon: `${M}ccf093fef4e7.svg`, cls: "c1" },
  { name: "Photoshop", icon: `${M}ccdc8000eefd.webp`, cls: "c2" },
  { name: "Illustrator", icon: `${M}cf878bf94d74.webp`, cls: "c3" },
  { name: "CapCut", icon: `${M}d128b33ea4e4.webp`, cls: "c4" },
];

const projects = [
  { src: `${M}3c485b3c28c1.webp`, title: "Bon Fet Kaf", sub: "Visuel événementiel Soin de Toi", w: 905, h: 906 },
  { src: `${M}07ee197ad7e3.webp`, title: "Story", sub: "Format vertical Soin de Toi", w: 509, h: 904 },
  { src: `${M}84a3a380c388.webp`, title: "Carrousel", sub: "Publication multi-images Soin de Toi", w: 1570, h: 776 },
  { src: `${M}eb77ee5229cd.webp`, title: "Post", sub: "Visuel produit Soin de Toi", w: 827, h: 828 },
];

const videos = [
  { src: `${M}234cabd624c3.mp4`, poster: `${M}35fe016ec454.webp`, tag: "Promo", alt: "Vidéo promotionnelle Soin de Toi, format carré" },
  { src: `${M}7779e9229847.mp4`, poster: `${M}25189e6e5cd3.webp`, tag: "Promo", alt: "Reel promotionnel Soin de Toi" },
  { src: `${M}6fcae19bbf1b.mp4`, poster: `${M}8a5bb4c5e33d.webp`, tag: "Perso", alt: "Vidéo personnelle lifestyle" },
  { src: `${M}227b7f558900.mp4`, poster: `${M}c7a917088a63.webp`, tag: "Perso", alt: "Vidéo personnelle nature" },
];

const CHEELEE =
  "https://app.getlee.co/media/68f1445516fdf9d517c7e3d6:68f1338cdfc4b89d1c6632e6";

/** Pointer tilt for a single element: writes --rx/--ry on it, no re-render. */
function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T>(null);
  const onMove = useCallback(
    (e: RPointerEvent<T>) => {
      const el = ref.current;
      if (!el || e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
    },
    [max],
  );
  const onLeave = useCallback(() => {
    ref.current?.style.removeProperty("--rx");
    ref.current?.style.removeProperty("--ry");
  }, []);
  return { ref, onPointerMove: onMove, onPointerLeave: onLeave };
}

function Cube({ name, icon, cls }: (typeof tools)[number]) {
  return (
    <div className={`cube ${cls}`} aria-hidden="true">
      <div className="spin">
        <div className="f">
          <img src={icon} alt="" width={60} height={60} decoding="async" />
        </div>
        <div className="t" />
        <div className="r" />
        <div className="l" />
        <div className="b" />
      </div>
      <span className="cube-label">{name}</span>
    </div>
  );
}

function Carousel() {
  const [i, setI] = useState(0);
  const n = projects.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const start = useRef<number | null>(null);
  return (
    <div
      className="carou"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Projets Soin de Toi"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      onPointerDown={(e) => (start.current = e.clientX)}
      onPointerUp={(e) => {
        if (start.current === null) return;
        const dx = e.clientX - start.current;
        start.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="ring-in">
        {projects.map((p, k) => {
          let off = k - i;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          return (
            <figure
              key={p.src}
              className="cd"
              data-off={off}
              style={{ ["--o" as string]: off, ["--a" as string]: Math.abs(off) }}
              onClick={() => off !== 0 && go(off)}
              aria-hidden={off !== 0}
            >
              <img
                src={p.src}
                alt={`${p.title} : ${p.sub}`}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <figcaption className="lab">
                <b>{p.title}</b> · {p.sub}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="ring-nav">
        <button type="button" className="arrow" aria-label="Projet précédent" onClick={() => go(-1)}>
          ←
        </button>
        <div className="dots" role="tablist">
          {projects.map((p, k) => (
            <button
              key={p.src}
              type="button"
              role="tab"
              aria-selected={k === i}
              aria-label={`Voir ${p.title}`}
              className={k === i ? "on" : ""}
              onClick={() => setI(k)}
            />
          ))}
        </div>
        <button type="button" className="arrow" aria-label="Projet suivant" onClick={() => go(1)}>
          →
        </button>
      </div>
    </div>
  );
}

function Phone({ v, idx }: { v: (typeof videos)[number]; idx: number }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={`pf p${idx + 1}`}>
      <div className="pf-in">
        {play ? (
          <video src={v.src} poster={v.poster} controls autoPlay playsInline />
        ) : (
          <>
            <img src={v.poster} alt={v.alt} loading="lazy" decoding="async" />
            <button type="button" className="play" aria-label={`Lire : ${v.alt}`} onClick={() => setPlay(true)}>
              <span />
            </button>
          </>
        )}
        <span className="tg">{v.tag}</span>
      </div>
    </div>
  );
}

export function Portfolio() {
  const root = useRef<HTMLElement>(null);
  const contact = useTilt<HTMLDivElement>(10);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal sections on scroll
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("seen");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    el.querySelectorAll(".rv").forEach((n) => io.observe(n));
    if (reduce) return () => io.disconnect();

    // Hero mouse tilt + scroll parallax, batched in one rAF
    let raf = 0;
    let mx = 0;
    let my = 0;
    const paint = () => {
      raf = 0;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
      el.style.setProperty("--sy", String(Math.min(window.scrollY, 1200)));
    };
    const ask = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      ask();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", ask, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", ask);
    };
  }, []);

  return (
    <main className="fk" ref={root}>
      {/* HERO */}
      <section className="hero">
        <img className="hero-bg" src={`${M}d093aba62900.webp`} alt="" fetchPriority="high" decoding="async" />
        <div className="glow" />
        <div className="vign" />
        <header className="top">
          <img className="logo" src={`${M}5961441c4c01.webp`} alt="Logo FK" width={46} height={46} />
          <a className="avail" href="#contact">
            <i /> Disponible pour missions
          </a>
        </header>

        {tools.map((t) => (
          <Cube key={t.name} {...t} />
        ))}

        <div className="stage">
          <span className="hi">SALUT ! Moi c'est</span>
          <h1 className="name" aria-label="Fanekena">
            FANEKENA
          </h1>
          <p className="sub">
            Designer graphique · posts, stories, carrousels &amp; Reels
            <br />
            <b>qui font arrêter le scroll.</b>
          </p>
        </div>

        <div className="gif-card" aria-hidden="true">
          <img src={`${M}93bae155e8df.gif`} alt="" width={420} height={287} decoding="async" />
        </div>

        <a className="scroll" href="#projets" aria-label="Voir mes projets">
          <i />
          SCROLL
        </a>
      </section>

      {/* ABOUT */}
      <section className="about rv">
        <p className="bio">
          La création visuelle est ma passion, avec 2 ans d'expérience en design graphique et en gestion de
          contenus digitaux.
          <br />
          Titulaire d'une licence en communication audiovisuelle et numérique.
        </p>
        <div className="tiles">
          <div className="tile">
            <b>2 ans</b>
            <span>en design graphique &amp; contenus digitaux</span>
          </div>
          <div className="tile">
            <b>Licence</b>
            <span>communication audiovisuelle &amp; numérique</span>
          </div>
          <div className="tile">
            <b>Soin de Toi</b>
            <span>marque cliente principale</span>
          </div>
          <div className="tile">
            <b>4 outils</b>
            <span>Canva · Photoshop · Illustrator · CapCut</span>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="sec rv" id="projets">
        <div className="st">
          <div className="k">01 / IMAGES</div>
          <h2>Mes projets</h2>
          <p>
            Création de contenus engageants (posts, stories, carrousels) pour la marque de soins naturels Soin de
            Toi. Réalisés avec Canva, Adobe Illustrator et Photoshop pour un rendu impactant, cohérent et optimisé
            pour l'engagement.
          </p>
        </div>
        <Carousel />
        <div className="chips">
          {tools.slice(0, 3).map((t) => (
            <span className="chip" key={t.name}>
              <img src={t.icon} alt="" width={28} height={28} loading="lazy" />
              {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="sec rv" id="videos">
        <div className="st">
          <div className="k">02 / VIDÉOS</div>
          <h2>Reels &amp; vidéos</h2>
        </div>
        <div className="vtexts">
          <div>
            <h3>
              Vidéos <em>+</em>
              <img src={`${M}ccf093fef4e7.svg`} alt="Canva" width={30} height={30} loading="lazy" />
              <img src={`${M}d128b33ea4e4.webp`} alt="CapCut" width={30} height={30} loading="lazy" />
            </h3>
            <p>
              Conception et montage de vidéos promotionnelles (Reels, posts carrés) pour présenter les produits et
              booster le marketing digital. Réalisées en combinant Canva pour le design graphique et CapCut pour le
              montage fluide et dynamique.
            </p>
          </div>
          <div>
            <h3>Vidéos personnelles</h3>
            <p>
              Montages vidéos lifestyle et créatifs personnels (aventures, moments nature) réalisés avec CapCut.
              Publiés sur{" "}
              <a href={CHEELEE} target="_blank" rel="noreferrer noopener">
                Cheelee
              </a>{" "}
              pour partager des vibes authentiques et explorer le storytelling vidéo.
            </p>
          </div>
        </div>
        <div className="fan">
          {videos.map((v, k) => (
            <Phone key={v.src} v={v} idx={k} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="ct rv" id="contact">
        <div className="card3" {...contact}>
          <div>
            <h2>
              POUR ME
              <br />
              CONTACTER
            </h2>
            <p>
              Envie de transformer une idée en visuel qui claque ?
              <br />
              Ou juste de papoter design, café malgache, ou politique ? 😄
              <br />
              Je suis à l’écoute – même pour les discussions 100 % conviviales sans brief ni deadline !
            </p>
          </div>
          <div className="cl">
            <a href="https://wa.me/261324681948" target="_blank" rel="noreferrer noopener">
              <img className="ico" src={`${M}9677284232e0.svg`} alt="" width={34} height={34} loading="lazy" />
              WhatsApp · +261 32 46 819 48
            </a>
            <a href="tel:+261324681948">
              <span className="ico tel" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1Z" />
                </svg>
              </span>
              Appeler · +261 32 46 819 48
            </a>
            <a href="mailto:fanekena.f12@gmail.com">
              <img className="ico" src={`${M}c878bad89167.webp`} alt="" width={34} height={34} loading="lazy" />
              fanekena.f12@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <span>© 2026 Fanekena</span>
        <span className="arc">FK ✦ DESIGN</span>
      </footer>
    </main>
  );
}
