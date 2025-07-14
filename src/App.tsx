import { useState } from "react";
import "./App.css";
import { ArrowRight } from "lucide-react";
//🔥 무조건 레이아웃 먼저
//❌ 만들면서 레이아웃
//인라인 스타일 코드가 먼저 적용됨

//최대한 부모 요소에서 제한하고
//자식요소에서는 참조하는 방식으로
function App() {
  const [nav, setNav] = useState([
    { id: 1, isActive: true, label: "지금핫한", icon: "⚡️" },
    { id: 2, isActive: false, label: "실시간 랭킹", icon: "👑" },
    { id: 3, isActive: false, label: "오늘신작", icon: "🔔" },
    { id: 4, isActive: false, label: "이벤트", icon: "⭐️" },
    { id: 5, isActive: false, label: "남성인기", icon: "🏅" },
    { id: 6, isActive: false, label: "완결추천", icon: "🔯" },
    { id: 7, isActive: false, label: "완전판", icon: "🔥" },
    { id: 8, isActive: false, label: "여성인기", icon: "🏅" },
    { id: 9, isActive: false, label: "TV속 작품", icon: "🍿" },
    { id: 10, isActive: false, label: "브랜드", icon: "🌕" },
  ]);
  const handleNavButton = (label: string) => {
    //   map() : 새로운 배열을 반환
    //💡 forEach() : 단순 순회 (반환값 undefined )
    const newArr = nav.map(
      (item) =>
        item.label == label
          ? { ...item, isActive: true } //active 버튼
          : { ...item, isActive: false } // inActive 버튼
    ); //
    setNav(newArr);
  };
  return (
    <div className="page">
      {/* 헤더와 네비를 감싼 영역 */}
      <div className="page__fixed">
        {/* 헤더 영역 */}
        <header className="header">
          {/* 왼쪽 영역 */}
          <div className="header__aside">
            {/* 로고 영역 */}
            <div className="header__aside__logo">
              <img src="/kakaopage.svg" />
            </div>
            {/* 메뉴 영역 */}
            <div className="header__aside__menu">
              <a>추천</a>
              <a>웹툰</a>
              <a>웹소설</a>
              <a>책</a>
              <a>바로가기</a>
            </div>
          </div>
          {/* 오른쪽  */}
          <div className="header__aside">
            {/* 검색  */}
            <div className="header__aside__searchbar">
              <input placeholder="제목,작가를 입력하세요 " />
            </div>
            {/* 버튼  */}
            <div className="header__aside__btn-box">
              <button>
                <img src="/btn-1.svg" />
              </button>
              <button>
                <img src="/btn-2.svg" />
              </button>
              <button>
                <img src="/btn-3.svg" />
              </button>
            </div>
          </div>
        </header>
        {/* 버튼 네이게이션 영역 */}
        <nav className="nav">
          {nav.map((item) => (
            <button
              onClick={() => handleNavButton(item.label)}
              className={`nav__btn ${item.isActive ? "active" : ""}`}
              key={item.id}
            >
              <span>
                {item.isActive ? item.icon : ""}
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
      {/* 본문 영역 */}
      <div className="page__content">
        {/* 배너 */}
        <div className="page__content__banner">
          {/* 배너 안쪽 */}
          <div className="banner__image__flex-box">
            {/* 인라인 이미지 */}
            <img src="/clova.png" />
            {/* 텍스트 */}
            <span> #럭키위크#마지막 캐시 선물!</span>
          </div>
          {/* 인라인 버튼 */}
          <button className="page__content__banner__btn">
            <ArrowRight />
          </button>
        </div>
        {/* 스와이퍼 영역 */}
        <div className="swiper">
          {/* 카드 영역 */}
          <div className="swiper__item">
            {/* 이미지 */}
            <img src="/item-01.jpeg" />
            {/* 텍스트 박스 */}
            <p>
              남편이 회귀를 숨김 <br />
              그래서 나도 숨김
            </p>
          </div>
          <div className="swiper__item">
            <img src="/item-01.jpeg" />
            <p>
              남편이 회귀를 숨김 <br />
              그래서 나도 숨김
            </p>
          </div>
          <div className="swiper__item">
            <img src="/item-01.jpeg" />
            <p>
              남편이 회귀를 숨김 <br />
              그래서 나도 숨김
            </p>
          </div>
        </div>
        {/* 추천작 영역 */}
        <div className="recommend">
          {/* 카드 영역 */}
          <div className="recommend__card">
            {/* 이미지 박스 */}
            <div className="img-box">
              <img src="/card-01.jpeg" className="img-box__thumbnail" />
              <img src="/badge.svg" className="img-box__icon" />
            </div>
            {/* 텍스트 박스 */}
            <div className="text-box">
              <span className="text-box__title">
                남편이 회귀를 숨김 <br /> 그래서 나도 숨김
              </span>
              <span className="text-box__views">391.2만</span>
            </div>
          </div>
        </div>

        {/* 밀리언 페이지 */}
        <div className="section1">
          {/* 제목 */}
          <div className="section1__title">
            <div className="section1__title-text">밀리언 페이지</div>
            <div className="section1__title-button">
              <img src=">.svg" alt="" />
            </div>
          </div>

          <div className="section1__contents">
            {/* 카드 컴포넌트 */}
            <div className="section1__contents__card">
              <div className="img-box">
                {/* 시계 아이콘 */}
                <img src="/badge.svg" alt="@clock" className="img-box__icon" />
                {/* 썸네일 이미지*/}
                <img
                  src="card-01.jpeg"
                  alt="@card-01"
                  className="img-box__thumbnail"
                />
              </div>
              <div className="text-box">
                <span className="text-box__title">
                  얼어붙은 플레이어의 귀환
                </span>
                <span className="text-box__genre">웹툰</span>
              </div>
            </div>
          </div>
        </div>
        {/* 배너2 */}
        <div className="banner2">
          <span>[구글 플레이 포인트]</span>
          <span className="banner2__span__2">숨겨진 포인트로 캐시 받기</span>
        </div>
        {/* shadcn ui carousel  */}
      </div>
    </div>
  );
}

export default App;
