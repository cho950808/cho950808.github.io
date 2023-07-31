import React, { useState } from 'react'
import project from '../../tmp/project'
import ProjectItem from '../item/ProjectsItem'
import Container from '../common/Container'

const Projects = () => {
  const [info] = useState(project)

  return (
    <Container scrollName="projects" title="projects">
      {info.map((item, index) => {
        return <ProjectItem item={item} key={`project_${index}`} />
      })}
    </Container>
  )
}

export default Projects
