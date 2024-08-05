const experience_data = [
  {
    id: 1,
    company: '스마트스코어.',
    period_date: '2023. 9 ~ 현재',
    work: [
      { info: '5명의 개발팀과 협업하여 4개 이상의 골프 관련 앱 프로젝트 성공적으로 완료' },
      { info: '총 53,000줄 이상의 코드 작성 및 최적화' },
      { info: '체계적인 프론트엔드 문서화 시스템 구축, 팀 내 코드 이해도 및 유지보수 효율성 40% 향상' },
      {
        info: '기존 대용량 프로젝트 구조에서 Feature-Sliced Design을 도입하여 모듈화 및 코드 재사용성 30% 향상, 유지보수 시간 20% 단축',
      },
      {
        info: '사용자 행동 분석을 통해 주요 기능 사용률 15% 증가',
      },
    ],
  },
  {
    id: 2,
    company: '스튜디오 브리즈. (작성 진행중)',
    period_date: '2023. 06 ~ 2023. 09',
    work: [{ info: '회사 내 게임 운영, 통계툴 어드민 개발' }, { info: '운영, 통계툴 매뉴얼 문서화' }],
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
