import Head from 'next/head';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Cho Jae Young | FrontEnd Developer</title>
                <meta
                    name="description"
                    content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
                />
                {/* <link rel="icon" href="/public/assets/mylogo.png" /> */}
            </Head>
            <Main />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}
