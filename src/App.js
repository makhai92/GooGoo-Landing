// App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Text from "./components/Text";
import Phone from "./components/Phone";
import HowTo from "./components/HowTo";
/*  import About from "./components/About";*/
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PreReservation from "./components/PreReservation";
import Trust from "./components/Trust"; // 추가된 부분
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: false, // 한번만 애니메이션 실행
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Text />
      <Phone />
      <HowTo />
      {/*  <About />*/}
      <Trust /> {/* 추가된 부분 */}
      <Review />
      <PreReservation />
      <Footer />
    </div>
  );
}

export default App;
