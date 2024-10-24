import { prefix } from '../config'

const career_data = [
  {
    id: 1,
    company: '스마트스코어',
    company_logo: `${prefix}/assets/company/smart-score.png`,
    company_description: 'No.1 골프 포털 플랫폼으로 골프산업과 관련된 서비스를 제공하는 IT 플랫폼 기업',
    period_date: '(2023. 09 ~ 2024. 09)',
    work: [
      {
        project_route: 'myScore',
        project_name: 'MY스코어 신규 개발 (앱 5.0 버전 및 리뉴얼)',
        project_period: '2024. 03 ~ 2024. 09',
        project_desc: '스코어 분석 기능을 구체화한 MY 골프 서비스',
        project_info: [
          {
            info: 'FSD 패턴을 도입, 기능 추가 속도 향상',
          },
          {
            info: 'MY 서비스 내부 관리자 페이지 설계 및 개발 개선',
          },
          {
            info: '새로운 팀원도 쉽게 이해하고 협업을 위한 일관된 코드 스타일 가이드로 코드 일관성을 유지 및 향상',
          },
          {
            info: 'Highcharts, Chart.js를 활용해 데이터 시각화',
          },
        ],
        project_tech: [
          {
            tech: 'Vue.js',
          },
          {
            tech: 'Vuex',
          },
          {
            tech: 'Highcharts',
          },
        ],
      },
      {
        project_route: 'QBox',
        project_name: '큐박스 신규 개발 (앱 5.0 버전 및 리뉴얼)',
        project_period: '2024. 01 ~ 2024. 03',
        project_desc: '다양한 서비스에서 개인화된 광고 추천 서비스',
        project_info: [
          {
            info: '20개 이상의 서비스 개인 광고를 노출하기 위한 공통 컴포넌트 개발',
          },
          {
            info: '공통 컴포넌트 개발 적용 가이드 제공, 추가 교육 없이도 컴포넌트를 활용할 수 있도록 지원',
          },
          {
            info: '내부 관리자 페이지에서 커스터마이징 기능 설계 및 개발',
          },
        ],
        project_tech: [
          {
            tech: 'Vue.js',
          },
          {
            tech: 'Vuex',
          },
        ],
      },
      {
        project_route: 'shopLive',
        project_name: '외부 라이브커머스 솔루션 도입',
        project_period: '2023. 12 ~ 2024. 01',
        project_desc: '실시간 스트리밍 서비스',
        project_info: [
          {
            info: 'Vue WebView 프로젝트에 실시간 스트리밍 라이브커머스 솔루션 통합',
          },
          {
            info: '도입 과정 문서화로 유지보수 및 확장',
          },
        ],
        project_tech: [
          {
            tech: 'Vue.js',
          },
          {
            tech: 'Vuex',
          },
          {
            tech: 'Hls.js',
          },
        ],
      },
      {
        project_route: 'microFrontend',
        project_name: '마이크로 프론트엔드 POC 버전 도입 및 개발 문서화',
        project_period: '2023. 09 ~ 2023. 12',
        project_desc: '',
        project_info: [
          {
            info: '340만 줄 이상의 JavaScript 코드와 4,300개의 Vue 파일 분석, POC 도입',
          },
          {
            info: '모놀리식 아키텍처와의 차이점 문서화 작업, 팀 내 기술 공유를 통해 기술 이해도 향상',
          },
          {
            info: '사내 GitLab 기술 레포지토리 배포, 프론트엔드 개발자들의 관심과 이해 유도',
          },
        ],
        project_tech: [
          {
            tech: 'Next.js',
          },
          {
            tech: 'React',
          },
          {
            tech: 'Vue.js',
          },
          {
            tech: 'Turborepo',
          },
          {
            tech: 'TypeScript',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    company: '스튜디오 브리즈',
    company_logo: `${prefix}/assets/company/studio-breeze.png`,
    company_description: `'다크 슬레이어:방치형 RPG' 글로벌 출시 및 AOS 인기 1위를 달성하며, 다양한 게임을 제작 중인 모바일 게임 기업`,
    period_date: '(2023. 06 ~ 2023. 09)',
    work: [
      {
        id: 1,
        project_route: 'darkSlayer',
        project_name: '다크 슬레이어:방치형 RPG 어드민 툴 제작',
        project_period: '2023. 06 ~ 2023. 09',
        project_desc: '액션 방치형 RPG 모바일 게임 운영, 통계 어드민',
        project_info: [
          {
            info: '화면 설계서 기반으로 50개 이상의 기능 요구사항 도출',
          },
          {
            info: '초기 JavaScript로 빠르게 개발 시작, 추후 TypeScript로 마이그레이션',
          },
          {
            info: '사용자 역할에 따른 페이지 접근 제한 기능 추가',
          },
          {
            info: '메모이제이션(useCallback, useMemo)을 사용하여 불필요한 렌더링 개선',
          },
          {
            info: 'Jenkins를 사용하여 CI/CD 파이프라인 구축 (QA, DEV, PROD 환경 자동화 배포)',
          },
        ],
        project_tech: [
          {
            tech: 'React',
          },
          {
            tech: 'TypeScript',
          },
          {
            tech: 'Redux Toolkit',
          },
          {
            tech: 'Tailwind CSS',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    company: '위시모바일',
    company_logo: `${prefix}/assets/company/wish-mobile.png`,
    company_description:
      '50만 이상 다운로드를 기록한 글로벌 콘텐츠인 MeraPlay 플랫폼과 모바일·엔터테인먼트 서비스를 제공하는 IT 플랫폼 기업',
    period_date: '(2021. 11 ~ 2023. 02)',
    work: [
      {
        project_route: 'starLight',
        project_name: 'StarLight (ProtoType)',
        project_period: '2022. 12 ~ 2023. 02',
        project_desc: 'K-POP 아티스트 또는 아이돌을 투표하여 리워드 보상을 해주는 서비스',
        project_info: [
          {
            info: 'React Native를 사용해 Android/iOS 크로스플랫폼 동시 개발',
          },
          {
            info: 'WebSocket을 사용하여 자동으로 업데이트되는 투표 결과 화면 실시간 제공',
          },
          {
            info: '다국어 (인도네시아어, 영어, 한국어), 다크/화이트 모드 제공',
          },
          {
            info: 'Recoil을 사용해 Global-State를 관리하며 역할에 따른 접근 제한 기능 제공',
          },
          {
            info: 'Styled Components를 활용한 컴포넌트 기반의 재사용 가능한 스타일링 구현',
          },
        ],
        project_tech: [
          {
            tech: 'React Native',
          },
          {
            tech: 'Recoil',
          },
          {
            tech: 'Styled-components',
          },
        ],
      },
      {
        project_route: 'creta',
        project_name: 'Creta (NFT 마켓 플레이스)',
        project_period: '2022. 04 ~ 2022. 11',
        project_desc: 'MetaMask 지갑을 이용한 NFT 판매 웹사이트 (Polygon)',
        project_info: [
          {
            info: 'Tailwind를 활용한 UI 구현 및 Next.js, Web3.js를 이용한 MetaMask 연동으로 NFT 판매 웹사이트 구축',
          },
          {
            info: 'Go로 개발된 백엔드 프로토콜과 RESTful API을 통해 통신하는 프론트엔드 클라이언트 구현',
          },
          {
            info: 'Redux를 활용해 전역 상태 관리를 최적화하고 코드 복잡도를 개선하여 성능 향상',
          },
          {
            info: '다양한 민팅 테스트 케이스를 통해 가스비 최적화 가격 책정, 비용 절감 효과 달성',
          },
        ],
        project_tech: [
          {
            tech: 'Next.js',
          },
          {
            tech: 'Web3.js',
          },
          {
            tech: 'Redux',
          },
          {
            tech: 'Tailwind CSS',
          },
          {
            tech: 'Framer-motion',
          },
        ],
      },
      {
        id: 4,
        project_route: 'newSsem',
        project_name: 'New SSEM',
        project_period: '2021. 11 ~ 2022. 03',
        project_desc: '서울 비대면 온라인 교육플랫폼, 화상 수업 웹사이트',
        project_image: [],
        project_info: [
          {
            info: '라이프사이클 훅(mounted, created)을 활용해 동적 데이터 로딩 및 UI 업데이트 구현',
          },
          {
            info: '컴포넌트 재사용성을 높여 코드 유지보수성 강화',
          },
          {
            info: 'Axios와 Vuex를 활용해 API 통신 로직 최적화로 네트워크 요청 감소 및 성능 개선',
          },
        ],
        project_tech: [
          {
            tech: 'Spring Framework',
          },
          {
            tech: 'Vue.js',
          },
          {
            tech: 'JQuery',
          },
        ],
      },
    ],
  },
]

export default career_data
