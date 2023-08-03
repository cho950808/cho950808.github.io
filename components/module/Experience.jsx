import React from 'react'
import Container from '../common/Container'
import experience_data from '../../tmp/experience'
import ExperienceItem from '../item/ExperienceItem'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <Container scrollName="experience" title="experience">
      <motion.div
        whileInView={{ x: 0, y: 15, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
      >
        {experience_data.map((item, index) => {
          return <ExperienceItem item={item} key={`experience_${index}`} />
        })}
      </motion.div>
    </Container>
  )
}

export default Experience
