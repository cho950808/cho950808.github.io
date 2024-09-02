import { prefix } from '../config'

const skill_data = [
  {
    skill_name: 'Frontend Development',
    skill_info: [
      {
        info: '주로 React를 선호해 효율적인 UI 개발과 상태 관리에 집중하고 있으며, Vue.js도 경험하여 지속적으로 학습하고 성장하고 있습니다.',
      },
      {
        info: '컴포넌트의 재사용성과 코드 모듈화를 중요하게 여기며, 주로 커스텀 Hooks를 활용하여 로직을 효과적으로 분리하고 있습니다.',
      },
      {
        info: 'React Query와 같은 최신 React 생태계 도구들을 탐구하며, 비동기 상태 관리와 데이터 페칭을 최적화하는 데 관심을 기울이고 있습니다.',
      },
      { info: 'TypeScript의 강력한 타입 시스템을 활용해 안전하고 예측 가능한 코드를 작성하려고 노력하고 있습니다.' },
      { info: 'Storybook 사용에 대한 깊은 이해를 쌓아가며, 이를 통해 체계적인 개발 환경을 구축하고자 합니다.' },
      {
        info: 'Jest와 React Testing Library를 사용하여 테스트 주도 개발(TDD)을 실천하고 있으며, 신뢰성 있는 애플리케이션을 개발하기 위한 역량을 키워가고 있습니다.',
      },
      {
        info: '웹 접근성(Accessibility)과 시맨틱 마크업의 중요성을 인식하고 있습니다.',
      },
    ],
    skill_icons: [
      { src: `${prefix}/assets/skills/javaScript.png`, alt: 'JavaScript' },
      { src: `${prefix}/assets/skills/typescript.png`, alt: 'TypeScript' },
      { src: `${prefix}/assets/skills/react.png`, alt: 'React' },
      { src: `${prefix}/assets/skills/nextjs.png`, alt: 'Next.js' },
      { src: `${prefix}/assets/skills/vue.png`, alt: 'Vue.js' },
      { src: `${prefix}/assets/skills/jest.png`, alt: 'jest' },
      { src: `${prefix}/assets/skills/react-query.png`, alt: 'react-query' },
      { src: `${prefix}/assets/skills/storybook.png`, alt: 'storybook' },
    ],
  },
  {
    skill_name: 'Backend Development',
    skill_info: [
      {
        info: 'Express를 활용해 간단한 웹 서버와 RESTful API를 설계할 수 있는 기본적인 역량을 갖추고 있으며, 이를 더욱 발전시키기 위해 꾸준히 학습하고 있습니다.',
      },
      {
        info: 'RESTful API 설계와 구현에 대한 기초적인 이해를 바탕으로, 더 복잡하고 확장 가능한 API 설계를 목표로 노력하고 있습니다.',
      },
      {
        info: 'Firebase Authentication을 사용해 사용자 인증을 구현하고, 사용자 관리 및 권한 부여 시스템을 구축할 수 있습니다.',
      },
      {
        info: 'MongoDB를 사용하여 간단한 CRUD 작업을 수행할 수 있습니다.',
      },
    ],
    skill_icons: [
      { src: `${prefix}/assets/skills/express.png`, alt: 'Express' },
      { src: `${prefix}/assets/skills/firebase.png`, alt: 'Firebase' },
      { src: `${prefix}/assets/skills/mongo.png`, alt: 'mongodb' },
    ],
  },
  {
    skill_name: 'Workflow & Collaboration',
    skill_info: [
      {
        info: 'Git을 사용한 버전 관리와 협업 경험이 풍부하며, 특히 팀 프로젝트에서의 효율적인 워크플로우를 중요시합니다.',
      },
      {
        info: 'Slack과 Mattermost 등 비동기 커뮤니케이션 도구를 적극 활용할 수 있습니다.',
      },
      {
        info: 'Notion, Jira, Confluence 같은 협업 툴 사용에 익숙합니다.',
      },
      {
        info: '새로운 기술을 마주할 때마다 능동적으로 탐구하고 빠르게 학습해 업무에 적용합니다. 복잡한 경우도 있지만, 최대한 신속하게 활용하려고 노력합니다.',
      },
    ],
    skill_icons: [
      { src: `${prefix}/assets/skills/git.png`, alt: 'git' },
      { src: `${prefix}/assets/skills/slack.png`, alt: 'slack' },
      { src: `${prefix}/assets/skills/mattermost.png`, alt: 'mattermost' },
      { src: `${prefix}/assets/skills/jira.png`, alt: 'jira' },
      { src: `${prefix}/assets/skills/confluence.png`, alt: 'confluence' },
      { src: `${prefix}/assets/skills/notion.png`, alt: 'notion' },
    ],
  },
]

export default skill_data
