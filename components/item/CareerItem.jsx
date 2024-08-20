import Image from 'next/image'
import React from 'react'

const CareerItem = ({ item }) => {
  return (
    <div className={`w-full h-full shadow-xl shadow-gray-300 rounded-xl p-7 m-auto mb-[20px] lg:mb-[30px]'}`}>
      <div>
        <h2 className="flex items-center text-1xl lg:text-3xl font-bold text-gray-700 my-5">
          <Image src={item.company_logo} width={100} height={100} alt="logo" className="h-full w-[50px] mr-3" />
          {item.company} <p className="ml-3 text-sm lg:text-tiny text-gray-500">{item.period_date}</p>
        </h2>
        <div className="flex items-center">{/* <div className="h-6 w-1.5 bg-red-400 mr-2" /> */}</div>
        <div className="leading-4 lg:leading-5">
          {item.work.map((els, index) => {
            return (
              <div className="flex text-tiny lg:text-lg my-2 text-gray-500/75" key={`info_${index}`}>
                - <span className="ml-2">{els.info}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CareerItem
