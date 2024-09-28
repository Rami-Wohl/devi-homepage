import { useState } from "react";
import { TrackInfo } from "./track-info";
import { Controls } from "./controls";
import { ProgressBar } from "./progress-bar";
import { VolumeControl } from "./volume-control";
import { PlayList } from "./playlist";
import AddListIcon from "../icons/add-list-icon";
import { useAudioPlayerContext } from "~/context/audio-player-context";

interface AudioPlayerConfig {
  showPlaylistToggle: boolean;
  showShuffleToggle: boolean;
  showRepeatToggle: boolean;
}

export default function AudioPlayer({
  showPlaylistToggle,
  showShuffleToggle,
  showRepeatToggle,
}: AudioPlayerConfig) {
  const { tracks } = useAudioPlayerContext();

  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <div className="w-full">
      <div className="flex min-h-8 w-full flex-col items-center justify-between rounded-t-md bg-secondary bg-opacity-80 text-white">
        <TrackInfo />
        <div className="m-auto flex w-full flex-1 flex-col items-center gap-6 border-t border-white border-opacity-40 p-4">
          <Controls
            tracks={tracks}
            showShuffleToggle={showShuffleToggle}
            showRepeatToggle={showRepeatToggle}
          />
          <ProgressBar />
          <div className="flex items-center justify-center text-gray-400">
            <div className="hidden lg:block">
              <VolumeControl />
            </div>
            {showPlaylistToggle && (
              <button onClick={() => setOpenDrawer((prev) => !prev)}>
                <AddListIcon />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          openDrawer ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="max-h-72 overflow-y-auto border-t border-white border-opacity-40 text-white">
          <PlayList />
        </div>
      </div>
    </div>
  );
}
