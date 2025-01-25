import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const KnowMe = () => {
  return (
    <div className="flex flex-col px-6 py-4 sm:p-8">
      <h2 className="text-sky-600 text-lg text-semibold ">Get To Know me</h2>
      <Carousel
        opts={{
          align: "start",
          loop:true,
          duration:3000,
        
        }}
        orientation="vertical"
        className="w-[300px] sm:w-[250px] h-[120px]  sm:h-[100px]    max-w-xs mx-auto overflow-hidden"
        
      >
        <CarouselContent className="mt-1 p-2  bg-sky-300/20 space-y-2 ">
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">
          meow
          </CarouselItem>
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">Hi</CarouselItem>
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">Hello</CarouselItem>
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">thank you</CarouselItem>
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">goodbye</CarouselItem>
          <CarouselItem className="pt-1 min-h-12  bg-slate-300 rounded-md">scrap</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default KnowMe;
