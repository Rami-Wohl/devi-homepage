import { formatTime } from "~/lib/utils";
import { useAudioPlayerContext } from "../../context/audio-player-context";

export const ProgressBar = () => {
  const { progressBarRef, audioRef, timeProgress, duration, setTimeProgress } =
    useAudioPlayerContext();

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      // if progress bar changes while audio is on pause
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(newTime / duration) * 100}%`,
      );
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-5">
      <span>{formatTime(timeProgress)}</span>
      <input
        className="max-w-[80%] bg-gray-300"
        ref={progressBarRef}
        type="range"
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};
