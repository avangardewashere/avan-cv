import { StaticImageData } from "next/image";

export type NavigationDataType = {
  name: string;
  href: string;
  id: number;
};

export type SkillDataIconsType = {
  name: string;
  id: number;
  href: string;
  active?: boolean;
  src: string | StaticImageData;
  design?: string;
};
export type KnowMeDataType = {
  title: string;
  id: number;
  href: string;
  b1color: string;
  b2color: string;
  image: string | StaticImageData;
};
