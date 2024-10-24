import { useEffect, useState } from 'react'
import Router from 'next/router'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import LoadingScreen from '../components/common/LoadingScreen'
import CommonModal from '../components/module/CareerDetailModal'

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    const minLoadingTime = 3000
    const startTime = Date.now()

    const handleStop = () => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < minLoadingTime) {
        setTimeout(() => setLoading(false), minLoadingTime - elapsedTime)
      } else {
        setLoading(false)
      }
    }

    setTimeout(handleStop, minLoadingTime)

    Router.events.on('routeChangeStart', () => setLoading(true))
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true))
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CommonModal />
    </>
  )
}

export default MyApp
