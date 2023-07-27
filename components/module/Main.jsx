import React from 'react'
// import { useRouter } from 'next/router';
import { prefix } from '../../config'

const Main = () => {
  return (
    <section
      id="main"
      className="w-full h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${prefix}/assets/projects/banner.jpeg')`,
      }}
    >
      <div className="z-1 absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 to-black/5" />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-10">
          <h1 className="py-2 text-white text-[70px] font-bold">FRONTEND DEVELOPER</h1>
          <p className="py-4 sm:max-w-[70%] m-auto text-white text-[16px]">
            혁신적인 기술을 활용하여 유저 인터페이스와 경험을 혁신하는 것을 좋아하고 끊임없이 내가 만든 웹/앱이 어떻게
            보일지 상상하면서 작업하며, 유저가 좋아할 웹/앱을 만들고 싶어합니다.
          </p>
          <h1 className="py-4 text-[30px] font-bold">
            <span className="text-white"> - 조 재 영 - </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Main
