"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import PauseTrackIcon from "~/components/icons/pause-track-icon";
import PlayTrackIcon from "~/components/icons/play-track-icon";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { studioGalleryImages } from "~/data/studio-gallery-images";

export function StudioCarousel() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const isPausedRef = useRef<boolean>(isPaused); // Use ref to store the latest value of isPaused

  useEffect(() => {
    isPausedRef.current = isPaused; // Sync the ref with the latest isPaused value
  }, [isPaused]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (buttonRef.current && !isPausedRef.current) {
        buttonRef.current.click();
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Carousel
      className="relative flex w-full flex-col"
      opts={{
        align: "start",
        loop: true,
        active: true,
        duration: 80,
      }}
    >
      <CarouselContent>
        {studioGalleryImages.map((image, index) => (
          <CarouselItem
            key={index}
            className="relative flex w-[500px] max-w-full items-center justify-center overflow-hidden"
          >
            <img
              src={image.src}
              alt="..."
              className="max-h-full max-w-full rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative mt-4 flex h-12 w-full flex-row items-center justify-center gap-4">
        <CarouselPrevious className="absolute left-[25%] flex h-8 w-8 items-center justify-center bg-secondary fill-white md:left-[35%]" />
        <Button
          variant="outline"
          size={"icon"}
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-secondary fill-white"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? (
            <PlayTrackIcon width={16} />
          ) : (
            <PauseTrackIcon width={16} />
          )}
        </Button>
        <CarouselNext
          id="auto-play-button"
          ref={buttonRef}
          className="absolute right-[25%] flex h-8 w-8 items-center justify-center bg-secondary fill-white md:right-[35%]"
        />
      </div>
    </Carousel>
  );
}
