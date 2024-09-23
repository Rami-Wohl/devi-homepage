import { useState } from "react";
import { TrackInfo } from "./track-info";
import { Controls } from "./controls";
import { ProgressBar } from "./progress-bar";
import { VolumeControl } from "./volume-control";
import { PlayList } from "./playlist";
import AddListIcon from "../icons/add-list-icon";
import { useAudioPlayerContext } from "~/context/audio-player-context";

export default function AudioPlayer() {
  const { tracks } = useAudioPlayerContext();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <div className="flex min-h-8 flex-col items-center justify-between gap-9 bg-[#2e2d2d] p-[0.5rem_10px] text-white lg:flex-row">
        <TrackInfo />
        <div className="m-auto flex w-full flex-1 flex-col items-center gap-2">
          <Controls tracks={tracks} />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <AddListIcon />
          </button>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          openDrawer ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="max-h-72 overflow-y-auto bg-[#4c4848] text-white">
          <PlayList />
        </div>
      </div>
    </div>
  );
}
