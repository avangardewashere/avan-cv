import React from "react";

const Employment = () => {
  return (
    <div className="flex">
      <div className="flex flex-row">
        <div className="flex border items-center justify-center ">
          <div className="font-semibold text-base">Front End Dev</div>
          <div className="text-sm text-slate-500">(2024-2025)</div>
        </div>

        <div className="flex border items-center justify-center ">
          <div className="font-semibold text-base">Front End Dev</div>
          <div className="text-sm text-slate-500">(2024-2025)</div>
        </div>
      </div>
      <div>
        <div className="flex flex-row w-[70%] h-[200px]">
          <div className="flex">
            <div>
              <div>Comapny Name</div>
              <div>Positon</div>
              <div>year</div>
            </div>
          </div>
          <div>
            <div>Comapny Name</div>
            <div>Positon</div>
            <div>year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
