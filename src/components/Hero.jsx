import React, { useState, useEffect } from 'react';
import './Hero.css';

import homeShiftImg from '../assets/home_shift.png';
import partyImg from '../assets/party.png';
import roadTripImg from '../assets/road_trip.png';
import farewellImg from '../assets/farewell.png';

const slidesData = [
  { id: 1, image: homeShiftImg, keyword: "move" },
  { id: 2, image: partyImg, keyword: "party" },
  { id: 3, image: roadTripImg, keyword: "road trip" },
  { id: 4, image: farewellImg, keyword: "farewell" },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const { keyword } = slidesData[currentSlide];

  return (
    <section className="hero-container">
      <div className="hero-bg-wrapper">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>

      {/* হালকা ডার্ক ওভারলে */}
      <div className="hero-overlay"></div>

      {/* মাঝখানে থাকা আকর্ষণীয় টেক্সট কন্টেন্ট */}
      <div className="hero-content-center">
        <h1>
          Plan your <span className="changing-keyword">{keyword}</span> <br />
          <span className="highlight-text">without the chaos</span>
        </h1>
        {/* বাটন কন্টেইনার */}
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Planning</button>
          <button className="btn btn-secondary">Browse Packages</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;