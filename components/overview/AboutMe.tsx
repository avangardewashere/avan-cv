import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-[500px]  flex-col bg-slate-50 flex items-center">
      <div className="w-full px-10 py-6 mt-4 relative">
        <span className="text-sm text-slate-500">A little something </span>
        <div className="text-3xl font-semibold">About Me</div>
        <div className="w-[300px] bg-lineargold h-1" />
      </div>
      <div className="flex w-full px-20 text-base">
    
        <div>
          <p className="min-h-[300ox] mb-10 bg-indigo-200 w-[50%] m-auto indent-10 text-justify ">Born in Candelaria, Quezon, I’ve always danced between art and logic. While studying Computer Science in 2019, I started as a graphic designer but soon found myself drawn to code—first tinkering with WordPress and PHP as a hobby, then landing my first role as a Junior WordPress Developer. Seeking new challenges, I moved to Manila, evolving into a Systems Developer, but my heart stayed with front-end development, where I fuse my design background with crisp, functional code.</p>

          <p className="min-h-[300ox] bg-indigo-200 w-[50%] m-auto indent-10 text-justify "> Today, I build digital experiences where creativity meets problem-solving. Every project is a chance to learn, reinvent, and bridge imagination with functionality. And yes, I still eat code for breakfast—curiosity optional, but highly recommended.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
