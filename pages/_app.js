import Navbar from '../components/layout/Navbar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
