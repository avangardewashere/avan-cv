import { StaticImageData } from "next/image";

export type NavigationDataType = {
  name: string;
  href: string;
  id: number;
};

export type SkillDataIconsType ={
  name:string,
  id:number,
  href:string,
  active?:boolean,
  src:string | StaticImageData,
  design?:string
}
