import React, { useEffect, useState } from 'react'
import { prefix } from '../../config'
import { Element } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { BsArrowDownShort } from 'react-icons/bs'

const Banner = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  const [pointText] = useTypewriter({
    words: ['효율적인 협업을 추구하는', '팀의 성장을 함께 이끄는', '함께 문제를 해결하는'],
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 100,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Element
      name="home"
      className="flex flex-col items-center justify-center w-full h-[400px] lg:h-screen text-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${prefix}/assets/projects/banner.jpeg')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'backgroundZoom 20s infinite alternate',
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer" />
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />

      {isLoadingComplete && (
        <div className="z-10 flex flex-col items-center text-center animate-fadeIn space-y-4 lg:space-y-6">
          <h1 className="text-3xl lg:text-5xl text-white font-extrabold mb-4 lg:mb-6 tracking-tight leading-snug">
            안녕하세요!
          </h1>

          <h2 className="text-lg lg:text-3xl text-gray-100 font-light px-5 lg:px-20">
            저는 <span className="text-yellow-400 font-semibold">{pointText}</span>
            <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
          </h2>

          <h3 className="text-base lg:text-2xl text-gray-200 leading-snug px-5 lg:px-20">
            프론트엔드 개발자{' '}
            <strong className="relative text-white font-extrabold lg:text-4xl">
              조재영
              <span className="absolute w-full left-0 bottom-[-4px] border-b-4 border-yellow-400"></span>
            </strong>{' '}
            입니다.
          </h3>
        </div>
      )}

      <div className="z-20 mt-20 flex items-center flex-col">
        <Link activeClass="active" to="aboutMe">
          <button className="theMoreButton flex items-center">
            더 알아보기
            <div className="arrow-icon">
              <BsArrowDownShort className="ml-1 h-6 w-6 lg:h-8 lg:w-8 z-20" />
            </div>
          </button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes backgroundZoom {
          0% {
            background-size: 100%;
          }
          100% {
            background-size: 110%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Element>
  )
}

export default Banner
