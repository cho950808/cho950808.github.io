import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

const Container = (props) => {
  const { children, title, scrollName } = props
  return (
    <Element name={scrollName} className="max-w-[1280px] m-auto p-4 lg:p-0">
      <motion.div
        className="max-w-[1280px] mx-auto py-[80px] lg:py-[120px] flex flex-col justify-center h-full"
        whileInView={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ y: -20, scale: 0.95, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center">
          <p className="uppercase text-3xl lg:text-[40px] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] font-extrabold mb-8 drop-shadow-lg text-center">
            {title}
          </p>
        </div>
        {children}
      </motion.div>
    </Element>
  )
}

export default Container
