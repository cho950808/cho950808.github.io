import React from 'react'
import SkillsItem from '../item/SkillsItem'
import skill_data from '../../tmp/skill'
import Container from '../common/Container'

const Skills = () => {
  return (
    <Container scrollName="skills" title="skills">
      <h2 className="text-[20px] lg:text-[30px] font-bold mb-4">Main-Skill</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {skill_data.map((item, index) => {
          return <SkillsItem item={item} key={`skill_${index}`} />
        })}
      </div>
    </Container>
  )
}

export default Skills
