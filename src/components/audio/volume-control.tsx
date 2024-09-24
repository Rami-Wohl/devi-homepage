import { type ChangeEvent, useState, useEffect } from "react";
import VolumeOffIcon from "../icons/volume-off-icon";
import VolumeLowIcon from "../icons/volume-low-icon";
import VolumeHighIcon from "../icons/volume-high-icon";
import { useAudioPlayerContext } from "~/context/audio-player-context";

export const VolumeControl = () => {
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const { audioRef } = useAudioPlayerContext();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <VolumeOffIcon />
          ) : volume < 40 ? (
            <VolumeLowIcon />
          ) : (
            <VolumeHighIcon />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          className="volumn"
          onChange={handleVolumeChange}
          style={{
            background: `linear-gradient(to right, #f10 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};
