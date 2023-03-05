import React from "react";
import { useRouter } from "next/router";

export default function Main() {
  return (
    <div
      id="main"
      className="w-full h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('../assets/projects/banner.jpeg')`,
      }}
    >
      <div className="z-1 absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/60 to-black/5" />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-10">
          <h1 className="py-2 text-white">JUNIOR FRONTEND DEVELOPER</h1>
          <h1 className="py-4">
            <span className="text-white">- 조 재 영 -</span>
          </h1>
          <p className="py-4 sm:max-w-[70%] m-auto text-white">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
