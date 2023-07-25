import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { MdOutlineSchool } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { IoCalendarClearOutline, IoLocationOutline, IoSchoolOutline } from 'react-icons/io5'

const AboutMe = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState('Send message')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending...')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          mail,
          phone,
          name,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const { error } = await res.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send message')
      setName('')
      setPhone('')
      setMail('')
      setSubject('')
      setMessage('')
    }
    console.log(name, mail, subject, message)
  }

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (mail.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    // console.log('errors', errors);
    return isValid
  }
  const router = useRouter()
  const handleResume = (e) => {
    e.preventDefault()
    router.push('/myResume')
  }

  return (
    <div id="aboutMe" className="w-full mt-20">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="text-xl tracking-widest uppercase text-[#6fa2c7]">About Me</p>
        <h2 className="py-4">Profile</h2>
        <div className="grid lg:grid-cols-6 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full w-full flex flex-col items-center justify-center">
              <div
                className={`flex items-center justify-center w-[250px] h-[250px] xs:w-[220px] xs:h-[220px] rounded-full overflow-hidden bg-secondary`}
              >
                <img src={'../assets/projects/profile.jpeg'} className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-bold py-4">1년 차, 프론트엔드 개발자</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <CgProfile className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">이름</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">조재영</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <AiOutlinePhone className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">전화번호</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">010 - 4073 - 2899</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <IoCalendarClearOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">생년월일</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">1995.08.08</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <AiOutlineMail className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">이메일</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">tjsthrl1111@gmail.com</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5">
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <IoLocationOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">주소지</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">서울시 구로구</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="uppercase text-sm py-2 flex items-center">
                    <IoSchoolOutline className="w-[30px] h-[30px] mr-2" />
                    <span className="text-bold text-[18px]">학력</span>
                  </h1>
                  <span className="text-gray-500 text-[15px]">강릉원주대학교 (멀티미디어공학부)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
