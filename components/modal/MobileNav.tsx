"use client";

import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface MobileNavProps {
  children: React.ReactNode;
}

const MobileNav = ({ children }: MobileNavProps) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent >
        <nav className="text-sm ">
          <ul className="flex flex-col space-x-3 decoration-none font-semibold   ">
            <li className="hover:text-blue-400">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href={"/about"}>About Me</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href={"/skills"}>Skills</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </PopoverContent>
    </Popover>
  );
};

export default MobileNav;
