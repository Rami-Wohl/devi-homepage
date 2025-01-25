import { type Track } from "~/context/audio-player-context";

export const metalTracks: Track[] = [
  {
    title: "Asgrauw - Apada",
    src: "/assets/tracks/asgrauw_apada.mp3",
    author: "Asgrauw",
    key: "projects.asgrauw",
    thumbnail: "/assets/images/portfolio/asgrauw.jpg",
  },
  {
    title: "Meslamtaea - Bitterzoet",
    src: "/assets/tracks/meslamtaea_bitterzoet.mp3",
    author: "Meslamtaea",
    key: "projects.meslamtaea",
    thumbnail: "/assets/images/portfolio/meslamtaea.jpg",
  },
  {
    title: "Schavot - Strijdend Voor Het Bestaan",
    src: "/assets/tracks/schavot_strijdend-voor-het-bestaan.mp3",
    author: "Schavot",
    key: "projects.schavot",
    thumbnail: "/assets/images/portfolio/schavot.jpg",
  },
  {
    title: "Vergankelijk - Zielsalleen",
    src: "/assets/tracks/vergankelijk_zielsalleen.mp3",
    author: "Vergankelijk",
    key: "projects.vergankelijk",
    thumbnail: "/assets/images/portfolio/vergankelijk.jpg",
  },
] as const;

export const electronicTracks: Track[] = [
  {
    title: "Avanue Électrique - 4 Ever",
    src: "/assets/tracks/avanue-electrique_4-ever.mp3",
    author: "Avanue Électrique",
    key: "projects.avanue",
    thumbnail: "/assets/images/portfolio/avanue-electrique.jpeg",
  },
  {
    title: "Devi Hisgen - The Dark Lord Is Upon Us",
    src: "/assets/tracks/devi-hisgen_the-dark-lord-is-upon-us.mp3",
    author: "Devi Hisgen",
    key: "projects.devi",
    thumbnail: "/assets/images/portfolio/devi-hisgen.jpg",
  },
] as const;
