import { useCallback, useEffect, useRef, useState } from "react";
import {
  type Track,
  useAudioPlayerContext,
} from "../../context/audio-player-context";
import PreviousTrackIcon from "../icons/previous-track-icon";
import PauseTrackIcon from "../icons/pause-track-icon";
import PlayTrackIcon from "../icons/play-track-icon";
import RewindTrackIcon from "../icons/rewind-track-icon";
import FastForwardTrackIcon from "../icons/fastforward-track-icon";
import NextTrackIcon from "../icons/next-track-icon";
import ShuffleTracksIcon from "../icons/shuffle-tracks-icon";
import RepeatTrackIcon from "../icons/repeat-track-icon";

export const Controls = ({ tracks }: { tracks: Track[] }) => {
  const {
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    duration,
    setTimeProgress,
    setTrackIndex,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
  } = useAudioPlayerContext();
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const playAnimationRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(currentTime / duration) * 100}%`,
      );
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration, audioRef, progressBarRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress(); // Ensure progress is updated immediately when paused
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  useEffect(() => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  }, [audioRef, setDuration, progressBarRef]);

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
      updateProgress();
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
      updateProgress();
    }
  };

  const handlePrevious = useCallback(() => {
    setTrackIndex((prev) => {
      const newIndex = isShuffle
        ? Math.floor(Math.random() * tracks.length)
        : prev === 0
          ? tracks.length - 1
          : prev - 1;
      setCurrentTrack(tracks[newIndex]);
      return newIndex;
    });
  }, [isShuffle, setCurrentTrack, setTrackIndex, tracks]);

  const handleNext = useCallback(() => {
    setTrackIndex((prev) => {
      const newIndex = isShuffle
        ? Math.floor(Math.random() * tracks.length)
        : prev >= tracks.length - 1
          ? 0
          : prev + 1;
      setCurrentTrack(tracks[newIndex]);
      return newIndex;
    });
  }, [isShuffle, setCurrentTrack, setTrackIndex, tracks]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    if (currentAudioRef) {
      currentAudioRef.onended = () => {
        if (isRepeat) {
          currentAudioRef.play();
        } else {
          handleNext(); // This function should handle both shuffle and non-shuffle scenarios
        }
      };
    }
    return () => {
      if (currentAudioRef) {
        currentAudioRef.onended = null;
      }
    };
  }, [isRepeat, handleNext, audioRef]);

  return (
    <div className="flex items-center gap-4">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <button onClick={handlePrevious}>
        <PreviousTrackIcon />
      </button>
      <button onClick={skipBackward}>
        <RewindTrackIcon />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? <PauseTrackIcon /> : <PlayTrackIcon />}
      </button>
      <button onClick={skipForward}>
        <FastForwardTrackIcon />
      </button>
      <button onClick={handleNext}>
        <NextTrackIcon />
      </button>
      <button onClick={() => setIsShuffle((prev) => !prev)}>
        <ShuffleTracksIcon className={isShuffle ? "text-[#f50]" : ""} />
      </button>
      <button onClick={() => setIsRepeat((prev) => !prev)}>
        <RepeatTrackIcon className={isRepeat ? "text-[#f50]" : ""} />
      </button>
    </div>
  );
};
