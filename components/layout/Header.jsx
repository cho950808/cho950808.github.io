import { Link } from 'react-scroll'
import React, { useState, useEffect, useCallback } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { isMobile } from 'react-device-detect'

const Header = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('transparent')
  const [linkColor, setLinkColor] = useState('#ecf0f1')

  const handleNav = () => {
    setNav(!nav)
  }

  const handle = useCallback(() => {
    const handleShadow = () => {
      if (!isMobile) {
        if (window.scrollY >= 400) {
          setShadow(true)
          setNavBg('#ecf0f1')
          setLinkColor('#1f2937')
        } else {
          setShadow(false)
          setNavBg('transparent')
          setLinkColor('#ecf0f1')
        }
      } else {
        if (window.scrollY >= 200) {
          setShadow(true)
          setNavBg('#ecf0f1')
          setLinkColor('#1f2937')
        } else {
          setShadow(false)
          setNavBg('transparent')
          setLinkColor('#ecf0f1')
        }
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [isMobile])

  useEffect(() => {
    handle()
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link activeClass="active" to="home">
          <p
            className={`ml-10 font-medium text-xluppercase hover:scale-105 cursor-pointer`}
            style={{ color: `${linkColor}` }}
          >
            CHO JAE YOUNG
          </p>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex mr-10">
            <Link activeClass="active" to="aboutMe">
              <li className="ml-10 text-sm uppercase hover:scale-105 cursor-pointer">about</li>
            </Link>
            <Link activeClass="active" to="skills">
              <li className="ml-10 text-sm uppercase hover:scale-105 cursor-pointer">skills</li>
            </Link>
            <Link activeClass="active" to="experience">
              <li className="ml-10 text-sm uppercase hover:scale-105 cursor-pointer">experience</li>
            </Link>
            <Link activeClass="active" to="projects">
              <li className="ml-10 text-sm uppercase hover:scale-105 cursor-pointer">projects</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer px-2">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-150"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-col h-[90vh]">
            <ul className="uppercase">
              <Link activeClass="active" to="aboutMe">
                <li onClick={() => setNav(!nav)} className="py-4 text-sm hover:border-b">
                  About
                </li>
              </Link>
              <Link activeClass="active" to="skills">
                <li onClick={() => setNav(!nav)} className="py-4 text-sm hover:border-b">
                  Skills
                </li>
              </Link>
              <Link activeClass="active" to="projects">
                <li onClick={() => setNav(!nav)} className="py-4 text-sm hover:border-b">
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#6fa2c7]"> connect</p>
              <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                <a
                  href="https://handy-sweater-035.notion.site/Technology-1b3c7818b53f4178803290b2c1844053?pvs=4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <SiNotion />
                  </div>
                </a>
                <a href="https://github.com/cho950808" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiFillGithub />
                  </div>
                </a>
                <a href="mailto:tjsthrl1111@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
