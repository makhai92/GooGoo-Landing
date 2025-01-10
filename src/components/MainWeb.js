import React from "react";
import "./MainWeb.css";

const MainWeb = () => {
  const recentListings = [
    {
      id: 1,
      title: "제목1",
      description: "간단한 설명이 들어갈 자리입니다.",
      details: "상세 설명 추가",
    },
    {
      id: 2,
      title: "제목2",
      description: "간단한 설명이 들어갈 자리입니다.",
      details: "상세 설명 추가",
    },
    {
      id: 3,
      title: "제목3",
      description: "간단한 설명이 들어갈 자리입니다.",
      details: "상세 설명 추가",
    },
    {
      id: 4,
      title: "제목4",
      description: "간단한 설명이 들어갈 자리입니다.",
      details: "상세 설명 추가",
    },
    {
      id: 5,
      title: "제목5",
      description: "간단한 설명이 들어갈 자리입니다.",
      details: "상세 설명 추가",
    },
  ];

  const recommendations = [
    {
      id: 1,
      title: "추천 정보1",
      description: "추천 내용이 들어갈 자리입니다.",
    },
    {
      id: 2,
      title: "추천 정보2",
      description: "추천 내용이 들어갈 자리입니다.",
    },
    {
      id: 3,
      title: "추천 정보3",
      description: "추천 내용이 들어갈 자리입니다.",
    },
  ];

  return (
    <div className="MainWeb">
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            {/* 로고 이미지를 넣을 수 있는 영역 */}
            <img src="./img/goo.png" alt="로고" />
          </div>

          <div className="search">
            <div className="search-bar">
              <form class="search-box">
                <input type="text" placeholder=" 검색어를 입력해주세요" />
                <button type="reset"></button>
              </form>
            </div>
          </div>

          <nav className="nav">
            <a href="#listings">분양글</a>
            <a href="#mypage">마이페이지</a>
            <a href="#contact">문의하기</a>
          </nav>
          <button className="login-btn">로그인</button>
        </header>

        {/* Banner */}
        <div className="banner"></div>

        {/* Recent Listings */}
        <section className="listings-section" id="listings">
          <h2>최신 분양글</h2>
          <div className="listings">
            {recentListings.map((listing) => (
              <div className="listing-card" key={listing.id}>
                <div className="listing-image"></div>
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <small>{listing.details}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="recommendations-section">
          <div className="recommendations">
            {recommendations.map((rec) => (
              <div className="recommendation-card" key={rec.id}>
                <div className="recommendation-image"></div>
                <h3>{rec.title}</h3>
                <p>{rec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <blockquote>
            "구구는 신뢰성을 바탕으로 분양을 돕고 있습니다" <br />- 구구일동
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="footer">Footer</footer>
      </div>
    </div>
  );
};

export default MainWeb;
