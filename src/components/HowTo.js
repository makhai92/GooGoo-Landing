import React from "react";
import "./HowTo.css";

const HowTo = () => {
  return (
    <section className="howto">
      <div className="howto-container">
        {/* 첫 번째 항목 */}
        <div className="howto-item">
          <div className="howto-image">
            <img
              src="https://img.freepik.com/free-photo/vet-doing-routine-examination_329181-14490.jpg?t=st=1735177691~exp=1735181291~hmac=dfdf13d8026577469a15c602b9d58f67fc6d1a98b4571fc6de36258c763a4ed6&w=1380"
              alt="Health Check"
            />
          </div>
          <div className="howto-content">
            <h3 className="howto-title">철저한 건강 점검</h3>
            <p>모든 반려동물은 전문 수의사의 검진을 받습니다.</p>
          </div>
        </div>

        {/* 두 번째 항목 */}
        <div className="howto-item">
          <div className="howto-content2">
            <h3 className="howto-title2">안전한 분양 절차</h3>
            <p>윤리적이고 투명한 분양 과정을 보장합니다.</p>
          </div>
          <div className="howto-image2">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-woman-holding-phone_23-2149054185.jpg?t=st=1735177826~exp=1735181426~hmac=37f7e03c40062ff82fdf5e597011e7a4d82f80a4f8c6adca200312914cd8988e&w=1380"
              alt="Transparent Process"
            />
          </div>
        </div>

        {/* 세 번째 항목 */}
        <div className="howto-item">
          <div className="howto-image">
            <img
              src="https://img.freepik.com/premium-photo/female-teacher-working-home-remotely-online-lesson-with-group-teenage-students-teaching-looking-computer-screen-sitting-home-distance-virtual-class-course-interactive-lesson-video-conference_116407-26409.jpg?w=1380"
              alt="Post Management"
            />
          </div>
          <div className="howto-content">
            <h3 className="howto-title">사후 관리</h3>
            <p>분양 후에도 지속적인 지원과 상담을 제공합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
