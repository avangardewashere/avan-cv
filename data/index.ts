import { NavigationDataType, SkillDataIconsType } from "./types";
import ReactIcon from "@/public/images/icons/reactjs.png"
import NextIcon from "@/public/images/icons/nextjs.png"
import TailwindIcon from "@/public/images/icons/tailwind-css-icon.png"
import WpIcon from "@/public/images/icons/wordpress.png"
export const NavigationData: NavigationDataType[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Me",
    href: "/about",
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    name: "Skills",
    href: "/skills",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  },
];

export const SkillData: SkillDataIconsType[] = [
  {
    name: "React",
    href: "",
    active: false,
    design: "",
    src: ReactIcon,
    id: 11,
  },

  {
    name: "Next",
    href: "",
    active: false,
    design: "",
    src: NextIcon,
    id: 11,
  },

  {
    name: "Wordpress",
    href: "",
    active: false,
    design: "",
    src: WpIcon,
    id: 13,
  },
  {
    name: "TailwindCss",
    href: "",
    active: false,
    design: "",
    src: TailwindIcon,
    id: 14,
  },
];
