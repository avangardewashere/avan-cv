import { SkillData } from "@/data";
import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col">
      <div className="px-6 py-4 pb-3  sm:p-8 w-fit md:px-12 ">
        <span className="text-[14]/3 sm:text-lg md:text-2xl">
          Hello Welcome, My name is
        </span>
        <h1 className="text-sky-600 font-bold text-[42px]/10 sm:text-5xl md:text-6xl ">
          Avel Panaligan
        </h1>
        <span className="text-[14]/3 sm:text-lg md:text-2xl">
          I create <span className="text-sky-600">Web Site</span>
        </span>
      </div>
      <div className="px-6 py-[.5px] flex space-x-3 sm:px-8  md:px-12 ">
        {SkillData?.map((skill) => (
          <div className="w-8 h-8  rounded-full">
            <Image
              src={skill.src}
              alt={skill.name + "-image"}
              width={30}
              height={30}
            />
          </div>
        ))}
        {/* <div className="w-8 h-8 bg-sky-600 rounded-full"></div>
      <div className="w-8 h-8 bg-sky-600 rounded-full"></div>
      <div className="w-8 h-8 bg-sky-600 rounded-full"></div> */}
      </div>
    </div>
  );
};

export default Heroes;
