import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import banner from '../public/assets/projects/banner.jpeg'

export default function Main() {
  const router = useRouter();

  return (
    <div id="main" className="w-full h-screen text-center bg-cover bg-center" style={{
      backgroundImage: `url('../assets/projects/banner.jpeg')`
    }}>
    <div className="z-1 absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/60 to-black/5" />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className='z-10'>
          <h1 className="py-2 text-white">
            JUNIOR FRONTEND DEVELOPER
          </h1>
          <h1 className="py-4">
            <span className="text-white">- 조 재 영 -</span>
          </h1>
          <p className="py-4 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://github.com/gwen-guerin"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                <AiFillGithub />
              </div>
            </a>
            <a href="mailto:tjsthrl1111@gmail.com">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
              <AiOutlineMail />
            </div>
          </a>
            <a href="mailto:tjsthrl1111@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
