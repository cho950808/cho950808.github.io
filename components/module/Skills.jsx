import React from 'react'
import SkillsItem from '../item/SkillsItem'
import skill_data from '../../tmp/skill'
import { Element } from 'react-scroll'

const Skills = () => {
  return (
    <Element name="skills" className="w-full lg:h-screen my-20 lg:my-0">
      <div className="max-w-[1024px] mx-auto flex flex-col justify-center h-full p-4 lg:p-0">
        <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-2">Skills</p>
        <h2 className="text-[20px] lg:text-[30px] font-bold mb-4">Main-Skill</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
          {skill_data.map((item, index) => {
            return <SkillsItem item={item} key={`skill_${index}`} />
          })}
        </div>
      </div>
    </Element>
  )
}

export default Skills
