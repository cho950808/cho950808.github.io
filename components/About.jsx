import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#6fa2c7]'>About me</p>
          <h2 className='py-4' >Who I Am</h2>
          <p className='py-2 text-gray-600'>변화와 도전을 통해 부족함을 채우고 성장하며 유연한 사고를 위해 끊임없이 공부하고 있습니다. 학교를 다닐 동안 관련 문서와 서적을 통해 독학하였고, 혼자서 몇 개의 간단한 프로젝트를 진행해 보면서 독학을 통해 얻을 수 있는 지식과 경험에 한계를 느꼈고 저보다 더 많이 아는 사람들과 일하고 배우며 성장하고 싶습니다.
          그리고 항상 제가 경험을 기록으로 남기며 잘했던 점, 부족한 점, 개선할 점 등을 성찰합니다. 성찰은 저를 좀 더 나은 사람으로 만들어 주고, 오늘의 저는 아직 부족하지만 계속해서 더 나은 사람이 될 것입니다.</p>
            <Link href='/#projects'> 
            <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout my last projects !</p>
            </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-150'>
          <img className='rounded-xl' src="https://source.unsplash.com/vXInUOv1n84" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
