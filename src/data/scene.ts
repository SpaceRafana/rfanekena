export const DESIGN_W = 1366;
export const DESIGN_H = 3415.0;

export type TextPart = { t: string; href?: string; underline?: boolean };
export type SceneItem = {
  kind: "text" | "image" | "video" | "loop";
  x: number; y: number; w: number; h: number; z: number;
  src?: string; poster?: string; fit?: "cover" | "contain"; alt?: string; eager?: boolean;
  text?: string; parts?: TextPart[];
  color?: string; font?: "codec" | "arcade"; size?: number; weight?: number;
  align?: "left" | "center" | "right"; tracking?: number; leading?: number;
  upper?: boolean; badge?: boolean; valign?: "start" | "center";
};
export type ScenePage = { y: number; h: number; color: string; src?: string };

export const pages: ScenePage[] = [{"y": 0.0, "h": 758.0, "color": "#0e0e0e", "src": "/media/d093aba62900.webp"}, {"y": 758.0, "h": 630.0, "color": "#0e0e0e"}, {"y": 1388.0, "h": 459.0, "color": "#0e0e0e"}, {"y": 1847.0, "h": 1328.0, "color": "#0e0e0e"}, {"y": 3175.0, "h": 240.0, "color": "#2f2f2f"}];

export const items: SceneItem[] = [
  {
    "kind": "image",
    "x": 1070.86,
    "y": 579.92,
    "w": 42.32,
    "h": 42.32,
    "z": 1,
    "src": "/media/ccf093fef4e7.svg",
    "fit": "contain",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "image",
    "x": 1070.68,
    "y": 639.88,
    "w": 42.5,
    "h": 42.32,
    "z": 2,
    "src": "/media/cf878bf94d74.webp",
    "fit": "contain",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 968.77,
    "y": 649.45,
    "w": 89.01,
    "h": 20.97,
    "z": 3,
    "text": "Illustrator",
    "parts": [
      {
        "t": "Illustrator"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 21.333,
    "weight": 400,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "image",
    "x": 1248.18,
    "y": 639.88,
    "w": 42.32,
    "h": 42.32,
    "z": 4,
    "src": "/media/d128b33ea4e4.webp",
    "fit": "contain",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 1166.01,
    "y": 649.45,
    "w": 68.76,
    "h": 20.97,
    "z": 5,
    "text": "CapCut",
    "parts": [
      {
        "t": "CapCut"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 21.333,
    "weight": 400,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "image",
    "x": 1245.91,
    "y": 579.92,
    "w": 44.59,
    "h": 42.32,
    "z": 6,
    "src": "/media/ccdc8000eefd.webp",
    "fit": "contain",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 1122.24,
    "y": 589.95,
    "w": 132.13,
    "h": 22.27,
    "z": 7,
    "text": "Photoshop",
    "parts": [
      {
        "t": "Photoshop"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 76.1,
    "y": 152.94,
    "w": 1214.4,
    "h": 306.08,
    "z": 8,
    "text": "FANEKENA",
    "parts": [
      {
        "t": "FANEKENA"
      }
    ],
    "color": "#aac624",
    "font": "codec",
    "size": 134.707,
    "weight": 800,
    "align": "center",
    "tracking": -54.0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "center"
  },
  {
    "kind": "image",
    "x": 487.45,
    "y": 259.17,
    "w": 391.69,
    "h": 311.41,
    "z": 9,
    "src": "/media/893e44db4d6b.webp",
    "fit": "cover",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "loop",
    "x": 524.26,
    "y": 335.87,
    "w": 318.07,
    "h": 217.88,
    "z": 10,
    "src": "/media/93bae155e8df.gif",
    "poster": "/media/fe3c732927d5.webp",
    "alt": "Animation création graphique"
  },
  {
    "kind": "image",
    "x": 655.66,
    "y": 0.0,
    "w": 54.67,
    "h": 54.67,
    "z": 11,
    "src": "/media/5961441c4c01.webp",
    "fit": "cover",
    "eager": true,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 999.31,
    "y": 588.23,
    "w": 60.54,
    "h": 22.27,
    "z": 12,
    "text": "Canva",
    "parts": [
      {
        "t": "Canva"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 75.5,
    "y": 579.92,
    "w": 742.3,
    "h": 63.55,
    "z": 13,
    "text": "La création visuelle est ma passion, avec 2 ans d'expérience en design graphique et en gestion de contenus digitaux.\nTitulaire d'une licence en communication audiovisuelle et numérique.",
    "parts": [
      {
        "t": "La création visuelle est ma passion, avec 2 ans d'expérience en design graphique et en gestion de contenus digitaux.\nTitulaire d'une licence en communication audiovisuelle et numérique."
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 477.59,
    "y": 144.05,
    "w": 411.42,
    "h": 31.65,
    "z": 14,
    "text": "SALUT ! Moi c'est",
    "parts": [
      {
        "t": "SALUT ! Moi c'est"
      }
    ],
    "color": "#ffffff",
    "font": "arcade",
    "size": 26.76,
    "weight": 400,
    "align": "center",
    "tracking": 221.0,
    "leading": 1.17,
    "upper": true,
    "badge": false,
    "valign": "center"
  },
  {
    "kind": "image",
    "x": 876.89,
    "y": 956.69,
    "w": 413.61,
    "h": 413.61,
    "z": 15,
    "src": "/media/eb77ee5229cd.webp",
    "fit": "cover",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "image",
    "x": 75.5,
    "y": 956.7,
    "w": 785.13,
    "h": 413.61,
    "z": 16,
    "src": "/media/84a3a380c388.webp",
    "fit": "cover",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 539.32,
    "y": 797.95,
    "w": 287.35,
    "h": 36.85,
    "z": 17,
    "text": "Mes projets",
    "parts": [
      {
        "t": "Mes projets"
      }
    ],
    "color": "#aac624",
    "font": "arcade",
    "size": 30.76,
    "weight": 400,
    "align": "center",
    "tracking": 54.0,
    "leading": 1.17,
    "upper": true,
    "badge": false,
    "valign": "center"
  },
  {
    "kind": "text",
    "x": 641.27,
    "y": 898.46,
    "w": 83.45,
    "h": 26.68,
    "z": 18,
    "text": "images",
    "parts": [
      {
        "t": "images"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 22.667,
    "weight": 700,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": true,
    "badge": true,
    "valign": "center"
  },
  {
    "kind": "image",
    "x": 75.5,
    "y": 1388.0,
    "w": 452.7,
    "h": 452.7,
    "z": 19,
    "src": "/media/3c485b3c28c1.webp",
    "fit": "cover",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "image",
    "x": 544.38,
    "y": 1388.0,
    "w": 254.64,
    "h": 452.7,
    "z": 20,
    "src": "/media/07ee197ad7e3.webp",
    "fit": "cover",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "image",
    "x": 934.98,
    "y": 1579.95,
    "w": 217.03,
    "h": 217.03,
    "z": 21,
    "src": "/media/a8a897649b87.svg",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 815.03,
    "y": 1388.0,
    "w": 356.93,
    "h": 147.53,
    "z": 22,
    "text": "Création de contenus engageants \n(posts, stories, carrousels) pour la \nmarque de soins naturels Soin de Toi. \nRéalisés avec Canva, Adobe Illustrator \net Photoshop pour un rendu impactant, \ncohérent et optimisé pour \nl'engagement.",
    "parts": [
      {
        "t": "Création de contenus engageants \n(posts, stories, carrousels) pour la \nmarque de soins naturels Soin de Toi. \nRéalisés avec Canva, Adobe Illustrator \net Photoshop pour un rendu impactant, \ncohérent et optimisé pour \nl'engagement."
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "video",
    "x": 562.68,
    "y": 2042.55,
    "w": 452.7,
    "h": 452.7,
    "z": 23,
    "src": "/media/234cabd624c3.mp4",
    "poster": "/media/35fe016ec454.webp",
    "alt": "Vidéo"
  },
  {
    "kind": "image",
    "x": 606.31,
    "y": 1953.23,
    "w": 42.32,
    "h": 42.32,
    "z": 24,
    "src": "/media/ccf093fef4e7.svg",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "image",
    "x": 717.37,
    "y": 1953.23,
    "w": 42.32,
    "h": 42.32,
    "z": 25,
    "src": "/media/d128b33ea4e4.webp",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "video",
    "x": 1035.86,
    "y": 2042.55,
    "w": 254.64,
    "h": 452.7,
    "z": 26,
    "src": "/media/7779e9229847.mp4",
    "poster": "/media/25189e6e5cd3.webp",
    "alt": "Vidéo"
  },
  {
    "kind": "image",
    "x": 203.02,
    "y": 2226.28,
    "w": 226.96,
    "h": 226.96,
    "z": 27,
    "src": "/media/79583e21fc16.webp",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "video",
    "x": 352.32,
    "y": 2679.47,
    "w": 253.98,
    "h": 451.53,
    "z": 28,
    "src": "/media/227b7f558900.mp4",
    "poster": "/media/c7a917088a63.webp",
    "alt": "Vidéo"
  },
  {
    "kind": "video",
    "x": 77.64,
    "y": 2679.47,
    "w": 253.98,
    "h": 451.53,
    "z": 29,
    "src": "/media/6fcae19bbf1b.mp4",
    "poster": "/media/8a5bb4c5e33d.webp",
    "alt": "Vidéo"
  },
  {
    "kind": "image",
    "x": 832.4,
    "y": 2804.1,
    "w": 283.53,
    "h": 283.53,
    "z": 30,
    "src": "/media/16cfc6c2792b.webp",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 641.78,
    "y": 1900.46,
    "w": 82.43,
    "h": 26.68,
    "z": 31,
    "text": "vidÉoS",
    "parts": [
      {
        "t": "vidÉoS"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 22.667,
    "weight": 700,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": true,
    "badge": true,
    "valign": "center"
  },
  {
    "kind": "text",
    "x": 661.84,
    "y": 1963.26,
    "w": 42.32,
    "h": 22.27,
    "z": 32,
    "text": "+",
    "parts": [
      {
        "t": "+"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 75.5,
    "y": 2042.55,
    "w": 467.18,
    "h": 105.54,
    "z": 33,
    "text": "Conception et montage de vidéos promotionnelles \n(Reels, posts carrés) pour présenter les produits et \nbooster le marketing digital. Réalisées en \ncombinant Canva pour le design graphique et \nCapCut pour le montage fluide et dynamique.",
    "parts": [
      {
        "t": "Conception et montage de vidéos promotionnelles \n(Reels, posts carrés) pour présenter les produits et \nbooster le marketing digital. Réalisées en \ncombinant Canva pour le design graphique et \nCapCut pour le montage fluide et dynamique."
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 520.77,
    "y": 2584.82,
    "w": 324.47,
    "h": 26.68,
    "z": 34,
    "text": "vidÉoS personNelS",
    "parts": [
      {
        "t": "vidÉoS personNelS"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 22.667,
    "weight": 700,
    "align": "center",
    "tracking": 0,
    "leading": 1.17,
    "upper": true,
    "badge": true,
    "valign": "center"
  },
  {
    "kind": "text",
    "x": 627.31,
    "y": 2679.47,
    "w": 467.18,
    "h": 84.54,
    "z": 35,
    "text": "Montages vidéos lifestyle et créatifs personnels \n(aventures, moments nature) réalisés avec CapCut. \nPubliés sur Cheelee pour partager des vibes \nauthentiques et explorer le storytelling vidéo.",
    "parts": [
      {
        "t": "Montages vidéos lifestyle et créatifs personnels \n(aventures, moments nature) réalisés avec CapCut. \nPubliés sur "
      },
      {
        "t": "Cheelee",
        "href": "https://app.getlee.co/media/68f1445516fdf9d517c7e3d6:68f1338cdfc4b89d1c6632e6",
        "underline": true
      },
      {
        "t": " pour partager des vibes \nauthentiques et explorer le storytelling vidéo."
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "image",
    "x": 924.14,
    "y": 3312.7,
    "w": 30.93,
    "h": 30.93,
    "z": 36,
    "src": "/media/c878bad89167.webp",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 964.56,
    "y": 3317.38,
    "w": 222.76,
    "h": 21.56,
    "z": 37,
    "text": "fanekena.f12@gmail.com",
    "parts": [
      {
        "t": "fanekena.f12@gmail.com",
        "href": "mailto:fanekena.f12@gmail.com"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 300,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "image",
    "x": 924.14,
    "y": 3350.44,
    "w": 31.81,
    "h": 31.98,
    "z": 38,
    "src": "/media/9677284232e0.svg",
    "fit": "contain",
    "eager": false,
    "alt": "Visuel du portfolio Fanekena"
  },
  {
    "kind": "text",
    "x": 963.32,
    "y": 3355.65,
    "w": 220.43,
    "h": 21.56,
    "z": 39,
    "text": "+261 32 46 819 48",
    "parts": [
      {
        "t": "+261 32 46 819 48",
        "href": "tel:+261324681948"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 300,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  },
  {
    "kind": "text",
    "x": 75.5,
    "y": 3235.96,
    "w": 439.39,
    "h": 36.85,
    "z": 40,
    "text": "Pour me contacter",
    "parts": [
      {
        "t": "Pour me contacter"
      }
    ],
    "color": "#aac624",
    "font": "arcade",
    "size": 30.76,
    "weight": 400,
    "align": "center",
    "tracking": 54.0,
    "leading": 1.17,
    "upper": true,
    "badge": false,
    "valign": "center"
  },
  {
    "kind": "text",
    "x": 75.5,
    "y": 3312.7,
    "w": 585.63,
    "h": 84.54,
    "z": 41,
    "text": "Envie de transformer une idée en visuel qui claque ?\nOu juste de papoter design, café malgache, ou politique ? 😄\nJe suis à l’écoute – même pour les discussions 100 % conviviales \nsans brief ni deadline !",
    "parts": [
      {
        "t": "Envie de transformer une idée en visuel qui claque ?\nOu juste de papoter design, café malgache, ou politique ? 😄\nJe suis à l’écoute – même pour les discussions 100 % conviviales \nsans brief ni deadline !"
      }
    ],
    "color": "#ffffff",
    "font": "codec",
    "size": 18.667,
    "weight": 400,
    "align": "left",
    "tracking": 0,
    "leading": 1.17,
    "upper": false,
    "badge": false,
    "valign": "start"
  }
];
