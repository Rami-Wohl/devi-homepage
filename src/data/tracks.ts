import { type Track } from "~/context/audio-player-context";

export const metalTracks: Track[] = [
  {
    title: "Cthuluminati - Synth Nicolai",
    src: "assets/tracks/synth-nicolai.mp3",
    author: "Cthuluminati",
    thumbnail: "assets/images/mijn-hoofd.jpeg",
  },
] as const;

export const jazzTracks: Track[] = [
  {
    title: "Cthuluminati - The Awakening",
    src: "assets/tracks/the-awakening.mp3",
    author: "Cthuluminati",
    thumbnail: "assets/images/pickle-rick.jpeg",
  },
] as const;
