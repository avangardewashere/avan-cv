import Heroes from "@/components/Heroes";
import KnowMe from "@/components/KnowMe";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between sm:flex-row">
        <Heroes />
        <KnowMe />
      </div>
     <ProjectsCarousel />  
    </>
  );
}
