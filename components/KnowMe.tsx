"use client";
import React from "react";

import { Swiper } from "antd-mobile";
const KnowMe = () => {
  return (
    <div className="flex flex-col space-y-4 px-6 md:w-[320px] py-6 pb-5 sm:p-6 sm:py-4  ">
      <h2 className="text-sky-600 text-lg font-[500] text-[24px] ">
        Get to know me
      </h2>
      <Swiper
        indicator={false}
        direction="vertical"
        className="!space-y-3 !flex !flex-col !gap-20 w-[300px] sm:w-[300px] md:w-[360px] !h-[120px]  sm:!h-[160px] md:!h-[190px]   max-w-xs mx-auto overflow-hidden"
        slideSize={33}
        autoplay
        loop={true}
        autoplayInterval={3000}
      >
        <Swiper.Item   className=" !h-12 mb-2    rounded-md bg-slate-300">
          <div className="know-me-card  rounded-md">meow 0</div>
        </Swiper.Item>
        <Swiper.Item className="rounded-md bg-pink-300  !h-12 mb-2">
          <div className="know-me-card  rounded-md">meow</div>
        </Swiper.Item>
        <Swiper.Item className="rounded-md bg-blue-300 !h-12 mb-2">
          <div className="know-me-card ">meow 4</div>
        </Swiper.Item>
        <Swiper.Item className="rounded-md bg-blue-300 !h-12 mb-2">
          <div className="know-me-card ">meow 2</div>
        </Swiper.Item>
        <Swiper.Item className="rounded-md bg-gray-300 !h-12 mb-2">
          <div className="know-me-card ">meow 2</div>
        </Swiper.Item>
        <Swiper.Item className="rounded-md bg-pink-300 !h-12 mb-2">
          <div className="know-me-card ">meow 2</div>
        </Swiper.Item>
      </Swiper>
    </div>
  );
};

export default KnowMe;
