/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { studioGalleryImages } from "~/data/studio-gallery-images";

export function StudioCarousel() {
  return (
    <Carousel
      className="relative flex w-full flex-col"
      opts={{
        align: "start",
        loop: true,
        active: true,
        duration: 40,
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
      <div className="flex h-12 w-full flex-row justify-center">
        <CarouselPrevious className="relative mt-4 flex items-center justify-center bg-secondary fill-white" />
        <CarouselNext className="relative mt-4 flex items-center justify-center bg-secondary fill-white" />
      </div>
    </Carousel>
  );
}
