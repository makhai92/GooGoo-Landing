import React from "react";
import "./Review.css";
import image1 from "../assets/4.png";
import image2 from "../assets/5.png";
import image3 from "../assets/hero-image.png";

// 후기 데이터
const reviews = [
  {
    id: 1,
    name: "사용자 이름 1",
    content:
      "이 서비스는 정말 놀라웠습니다. 반려동물을 안전하게 분양받을 수 있었습니다.",
    image: image1,
  },
  {
    id: 2,
    name: "사용자 이름 2",
    content:
      "서비스가 투명하고 신뢰가 갔습니다. 정말 만족스러운 경험이었습니다.",
    image: image2,
  },
  {
    id: 3,
    name: "사용자 이름 3",
    content: "분양 후에도 지속적인 관리와 상담을 받을 수 있어 매우 좋았습니다.",
    image: image3,
  },
];

const Review = () => {
  return (
    <section id="review" className="review">
      <h2 className="review-title">실제 이용자 후기</h2>

      <div className="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-image">
              <img src={review.image} alt={`Review by ${review.name}`} />
            </div>
            <div className="review-text">
              <h3>{review.name}</h3>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
