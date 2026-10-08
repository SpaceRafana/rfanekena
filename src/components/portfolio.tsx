import { useEffect, useState } from "react";
import {
  DESIGN_H,
  DESIGN_W,
  items,
  pages,
  type SceneItem,
} from "@/data/scene";

function box(item: { x: number; y: number; w: number; h: number; z: number }) {
  return {
    left: `${(item.x / DESIGN_W) * 100}%`,
    top: `${(item.y / DESIGN_H) * 100}%`,
    width: `${(item.w / DESIGN_W) * 100}%`,
    height: `${(item.h / DESIGN_H) * 100}%`,
    zIndex: item.z,
  } as const;
}

function TextBlock({ item }: { item: SceneItem }) {
  const parts = item.parts?.length ? item.parts : [{ t: item.text ?? "" }];
  return (
    <div
      className={`slot copy-slot ${item.valign === "center" ? "middle" : "start"}`}
      style={box(item)}
    >
      <p
        className={`copy ${item.align === "center" ? "center" : item.align === "right" ? "right" : ""}`}
        style={{
          color: item.color,
          fontFamily: item.font === "arcade" ? "var(--font-arcade)" : "var(--font-codec)",
          fontWeight: item.weight ?? 400,
          textTransform: item.upper ? "uppercase" : "none",
          ["--fs" as string]: String(item.size ?? 16),
          ["--lh" as string]: String(item.leading ?? 1.17),
          ["--track" as string]: String((item.tracking ?? 0) / 1000),
        }}
      >
        {item.badge ? (
          <span className="badge">
            <Parts parts={parts} />
          </span>
        ) : (
          <Parts parts={parts} />
        )}
      </p>
    </div>
  );
}

function Parts({ parts }: { parts: { t: string; href?: string; underline?: boolean }[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.href ? (
          <a
            key={i}
            href={part.href}
            style={{ textDecoration: part.underline ? "underline" : "none" }}
            {...(part.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
          >
            {part.t}
          </a>
        ) : (
          <span key={i}>{part.t}</span>
        ),
      )}
    </>
  );
}

function VideoSlot({ item }: { item: SceneItem }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="slot" style={box(item)}>
      {play ? (
        <video
          className="fit-cover"
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <>
          <img
            className="fit-cover"
            src={item.poster || item.src}
            alt={item.alt || "Vidéo"}
            loading="lazy"
            decoding="async"
          />
          <button type="button" className="play" aria-label="Lire la vidéo" onClick={() => setPlay(true)}>
            <span />
          </button>
        </>
      )}
    </div>
  );
}

function Loop({ item }: { item: SceneItem }) {
  const [still, setStill] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setStill(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return (
    <img
      className="slot fit-contain"
      style={box(item)}
      src={still && item.poster ? item.poster : item.src}
      alt={item.alt || ""}
      decoding="async"
    />
  );
}

export function Portfolio() {
  return (
    <main className="stage" style={{ aspectRatio: `${DESIGN_W} / ${DESIGN_H}` }}>
      <h1 className="sr-only">Fanekena — portfolio</h1>
      {pages.map((page) => (
        <div
          key={page.y}
          className="layer"
          style={{
            left: 0,
            top: `${(page.y / DESIGN_H) * 100}%`,
            width: "100%",
            height: `${(page.h / DESIGN_H) * 100}%`,
            background: page.color,
            zIndex: 0,
          }}
        >
          {page.src ? (
            <img
              src={page.src}
              alt=""
              className="fit-cover"
              style={{ width: "100%", height: "100%" }}
              fetchPriority="high"
              decoding="async"
            />
          ) : null}
        </div>
      ))}
      {items.map((item, i) => {
        if (item.kind === "text") return <TextBlock key={i} item={item} />;
        if (item.kind === "video") return <VideoSlot key={i} item={item} />;
        if (item.kind === "loop") return <Loop key={i} item={item} />;
        return (
          <img
            key={i}
            className={`slot ${item.fit === "contain" ? "fit-contain" : "fit-cover"}`}
            style={box(item)}
            src={item.src}
            alt={item.alt || ""}
            loading={item.eager ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={item.eager ? "high" : "auto"}
          />
        );
      })}
    </main>
  );
}
