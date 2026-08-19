const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "김지훈 ❤️ 조선영의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/gallery/main.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/gallery/main.jpg",
    date: "2026년 11월 21일 토요일 16시 20분",
    venue: "창원 컨벤션센터"
  },

  // 소개글
  intro: {
    title: "Wedding Invitation",
    text: "함께 보낸 4년의 시간 동안 서로의 계절이 되어주던 우리가\n선선한 가을바람이 불어오는 이 좋은날,\n서로의 이름으로 평생을 약속하려 합니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 11,
    day: 21,
    hour: 16,
    minute: 20,
    displayDate: "2026.11.21 SAT PM 16:20",
  },

  // 장소 정보
  venue: {
    name: "창원컨벤션센터",
    address: "경상남도 창원시 성산구 원이대로 362",
    tel: "055-212-1000",
    naverMapId: "창원컨벤션센터", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 35.2386,
      longitude: 128.6568,
    },
    placeId: "13282579", // 네이버 지도 장소 ID
    mapZoom: "17.30", // 지도 줌 레벨
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      train: "창원 중앙역에서 220, 221번 버스",
      bus: "창원 종합터미널에서 103번 버스",
    },
    parking: "건물 주차장 이용 가능 (2시간 무료)",
  },

  // 갤러리
  gallery: {
    layout: "scroll" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image01.jpg",
      "/images/gallery/image02.jpg",
      "/images/gallery/image03.jpg",
      "/images/gallery/image04.jpg",
      "/images/gallery/image05.jpg",
      "/images/gallery/image06.jpg",
      "/images/gallery/image07.jpg",
      "/images/gallery/image08.jpg",
      "/images/gallery/image09.jpg",
      "/images/gallery/image10.jpg",
      "/images/gallery/image11.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "늘 귀한 마음으로 저희를 아껴주신\n고마운 분들께 감사의 마음을 담아 자리를 마련했습니다.\n\n새로운 인생을 펼쳐가는 시작의 자리에 오셔서\n아낌없는 격려와 축하를 더해 주시면\n두 사람에게 큰 힘이 되겠습니다.",
    groom: {
      name: "김지훈",
      label: "장남",
      father: "김성민",
      mother: "강민자",
    },
    bride: {
      name: "조선영",
      label: "장녀",
      father: "조복제",
      mother: "장명숙",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "은행명",
      number: "123-456-789012",
      phone: "010-3008-3172",
      holder: "김지훈",
    },
    bride: {
      bank: "신한은행",
      number: "110-456-207551",
      phone: "010-6417-0551",
      holder: "조선영",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      phone: "111-1111-1111",
      holder: "김성민",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      phone: "222-2222-2222",
      holder: "강민자",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      phone: "333-3333-3333",
      holder: "조복제",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      phone: "444-4444-4444",
      holder: "장명숙",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: true, // RSVP 섹션 표시 여부
    showMealOption: true, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
