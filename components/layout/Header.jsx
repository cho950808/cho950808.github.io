import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { isMobile } from 'react-device-detect'
import ScrollProgressBar from '../common/ScrollProgressBar'
import profile_data from '../../tmp/profile'

const Header = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [linkColor, setLinkColor] = useState('#ffffff')
  const [activeLink, setActiveLink] = useState('')
  const [navBg, setNavBg] = useState('transparent')
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

  const handleIconClick = (info) => {
    window.open(info.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <ScrollProgressBar />
      <div
        style={{
          backgroundColor: navBg,
          transition: 'background-color 0.5s ease, opacity 0.6s ease',
        }}
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
            <div className="flex w-full items-center justify-end">
              <div
                onClick={toggleNav}
                className="ml-auto rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-150"
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

              <div className="mt-40">
                <p className="uppercase tracking-widest text-[#6fa2c7]">Connect</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {profile_data.map((item, index) =>
                    item.info?.map((info, idx) => (
                      <div
                        key={`profile_info_${index}_${idx}`}
                        className="relative group w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] p-5 rounded-full bg-white border-2 border-gray-300 shadow-md transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-blue-50 hover:scale-105"
                        onClick={() => handleIconClick(info)}
                      >
                        <p className="text-lg">{info.icon}</p>
                        <span className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-all duration-300">
                          {info.text}
                        </span>
                      </div>
                    ))
                  )}
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
