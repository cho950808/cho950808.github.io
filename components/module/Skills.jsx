import React from 'react'
import SkillsItem from '../item/SkillsItem'
import skill_data from '../../tmp/skill'
import Container from '../common/Container'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <Container scrollName="skills" title="skills">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4"
        whileInView={{ x: 0, y: 15, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        {skill_data.map((item, index) => {
          return <SkillsItem item={item} key={`skill_${index}`} />
        })}
      </motion.div>
    </Container>
  )
}

export default Skills
