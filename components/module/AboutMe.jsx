import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoCalendarClearOutline, IoLocationOutline, IoSchoolOutline } from 'react-icons/io5'
import { prefix } from '../../config'
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'

const AboutMe = () => {
  return (
    <section id="aboutMe" className="w-full mt-[200px]">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-2">About Me</p>
        <h2 className="text-[30px] font-bold">Profile</h2>
        <div className="grid lg:grid-cols-6 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full w-full flex flex-col items-center justify-center">
              <div
                className={`flex items-center justify-center w-[250px] h-[250px] xs:w-[280px] xs:h-[280px] rounded-full overflow-hidden bg-secondary`}
              >
                <img src={`${prefix}/assets/projects/profile.jpeg`} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold py-4 text-[18px]">2년 차, 프론트엔드 개발자</p>
              </div>
              <div className="flex items-center space-x-8 py-4">
                <a
                  href="https://handy-sweater-035.notion.site/Technology-1b3c7818b53f4178803290b2c1844053?pvs=4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                    <SiNotion />
                  </div>
                </a>
                <a href="https://github.com/cho950808" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4 items-center justify-center flex flex-col h-full">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 h-full">
                <div className="flex flex-col h-full">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <CgProfile className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">이름</span>
                  </h1>
                  <span className="text-gray-500 text-[17px]">조재영</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <AiOutlinePhone className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">전화번호</span>
                  </h1>
                  <span className="text-gray-500 text-[17px]">010-4073-2899</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5 h-full">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoCalendarClearOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">생년월일</span>
                  </h1>
                  <span className="text-gray-500 text-[17px]">1995. 8. 8</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <AiOutlineMail className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">이메일</span>
                  </h1>

                  <span className="text-gray-500 text-[17px]">
                    <a href="mailto:tjsthrl1111@gmail.com">tjsthrl1111@gmail.com </a>
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5 h-full">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoLocationOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">주소지</span>
                  </h1>
                  <span className="text-gray-500 text-[17px]">경기도 광명시</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoSchoolOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="font-bold text-[22px]">학력</span>
                  </h1>
                  <span className="text-gray-500 text-[17px]">강릉원주대학교 (멀티미디어공학부)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
