// Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2 data-aos="fade-down">고객 후기</h2>
      <div className="testimonial-container">
        <div className="testimonial" data-aos="zoom-in">
          <p>
            "정말 믿을 수 있는 서비스였습니다! 우리 강아지가 건강하게 우리 집에
            왔어요."
          </p>
          <h4>- 홍길동</h4>
        </div>
        <div className="testimonial" data-aos="zoom-in" data-aos-delay="200">
          <p>"분양 후에도 지속적인 상담과 지원을 받아 안심할 수 있었습니다."</p>
          <h4>- 김영희</h4>
        </div>
        <div className="testimonial" data-aos="zoom-in" data-aos-delay="400">
          <p>"반려동물의 건강 상태를 꼼꼼히 체크해주셔서 감사해요."</p>
          <h4>- 박철수</h4>
        </div>
        <div
          className="testimonial highlight-testimonial"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <p>
            "직접 분양된 반려동물을 분양받아 보았습니다. 구구 덕분에 믿을 수
            있는 파트너를 찾았어요!"
          </p>
          <h4>- 이수진</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
