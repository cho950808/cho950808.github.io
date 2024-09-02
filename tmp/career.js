import SmartScoreLogo from '../public/assets/company/smart-score.png'
import StudioBreezeLogo from '../public/assets/company/studio-breeze.png'
import WishMobileLogo from '../public/assets/company/wish-mobile.png'
import NewSsemThum from '../public/assets/projects/new_ssem_thum.png'
import CretaThum from '../public/assets/projects/creta_thum.jpg'
import StarLightThum from '../public/assets/projects/starlight_thum.jpg'

const career_data = [
  {
    id: 1,
    company: '스마트스코어',
    company_logo: SmartScoreLogo,
    period_date: '(2023. 9 ~ 재직중)',
    work: [
      {
        project_route: 'myScore',
        project_name: 'MY스코어 신규 개발 (앱 5.0 버전 및 리뉴얼)',
        project_period: '2024. 03 ~ 2024. 09',
        project_desc: '스코어 분석 기능을 구체화한 MY 골프 서비스',
        project_info: [
          {
            info: 'FSD 패턴 도입 및 프론트엔드 아키텍처 최적화로 개발 효율성 증대',
          },
          {
            info: 'MY골프백, MY골프장, MY배지 등 6개의 핵심 서비스 기능 설계 및 구현',
          },
          {
            info: '내부 관리자 페이지 설계 및 개발로 데이터 관리와 사용자 관리 효율성 향상',
          },
          {
            info: 'FSD 패턴을 통한 코드 복잡성 감소와 기능 추가 속도 30% 향상',
          },
          {
            info: '코드 가독성 개선과 버그 발생률 감소로 서비스 안정성 강화',
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
        project_desc: '다양한 서비스에서 초개인화된 광고 추천 서비스',
        project_info: [
          {
            info: '큐박스 커스텀 광고 컴포넌트 개발, 다양한 서비스에서 효과적인 광고 노출 지원',
          },
          {
            info: '광고 캠페인 유연성 증대 및 타겟 메시지 전달 최적화',
          },
          {
            info: '개발 가이드 작성으로 컴포넌트 통합 지원 및 사용자 경험 개선',
          },
          {
            info: '내부 관리자 페이지에서 커스터마이징 기능 설계, 광고 요구 사항 대응 강화',
          },
          {
            info: '20개 이상의 서비스에 성공적 적용, 추가 문의 및 교육 없이 효과적 활용',
          },
          {
            info: '광고 클릭률 18% 증가, 기술 지원 요청 80% 감소로 개발 팀 업무 부담 감소',
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
            info: 'Vue WebView 프로젝트에 라이브커머스 솔루션 통합 및 API 연동, UI 개선 주도',
          },
          {
            info: '실시간 스트리밍 최적화로 원활한 라이브커머스 경험 제공',
          },
          {
            info: '도입 과정 문서화로 유지보수 및 확장 용이',
          },
          {
            info: '라이브커머스로 재고 세일 판매 촉진, 매출 상승 및 매진 사례 달성',
          },
          {
            info: '실시간 소통으로 핵심 고객층 확보 및 브랜드 인지도 상승',
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
        project_name: '마이크로프론트엔드 POC 버전 도입 및 개발 문서화',
        project_period: '2023. 09 ~ 2023. 12',
        project_desc: '',
        project_info: [
          {
            info: '마이크로프론트엔드 POC 도입 및 문서화, 340만 줄 이상의 JavaScript 코드와 4,300개 Vue 파일 분석',
          },
          {
            info: '모놀리식 아키텍처와의 차이점 정의 및 기술 문서화',
          },
          {
            info: '팀 내 기술 이해도 향상을 위한 문서 공유 및 교육',
          },
          {
            info: 'POC 버전 도입 및 GitLab에 폴더 구조와 기술 레포지토리 배포',
          },
          {
            info: '프론트엔드 개발자들의 기술 이해도 및 관심 유도',
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
    company_logo: StudioBreezeLogo,
    period_date: '(2023. 06 ~ 2023. 09)',
    work: [
      {
        id: 1,
        project_route: 'darkSlayer',
        project_name: '다크 슬레이어:방치형 RPG 어드민 툴 제작',
        project_period: '2023. 06 ~ 2023. 09',
        project_desc: '액션 방치형 RPG 모바일 게임 운영, 통계 어드민',
        project_thum: StarLightThum,
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
    ],
  },
  {
    id: 3,
    company: '위시모바일',
    company_logo: WishMobileLogo,
    period_date: '(2021. 11 ~ 2023. 02)',
    work: [
      {
        project_route: 'starLight',
        project_name: 'StarLight',
        project_period: '2022. 12 ~ 2023. 02',
        project_desc: 'K-POP 아티스트 또는 아이돌을 투표하여 리워드 보상을 해주는 서비스',
        project_thum: StarLightThum,
        project_info: [
          {
            info: 'React Native를 활용한 Android/iOS 크로스플랫폼 개발 및 성능 최적화',
          },
          {
            info: 'Figma UI 가이드 기반 Styled-components로 다크/화이트 모드 구현 및 스타일 관리',
          },
          {
            info: '사용자 역할에 따른 접근 제한 기능 도입 및 Recoil로 Global-State 관리',
          },
          {
            info: '인도네시아어, 영어, 한국어 지원으로 글로벌 사용자 요구 충족',
          },
          {
            info: 'React Native 프로토타입 개발로 크로스플랫폼 동시 개발 가능성 검증 및 글로벌 사용자 경험 개선 기반 마련',
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
        project_thum: CretaThum,
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
    ],
  },
]

export default career_data
