// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2 data-aos="fade-down">우리의 서비스</h2>
      <p data-aos="fade-up">
        안전한 분양 절차와 철저한 건강 검진을 통해 반려동물을 제공합니다. 우리의
        목표는 모든 반려동물이 건강하고 행복한 가정으로 입양되는 것입니다.
      </p>
      <p className="highlight-text" data-aos="fade-up">
        구구는 신뢰할 수 있는 사람에게 분양을 보낼 수 있고, 분양하는 사람에게도
        신뢰를 제공합니다. 더 이상 아무도 모르는 사람에게 반려동물을 분양하지
        않아도 됩니다.
      </p>
      <div className="features">
        <div className="feature" data-aos="zoom-in">
          <i className="fas fa-heart"></i>
          <h3>철저한 건강 검진</h3>
          <p>모든 반려동물은 전문 수의사의 검진을 받습니다.</p>
        </div>
        <div className="feature" data-aos="zoom-in" data-aos-delay="200">
          <i className="fas fa-shield-alt"></i>
          <h3>안전한 분양 절차</h3>
          <p>윤리적이고 투명한 분양 과정을 보장합니다.</p>
        </div>
        <div className="feature" data-aos="zoom-in" data-aos-delay="400">
          <i className="fas fa-handshake"></i>
          <h3>사후 관리</h3>
          <p>분양 후에도 지속적인 지원과 상담을 제공합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
