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
              className={`flex items-center justify-center w-full max-h-[280px] lg:w-full lg:max-h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <Image
                src={`${prefix}/assets/projects/profile.jpeg`}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg opacity-95"
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

              <p className="font-maruLight text-base lg:text-xl whitespace-pre-wrap mt-2">
                {`협업을 중요시하며 3년간 다양한 프로젝트를 통해 실력을 쌓아온 프론트엔드 개발자 `}
                <strong className="font-maruBold font-bold text-base lg:text-1xl">조재영</strong>
                {` 입니다.\n\n`}
                {`저는 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">React</strong>
                {`와 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">Vue.js</strong>
                {`로 효율적이고 유지보수가 용이한 코드를 작성하며, 복잡한 요구사항을 반영한 `}
                {`견고하고 확장 가능한 시스템 설계와 구현을 주도해 왔습니다. 특히, `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">마이크로 프론트엔드 아키텍처</strong>
                {` 도입은 저에게 큰 도전이자 학습의 기회였습니다. \n\n당시 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">
                  340만 줄 이상의 JavaScript 코드
                </strong>
                {`와 수천 개의 Vue 파일을 분석하고, 복잡한 의존성을 분리하여 독립적인 배포 시스템을 구축하려 했습니다. 그러나 초기 복잡성 관리 및 통합 문제로 인해 많은 시행착오를 겪었으며, 이 과정에서 설계와 협업의 중요성을 절실히 깨달았습니다.\n\n`}
                {`이후 프로젝트에서는 이러한 경험을 바탕으로 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">
                  효율적이고 유지보수가 용이한 아키텍처 설계
                </strong>
                {`와 개발에 집중하고 있습니다. 특히, `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">사용자 경험</strong>
                {`을 최우선으로 하여 직관적이고 매끄러운 인터페이스 구현에 주력하며, `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">완성도 높은 결과물</strong>
                {`을 목표로 하고 있습니다.\n\n`}
                {`더불어, 스터디를 통해 최신 기술 트렌드를 같이 학습하고, 이를 실제 프로젝트에 적용하여 발전을 추구합니다. 이러한 지식을 `}
                <strong className="font-maruBold font-bold text-base lg:text-xl">팀원들과 함께 공유</strong>
                {`하여 협업 문화를 만들어 나가고 있습니다.`}
              </p>
            </div>

            <div className="flex flex-col items-center w-full justify-end h-full mt-10 lg:mt-7">
              <div className="flex-shrink-0">
                <Image
                  src={`${prefix}/assets/projects/sign.png`}
                  width={100}
                  height={100}
                  className="w-[120px] lg:w-[200px] object-cover"
                  alt="Sign Image"
                />
              </div>

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
        </motion.div>
      </article>
    </Container>
  )
}

export default AboutMe
