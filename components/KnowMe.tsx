import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const KnowMe = () => {
  return (
    <div>
      <h2 className="text-sky-600">Get To Know me</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
        
      >
        <CarouselContent className="-mt-1 h-[200px]">
          <CarouselItem className="pt-1 md:basis-1/2">Hello</CarouselItem>
          <CarouselItem className="pt-1 md:basis-1/2">Hi</CarouselItem>
          <CarouselItem className="pt-1 md:basis-1/2">Hello</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default KnowMe;
