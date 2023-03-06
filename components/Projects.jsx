import React, { useState } from "react";
import project from "../tmp/project";
import ProjectItem from "./item/ProjectsItem";

const Projects = () => {
  const [info, setInfo] = useState(project);

  return (
    <div
      id="projects"
      className="max-w-[1240px] m-auto p-2 flex items-center py-16 grid grid-cols-1"
    >
      <p className="uppercase text-xl tracking-widest text-[#6fa2c7]">
        Projects
      </p>
      {info.map((item, index) => {
        return <ProjectItem item={item} key={`project_${index}`} />;
      })}
    </div>
  );
};

export default Projects;
