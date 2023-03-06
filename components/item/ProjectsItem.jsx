import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full m-auto md:grid grid-cols-3 gap-8 mb-[150px]">
      <div className="col-span-2">
        <h2 className="py-1">{item.project_name}</h2>
        <p className="text-gray-500">{item.project_period}</p>
        <p className="my-3 text-[25px] text-gray-600/90">{item.project_desc}</p>
        <div className="mt-8">
          {item.project_info.map((els, index) => {
            return (
              <div
                className="text-xl my-2 text-gray-500/75"
                key={`info_${index}`}
              >
                - {els.info}
              </div>
            );
          })}
        </div>
        <br />
        <div>
          <div className="text-lg font-bold">Technologies</div>
          {item.project_tech.map((el, index) => {
            return (
              <div className="text-lg text-gray-600/75" key={`tech_${index}`}>
                - {el.tech}
              </div>
            );
          })}
        </div>
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
};

export default ProjectItem;
