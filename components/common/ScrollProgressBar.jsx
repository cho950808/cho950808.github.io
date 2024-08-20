import React, { useState, useEffect } from 'react'

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / scrollHeight) * 100
    setScrollWidth(scrollPercent)
  }

  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress()
    }

    // 처음 로드 시 프로그레스 바 초기화
    updateScrollProgress()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('popstate', updateScrollProgress)
    window.addEventListener('hashchange', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', updateScrollProgress)
      window.removeEventListener('hashchange', updateScrollProgress)
    }
  }, [])

  const progressBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${scrollWidth}%`,
    height: '3px',
    backgroundColor: '#6fa2c7',
    zIndex: 999,
    transition: 'width 0.1s ease-out',
  }

  return <div style={progressBarStyle}></div>
}

export default ScrollProgressBar
