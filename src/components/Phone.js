// Phone.jsx
import React from "react";
import "./Phone.css";
import phone1 from "../assets/phone.png";
import phone2 from "../assets/phone.png";

const Phone = () => {
  return (
    <section id="phone" className="phone" data-aos="fade-up">
      <div className="phone-container">
        {/* 첫 번째 스마트폰 */}
        <div className="phone-item">
          <p className="phone-text">반려동물 분양, 손쉽고 안전하게</p>
          <img src={phone1} alt="Phone 1" className="phone-image" />
        </div>

        {/* 두 번째 스마트폰 */}
        <div className="phone-item">
          <img src={phone2} alt="Phone 2" className="phone-image" />
          <p className="phone-text">
            구구와 함께라면 반려동물을 손쉽고 안전하게, 믿을 수 있는 사람에게만
            분양할 수 있습니다. 이제 모르는 사람에게 맡기지 마세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Phone;
