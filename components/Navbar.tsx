import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNav from "./modal/MobileNav";
import Navigation from "./ui/navigation";

const Navbar = () => {
  return (
    <div className="bg-background h-[60px] w-full relative flex b-shadow items-center justify-between  text-[#383E4E]">
      <div className="flex space-x-2 items-center">
        <div className="logo rounded-full bg-sky-500 w-8 h-8 ml-4 sm:ml-10"></div>
        <span className="text-sky-600">avancv.com</span>
      </div>

      <div className="mr-10 hidden sm:block ">
        <Navigation additionalStyles="flex  space-x-3"/> 
      </div>

      <div className="sm:hidden mr-4">
        <MobileNav>
          <AlignJustify height={20} className="text-sky-600" width={20} />
        </MobileNav>
      </div>
      <div className="absolute h-[4px] bg-lineargold w-full bottom-0 " />
    </div>
  );
};

export default Navbar;
