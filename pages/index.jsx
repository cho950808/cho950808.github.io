import Head from 'next/head'
import { Banner, AboutMe, Skills, Projects, Career, TopScroll } from '../components/module'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jaeyoung, Cho | FrontEnd Developer</title>
        <meta name="keyword" content="react, React.js, Next.js, TailwindCSS, HTML, CSS, Portfolio" />
        <meta name="description" content="Jaeyoung, Cho Portfolio Page" />
        <meta name="author" content="Jaeyoung, Cho" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Career />
        <Projects />
      </main>
      <TopScroll />
    </div>
  )
}
