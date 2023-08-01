import React from 'react'

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full m-auto md:grid grid-cols-4 gap-8 mb-[100px] lg:mb-[150px]">
      <div className="col-span-3">
        <p className="text-[13px] lg:text-[18px] text-gray-500 leading-2 lg:leading-5">{item.project_period}</p>
        <h2 className="flex items-center text-[20px] lg:text-[30px] font-bold text-gray-700">
          <div className="h-6 w-1.5 bg-blue-400" />
          &nbsp;{item.project_name}
        </h2>
        <p className="text-[15px] lg:text-[21px] font-bold text-gray-600/80 my-1 lg:my-3">{item.project_desc}</p>
        <div className="leading-4 lg:leading-5">
          {item.project_info.map((els, index) => {
            return (
              <div className="text-[14px] lg:text-[16px] my-2 text-gray-500/75" key={`info_${index}`}>
                - {els.info}
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full">
        <div className="text-[16px] mb-1 lg:mb-2 lg:text-[20px] font-bold mt-6 lg:mt-0">Technologies</div>
        <div className="lg:leading-5">
          {item.project_tech.map((el, index) => {
            return (
              <div className="text-[14px] lg:text-[16px] text-gray-600/75" key={`tech_${index}`}>
                - {el.tech}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
