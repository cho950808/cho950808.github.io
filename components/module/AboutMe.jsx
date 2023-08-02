import React from 'react'
import Container from '../common/Container'
import { prefix } from '../../config'
import profile_data from '../../tmp/profile'

const AboutMe = () => {
  return (
    <Container scrollName="aboutMe" title="ABOUT ME">
      <article>
        <div className="w-full grid grid-cols-3 h-full shadow-xl shadow-gray-400 rounded-xl p-5">
          <div className="lg:py-6 col-span-3 lg:col-span-1 h-full w-full flex flex-col items-center justify-center">
            <div
              className={`flex items-center justify-center w-full max-h-[280px] lg:w-full lg:max-h-full rounded-lg overflow-hidden border-sky-10 border-2`}
            >
              <img
                src={`${prefix}/assets/projects/profile.jpeg`}
                className="w-full h-full object-cover"
                alt="프로필 이미지 입니다."
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 lg:col-span-2 mt-3 lg:mt-0 lg:p-6">
            <div className="lg:grid lg:grid-cols-2">
              {profile_data.map((item, index) => {
                return (
                  <div key={`profile_${index}`} className={`${item.title === 'Channel' && 'mt-5 lg:mt-0'}`}>
                    <h1 className="flex items-center font-bold text-lg lg:text-1xl text-gray-700">
                      <div className="h-4 lg:h-6 w-1.5 bg-blue-500 mr-2" />
                      {item.title}
                    </h1>
                    <div className="flex flex-col mt-2 gap-1.5">
                      {item.info?.map((info, idx) => {
                        return (
                          <div className="flex items-center opacity-70" key={`profile_info_${idx}`}>
                            <p className="text-tiny mr-2">{info.icon}</p>
                            <span>
                              <a href={info.link} target="_blank" rel="noreferrer">
                                {info.text}
                              </a>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col mt-12">
              <h1 className="flex items-center font-bold text-lg lg:text-1xl text-gray-700">
                <div className="h-4 lg:h-6 w-1.5 bg-blue-500 mr-2" />
                Introduce
              </h1>
              <p className="opacity-70 text-tiny whitespace-pre-wrap mt-2">
                {`끈임없이 노력하고 도전하는 2년차 개발자 조재영 입니다. 주도적으로 도전하는 열정, 고객의 니즈를 정확하게 파악하여 탄탄한 결과물을 제공하는 프로페셔널함을 바탕으로 웹 프로젝트를 완수하여 회사 연 14억 이라는 매출을 기여한 경험이 있습니다.\n\n그리고 혁신적인 기술을 활용하여 유저 인터페이스와 경험 하는 것을 좋아하고 끊임없이 내가 만든 웹/앱이 어떻게 보일지 상상하면서 작업하며, 유저가 좋아할 웹/앱을 만들고 싶습니다.`}
              </p>
            </div>
            <div className="items-center flex w-full justify-end h-full mt-3">
              <img src={`${prefix}/assets/projects/sign.png`} className="w-[130px]  object-cover" alt="사인 입니다." />
            </div>
          </div>
        </div>
      </article>
    </Container>
  )
}

export default AboutMe
