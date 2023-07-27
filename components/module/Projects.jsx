import React, { useState } from 'react'
import project from '../../tmp/project'
import ProjectItem from '../item/ProjectsItem'

const Projects = () => {
  const [info, setInfo] = useState(project)

  return (
    <section id="projects" className="max-w-[1240px] m-auto p-2 flex items-center py-16 grid grid-cols-1 mt-[200px]">
      <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-2">Projects</p>
      {info.map((item, index) => {
        return <ProjectItem item={item} key={`project_${index}`} />
      })}
    </section>
  )
}

export default Projects
