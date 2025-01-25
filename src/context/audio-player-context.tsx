import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useRef,
  type RefObject,
} from "react";

export interface Track {
  title: string;
  src: string;
  author: string;
  key: string;
  thumbnail?: string;
}
interface AudioPlayerContextType {
  audioRef: RefObject<HTMLAudioElement>;
  progressBarRef: RefObject<HTMLInputElement>;
  currentTrack: Track;
  setCurrentTrack: Dispatch<SetStateAction<Track>>;
  timeProgress: number;
  setTimeProgress: Dispatch<SetStateAction<number>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  tracks: Track[];
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined,
);
export const AudioPlayerProvider = ({
  children,
  tracks,
}: {
  children: ReactNode;
  tracks: Track[];
}) => {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const contextValue = {
    audioRef,
    progressBarRef,
    currentTrack,
    setCurrentTrack,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    setTrackIndex,
    tracks,
    isPlaying,
    setIsPlaying,
  };
  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
export const useAudioPlayerContext = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider",
    );
  }
  return context;
};
