import React, { useState } from 'react'
// import project from '../../tmp/project'
// import ProjectItem from '../item/ProjectsItem'
import Container from '../common/Container'
import { motion } from 'framer-motion'

const Projects = () => {
  // const [info] = useState(project)

  return (
    <Container scrollName="projects" title="projects">
      <motion.div
        whileInView={{ x: 0, y: 15, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
      >
        {/* {info.map((item, index) => {
          return <ProjectItem item={item} key={`project_${index}`} />
        })} */}
      </motion.div>
    </Container>
  )
}

export default Projects
