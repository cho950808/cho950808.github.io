import React, { useState } from 'react'
import project from '../../tmp/project'
import ProjectItem from '../item/ProjectsItem'
import { Element } from 'react-scroll'

const Projects = () => {
  const [info, setInfo] = useState(project)

  return (
    <Element name="projects" className="max-w-[1024px] m-auto p-2 flex flex-col py-16">
      <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-2">Projects</p>
      {info.map((item, index) => {
        return <ProjectItem item={item} key={`project_${index}`} />
      })}
    </Element>
  )
}

export default Projects
