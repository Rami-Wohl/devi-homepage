"use client";

import { useTranslations } from "next-intl";
import AudioPlayer from "~/components/audio/player";
import { UnderConstruction } from "~/components/content/under-construction";
import { AudioPlayerProvider } from "~/context/audio-player-context";
import { tracks } from "~/data/tracks";

export default function PortfolioPage() {
  const t = useTranslations("navigation");

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>{t("portfolio")}</h1>
          <AudioPlayerProvider tracks={tracks}>
            <AudioPlayer />
          </AudioPlayerProvider>

          <UnderConstruction />
        </div>
      </div>
    </div>
  );
}
