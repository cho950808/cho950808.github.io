import React from 'react'
import Image from 'next/image'

const SkillsItem = (props) => {
  const { item } = props

  const handleClick = (item) => {
    window.open(item.link, '_blank')
  }

  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 cursor-pointer" onClick={() => handleClick(item)}>
      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <div className="m-auto overflow-hidden h-[25px] w-[25px] lg:h-[50px] lg:w-[50px]">
          <Image height={40} width={40} src={item.skill_image} className="h-full w-full" alt={item?.image_alt} />
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-[11px] lg:text-tiny">
          <p className="whitespace-pre-wrap lg:whitespace-normal text-center lg:text-left">{item.framework}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsItem
