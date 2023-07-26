import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { IoCalendarClearOutline, IoLocationOutline, IoSchoolOutline } from 'react-icons/io5'
import { prefix } from '../../config'

const AboutMe = () => {
  return (
    <section id="aboutMe" className="w-full mt-[200px]">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="uppercase text-[20px] tracking-widest text-[#6fa2c7] mb-5">About Me</p>
        <h2 className="text-[30px] font-bold">Profile</h2>
        <div className="grid lg:grid-cols-6 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full w-full flex flex-col items-center justify-center">
              <div
                className={`flex items-center justify-center w-[250px] h-[250px] xs:w-[220px] xs:h-[220px] rounded-full overflow-hidden bg-secondary`}
              >
                <img src={`${prefix}/assets/projects/profile.jpeg`} className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-bold py-4">2년 차, 프론트엔드 개발자</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <CgProfile className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">이름</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">조재영</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <AiOutlinePhone className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">전화번호</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">010 - 4073 - 2899</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoCalendarClearOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">생년월일</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">1995.08.08</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <AiOutlineMail className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">이메일</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">tjsthrl1111@gmail.com</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoLocationOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">주소지</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">서울시 구로구</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center text-4xl sm:text-5xl md:text-6xl">
                    <IoSchoolOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">학력</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">강릉원주대학교 (멀티미디어공학부)</span>
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
