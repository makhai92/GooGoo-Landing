// Trust.jsx
import React from "react";
import "./Trust.css";

const Trust = () => {
  return (
    <section id="trust" className="trust" data-aos="fade-up">
      <h2 data-aos="fade-down">구구의 신뢰성</h2>
      <p className="highlight-text" data-aos="fade-up">
        구구는 신뢰할 수 있고 안전한 반려동물과 함께하는 세상을 만들어 가고
        있습니다.
      </p>
      <div className="trust-features">
        <div className="trust-item" data-aos="fade-right">
          <i className="fas fa-user-shield"></i>
          <h3>신뢰할 수 있는 파트너</h3>
          <p>모든 분양자는 철저한 검증을 거쳐 신뢰할 수 있는 사람들입니다.</p>
        </div>
        <div className="trust-item" data-aos="fade-left" data-aos-delay="200">
          <i className="fas fa-paw"></i>
          <h3>안전한 환경</h3>
          <p>반려동물의 안전과 건강을 최우선으로 생각합니다.</p>
        </div>
        <div className="trust-item" data-aos="fade-right" data-aos-delay="400">
          <i className="fas fa-handshake"></i>
          <h3>투명한 절차</h3>
          <p>모든 분양 과정은 투명하게 공개됩니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
