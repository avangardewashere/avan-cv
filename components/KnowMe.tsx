"use client";
import React from "react";

import { Swiper } from "antd-mobile";
const KnowMe = () => {
  return (
    <div className="flex flex-col px-6  py-6 pb-5 sm:p-8">
      <h2 className="text-sky-600 text-lg font-[500] text-[24px] ">
        Get To Know me
      </h2>
      <Swiper
        indicator={false}
        direction="vertical"
        className="w-[300px] sm:w-[250px] !h-[120px]  !sm:h-[100px]   !md:h-[170px]  max-w-xs mx-auto overflow-hidden"
        slideSize={50}
        autoplay
        loop
        autoplayInterval={5000}
      >
        <Swiper.Item className="pt-1 !h-10  rounded-md bg-slate-300">
          <div className="know-me-card  rounded-md">meow</div>
        </Swiper.Item>
        <Swiper.Item className="pt-1 rounded-md bg-pink-300  !h-10">
          <div className="know-me-card  rounded-md">meow</div>
        </Swiper.Item>
        <Swiper.Item className="pt-1 rounded-md bg-blue-300 !h-10">
          <div className="know-me-card ">meow</div>
        </Swiper.Item>
      </Swiper>
    </div>
  );
};

export default KnowMe;
