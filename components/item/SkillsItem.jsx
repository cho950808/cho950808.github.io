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

      <div className="leading-5 lg:leading-7">
        {item.skill_info?.map((els, index) => (
          <div className="flex items-center text-tiny lg:text-base my-2 text-gray-700/75" key={`info_${index}`}>
            - <span className="ml-1">{els.info}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-start space-x-2 mt-5">
        {item.icons?.map((icon, index) => (
          <div key={`icon_${index}`} className="p-2 rounded-full">
            <Image src={icon.src} alt={icon.alt} width={40} height={40} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsItem
