"use client"
import { Swiper } from "antd-mobile";
import Image from "next/image";
import React from "react";

const ProjectsCarousel = () => {
  return (
    <div className="sm:p-8 flex items-center justify-center w-full h-100">
      <Swiper>
        <Swiper.Item>
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={"/images/foodie-pal.png"}
              fill
              alt="foodie-pal"
              className="  object-cover rounded-md border-4 border-sky-500 "
            />
          </div>
        </Swiper.Item>
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
