import React from "react";
import ProjectCards from "../cards/ProjectCards";

const Projects = () => {
  return (
    <div className="flex flex-col sm:flex-row p-2 space-x-2 ">
      <span>Project section</span>
      
        <ProjectCards />

    </div>
  );
};

export default Projects;
