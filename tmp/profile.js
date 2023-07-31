import { CgProfile } from 'react-icons/cg'
import { IoCalendarClearOutline, IoSchoolOutline } from 'react-icons/io5'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const profile_data = [
  {
    icon: <CgProfile />,
    title: '이름',
    text: '조재영',
  },
  {
    icon: <AiOutlinePhone />,
    title: '전화번호',
    text: '010-4073-2899',
  },
  {
    icon: <IoCalendarClearOutline />,
    title: '생년월일',
    text: '1995. 8, 8',
  },
  {
    icon: <AiOutlineMail />,
    title: '이메일',
    text: 'tjsthrl1111@gmail.com',
  },
  {
    icon: <IoSchoolOutline />,
    title: '학력',
    text: '강릉원주대학교 (멀티미디어공학부)',
  },
]

export default profile_data
