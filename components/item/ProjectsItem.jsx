import React from 'react'
import { useModal } from '../../hooks/useModal'

const ProjectItem = ({ item }) => {
  const { openModal } = useModal()

  const handleOpenModal = () => {
    openModal({
      title: item.project_name,
      description: item.project_desc,
      images: item.project_images,
      roles: item.project_roles,
      achievements: item.project_achievements,
      technologies: item.project_tech,
    })
  }

  return (
    <div className="w-full m-auto mb-[70px] lg:mb-[140px] lg:px-5">
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

      <div className="p-6 bg-gray-50/80 rounded-lg shadow-inner">
        <p className="text-base lg:text-[16px] font-light text-gray-900 my-2 lg:my-2 italic border-l-4 border-gray-400/80 pl-4 bg-gray-50">
          {item.project_desc}
        </p>
        <div className="mt-6 mb-10 lg:mb-20">
          <div className="leading-4 lg:leading-6">
            {item.project_info?.map((els, index) => (
              <div className="flex text-tiny lg:text-lg my-2 text-gray-700/75" key={`info_${index}`}>
                • <span className="ml-1">{els.info}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6">
          <div className="text-lg lg:text-xl font-bold w-full lg:w-auto">
            Technologies
            <div className="flex flex-wrap gap-2 mt-2">
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
          <div className="mt-5 lg:mt-0 w-full lg:w-auto">
            <button
              onClick={handleOpenModal}
              className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-md shadow-md hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              상세보기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
