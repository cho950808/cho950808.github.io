import PerfumeThum from "../public/assets/projects/perfume_thum.jpg";
import NewSsemThum from "../public/assets/projects/new_ssem_thum.png";
import Creta_Thum from "../public/assets/projects/creta_thum.jpg";
import StarLightThum from "../public/assets/projects/starlight_thum.jpg";

const project_data = [
  // {
  //   id: 1,
  //   project_route: "icom",
  //   project_name: "Icom",
  //   project_period: "2023. 3 ~ 현재",
  //   project_desc: "icomicom",
  //   project_image: [],
  // },
  {
    id: 2,
    project_route: "starLight",
    project_name: "StarLight",
    project_period: "2022. 12 ~ 2023. 2",
    project_desc: "React-native로 K-POP",
    project_thum: StarLightThum,
    project_image: [],
    project_info: [
      {
        info: "React Native로 Android, IOS 동시 개발 진행",
      },
      {
        info: "Styled-components로 전체 UI/UX 개발",
      },
      {
        info: "효율적인 협업을 위해 업무 가이드 문서 작성",
      },
      {
        info: "Recoil을 이용한 Glabal-State 관리",
      },
      {
        info: "Swagger를 이용하여 해당 API를 가지고 클라이언트 개발",
      },
    ],
    project_tech: [
      {
        tech: "React Native",
      },
      {
        tech: "Styled-components",
      },
      {
        tech: "Javascript",
      },
      {
        tech: "Recoil",
      },
    ],
  },
  {
    id: 3,
    project_route: "creta",
    project_name: "Creta",
    project_period: "2022. 4 ~ 2022. 11",
    project_desc: "MetaMask 지갑을 이용한 NFT 판매 웹사이트",
    project_thum: Creta_Thum,
    project_image: [],
    project_info: [
      {
        info: "NFT 구매시 가스비 이슈 해결",
      },
      {
        info: "거래 테스트 시 케이스 별로 문서화 (최적의 가스 양 책정)",
      },
      {
        info: "Go로 개발된 서버의 API를 가지고 클라이언트 개발",
      },
      {
        info: "Front단 로직 및 UI/UX 적용 개발",
      },
      {
        info: "Redux를 이용한 Glabal-State 관리",
      },
    ],
    project_tech: [
      {
        tech: "Next",
      },
      {
        tech: "Javascript",
      },
      {
        tech: "TailWind",
      },
      {
        tech: "Web3",
      },
      {
        tech: "Framer-motion",
      },
      {
        tech: "Redux",
      },
    ],
  },
  {
    id: 4,
    project_route: "newSsem",
    project_name: "new SSEM",
    project_period: "2021. 11 ~ 2022. 3",
    project_desc: "서울 비대면 온라인 교육플랫폼, 화상 수업 웹사이트",
    project_thum: NewSsemThum,
    project_image: [],
    project_info: [
      {
        info: "전체적인 UI Framework 고도화",
      },
      {
        info: "QA테스트를 통한 이슈사항 관리 및 송출 전 안정화",
      },
    ],
    project_tech: [
      {
        tech: "Spring framework",
      },
      {
        tech: "Vue",
      },
      {
        tech: "Jquery",
      },
    ],
  },
  {
    id: 5,
    project_route: "perfumeShop",
    project_name: "Perfume Shop",
    project_period: "2021. 6 ~ 2021. 8",
    project_desc: "브랜드별 향수 쇼핑몰 웹사이트",
    project_thum: PerfumeThum,
    project_image: [],
    project_info: [
      {
        info: "관리자 페이지 Bootstrap 적용",
      },
      {
        info: "회원가입, 아이디/비밀번호 찾기 기능 구현",
      },
      {
        info: "Q&A, 상품 리스트 검색 기능 구현",
      },
      {
        info: "전체 게시판 페이징 처리",
      },
      {
        info: "카카오 지도 API 적용",
      },
    ],
    project_tech: [
      {
        tech: "Spring framework",
      },
      {
        tech: "Jquery",
      },
      {
        tech: "Oracle",
      },
    ],
  },
];

export default project_data;
