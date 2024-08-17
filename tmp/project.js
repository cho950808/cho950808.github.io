import PerfumeThum from '../public/assets/projects/perfume_thum.jpg'
import NewSsemThum from '../public/assets/projects/new_ssem_thum.png'
import CretaThum from '../public/assets/projects/creta_thum.jpg'
import StarLightThum from '../public/assets/projects/starlight_thum.jpg'

const project_data = [
  {
    id: 1,
    project_route: 'darkSlayer',
    project_name: '다크 슬레이어(모바일 게임) - 운영, 통계 어드민 툴',
    project_period: '2023. 06 ~ 2023. 09',
    project_desc: '다크 슬레이어 : 방치형 RPG',
    project_thum: StarLightThum,
    project_image: [],
    project_info: [
      {
        info: '50개 이상의 기능 요구사항 도출 및 화면 설계서 기반 검증',
      },
      {
        info: '사용자 역할에 따른 페이지 접근 제한 기능 구현으로 보안 수준 향상',
      },
      {
        info: 'RTK(Redux-Toolkit)로 전역 상태 관리 최적화, 코드 복잡도 20% 감소',
      },
      {
        info: '메모이제이션(useCallback, useMemo)을 사용하여 불필요한 렌더링을 줄여 성능 15% 개선',
      },
      {
        info: '초기 JavaScript로 빠르게 개발 시작, 프로젝트 요구사항 변화에 따라 중반부에 TypeScript로 성공적으로 전환하여 안정성과 유지보수성을 확보',
      },
      {
        info: 'QA, Dev, Prod 환경을 체계적으로 구축하여 각 환경에서의 배포와 테스트 과정을 원활하게 수행',
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
  // {
  //   id: 2,
  //   project_route: 'starLight',
  //   project_name: 'StarLight',
  //   project_period: '2022. 12 ~ 2023. 02',
  //   project_desc: 'K-POP 아티스트 또는 아이돌을 투표하여 리워드 보상을 해주는 서비스',
  //   project_thum: StarLightThum,
  //   project_image: [],
  //   project_info: [
  //     {
  //       info: 'Android, IOS 동시 개발 진행',
  //     },
  //     {
  //       info: '피그마 UI 가이드를 통한 Styled-components로 전체 UI/UX 개발',
  //     },
  //     {
  //       info: 'Recoil을 이용한 Glabal-State 관리',
  //     },
  //     {
  //       info: '다국어(인도네시아, 영어, 한국어) 및 테마 모드와 기능 구현',
  //     },
  //     {
  //       info: 'SNS 로그인 (페이스북, 구글) 구현',
  //     },
  //     {
  //       info: 'FCM(Firebase Cloud Messaging)을 통해 모바일 푸시 알림을 구현',
  //     },
  //   ],
  //   project_tech: [
  //     {
  //       tech: 'React Native',
  //     },
  //     {
  //       tech: 'Recoil',
  //     },
  //     {
  //       tech: 'Styled-components',
  //     },
  //   ],
  // },
  {
    id: 3,
    project_route: 'creta',
    project_name: 'Creta',
    project_period: '2022. 04 ~ 2022. 11',
    project_desc: 'MetaMask 지갑을 이용한 NFT 판매 웹사이트 (Polygon)',
    project_thum: CretaThum,
    project_image: [],
    project_info: [
      {
        info: 'Go로 개발된 백엔드 프로토콜과 연동되는 프론트엔드 클라이언트 구축',
      },
      {
        info: '사용자 경험 최적화를 위한 UI/UX 개선 작업 주도',
      },
      {
        info: 'Redux로 상태 관리 최적화, 코드 복잡도 30% 및 시간 20% 절감',
      },
      {
        info: '케이스별 가스비 최적화로 15% 절감 및 오류 발생률 30% 감소',
      },
      {
        info: 'Google Analytics를 적용해 이벤트와 행동 데이터 분석을 통해 핵심 기능 사용률 30% 증가',
      },
      {
        info: '주간 배포 버그를 24시간 내 해결, 운영 효율성 20% 향상',
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
    project_thum: NewSsemThum,
    project_image: [],
    project_info: [
      {
        info: 'QA 테스트를 통해 50건 이상의 이슈를 해결하고, 송출 전 안정화 작업으로 버그 발생률 감소',
      },
      {
        info: 'UI Framework 고도화 작업을 통해 렌더링 속도, 코드 유지보수성 25% 증가',
      },
      {
        info: '30개 이상의 산출물(화면설계서, 기능명세서, 테이블정의서, 매뉴얼 등)을 작성하여, 프로젝트 일정 내 100% 제출 완료',
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
]

export default project_data
