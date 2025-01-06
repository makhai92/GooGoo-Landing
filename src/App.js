import React from "react";
import "./App.css";
import { FaPaw } from "react-icons/fa";

const App = () => {
  const cards = [
    { id: 1, title: "제목1", content: "여기는 내용이 들어갈 자리" },
    { id: 2, title: "제목2", content: "여기는 내용이 들어갈 자리" },
    { id: 3, title: "제목3", content: "여기는 내용이 들어갈 자리" },
  ];

  return (
    <div className="container">
      {/* 메인 이미지 */}
      <div className="main-image"></div>

      {/* 섹션 제목 */}
      <div className="section-title">
        <FaPaw className="paw-icon" />
        <span>최신 분양글</span>
      </div>

      {/* 카드 리스트 */}
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-image"></div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
