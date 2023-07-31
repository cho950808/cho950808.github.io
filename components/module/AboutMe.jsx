import React from 'react'
import Container from '../common/Container'
import { CgProfile } from 'react-icons/cg'
import { IoCalendarClearOutline, IoLocationOutline, IoSchoolOutline } from 'react-icons/io5'
import { prefix } from '../../config'
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { Element } from 'react-scroll'

const AboutMe = () => {
  return (
    <Container scrollName="aboutMe" title="ABOUT ME">
      <h2 className="text-[20px] lg:text-[30px] font-bold">Profile</h2>
      <article>
        <div className="w-full grid grid-cols-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 col-span-3 lg:col-span-1 h-full w-full flex flex-col items-center justify-center">
            <div
              className={`flex items-center justify-center w-full max-h-[450px] lg:w-[330px] lg:h-[330px] rounded-lg overflow-hidden border-sky-50 border-4 `}
            >
              <img
                src={`${prefix}/assets/projects/profile.jpeg`}
                className="w-full h-full object-cover"
                alt="프로필 이미지 입니다."
              />
            </div>
            {/* <div className="flex items-center space-x-8 py-4">
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
              </div> */}
          </div>
          <div className="flex flex-col col-span-3 lg:col-span-2 p-5">
            <p>asd</p>
          </div>
        </div>
      </article>
    </Container>
  )
}

export default AboutMe
