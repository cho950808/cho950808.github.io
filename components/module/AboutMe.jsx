import React from 'react'
import Container from '../common/Container'
import profile_data from '../../tmp/profile'
import { prefix } from '../../config'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutMe = () => {

  const handleIconClick = (info) => {
    window.open(info.link, '_blank', 'noopener,noreferrer')
  }

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
              className={`flex items-center justify-center w-full max-h-[280px] lg:w-full lg:max-h-full rounded-lg overflow-hidden border-2 border-sky-100 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <Image
                src={`${prefix}/assets/projects/profile.jpeg`}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg"
                alt="프로필 이미지 입니다."
              />
            </div>
          </div>

          <div className="flex flex-col col-span-3 lg:col-span-2 mt-3 lg:mt-0 lg:p-6">
            <div className="flex flex-col">
              <h1 className="flex items-center font-bold text-lg lg:text-1xl text-gray-700 mt-5">
                <div className="h-4 lg:h-6 w-1.5 bg-blue-500 mr-2" />
                Introduce
              </h1>

              <p className="font-maruSemiBold text-tiny lg:text-lg whitespace-pre-wrap mt-2">
                {`매일 한 발씩 성장하는 3년차 프론트엔드 개발자 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">조재영</strong>
                {` 입니다.\n\n`}
                <strong className="font-maruBold font-bold text-base lg:text-xl">React</strong>
                {`와 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">Vue.js</strong>
                {`로 효율적이고 유지보수가 쉽도록 코드를 작성하며, 프로젝트에서는 견고하고 확장 가능한 시스템을 설계하고 구현하는 데 앞장서고 있습니다.\n\n`}
                {`특히 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">마이크로 프론트엔드 아키텍처</strong>
                {`에 깊은 관심을 가지고 있으며, 이를 통해 대규모 애플리케이션의 유연성과 확장성을 높이는 데 집중하고 있습니다.\n\n`}
                {`사용자 경험을 최우선으로 고려해 직관적이고 매끄러운 인터페이스를 구현하는 데 큰 보람을 느끼며, 서비스의 깊은 이해를 바탕으로 완성도 높은 작업을 지향합니다.\n\n`}
                {`스터디를 통해 최신 기술 트렌드를 익히고, 이를 팀원들과 적극적으로 공유하며 협업하는 과정에서 함께 성장하는 것을 중요하게 생각합니다.`}
              </p>
            </div>

            <div className="flex flex-col items-center w-full justify-end h-full mt-10 lg:mt-3">
              <div className="flex-shrink-0">
                <Image
                  src={`${prefix}/assets/projects/sign.png`}
                  width={100}
                  height={100}
                  className="w-[120px] lg:w-[200px] object-cover"
                  alt="Sign Image"
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-1 lg:mt-2">
                {profile_data.map((item, index) =>
                  item.info?.map((info, idx) => (
                    <div
                      key={`profile_info_${index}_${idx}`}
                      className="relative group w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] p-3 rounded-full bg-white border-2 border-gray-300 shadow-md transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-blue-50 hover:scale-105"
                      onClick={() => handleIconClick(info)}
                    >
                      <p className="text-lg">{info.icon}</p>

                      {/* Hover 시 노출될 텍스트 */}
                      <span className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-all duration-300">
                        {info.text}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </Container>
  )
}

export default AboutMe
