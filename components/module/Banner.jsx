import React from 'react'
import { prefix } from '../../config'
import { Element } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { words } from '../../tmp/profile'
import { Link } from 'react-scroll'
import { BsArrowDownShort } from 'react-icons/bs'

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
      className="flex flex-col items-center justify-center w-full h-[400px] lg:h-screen text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${prefix}/assets/projects/banner.jpeg')`,
      }}
    >
      <div className="z-1 absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/90 to-black/5" />
      <div className="z-10">
        <h1 className="text-1xl lg:text-5xl text-white px-10">
          <span className="transition ease-out duration-200 cursor-default whitespace-pre-wrap lg:whitespace-normal">
            {text}
            <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
          </span>
        </h1>
      </div>
      <div className="z-20 mt-5 flex items-center flex-col">
        <Link activeClass="active" to="aboutMe">
          <button className="theMoreButton flex items-center">
            더 알아보기
            <div className="arrow-icon">
              <BsArrowDownShort className="ml-1 h-6 w-6 lg:h-8 lg:w-8 z-20" />
            </div>
          </button>
        </Link>
      </div>
    </Element>
  );
};

export default Banner
