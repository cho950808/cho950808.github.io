// import Image from 'next/image';
import React from 'react'
import SkillsItem from '../item/SkillsItem'
import skill_data from '../../tmp/skill'
import { Element } from 'react-scroll'

const Skills = () => {
  return (
    <Element name="skills" className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-2">Skills</p>
        <h2 className="text-[30px] font-bold mb-4">Main-Skill</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skill_data.map((item, index) => {
            return <SkillsItem urlImg={item.skill_image} framework={item.framework} key={`skill_${index}`} />
          })}
        </div>
      </div>
    </Element>
  )
}

export default Skills
