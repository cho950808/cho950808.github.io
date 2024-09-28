import React, { useEffect, useState } from 'react'
import { prefix } from '../../config'
import { Element } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { BsArrowDownShort } from 'react-icons/bs'

const Banner = () => {
  const [pointText] = useTypewriter({
    words: ['팀의 성장을 함께 이끄는', '효율적인 협업을 추구하는', '함께 문제를 해결하는'],
    loop: true,
    delaySpeed: 4000,
    typeSpeed: 110,
  })

  // 마우스 움직임에 따라 배경 이동 값
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  // 마우스 이동 핸들러
  const handleMouseMove = (e) => {
    const { clientX, clientY, innerWidth, innerHeight } = window
    const moveX = (e.clientX / innerWidth) * 20
    const moveY = (e.clientY / innerHeight) * 20
    setOffsetX(moveX)
    setOffsetY(moveY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Element
      name="home"
      className="flex flex-col items-center justify-center w-full h-[400px] lg:h-screen text-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${prefix}/assets/projects/banner.jpeg')`,
        backgroundPosition: `${50 + offsetX}% ${50 + offsetY}%`,
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50" />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl lg:text-7xl text-white font-bold mb-4 tracking-wider">{`안녕하세요!`}</h1>
        <h1 className="text-2xl lg:text-5xl text-white leading-relaxed px-5 lg:px-20">
          <span className="block">
            저는 <span className={`text-yellow-300 border-b-4 border-yellow-300`}>{pointText}</span>
            <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
          </span>
          <span className="block mt-2 text-3xl lg:text-4xl">
            프론트엔드 개발자{' '}
            <strong className="relative text-4xl lg:text-5xl">
              조재영
              <span className="absolute w-full left-0 bottom-[-5px] border-b-4 border-white"></span>
            </strong>{' '}
            입니다.
          </span>
        </h1>
      </div>

      <div className="z-20 mt-10 flex items-center flex-col">
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
  )
}


export default Banner;
