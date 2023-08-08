import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

const Container = (props) => {
  const { children, title, scrollName } = props
  return (
    <Element name={scrollName} className="max-w-[1024px] m-auto p-4 lg:p-0">
      <motion.div
        className="max-w-[1024px] mx-auto py-[60px] lg:py-[95px] flex flex-col justify-center h-full"
        whileInView={{ x: 0, y: 10, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <p className="uppercase text-lg lg:text-[25px] tracking-widest text-[#6fa2c7] font-bold lg:mb-3">{title}</p>
        {children}
      </motion.div>
    </Element>
  )
}

export default Container
