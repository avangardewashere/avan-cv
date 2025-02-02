import KnowMeCard from "@/components/cards/KnowMeCard";
import Heroes from "@/components/Heroes";
import KnowMe from "@/components/KnowMe";
import AboutMe from "@/components/overview/AboutMe";
import Employment from "@/components/overview/Employment";
import Projects from "@/components/overview/Projects";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between sm:flex-row">
        <Heroes />
        <KnowMe />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-60">{/* <KnowMeCard /> */}</div>
      </div>
      <ProjectsCarousel />
      <AboutMe />
      <Employment /> 
      <Projects/> 
    </>
  );
}
