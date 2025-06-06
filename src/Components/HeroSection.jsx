import React from 'react';
import './hero.css';

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>İşinin peşəkarını axtarırsınız?</h1>
          <p>Yüzlərlə peşəkar arasından sizə uyğun olanı tapın.</p>
          <button className="hero-button">Peşəkarlarla tanış ol</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;