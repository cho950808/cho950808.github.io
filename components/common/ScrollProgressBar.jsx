import React, { useState, useEffect, useCallback } from 'react'
import { throttle } from 'lodash'

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)

  const updateScrollProgress = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / scrollHeight) * 100

    setScrollWidth(scrollPercent)
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      updateScrollProgress()
    }, 50)

    updateScrollProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', updateScrollProgress)
    window.addEventListener('hashchange', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', updateScrollProgress)
      window.removeEventListener('hashchange', updateScrollProgress)
    }
  }, [updateScrollProgress])

  const progressBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${scrollWidth}%`,
    height: '2.5px',
    backgroundColor: 'rgb(0 164 255)',
    zIndex: 999,
    transition: 'width 0.05s ease-out',
  }

  return <div style={progressBarStyle}></div>
}

export default ScrollProgressBar
