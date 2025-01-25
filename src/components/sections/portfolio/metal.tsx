import AudioPlayer from "~/components/audio/player";
import { useTranslations } from "next-intl";
import {
  AudioPlayerProvider,
  type Track,
} from "~/context/audio-player-context";

export const PortfolioSectionMetal = ({ tracks }: { tracks: Track[] }) => {
  const t = useTranslations("portfolio");

  return (
    <div className="flex w-full flex-col justify-center">
      <h3 className="mb-8 mt-4 px-2 text-center">{t("metalDescription")}</h3>
      <AudioPlayerProvider tracks={tracks}>
        <AudioPlayer
          showPlaylistToggle={false}
          showShuffleToggle={false}
          showRepeatToggle={false}
        />
      </AudioPlayerProvider>
    </div>
  );
};
