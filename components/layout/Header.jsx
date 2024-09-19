import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { isMobile } from 'react-device-detect'
import ScrollProgressBar from '../common/ScrollProgressBar'

const Header = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('transparent')
  const [linkColor, setLinkColor] = useState('#ffffff')
  const [activeLink, setActiveLink] = useState('')

  const toggleNav = () => setNav(!nav)

  const handleShadow = useCallback(() => {
    const scrollThreshold = isMobile ? 200 : 400
    const isScrolled = window.scrollY >= scrollThreshold

    setShadow(isScrolled)
    setNavBg(isScrolled ? '#ffffff' : 'transparent')
    setLinkColor(isScrolled ? '#1f2937' : '#ffffff')
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('scroll', handleShadow)
    return () => window.removeEventListener('scroll', handleShadow)
  }, [handleShadow])

  const menuLinks = [
    { to: 'home', label: 'Home' },
    { to: 'aboutMe', label: 'About' },
    { to: 'career', label: 'Career' },
    { to: 'skills', label: 'Skills' },
  ]

  const handleSetActive = (to) => {
    if (to === 'home') {
      setActiveLink('')
    } else {
      setActiveLink(to)
    }
  }

  return (
    <>
      <ScrollProgressBar />
      <div
        style={{ backgroundColor: navBg }}
        className={`h-[60px] lg:h-20 fixed w-full z-[100] ${shadow ? 'shadow-lg' : ''}`}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link to="home">
            <p
              className={`ml-3 lg:ml-10 font-medium text-xl uppercase hover:scale-105 cursor-pointer`}
              style={{ color: linkColor }}
            >
              CHO JAE YOUNG
            </p>
          </Link>
          <div>
            <ul style={{ color: linkColor }} className="hidden md:flex mr-10 relative">
              {menuLinks.slice(0, 4).map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`ml-10 text-sm uppercase hover:scale-105 cursor-pointer relative ${
                    activeLink === to ? 'active' : ''
                  }`}
                  activeClass="active"
                  spy={true}
                  onSetActive={() => handleSetActive(to)}
                >
                  <li>{label}</li>
                  {activeLink === to && to !== 'home' && (
                    <span
                      className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#1f2937] transition-all duration-500"
                      style={{
                        transform: `translateX(${activeLink === to ? 0 : '-100%'})`,
                      }}
                    ></span>
                  )}
                </Link>
              ))}
            </ul>

            <div onClick={toggleNav} className="md:hidden cursor-pointer px-2">
              <AiOutlineMenu style={{ color: linkColor }} size={25} />
            </div>
          </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div
            className={
              nav
                ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500'
                : 'fixed right-[-100%] top-0 p-10 ease duration-500'
            }
          >
            <div className="flex w-full items-center justify-between">
              <div
                onClick={toggleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-150"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="py-4 flex flex-col h-[90vh]">
              <ul className="uppercase">
                {menuLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={toggleNav}
                    className="text-sm hover:border-b cursor-pointer block py-4"
                  >
                    {label}
                  </Link>
                ))}
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#6fa2c7]">Connect</p>
                <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                      <SiNotion />
                    </div>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiFillGithub />
                    </div>
                  </a>
                  <a href="">
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
    </>
  )
}

export default Header
