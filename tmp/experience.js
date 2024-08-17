const experience_data = [
  {
    id: 1,
    company: '스마트스코어.',
    period_date: '2023. 9 ~ 현재',
    work: [
      {
        info: '4개 이상의 골프 관련 앱 프로젝트에서 개발팀과 유기적으로 협력하여, 요구사항 구현부터 최종 릴리스까지 모든 단계를 성공적으로 완료',
      },
      {
        info: '총 340만 줄 JS 코드와 4,300개 이상의 Vue 파일을 포함한 대형 프로젝트에서, 프로젝트 규모에 맞춘 모듈화 및 효율적인 코드 구조 설계로 유지보수와 확장성을 극대화',
      },
      {
        info: '기존 대용량 프로젝트 구조에서 Feature-Sliced Design을 도입하여 모듈화 및 코드 재사용성 30% 향상, 유지보수 시간 20% 단축',
      },
      { info: '체계적인 프론트엔드 문서화 시스템 구축, 팀 내 코드 이해도 및 유지보수 효율성 60% 향상' },
    ],
  },
  {
    id: 2,
    company: '스튜디오 브리즈.',
    period_date: '2023. 06 ~ 2023. 09',
    work: [
      {
        info: '커스텀 통계툴 어드민 시스템을 설계하고 개발하여 실시간 데이터 분석과 운영 관리로 의사결정의 효율성과 정확성을 크게 향상',
      },
      {
        info: '실시간으로 게임 내 이벤트를 관리하고 조정할 수 있는 도구를 개발하여 이벤트 처리 속도 개선',
      },
      { info: '다양한 채널에서 수집된 사용자 피드백을 통합 관리하는 시스템을 구축' },
    ],
  },
  {
    id: 3,
    company: '위시모바일.',
    period_date: '2021. 11 ~ 2023. 2',
    work: [
      {
        info: (
          <span>
            <a
              className="text-blue-600 hover:underline hover:underline-offset-4"
              href="https://creta.world/"
              target="_blank"
            >
              Creta&nbsp;
            </a>
            (NFT 마켓 플레이스) 외주 프로젝트 개발 성과 연 <span className="text-red-500 font-bold">14억</span> 매출
            기여
          </span>
        ),
      },
      {
        info: (
          <span>
            구글 스토어 50만 다운로드 &nbsp;
            <a
              className="text-blue-600 hover:underline hover:underline-offset-4"
              href="https://play.google.com/store/apps/details?id=com.wishM.readitjoy&hl=ko&gl=US"
              target="_blank"
            >
              Mera Play
            </a>
            &nbsp;유지보수
          </span>
        ),
      },
      {
        info: (
          <span>
            <a
              className="text-blue-600 hover:underline hover:underline-offset-4"
              href="https://new.ssem.or.kr/"
              target="_blank"
            >
              New SSEM
            </a>
            (서울 비대면 화상 수업) 개발 이슈 대응
          </span>
        ),
      },
    ],
  },
]

export default experience_data
