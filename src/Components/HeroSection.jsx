import './hero.css';
// Video faylınızın yolunu buraya əlavə edin
// Məsələn, public qovluğunda 'videos' adında bir qovluq varsa
import heroBackgroundVideo from '../assets/headervid.mp4'; // <- Videonuzu buraya import edin

function HeroSection() {
  return (
    <section className="hero-container">
      {/* Video elementi background-image-in yerinə gəlir */}
      <video className="hero-background-video" autoPlay loop muted playsInline>
        <source src={heroBackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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