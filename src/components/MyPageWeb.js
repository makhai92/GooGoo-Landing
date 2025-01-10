import React from "react";
import "./MyPageWeb.css";

const MyPageWeb = () => {
  return (
    <div className="MyPageWeb ">
      <div className="mypage-container">
        <h1 className="mypage-title">마이페이지</h1>

        {/* 사용자 정보 섹션 */}
        <div className="card user-info">
          <h2 className="card-title">사용자 정보</h2>
          <p>아이디: meteorsheep@naver.com</p>
          <p>닉네임: .</p>
          <p>설문 상태: 완료</p>
          <button className="btn">정보 수정하기</button>
        </div>

        {/* 작성한 글 섹션 */}
        <div className="card">
          <h2 className="card-title">작성한 글</h2>
          <p>작성한 글이 없습니다.</p>
        </div>

        {/* 관심 동물 목록 섹션 */}
        <div className="card">
          <h2 className="card-title">관심동물 목록</h2>
        </div>

        {/* 설문 상태 섹션 */}
        <div className="card">
          <h2 className="card-title">설문 상태</h2>
          <p>설문을 완료하셨습니다.</p>
        </div>

        {/* 회원 탈퇴 */}
        <div className="delete-account">
          <a href="#" className="btn-link">
            회원 탈퇴하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPageWeb;
