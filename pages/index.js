import Head from 'next/head'
import Main from '../components/module/Main'
import Skills from '../components/module/Skills'
import Projects from '../components/module/Projects'
import AboutMe from '../components/module/AboutMe'

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
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}
