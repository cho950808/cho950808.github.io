import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import project from "../../tmp/project";

const ProjectDetail = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [info, setInfo] = useState(
    project.filter((v) => v.project_route === project_id)[0]
  );

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>{info.project_name}</h2>
          <p className="text-gray-500">{info.project_period}</p>
          <p></p>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
