// import Image from 'next/image';
import React from 'react';
import SkillsItem from './SkillsItem';
import skill_data from '../tmp/skill';

export default function Skills() {
    return (
        <div id="skills" className="w-full mt-[200px] p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
                <p className="text-xl tracking-widest uppercase text-[#6fa2c7]">Skills</p>
                <h2 className="py-4">Main-Skill</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skill_data.map((item, index) => {
                        return (
                            <SkillsItem urlImg={item.skill_image} framework={item.framework} key={`skill_${index}`} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
