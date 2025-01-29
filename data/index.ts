import { KnowMeDataType, NavigationDataType, SkillDataIconsType } from "./types";
import ReactIcon from "@/public/images/icons/reactjs.png"
import NextIcon from "@/public/images/icons/nextjs.png"
import TailwindIcon from "@/public/images/icons/tailwind-css-icon.png"
import WpIcon from "@/public/images/icons/wordpress.png"
import gitHubIcon from "@/public/images/icons/github.png"
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

export const KnowMeData:KnowMeDataType[] =[
  {
    title:"Visit my Github Profile",
    id:21,
    href:"https://github.com/avangardewashere",
    b1color:"#6D8AE3",
    b2color:"#427DCA",
    image:gitHubIcon
  },
  {
    title:"View my Profile Information",
    id:22,
    href:"/about",
    b1color:"#6DC5E3",
    b2color:"#42B1CA",
    image:gitHubIcon
  },
  {
    title:"See my previous projects",
    id:23,
    href:"/projects",
    b1color:"#6DE3DD",
    b2color:"#42CAB1",
    image:gitHubIcon
  },
  {
    title:"Know my skills ",
    id:24,
    href:"/skills",
    b1color:"#6D8AE3",
    b2color:"#427DCA",
    image:gitHubIcon
  },
  {
    title:"Send me a  message",
    id:25,
    href:"https://m.me/avel.panaligan.5",
    b1color:"#6DC5E3",
    b2color:"#42B1CA",
    image:gitHubIcon
  },
  {
    title:"See my previous projects",
    id:23,
    href:"/projects",
    b1color:"#6DE3DD",
    b2color:"#42CAB1",
    image:gitHubIcon
  },
]
