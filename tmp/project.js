import PerfumeThum from '../public/assets/projects/perfume_thum.jpg'
import NewSsemThum from '../public/assets/projects/new_ssem_thum.png'
import Creta_Thum from '../public/assets/projects/creta_thum.jpg'
import StarLightThum from '../public/assets/projects/starlight_thum.jpg'

const project_data = [
  {
    id: 1,
    project_route: 'starLight',
    project_name: '다크 슬레이어(모바일 게임) - 운영툴, 통계툴',
    project_period: '2023. 6 ~ 2023. 8',
    project_desc: '다크 슬레이어(8월 말 오픈 예정) 게임 내 운영, 통계툴 어드민',
    project_thum: StarLightThum,
    project_image: [],
    project_info: [
      {
        info: '가이드(매뉴얼) 작성 및 문서화',
      },
      {
        info: '게임 퍼블리셔(게임을 판매와 유통하는 회사) 기능 요구 사항 맞춤 구현',
      },
      {
        info: 'Redux Toolkit을 이용한 Glabal-State 관리',
      },
      {
        info: 'Go로 개발된 프로토콜로 클라이언트 개발',
      },
      {
        info: 'TypeScript 도입',
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
        info: 'React Native로 Android, IOS 동시 개발 진행',
      },
      {
        info: '피그마 UI 가이드를 통한 Styled-components로 전체 UI/UX 개발',
      },
      {
        info: '효율적인 협업을 위해 업무 가이드 문서 작성',
      },
      {
        info: 'Recoil을 이용한 Glabal-State 관리',
      },
      {
        info: 'API 프로토콜이 정리된 Swagger를 보고 클라이언트 개발',
      },
      {
        info: '다국어 및 다크/화이트 모드 제공',
      },
    ],
    project_tech: [
      {
        tech: 'React Native',
      },
      {
        tech: 'Styled-components',
      },
      {
        tech: 'Recoil',
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
        info: 'NFT 민팅 가스비 이슈 해결',
      },
      {
        info: '거래 테스트 시 케이스 별로 문서화 (최적의 가스 양 책정)',
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
    ],
    project_tech: [
      {
        tech: 'Next JS',
      },
      {
        tech: 'Tailwind CSS',
      },
      {
        tech: 'Web3',
      },
      {
        tech: 'Framer-motion',
      },
      {
        tech: 'Redux',
      },
    ],
  },
  {
    id: 4,
    project_route: 'newSsem',
    project_name: 'new SSEM',
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
    ],
    project_tech: [
      {
        tech: 'Spring framework',
      },
      {
        tech: 'Vue',
      },
      {
        tech: 'Jquery',
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
        tech: 'Spring framework',
      },
      {
        tech: 'Jquery',
      },
      {
        tech: 'Oracle',
      },
    ],
  },
]

export default project_data
