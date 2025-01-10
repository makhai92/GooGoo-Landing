import React, { useState } from "react";
import { FaDog, FaCat, FaDove, FaFrog, FaFish, FaPaw } from "react-icons/fa";
import "./Adoption.css";

const Adoption = () => {
  const categories = [
    { id: 1, name: "강아지", icon: <FaDog /> },
    { id: 2, name: "고양이", icon: <FaCat /> },
    { id: 3, name: "새", icon: <FaDove /> },
    { id: 4, name: "파충류", icon: <FaFrog /> },
    { id: 5, name: "물고기", icon: <FaFish /> },
    { id: 6, name: "그외", icon: <FaPaw /> },
  ];

  const cardData = {
    강아지: Array(5).fill({ title: "강아지 제목", description: "강아지 설명" }),
    고양이: Array(5).fill({ title: "고양이 제목", description: "고양이 설명" }),
    새: Array(5).fill({ title: "새 제목", description: "새 설명" }),
    파충류: Array(5).fill({ title: "파충류 제목", description: "파충류 설명" }),
    물고기: Array(5).fill({ title: "물고기 제목", description: "물고기 설명" }),
    그외: Array(5).fill({ title: "그외 제목", description: "그외 설명" }),
  };

  const [selectedCategory, setSelectedCategory] = useState("강아지");

  return (
    <div className="adoptable-container">
      {/* 상단 카테고리 섹션 */}
      <h2 className="section-title">분양 가능한 아이들</h2>
      <div className="categories">
        {categories.map((category) => (
          <div
            className={`category ${
              selectedCategory === category.name ? "active" : ""
            }`}
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="icon-container">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* 카드 섹션 */}
      <div className="card">
        <div className="card-section">
          {cardData[selectedCategory]?.map((card, index) => (
            <div className="blog-card spring-fever" key={index}>
              <div className="title-content">
                <h3>
                  <a href="#">
                    {card.title} {index + 1}
                  </a>
                </h3>
                <div className="intro">
                  <a href="#">{card.description}</a>
                </div>
              </div>
              <div className="card-info">
                상세 설명을 입력하세요...
                <a href="#">
                  Read More<span className="licon icon-arr icon-black"></span>
                </a>
              </div>
              <div className="utility-info">
                <ul className="utility-list">
                  <li>
                    <span className="licon icon-like"></span>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <span className="licon icon-com"></span>
                    <a href="#">12</a>
                  </li>
                  <li>
                    <span className="licon icon-dat"></span>03 jun 2017
                  </li>
                  <li>
                    <span className="licon icon-tag"></span>
                    <a href="#">Photos</a>, <a href="#">Nice</a>
                  </li>
                </ul>
              </div>
              <div className="gradient-overlay"></div>
              <div className="color-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adoption;
