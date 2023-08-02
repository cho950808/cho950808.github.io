import React from 'react'
import { prefix } from '../../config'
import { Element } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { words } from '../../tmp/profile'

const Banner = () => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  })

  return (
    <Element
      name="home"
      className="flex items-center justify-center w-full h-[400px] lg:h-screen text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${prefix}/assets/projects/banner.jpeg')`,
      }}
    >
      <div className="z-1 absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/90 to-black/5" />
      <div className="z-10">
        <h1 className="text-lg lg:text-5xl text-white px-10 h-20">
          <span className="transition ease-out duration-200 cursor-default  ">
            {text}
            <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
          </span>
        </h1>
      </div>
    </Element>
  )
}

export default Banner
