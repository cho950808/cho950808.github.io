import PerfumeThum from '../public/assets/projects/perfume_thum.jpg'
import NewSsemThum from '../public/assets/projects/new_ssem_thum.png'
import Creta_Thum from '../public/assets/projects/creta_thum.jpg'
import StarLightThum from '../public/assets/projects/starlight_thum.jpg'

const project_data = [
  {
    id: 1,
    project_route: 'darkSlayer',
    project_name: '다크 슬레이어(모바일 게임) - 운영, 통계 어드민 툴',
    project_period: '2023. 6 ~ 현재',
    project_desc: '다크 슬레이어:방치형 RPG(8월 말 소프트 런칭)',
    project_thum: StarLightThum,
    project_image: [],
    project_info: [
      {
        info: '게임 퍼블리셔(게임을 판매와 유통하는 회사) 기능 요구 사항 도출 및 화면 설계',
      },
      {
        info: 'React.lazy를 활용해 필요한 컴포넌트만 로드할 수 있도록 코드 스플리팅 구현',
      },
      {
        info: '사용자 역할에 따른 페이지 접근 제한 기능 구현',
      },
      {
        info: 'RTK(Redux-Toolkit)를 이용한 glabal-state 관리',
      },
      {
        info: '메모이제이션(useCallback, useMemo)을 사용하여 불필요한 렌더링 방지 및 성능 향상',
      },
      {
        info: 'Js(Javascript)에서 Ts(Typescript)로 마이그레이션',
      },
      {
        info: '개발 환경 구축 (QA, Dev, Prod) 및 GitLab 자동 배포 도입',
      },
    ],
    project_tech: [
      {
        tech: 'React',
      },
      {
        tech: 'Tailwind CSS',
      },
      {
        tech: 'TypeScript',
      },
      {
        tech: 'Redux Toolkit',
      },
    ],
  },
  {
    id: 2,
    project_route: 'starLight',
    project_name: 'StarLight',
    project_period: '2022. 12 ~ 2023. 2',
    project_desc: 'K-POP 아티스트 또는 아이돌을 투표하여 리워드 보상을 해주는 서비스',
    project_thum: StarLightThum,
    project_image: [],
    project_info: [
      {
        info: 'Android, IOS 동시 개발 진행',
      },
      {
        info: '피그마 UI 가이드를 통한 Styled-components로 전체 UI/UX 개발',
      },
      {
        info: 'Recoil을 이용한 Glabal-State 관리',
      },
      {
        info: '다국어(인도네시아, 영어, 한국어) 및 다크/화이트 모드 제공',
      },
      {
        info: 'SNS 로그인 (페이스북, 구글) 구현',
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
    id: 3,
    project_route: 'creta',
    project_name: 'Creta',
    project_period: '2022. 4 ~ 2022. 11',
    project_desc: 'MetaMask 지갑을 이용한 NFT 판매 웹사이트 (Polygon)',
    project_thum: Creta_Thum,
    project_image: [],
    project_info: [
      {
        info: 'NFT 민팅 시 케이스 별로 작성하여 가스비 오류 해결 (최적의 가스 양 책정)',
      },
      {
        info: '서비스 개발 및 운영 이슈 대응',
      },
      {
        info: 'Go로 개발된 프로토콜로 클라이언트 개발',
      },
      {
        info: 'Front단 로직 및 UI/UX 적용 개발',
      },
      {
        info: 'Redux를 이용한 Glabal-State 관리',
      },
      {
        info: '구글 애널리틱스(Google Analytics)를 적용해 이벤트와 행동 데이터 수집',
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
    project_period: '2021. 11 ~ 2022. 3',
    project_desc: '서울 비대면 온라인 교육플랫폼, 화상 수업 웹사이트',
    project_thum: NewSsemThum,
    project_image: [],
    project_info: [
      {
        info: 'QA테스트를 통한 이슈 대응 및 송출 전 안정화 작업',
      },
      {
        info: 'UI Framework 고도화',
      },
      {
        info: '공공SI 단계별 산출물 작성 (화면설계서, 기능명세서, 테이블정의서, 매뉴얼 등)',
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
  {
    id: 5,
    project_route: 'perfumeShop',
    project_name: 'Perfume Shop',
    project_period: '2021. 6 ~ 2021. 8',
    project_desc: '브랜드별 향수 쇼핑몰 웹사이트',
    project_thum: PerfumeThum,
    project_image: [],
    project_info: [
      {
        info: '관리자 페이지 Bootstrap 적용',
      },
      {
        info: '회원가입, 아이디/비밀번호 찾기 기능 구현',
      },
      {
        info: 'Q&A, 상품 리스트 검색 기능 구현',
      },
      {
        info: '전체 게시판 페이징 처리',
      },
      {
        info: '카카오 지도 API 적용',
      },
    ],
    project_tech: [
      {
        tech: 'Spring Framework',
      },
      {
        tech: 'JQuery',
      },
      {
        tech: 'Oracle',
      },
    ],
  },
]

export default project_data
