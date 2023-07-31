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
      <article>
        <div className="w-full grid grid-cols-3 h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 col-span-3 lg:col-span-1 h-full w-full flex flex-col items-center justify-center">
            <div
              className={`flex items-center justify-center w-full max-h-[450px] lg:w-[330px] lg:h-[330px] rounded-lg overflow-hidden border-sky-10 border-2`}
            >
              <img
                src={`${prefix}/assets/projects/profile.jpeg`}
                className="w-full h-full object-cover"
                alt="프로필 이미지 입니다."
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 lg:col-span-2 mt-3 lg:mt-0 lg:p-5">
            <div>
              <h1 className="flex items-center font-bold text-[21px] text-gray-700">
                <div class="h-6 w-1.5 bg-blue-400" />
                &nbsp;Contact
              </h1>
              <div className="flex flex-col mt-2">
                <p className="text-[14px] opacity-70">
                  Email :&nbsp;
                  <span className="font-bold">
                    <a href="mailto:tjsthrl1111@gmail.com">tjsthrl1111@gmail.com</a>
                  </span>
                </p>
                <p className="text-[14px] opacity-70">
                  Phone : <span className="font-bold">010-4073-2899</span>
                </p>
              </div>
            </div>

            <div>
              <h1 className="flex items-center font-bold text-[21px] text-gray-700 mt-5">
                <div class="h-6 w-1.5 bg-blue-400" />
                &nbsp;Channel
              </h1>
              <div className="flex flex-col mt-2">
                <p className="text-[14px] opacity-70">
                  Notion :&nbsp;
                  <span className="font-bold">
                    <a href="https://url.kr/d6v325" target="_blank" rel="noreferrer">
                      https://url.kr/d6v325
                    </a>
                  </span>
                </p>
                <p className="text-[14px] opacity-70">
                  Github :&nbsp;
                  <span className="font-bold">
                    <a href="https://github.com/cho950808" target="_blank" rel="noreferrer">
                      https://github.com/cho950808
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h1 className="flex items-center font-bold text-[21px] text-gray-700 mt-5">
                <div class="h-6 w-1.5 bg-blue-400" />
                &nbsp;Introduce
              </h1>
              <p className="opacity-70 text-[14px]">
                혁신적인 기술을 활용하여 유저 인터페이스와 경험을 혁신하는 것을 좋아하고 끊임없이 내가 만든 웹/앱이
                어떻게 보일지 상상하면서 작업하며, 유저가 좋아할 웹/앱을 만들고 싶어합니다.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  )
}

export default AboutMe
