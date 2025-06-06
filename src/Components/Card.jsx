import React from 'react';
import './card.css'; // Bütün stillər bu fayldan gəlir
import Card1 from '../assets/card1.svg'; // Sizin əlavə etdiyiniz şəkil importu
import arrow from '../assets/arrow-down.svg'; // "Daha Cox" üçün ox şəkli (yeri dəyişə bilər)

const CardWithHeader = () => {
  return (
    // Bütün elementləri saxlayan ümumi konteyner
    <section className="component-container">
      
      {/* Sizin əlavə etdiyiniz yuxarı hissə (header) */}
      <div className="categories-hero">
        <h2>Kateqoriyalar</h2>
        {/* Inline style əvəzinə CSS class-ı istifadə etmək daha məsləhətlidir */}
        <a href="#" className="see-more-link">
          <span>Daha Çox</span>
          <img src={arrow} alt="arrow-right" className="arrow-icon" />
        </a>
      </div>

      {/* Əvvəlki Kart Komponenti */}
      <div className="main-profiles">
      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>


      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>


      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-image-container">
          <img src={Card1} alt="Profile" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-info">
            <h2 className="card-title">Elektrik</h2>
            <p className="card-subtitle">Rəsul Quliyev</p>
            <div className="card-location">
              {/* Location Pin SVG ikonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="card-rating">
            {/* Star SVG ikonu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
            </svg>
            <span>4.5</span>
          </div>
        </div>
      </div>


      </div>


    </section>
  );
};

export default CardWithHeader;