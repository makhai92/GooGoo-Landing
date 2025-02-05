import React, { useState } from "react";
import "./PreReservation.css";

const PreReservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
  });

  const [message, setMessage] = useState(""); // 성공/실패 메시지 상태 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/join_process", {
        // 서버의 엔드포인트로 요청
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // 서버에서 bodyParser.urlencoded 사용
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          petType: formData.petType,
        }), // 이메일 데이터 전송
      });

      if (response.ok) {
        setMessage("예약이 완료되었습니다!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          petType: "",
        });
      } else {
        setMessage("예약에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("예약에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <section id="pre-reservation" className="pre-reservation">
      <h2>사전 예약</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="연락처 (예: 010-1234-5678)"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            반려동물 종류 선택
          </option>
          <option value="dog">강아지</option>
          <option value="cat">고양이</option>
          <option value="other">기타</option>
        </select>
        <button type="submit">예약 완료</button>
      </form>
      {message && <p>{message}</p>} {/* 메시지 표시 */}
    </section>
  );
};

export default PreReservation;
