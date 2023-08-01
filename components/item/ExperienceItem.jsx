import React from 'react'

const ExperienceItem = ({ item }) => {
  return (
    <div className={`w-full m-auto ${item.id === 1 && 'mb-[80px] lg:mb-[100px]'}`}>
      <div>
        <p className="text-[13px] lg:text-[20px] text-gray-500">{item.period_date}</p>
        <h2 className="flex items-center text-[20px] lg:text-[30px] font-bold text-gray-700">
          <div className="h-6 w-1.5 bg-red-400" />
          &nbsp;{item.company}
        </h2>
        <div className="leading-4 lg:leading-5">
          {item.work.map((els, index) => {
            return (
              <div className="text-[14px] lg:text-[17px] my-2 text-gray-500/75" key={`info_${index}`}>
                - {els.info}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
