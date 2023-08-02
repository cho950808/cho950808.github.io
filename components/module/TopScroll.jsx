import { useCallback, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-scroll'

const TopScroll = () => {
  const [status, setStatus] = useState(false)

  const handle = useCallback(() => {
    const handleShadow = () => {
      if (isMobile) {
        setStatus(false)
      } else {
        if (window.scrollY >= 400) {
          setStatus(true)
        } else {
          setStatus(false)
        }
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [isMobile])

  useEffect(() => {
    handle()
  }, [])

  return (
    <div className="fixed bottom-10 right-10 z-30">
      {status && (
        <Link activeClass="active" to="home">
          <button className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
            <FaArrowUp className="h-5 w-5" />
          </button>
        </Link>
      )}
    </div>
  )
}

export default TopScroll
