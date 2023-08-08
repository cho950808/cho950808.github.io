import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'

export const words = [`안녕하세요,\n끊임없이 성장을 추구하는`, `2년차 프론트엔드 개발자\n조재영 입니다.`]

const profile_data = [
  {
    title: 'Contact',
    info: [
      {
        icon: <HiOutlineMail className="w-4 h-4" />,
        link: 'mailto:tjsthrl1111@gmail.com',
        text: 'tjsthrl1111@gmail.com',
      },
      {
        icon: <HiPhone className="w-4 h-4" />,
        text: '010-4073-2899',
      },
    ],
  },
  {
    title: 'Channel',
    info: [
      {
        icon: <SiNotion className="w-4 h-4" />,
        link: 'https://url.kr/d6v325',
        text: 'https://url.kr/d6v325',
      },
      {
        icon: <AiFillGithub className="w-4 h-4" />,
        link: 'https://github.com/cho950808',
        text: 'https://github.com/cho950808',
      },
    ],
  },
]

export default profile_data
