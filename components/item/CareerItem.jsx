import Image from 'next/image'
import ProjectItem from '../item/ProjectsItem'

const CareerItem = ({ item }) => {
  return (
    <div className="w-full h-full p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="col-span-2 flex justify-center md:justify-center">
          <div className="flex flex-col items-center md:items-center mb-4 md:mb-0">
            <Image src={item.company_logo} width={100} height={100} alt="logo" className="mb-2" />
            <div className="flex flex-col items-center md:items-center">
              <h2 className="text-1xl lg:text-2xl font-bold text-gray-700 text-center md:text-left">{item.company}</h2>
              <span className="text-sm lg:text-tiny text-gray-500 text-center md:text-left">{item.period_date}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="col-span-7">
          {item.work.map((item, index) => {
            return <ProjectItem item={item} key={`project_${index}`} />
          })}
        </div>

      </div>
    </div>
  )
}

export default CareerItem
