"use client";
import React from "react";

import { Swiper } from "antd-mobile";
import KnowMeCard from "./cards/KnowMeCard";
import { KnowMeData } from "@/data";
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
        {KnowMeData?.map((info) => (
          <Swiper.Item className=" !h-12 mb-2    rounded-md bg-slate-300">
            <KnowMeCard
              id={info.id}
              href={info.href}
              b1color={info.b1color}
              b2color={info.b2color}
              title={info.title}
              image={info.image}
            />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};

export default KnowMe;
