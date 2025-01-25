import React from "react";

const Heroes = () => {
  return (
    <>
    <div className="px-6 py-4 sm:p-8 w-fit">
      <span className="text-sm/6 sm:text-lg">Hello Welcome, My name is</span>
      <h1 className="text-sky-600 font-bold text-4xl sm:text-5xl/ ">
        Avel Panaligan
      </h1>
      <span className="text-sm/1 sm:text-lg">
        I create <span className="text-sky-600">Web Site</span>
      </span>
    </div>
    <div className="px-6 flex space-x-2 ">
      <div className="w-10 h-10 bg-sky-600 rounded-full"></div>
      <div className="w-10 h-10 bg-sky-600 rounded-full"></div>
      <div className="w-10 h-10 bg-sky-600 rounded-full"></div>
      <div className="w-10 h-10 bg-sky-600 rounded-full"></div>
    </div>
    </>
  );
};

export default Heroes;
