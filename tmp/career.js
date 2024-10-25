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
        project_name: 'MY스코어 신규 개발 (앱 5.0 버전 리뉴얼)',
        project_period: '2024. 03 ~ 2024. 09',
        project_desc: '스코어 분석 기능을 구체화한 MY 골프 서비스',
        project_roles: `기존 Vue 폴더 구조 대신 FSD(Feature-Sliced Design) 패턴을 도입하여 개발과 설계를 진행했습니다. 이를 통해 기능별 모듈이 명확하게 분리되어 유지보수와 확장성이 개선되었으며, 팀 내 협업 효율성도 크게 향상되었습니다.\n\n또한, MY골프백, MY골프장, MY배지 등 6가지 주요 서비스 기능을 구현하여 골퍼들이 개인화된 경험을 누릴 수 있도록 다양한 기능을 제공했습니다. 내부 관리자 페이지도 설계 및 개발하여 데이터와 사용자 관리를 보다 효율적으로 처리할 수 있도록 하였고, 이를 통해 관리자가 업무를 신속하고 정확하게 수행할 수 있게 지원했습니다.`,
        project_achievements: `FSD(Feature-Sliced Design) 패턴 도입을 통해 코드베이스의 복잡성을 낮추고 신규 기능 추가 속도를 30% 이상 향상시켰습니다.\n\n이로 인해 개발 프로세스가 더 체계적으로 정리되어 기능 구현 및 배포 주기가 단축되었으며, 코드의 가독성 개선으로 버그 발생률도 크게 감소했습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/my-score-0.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-1.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-2.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-3.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-4.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-5.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-6.jpeg`,
          },
          {
            src: `${prefix}/assets/projects/my-score-7.jpeg`,
          },
        ],
        project_info: [
          {
            info: 'FSD 패턴을 도입, 기능 추가 속도 향상',
          },
          {
            info: 'MY 서비스 내부 관리자 페이지 설계 및 개발 개선',
          },
          {
            info: '새로운 팀원도 쉽게 이해하고, 협업을 위한 일관된 코드 스타일 일관성 유지',
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
        project_name: '큐박스 신규 개발 (앱 5.0 버전 리뉴얼)',
        project_period: '2024. 01 ~ 2024. 03',
        project_desc: '다양한 서비스에서 개인화된 광고 추천 서비스',
        project_roles: `큐박스라는 커스텀 공통 컴포넌트를 개발하여 다양한 서비스에서 각기 다른 광고를 효과적으로 노출할 수 있도록 설계했습니다. 이를 통해 광고 캠페인의 유연성이 크게 향상되었으며, 다양한 타겟층에 맞춘 메시지를 효과적으로 전달할 수 있었습니다.\n\n또한, 개발자들이 손쉽게 컴포넌트를 통합할 수 있도록 상세한 개발 가이드를 작성하여, 추가적인 교육 없이도 원활하게 사용할 수 있도록 지원했습니다.\n\n내부 관리자 페이지에서는 광고 캠페인의 요구사항에 맞춰 손쉽게 커스터마이징할 수 있는 기능을 설계하고 개발하였으며, 이를 통해 관리자가 다양한 광고 캠페인 요구사항에 유연하게 대응할 수 있도록 했습니다. 결과적으로 이 컴포넌트는 20개 이상의 서비스에 성공적으로 적용되었습니다.`,
        project_achievements: `큐박스 컴포넌트 도입을 통해 20개 이상의 서비스에서 광고 노출이 효과적으로 이루어지면서, 광고 캠페인의 유연성이 증가해 광고 클릭률이 상승했습니다.\n또한, 명확한 개발 가이드 덕분에 기술 지원 요청이 80% 이상 감소하여, 개발 팀의 업무 부담을 크게 줄였습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/qbox-0.png`,
          },
          {
            src: `${prefix}/assets/projects/qbox-1.png`,
          },
        ],
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
        project_roles: `기존 Vue WebView 기반 프로젝트에 외부 라이브커머스 솔루션을 성공적으로 통합하여 API 연동과 사용자 인터페이스 개선을 주도했습니다. 실시간 스트리밍 환경을 최적화함으로써 사용자에게 원활한 라이브커머스 경험을 제공했으며, 도입 과정 전반을 문서화하여 유지보수와 확장을 용이하게 했습니다.`,
        project_achievements: `라이브커머스 솔루션 도입으로 재고가 남은 제품을 파격 세일로 판매해 매출을 증대시키고, 매진 사례를 이끌어냈습니다. 실시간 소통을 통해 핵심 고객층을 확보하며 브랜드 인지도를 높였고, 이를 통해 고객 참여율을 크게 향상시켰습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/live-commerce-0.png`,
          },
        ],
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
        project_desc: '기존 모놀리식 레거시 시스템을 마이크로 프론트엔드 구조 전환',
        project_roles: `마이크로프론트엔드 POC(Proof of Concept) 도입을 주도하며, 기존의 방대한 코드베이스를 분석했습니다. 340만 줄 이상의 JavaScript 코드와 4,300개 이상의 Vue 파일을 분석하여 마이크로프론트엔드 아키텍처에 맞게 모듈과 컴포넌트를 식별하고 분리 가능한 부분을 정의했습니다.\n\n또한, 마이크로프론트엔드 아키텍처 도입에 필요한 기술들을 숙지하고, 기존 모놀리식 아키텍처와의 차이점을 명확히 문서화하여 사내 프론트엔드 개발자들에게 공유했습니다.`,
        project_achievements: `마이크로프론트엔드 POC 버전을 도입하고, 필요한 기술과 폴더 구조를 정리한 레포지토리를 GitLab에 배포하여 사내 프론트엔드 개발자들의 관심을 이끌어냈습니다. 이를 통해 새로운 아키텍처에 대한 이해도와 기술 습득을 촉진했습니다.`,
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
        project_roles: `게임 퍼블리셔의 기능 요구 사항을 도출하고 화면 설계를 주도했습니다. 사내 유일한 프론트엔드 개발자로서, React, TypeScript, TailwindCSS, Redux Toolkit을 활용해 어드민 툴 개발을 전담했습니다.\n\n프로젝트 초기에는 JavaScript로 기능을 신속하게 구현한 후, TypeScript로 마이그레이션하여 코드의 안정성을 높이고 유지보수를 용이하게 했습니다.\n\n그 외에도 사용자 역할에 따른 페이지 접근 제한 기능을 구현하였으며, React.lazy를 활용해 필요한 컴포넌트만 로드되도록 코드 스플리팅을 적용했습니다. 또한, Redux Toolkit을 사용해 효율적인 글로벌 상태 관리를 구현하고, Jenkins를 통해 QA, DEV, PROD 환경을 위한 CI/CD 파이프라인을 구축하여 개발과 배포 프로세스를 최적화했습니다.`,
        project_achievements: `JavaScript로 신속하게 기능을 구현하여 프로젝트의 초기 마일스톤을 성공적으로 달성했습니다. 이후 TypeScript로 전환하여 코드의 안정성과 유지보수성을 강화하였으며, 장기적인 개발 효율성을 확보했습니다.\n\nJenkins를 활용한 CI/CD 파이프라인을 구축하여 개발과 배포 프로세스를 체계화했습니다. 이를 통해 짧은 기간 동안 게임 퍼블리셔와 협력하여 성공적인 솔루션을 제공함으로써 향후 추가적인 게임 운영 프로젝트 사업 확장의 발판을 마련했습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/dark-slayer-0.png`,
          },
          {
            src: `${prefix}/assets/projects/dark-slayer-1.png`,
          },
          {
            src: `${prefix}/assets/projects/dark-slayer-2.png`,
          },
          {
            src: `${prefix}/assets/projects/dark-slayer-3.png`,
          },
        ],
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
        project_roles: `React Native를 활용하여 Android와 iOS 플랫폼을 동시에 개발하며, 크로스플랫폼의 복잡성을 해결하고 성능 최적화에 주력했습니다. Figma UI 가이드를 기반으로 Styled-components를 사용해 다크/화이트 모드와 같은 동적 테마 지원을 구현하였으며, 효율적인 스타일 관리로 사용자 경험을 개선했습니다.\n\n또한, 보안성을 강화하기 위해 사용자 역할에 따른 접근 제한 기능을 도입하였고, Recoil을 활용해 안정적이고 일관된 글로벌 상태 관리를 구현했습니다. 인도네시아어, 영어, 한국어 등 다양한 언어를 지원하여 글로벌 사용자층의 요구를 충족시키는 애플리케이션을 성공적으로 구축했습니다.`,
        project_achievements: `비록 애플리케이션은 최종 배포되지 않았지만, React Native를 활용한 첫 프로토타입 개발을 통해 Android와 iOS 플랫폼에서의 동시 개발 가능성을 성공적으로 검증했습니다. 다국어 지원과 다크/화이트 모드 구현으로 글로벌 사용자 경험 개선의 기반을 마련하였으며, Recoil을 활용하여 효율적인 상태 관리를 구현했습니다.\n\n이번 프로젝트를 통해 새로운 기술을 빠르게 습득하고 React Native의 잠재력을 확인할 수 있었습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/star-light-0.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-1.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-2.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-3.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-4.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-5.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-6.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-7.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-8.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-9.jpg`,
          },
          {
            src: `${prefix}/assets/projects/star-light-10.jpg`,
          },
        ],
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
        project_roles: `Tailwind로 UI를 구현하고 Web3.js를 활용해 NFT 판매 웹사이트를 구축하였습니다. React와 Next.js를 처음 접하면서 지속적으로 학습하며 프론트엔드 로직과 UI/UX를 설계하고 개발했습니다.\n\n블록체인과의 통신을 구현하면서 Web3 기술에 대한 이해를 심화하였고, Go로 개발된 백엔드 프로토콜과 RESTful API를 통해 클라이언트 통신을 원활하게 처리했습니다. 또한, Redux를 활용하여 글로벌 상태 관리를 효율적으로 수행하고, 코드 복잡도를 개선함으로써 성능을 향상시켰습니다.\n\n또한, NFT 민팅 시 발생하는 가스비 오류를 해결하기 위해 다양한 민팅 테스트 케이스를 분석했습니다. 엑셀을 활용하여 최적의 가스 양과 거래 시간을 기록 및 분석하여 효율적인 트랜잭션을 지원했습니다.`,
        project_achievements: `Next.js를 활용하여 프론트엔드 로직과 UI/UX 개발에 대한 기술적 이해를 깊이 있게 확장했으며, 서버 사이드 렌더링(SSR)을 통해 Web3를 이용한 블록체인 통신을 안정적으로 구현했습니다. NFT 민팅 시 최적의 가스 양과 거래 시간을 분석하여 트랜잭션을 최적화함으로써, 모든 NFT 품목의 매진과 14억 원의 영업이익을 달성하는 데 기여했습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/creta-0.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-1.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-2.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-3.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-4.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-5.jpg`,
          },
          {
            src: `${prefix}/assets/projects/creta-6.jpg`,
          },
        ],
        project_info: [
          {
            info: 'Tailwind로 UI를 구현하고 Web3.js를 활용해 NFT 판매 웹사이트 구축',
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
        project_roles: `처음으로 프론트엔드 개발을 담당하며, Spring 기반의 서버와 연동된 UI 프레임워크 고도화 작업에 참여했습니다. QA 테스트를 통해 발견된 개발 이슈를 신속하게 대응하고, Spring 서버와의 통신 오류를 해결하며 송출 전 안정화 작업을 수행했습니다. 이 과정에서 서버와의 연동 및 프론트엔드와 백엔드 간의 데이터 흐름에 대한 이해를 높이고, 프로젝트의 안정성을 향상시키는 데 기여했습니다.`,
        project_achievements: `Vue.js를 처음 사용하면서도 QA 테스트 중 발생한 이슈들을 해결하며 프로젝트 안정화에 기여했습니다. UI 프레임워크 고도화 작업을 통해 사용자 경험을 개선하고 서비스의 신뢰성을 높이는 데 중요한 역할을 했습니다. 이 과정에서 서버와의 통신 및 데이터 흐름에 대한 이해를 깊게 하여 프론트엔드 개발 능력을 확장할 수 있었습니다.`,
        project_images: [
          {
            src: `${prefix}/assets/projects/new-ssem-0.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-1.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-2.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-3.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-4.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-5.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-6.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-7.png`,
          },
          {
            src: `${prefix}/assets/projects/new-ssem-8.png`,
          },
        ],
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
