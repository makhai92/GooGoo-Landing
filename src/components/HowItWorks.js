import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="how" className="how-it-works">
      <h2>분양 절차</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>사전 상담</h3>
          <p>고객의 요구사항을 파악하고 맞춤 상담을 제공합니다.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>반려동물 선택</h3>
          <p>다양한 반려동물 중에서 적합한 동물을 선택할 수 있습니다.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>분양 계약</h3>
          <p>투명한 계약 절차를 통해 분양을 완료합니다.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3>사후 관리</h3>
          <p>분양 후에도 지속적인 관리와 지원을 제공합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
