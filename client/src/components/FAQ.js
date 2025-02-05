// FAQ.jsx
import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <h2>자주 묻는 질문</h2>
      <div className="faq-item">
        <h3>Q1. 분양 절차는 어떻게 되나요?</h3>
        <p>A1. 사전 상담부터 사후 관리까지 단계별로 진행됩니다.</p>
      </div>
      <div className="faq-item">
        <h3>Q2. 분양 후 관리 서비스는 무엇인가요?</h3>
        <p>A2. 정기적인 건강 체크와 상담 서비스를 제공합니다.</p>
      </div>
      <div className="faq-item">
        <h3>Q3. 어떤 종류의 반려동물을 분양받을 수 있나요?</h3>
        <p>A3. 개, 고양이, 토끼 등 다양한 반려동물을 분양받을 수 있습니다.</p>
      </div>
      {/* 추가적인 FAQ 항목을 필요에 따라 추가 */}
    </section>
  );
};

export default FAQ;
