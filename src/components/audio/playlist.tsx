import {
  type Track,
  useAudioPlayerContext,
} from "../../context/audio-player-context";
import MusicNotesIcon from "../icons/music-notes-icon";

export const PlayList = () => {
  const { currentTrack, setIsPlaying, setCurrentTrack, tracks } =
    useAudioPlayerContext();

  const handleClick = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <ul className="max-h-72 overflow-y-auto rounded-b-md bg-secondary bg-opacity-80 text-white">
      {tracks.map((track, index) => (
        <li
          key={index}
          className={`flex cursor-pointer items-center gap-3 p-[0.5rem_10px] ${
            currentTrack.title === track.title ? "bg-[#a66646]" : ""
          }`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick(track);
            }
          }}
          onClick={() => handleClick(track)}
        >
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm">
            {track.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="h-full w-full object-cover"
                src={track.thumbnail}
                alt="audio avatar"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-md">
                <span className="text-xl text-gray-600">
                  <MusicNotesIcon />
                </span>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-bold">{track.title}</p>
            <p className="text-sm text-gray-400">{track.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
