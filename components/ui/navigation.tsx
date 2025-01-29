"use client";

import { NavigationData } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  additionalStyles?: string;
}

const Navigation = ({ additionalStyles }: NavigationProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav>
      <ul
        className={cn(
          "flex decoration-none !font-semibold !text-md  !text-[#383E4E]",
          additionalStyles
        )}
      >
        {NavigationData.map((nav) => (
          <li
            key={nav.id}
          
          >
            <Link   className={
              (cn("hover:!text-blue-400"),
              pathname === nav.href ? "!text-sky-600" : "text-[#383E4E]")
            } href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
