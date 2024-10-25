import React, { useEffect, useMemo, useState } from 'react'
import { prefix } from '../../config'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'
import { BsArrowDownShort } from 'react-icons/bs'

const Banner = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('')

  const texts = [
    `효율적이고 유지보수 가능한 코드를 지향합니다.`,
    `최신 기술을 탐구하며,\n지식을 나누는 협업을 지향합니다.`,
    `아키텍처 설계를 통해 확장성을 추구합니다.`,
  ]

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoadingComplete(true)
    }, 2000)

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (isLoadingComplete) {
      const textChangeTimer = setInterval(() => {
        setFadeClass('fade-out')
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
          setFadeClass('fade-in')
        }, 800)
      }, 6000)

      return () => clearInterval(textChangeTimer)
    }
  }, [isLoadingComplete])

  return (
    <Element
      name="home"
      className="flex flex-col items-center justify-center w-full h-[500px] lg:h-screen text-center relative overflow-hidden bg-cover bg-center animate-parallaxZoom"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${prefix}/assets/projects/banner.jpeg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transformOrigin: 'center',
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer" />
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />

      {isLoadingComplete && (
        <div className="z-10 animate-fadeIn flex flex-col items-center text-center space-y-4 lg:space-y-8">
          <h1 className="text-2xl lg:text-5xl text-white font-extrabold tracking-tight leading-snug">안녕하세요!</h1>

          <h2
            className={`text-base lg:text-4xl font-bold py-2 px-5 lg:px-10 lg:py-5 text-white relative ${fadeClass} shadow-lg bordered-text whitespace-pre-line lg:whitespace-normal`}
          >
            {texts[currentTextIndex]}
          </h2>

          <h3 className="text-lg lg:text-2xl leading-snug px-5 lg:px-20 text-gray-100">
            언제나{' '}
            <span className="font-semibold bg-gradient-to-l from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              긍정적인 에너지
            </span>
            로 팀의 분위기를 밝게 만들고 <br className="hidden lg:block" />
            <span className="font-semibold bg-gradient-to-l from-red-400 to-orange-400 bg-clip-text text-transparent">
              문제 해결
            </span>
            을 통해 함께 성장하는
            <div className="mt-5 lg:mt-8">
              프론트엔드 엔지니어{' '}
              <strong className="relative text-white font-extrabold text-2xl lg:text-4xl">
                조재영
                <span className="absolute w-full left-0 bottom-[-4px] border-b-4 border-gradient-to-r from-orange-400 to-yellow-400"></span>
              </strong>{' '}
              입니다.
            </div>
          </h3>
        </div>
      )}

      <div className="z-20 mt-5 lg:mt-20 flex items-center flex-col">
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

        .bordered-text {
          border: 3px solid rgba(255, 215, 0, 0.8);
          border-radius: 12px;
          display: inline-block;
          background-color: rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.5s ease, opacity 0.5s ease;
          transform: scale(1);
          opacity: 1;
        }

        .fade-in {
          opacity: 1;
          transform: scale(1);
        }

        .fade-out {
          opacity: 0;
          transform: scale(0.95);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
      `}</style>
    </Element>
  )
}

export default Banner
