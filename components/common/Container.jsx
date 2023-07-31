import React from 'react'
import { Element } from 'react-scroll'

const Container = (props) => {
  const { children, title, scrollName } = props
  return (
    <Element name={scrollName} className="max-w-[1024px] m-auto p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto py-[60px] lg:py-[95px] flex flex-col justify-center h-full">
        <p className="uppercase text-[17px] lg:text-[25px] tracking-widest text-[#6fa2c7] font-bold lg:mb-3">{title}</p>
        {children}
      </div>
    </Element>
  )
}

export default Container
