import Head from 'next/head'
import { Main, AboutMe, Skills, Projects, Experience } from '../components/module'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cho Jae Young | FrontEnd Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>
      <main>
        <Main />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}
