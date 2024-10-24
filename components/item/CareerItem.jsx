import Image from 'next/image'
import ProjectItem from '../item/ProjectsItem'
import React, { useCallback, useMemo } from 'react'

const CareerItem = ({ item }) => {

  const formatDescription = useCallback((description, keywords, urls) => {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi')

    const formattedDescription = description.split(regex).map((part, index) => {
      const keywordIndex = keywords.findIndex((keyword) => part.toLowerCase() === keyword.toLowerCase())

      if (keywordIndex !== -1) {
        return (
          <a
            href={urls[keywordIndex]}
            className="text-blue-500 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            {part}
          </a>
        )
      }
      return part
    })

    return <>{formattedDescription}</>
  }, [])


  const formattedDescription = useMemo(
    () =>
      formatDescription(
        item.company_description,
        ['No.1 골프 포털 플랫폼', '다크 슬레이어:방치형 RPG', 'MeraPlay'],
        [
          'https://play.google.com/store/apps/details?id=com.smartscore.rawady.smartscore&hl=ko',
          'https://game.naver.com/lounge/Ghost_Hunter/home',
          'https://play.google.com/store/apps/details?id=com.wishM.readitjoy&hl=ko',
        ]
      ),
    [item.company_description]
  )

  return (
    <div className="w-full h-full p-3 lg:p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="col-span-10 lg:col-span-2">
          <div className="flex flex-col justify-center md:justify-start sticky top-20 z-10 bg-white">
            <div className="flex flex-col items-center md:items-center mb-4 md:mb-0">
              <Image src={item.company_logo} width={100} height={100} alt="logo" className="mb-2" />
              <div className="flex flex-col items-center md:items-center">
                <h2 className="text-1xl lg:text-2xl font-bold text-gray-700 text-center md:text-left">
                  {item.company}
                </h2>
                <span className="text-sm lg:text-tiny text-gray-500 text-center md:text-left">{item.period_date}</span>
              </div>
            </div>

            <div className="mt-2 lg:mt-10 mb-5 lg:mb-0 bg-gray-100 p-4 lg:bg-transparent lg:p-0 lg:shadow-none rounded-lg shadow-sm">
              <p className="text-[14px] lg:text-sm text-gray-700 leading-6">
                {formattedDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="col-span-10 lg:col-span-7">
          {item.work.map((item, index) => (
            <ProjectItem item={item} key={`project_${index}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CareerItem
