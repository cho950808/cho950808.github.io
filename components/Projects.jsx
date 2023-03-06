import Link from "next/link";
import React from "react";
import project from "../tmp/project";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] m-auto p-2 flex items-center py-16 grid grid-cols-1"
    >
      {project.map((item, index) => {
        return (
          <div
            className="w-full m-auto md:grid grid-cols-3 gap-8 my-20"
            key={`project_${index}`}
          >
            <div className="col-span-2">
              {index === 0 && (
                <p className="uppercase text-xl tracking-widest text-[#6fa2c7]">
                  Projects
                </p>
              )}
              <h2 className="py-1">{item.project_name}</h2>
              <p className="text-gray-500">{item.project_period} </p>
              <div className="mt-5 flex items-center">
                <p className="text-gray-600">&nbsp;{item.project_desc}</p>
              </div>
              <Link href={`/project/${item.project_route}`}>
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  Checkout my last projects !
                </p>
              </Link>
            </div>
            <div className="col-span-1 w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                className="rounded-xl"
                src={item.project_thum}
                width="100%"
                height="100%"
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
