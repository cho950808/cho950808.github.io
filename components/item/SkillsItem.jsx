import React from 'react'
import Image from 'next/image'

const SkillsItem = (props) => {
  const { item } = props

  return (
    <div className="w-full m-auto mb-[50px] lg:mb-[100px] lg:px-5">
      <div className="mb-5">
        <h2 className="flex items-end text-1xl lg:text-2xl font-bold text-gray-700 leading-6 lg:leading-7">
          <div className="h-6 w-1.5 bg-red-400 mr-2" />
          {item.skill_name}
        </h2>
      </div>

      <div className="sm:flex sm:justify-start sm:items-start sm:space-x-2 grid grid-cols-6 gap-2 mb-5 bg-gradient-to-r from-gray-100/80 to-gray-200/80 p-4 rounded-lg shadow-lg">
        {item.skill_icons?.map((icon, index) => (
          <div
            key={`icon_${index}`}
            className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-3 rounded-full bg-white border-2 border-gray-300 shadow-md transition-all duration-300 ease-in-out"
          >
            <Image src={icon.src} alt={icon.alt} width={40} height={40} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      <div className="leading-5 lg:leading-8 mt-3 lg:mt-10">
        {item.skill_info?.map((els, index) => (
          <div className="flex items-center text-tiny lg:text-lg my-2 text-gray-700/75" key={`info_${index}`}>
            • <span className="ml-1">{els.info}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsItem
