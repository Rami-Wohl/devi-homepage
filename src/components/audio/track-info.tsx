import { useTranslations } from "next-intl";
import { useAudioPlayerContext } from "../../context/audio-player-context";
import MusicNoteIcon from "../icons/music-note-icon";
import { ResponsiveImage } from "../ui/responsive-image";

export const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();
  const t = useTranslations("portfolio");
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6">
      <div className="mb-4 flex h-24 w-full items-center justify-center overflow-hidden rounded-md lg:h-40">
        {currentTrack.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element

          <ResponsiveImage src={currentTrack.thumbnail} alt="audio avatar" />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-300">
            <span className="text-xl text-gray-600">
              <MusicNoteIcon />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="font-bold lg:max-w-full">{currentTrack.title}</p>
        <p className="text-sm text-gray-400">{currentTrack.author}</p>
        <p className="text-sm text-gray-400">{t(currentTrack.key)}</p>
      </div>
    </div>
  );
};
