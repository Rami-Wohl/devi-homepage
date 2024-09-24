import { useAudioPlayerContext } from "../../context/audio-player-context";
import MusicNoteIcon from "../icons/music-note-icon";

export const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();
  return (
    <div className="flex items-center gap-4 py-6">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-md bg-gray-200">
        {currentTrack.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-full w-full object-cover"
            src={currentTrack.thumbnail}
            alt="audio avatar"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-300">
            <span className="text-xl text-gray-600">
              <MusicNoteIcon />
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="font-bold lg:max-w-64 lg:truncate">
          {currentTrack.title}
        </p>
        <p className="text-sm text-gray-400">{currentTrack.author}</p>
      </div>
    </div>
  );
};
