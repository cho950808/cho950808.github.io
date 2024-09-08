import React from 'react'
import Image from 'next/image'

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full m-auto mb-[70px] lg:mb-[140px] lg:px-5">
      {/* 프로젝트 이름 및 기간 */}
      <div className="mb-5">
        <h2 className="flex items-end text-1xl lg:text-2xl font-bold text-gray-700 leading-6 lg:leading-7">
          <div className="h-6 w-1.5 bg-blue-400 mr-2" />
          {item.project_name}
          <span className="hidden lg:block text-sm lg:text-tiny text-gray-500 leading-2 lg:leading-5 ml-2">
            ({item.project_period})
          </span>
        </h2>
        <p className="block lg:hidden text-sm lg:text-tiny text-gray-500 leading-2 lg:leading-5 ml-2">
          ({item.project_period})
        </p>
      </div>

      {/* 프로젝트 설명 및 상세 정보 */}
      <div className="mb-10">
        <p className="text-base lg:text-[16px] font-bold text-red-rgba my-2 lg:my-3">{item.project_desc}</p>
        <div className="leading-4 lg:leading-5">
          {item.project_info?.map((els, index) => (
            <div className="flex text-sm lg:text-tiny my-2 text-gray-700/75" key={`info_${index}`}>
              - <span className="ml-1">{els.info}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="mt-10">
        <div className="text-lg mb-3 lg:text-xl font-bold">Technologies</div>
        <div className="flex flex-wrap gap-2">
          {item.project_tech?.map((el, index) => (
            <div
              className="flex items-center justify-center px-4 py-2 text-[11px] lg:text-sm text-gray-600/75 bg-blue-50 rounded-full"
              key={`tech_${index}`}
            >
              {el.tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
