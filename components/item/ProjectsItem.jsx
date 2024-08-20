import React from 'react'
import Image from 'next/image'

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full m-auto md:grid grid-cols-4 gap-5 mb-[40px] lg:mb-[40px] shadow-xl shadow-gray-300 rounded-xl p-7">
      {/* <div className="col-span-4 mb-6">
        <Image
          src={item.project_thum}
          alt={`${item.project_name} 이미지`}
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div> */}
      <div className="col-span-4">
        <p className="text-sm lg:text-tiny text-gray-500 leading-2 lg:leading-5">{item.project_period}</p>
        <h2 className="flex items-center text-1xl lg:text-3xl font-bold text-gray-700 leading-6 lg:leading-7 mt-3">
          <div className="h-6 w-1.5 bg-blue-400 mr-2" />
          {item.project_name}
        </h2>
      </div>
      <div className="col-span-3">
        <p className="text-base lg:text-[21px] font-bold text-gray-600/90 my-2 lg:my-3">{item.project_desc}</p>
        <div className="leading-4 lg:leading-5">
          {item.project_info?.map((els, index) => {
            return (
              <div className="flex text-tiny lg:text-lg my-2 text-gray-500/75" key={`info_${index}`}>
                - <span className="ml-1">{els.info}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full col-span-1">
        <div className="text-lg mb-1 lg:mb-2 lg:text-1xl font-bold mt-6 lg:mt-0">Technologies</div>
        <div className="lg:leading-6">
          {item.project_tech?.map((el, index) => {
            return (
              <div className="flex text-tiny lg:text-lg text-gray-600/75" key={`tech_${index}`}>
                - <span className="ml-1">{el.tech}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
