import React from 'react'
import Container from '../common/Container'
import profile_data from '../../tmp/profile'
import { prefix } from '../../config'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <Container scrollName="aboutMe" title="ABOUT ME">
      <article>
        <motion.div
          className="w-full grid grid-cols-3 h-full shadow-xl shadow-gray-300 rounded-xl p-5"
          whileInView={{ x: 0, y: 15, scale: 1, rotate: 0, opacity: 1 }}
          initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.0 }}
        >
          <div className="lg:py-6 col-span-3 lg:col-span-1 h-full w-full flex flex-col items-center justify-center">
            <div
              className={`flex items-center justify-center w-full max-h-[280px] lg:w-full lg:max-h-full rounded-lg overflow-hidden border-sky-10 border-2`}
            >
              <Image
                src={`${prefix}/assets/projects/profile.jpeg`}
                width={100}
                height={100}
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
              <p className="text-tiny lg:text-1xl whitespace-pre-wrap mt-2">
                {`저는 3년차 프론트엔드 개발자입니다.\n\n새로운 기술을 배우는 것을 즐기며, 문제를 깊이 분석하고 창의적으로 해결하는 데 강한 열정을 가지고 있습니다. 사용자에게 직관적이고 원활한 경험을 제공하는 것을 목표로 삼고 있으며, 이를 위해 지속적으로 배우고 성장하고자 노력합니다.\n\n다양한 도전 과제를 통해 얻은 경험을 바탕으로, 항상 더 나은 솔루션을 찾기 위해 노력하고 있습니다. 저에게 있어 개발은 단순한 기술적 해결을 넘어, 사용자와 개발자 모두에게 가치를 제공하는 과정입니다. 앞으로도 이 과정을 통해 성장하며, 더 많은 문제를 해결하고 긍정적인 변화를 이끌어가는 개발자가 되고자 합니다.`}
              </p>
            </div>
            <div className="items-center flex w-full justify-end h-full mt-3">
              <Image
                src={`${prefix}/assets/projects/sign.png`}
                width={100}
                height={100}
                className="w-[130px] object-cover"
                alt="JaeYoung, Cho Sign"
              />
            </div>
          </div>
        </motion.div>
      </article>
    </Container>
  )
}

export default AboutMe
