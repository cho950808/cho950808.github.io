import React from 'react'
import { Element } from 'react-scroll'

const Container = (props) => {
  const { children, title, scrollName } = props
  return (
    <Element name={scrollName} className="max-w-[1024px] m-auto py-16 p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-[17px] lg:text-[20px] tracking-widest text-[#6fa2c7] font-bold">{title}</p>
        {children}
      </div>
    </Element>
  )
}

export default Container
