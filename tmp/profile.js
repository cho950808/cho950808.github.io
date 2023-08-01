import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'

const profile_data = [
  {
    title: 'Contact',
    info: [
      {
        icon: <HiOutlineMail />,
        link: 'mailto:tjsthrl1111@gmail.com',
        text: 'tjsthrl1111@gmail.com',
      },
      {
        icon: <HiPhone />,
        text: '010-4073-2899',
      },
    ],
  },
  {
    title: 'Channel',
    info: [
      {
        icon: <SiNotion />,
        link: 'https://url.kr/d6v325',
        text: 'https://url.kr/d6v325',
      },
      {
        icon: <AiFillGithub />,
        link: 'https://github.com/cho950808',
        text: 'https://github.com/cho950808',
      },
    ],
  },
]

export default profile_data
