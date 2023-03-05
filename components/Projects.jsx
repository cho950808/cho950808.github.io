import Link from "next/link";
import React from "react";
import project from "../tmp/project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full p-2 flex items-center py-16 grid grid-cols-1"
    >
      {project.map((item, index) => {
        return (
          <div
            className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 my-20"
            key={`project_${index}`}
          >
            <div className="col-span-2">
              {index === 0 && (
                <p className="uppercase text-xl tracking-widest text-[#6fa2c7]">
                  Projects
                </p>
              )}
              <h2 className="py-4">{item.project_name}</h2>
              <p className="text-gray-500">{item.project_period} </p>
              <p className="py-2 text-gray-600">{item.project_desc}</p>
              <Link href="/#projects">
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  Checkout my last projects !
                </p>
              </Link>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-150">
              <img
                className="rounded-xl"
                src="https://source.unsplash.com/vXInUOv1n84"
                alt="/"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
