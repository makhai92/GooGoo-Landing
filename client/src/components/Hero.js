// Hero.jsx
import React, { useEffect } from "react";
import "./Hero.css";
import heroImage from "../assets/5.png"; // 히어로 섹션 이미지

const Hero = () => {
  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    const videos = [
      `https://videos.pexels.com/video-files/2796080/2796080-uhd_2560_1440_25fps.mp4`,
    ];

    let currentVideoIndex = 0;

    const playVideo = () => {
      if (videoElement.paused) {
        videoElement.play().catch((error) => {
          console.log("Playback error:", error);
        });
      }
    };

    videoElement.addEventListener("ended", function () {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      videoElement.src = videos[currentVideoIndex];
      videoElement.load();
      playVideo();
    });
    playVideo();
  }, []);
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted playsInline id="background-video">
          <source
            src="https://videos.pexels.com/video-files/3191251/3191251-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <h1>
            안전한 반려동물
            <br />
            분양 서비스
            <br />
            GOOGOO
            <br />
          </h1>
          <p>신뢰할 수 있는 반려동물 분양 서비스</p>

          <div className="hero-button-container">
            <button
              className="hero-button"
              onClick={() => (window.location.href = "#pre-reservation")}
            >
              사전 예약하기
            </button>
          </div>
        </div>
      </div>
    </div>
    /*  
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-in"
    >
      <div className="hero-content" data-aos="fade-up">
        <h1>신뢰할 수 있는 반려동물 분양 서비스</h1>
        <p>
          구구는 신뢰할 수 있는 사람에게 분양을 보낼 수 있고, 분양하는
          사람에게도 신뢰를 제공합니다. 더 이상 아무도 모르는 사람에게
          반려동물을 분양하지 않아도 됩니다.
        </p>
        <button onClick={() => (window.location.href = "#pre-reservation")}>
          사전 예약하기
        </button>
      </div>
    </section>
    */
  );
};

export default Hero;
