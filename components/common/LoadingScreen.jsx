import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval)
          setIsFinished(true)
          document.body.style.overflow = 'auto'
          return 100
        }
        return Math.min(oldProgress + 15, 100)
      })
    }, 250)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = 'auto'
    }
  }, [])


  return (
    <div className={`loading-screen ${isFinished ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-message">
          <h1>방문해 주셔서 감사합니다!</h1>
          <p>잠시만 기다려 주세요.</p>
        </div>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-text">{progress}%</div>
      </div>
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
          z-index: 9999;
          opacity: 1;
          transition: opacity 1s ease;
        }

        .loading-screen.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .loading-message {
          margin-bottom: 30px;
          animation: fadeIn 1s ease-in-out;
        }

        .loading-message h1 {
          font-size: 1.8em;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .loading-message p {
          font-size: 1.2em;
          color: #34495e;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loading-bar {
          width: 60%;
          max-width: 300px;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .loading-progress {
          height: 100%;
          background-color: #2980b9;
          transition: width 0.2s ease;
        }

        .loading-text {
          margin-top: 10px;
          font-size: 1.2em;
          font-weight: 600;
          color: #2980b9;
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
