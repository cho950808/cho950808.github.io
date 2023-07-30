import React from 'react'

const ProjectItem = ({ item }) => {
  return (
    <div className="w-full m-auto md:grid grid-cols-4 gap-8 mb-[150px]">
      <div className="col-span-3">
        <p className="text-gray-400">{item.project_period}</p>
        <h2 className="text-[30px] font-bold">{item.project_name}</h2>
        <p className="my-3 text-[21px] text-gray-600/90">{item.project_desc}</p>
        <div>
          {item.project_info.map((els, index) => {
            return (
              <div className="text-xl my-2 text-gray-500/75" key={`info_${index}`}>
                - {els.info}
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full">
        <div className="text-[20px] font-bold mb-2">Technologies</div>
        {item.project_tech.map((el, index) => {
          return (
            <div className="text-[17px] text-gray-600/75" key={`tech_${index}`}>
              - {el.tech}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectItem
