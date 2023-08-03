const experience_data = [
  {
    id: 1,
    company: '스튜디오 브리즈.',
    period_date: '2023. 6 ~ 현재 (3개월 계약)',
    work: [{ info: '회사 내 게임 운영, 통계툴 어드민 개발' }, { info: '운영, 통계툴 매뉴얼 문서화' }],
  },
  {
    id: 2,
    company: '위시모바일.',
    period_date: '2021. 11 ~ 2023. 2',
    work: [
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
            NFT 마켓플레이스 (
            <a
              className="text-blue-600 hover:underline hover:underline-offset-4"
              href="https://creta.world/"
              target="_blank"
            >
              Creta
            </a>
            ) 외주 프로젝트 개발 성과 연 14억 매출 기여
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
              NEW SSEM
            </a>
            (서울 비대면 화상 수업) 개발 이슈 대응
          </span>
        ),
      },
      { info: 'React-Native로 3개의 프로젝트 프로토타입 제작' },
    ],
  },
]

export default experience_data
