import AudioPlayer from "~/components/audio/player";
import {
  AudioPlayerProvider,
  type Track,
} from "~/context/audio-player-context";

export const PortfolioSectionMetal = ({ tracks }: { tracks: Track[] }) => {
  return (
    <div className="flex w-full flex-col justify-center">
      <h3 className="my-4 px-2 text-center">Iets over metal hier</h3>
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
