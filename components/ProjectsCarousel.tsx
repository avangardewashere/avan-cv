import Image from "next/image";
import React from "react";

const ProjectsCarousel = () => {
  return (
    <div className="flex items-center justify-center w-full h-100">
      <div className="relative w-[360px] h-[240px]">
        <Image
          src={"/images/foodie-pal.png"}
          fill
          alt="foodie-pal"
          className="  object-cover rounded-md border-4 border-sky-500 "
        /> 
      </div>
    </div>
  );
};

export default ProjectsCarousel;
