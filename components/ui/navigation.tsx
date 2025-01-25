"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname);

 
  return (
    <nav className="text-md">
      <ul className="flex flex-col space-y-3 decoration-none font-semibold   ">
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
  );
};

export default Navigation;
