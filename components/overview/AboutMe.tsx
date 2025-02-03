import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-[500px]  flex-col bg-slate-50 flex items-center">
      <div className="w-full px-10 py-6 mt-4 relative">
        <span className="text-sm text-slate-500">A little something </span>
        <div className="text-3xl font-semibold">About Me</div>
        <div className="w-[300px] bg-lineargold h-1" />
        <div className="flex items-center">
          <Image
          className="mt-2"
            src={"/images/items/profile.png"}
            width={60}
            height={60}
            alt="profile-avan"
          />
          <div className="h-20 flex gap-2">
            <div>Avan</div>
            <div>@avanwashere</div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-20 text-base">
        <div>
          <p className="border-l-2 pl-4 min-h-[300ox] mb-10  w-[50%] m-auto indent-10 text-justify ">
            Born in Candelaria, Quezon, I’ve always danced between art and
            logic. While studying Computer Science in 2019, I started as a
            graphic designer but soon found myself drawn to code—first tinkering
            with WordPress and PHP as a hobby, then landing my first role as a
            Junior WordPress Developer. Seeking new challenges, I moved to
            Manila, evolving into a Systems Developer, but my heart stayed with
            front-end development, where I fuse my design background with crisp,
            functional code.
          </p>

          <p className="border-l-2 pl-4  min-h-[300ox]   w-[50%] m-auto indent-10 text-justify ">
        
            Today, I build digital experiences where creativity meets
            problem-solving. Every project is a chance to learn, reinvent, and
            bridge imagination with functionality. And yes, I still eat code for
            breakfast—curiosity optional, but highly recommended.
          </p>
        </div>
        <div className="w-[50%]">
            <Image src={"/images/items/coffeee-about.png"} alt="about" /> 
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
