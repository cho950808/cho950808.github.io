import Image from 'next/image'
import React from 'react'

const SkillsItem = ({ urlImg, framework }) => {
  return (
    <div className="p-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-100">
      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <div className="m-auto overflow-hidden h-[50px] w-[50px]">
          <Image src={urlImg} width="100%" height="100%" alt="/" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase">{framework}</h3>
        </div>
      </div>
    </div>
  )
}

export default SkillsItem
