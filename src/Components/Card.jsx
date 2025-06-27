// // import './card.css';
// // // Card1 importu artıq istifadə olunmadığı üçün silinir.
// // import arrow from '../assets/arrow-down.svg';
// // import { useState, useEffect } from 'react';

// // // API-nin əsas ünvanı (şəkillər üçün)
// // const API_BASE_URL = 'https://masters-1.onrender.com';

// // const Card = () => {
// //   // 1. İlkin state-i API cavabının strukturuna uyğunlaşdırırıq
// //   const [datas, setData] = useState({ results: [] });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`${API_BASE_URL}/api/v1/professionals/?limit=8`); 
// //         const result = await response.json();
// //         setData(result);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []); // Boş massiv effect-in yalnız bir dəfə işləməsini təmin edir

// //   return (
// //     <section className="component-container">
// //       <div className="categories-hero">
// //         <h2 style={{fontSize: "2rem"}}>Ustalarımız</h2>
// //         <a href="#" className="see-more-link">
// //           <span>Daha Çox</span>
// //           <img src={arrow} alt="arrow-right" className="arrow-icon" />
// //         </a>
// //       </div>
// //       <div className="main-profiles">
// //         {/* 2. `datas.results`-in mövcud olduğundan əmin olub map edirik */}
// //         {datas.results && datas.results.slice(0,9).map((card) => (
// //           // 3. Unikal `key` və düzgün `return` sintaksisi
// //           <div className="profile-card" key={card.id}>
// //             <div className="card-image-container">
// //               {/* 4. Şəkil mənbəyini düzgün qururuq və null halını yoxlayırıq */}
// //               <img 
// //                 src={card.profile_image ? `${API_BASE_URL}${card.profile_image}` : 'https://via.placeholder.com/150'} // null olarsa, standart şəkil
// //                 alt={`${card.first_name} ${card.last_name}`} 
// //                 className="card-image" 
// //               />
// //             </div>
// //             <div className="card-content">
// //               <div className="card-info">
// //                 {/* 5. Məlumatları düzgün sintaksislə çağırırıq */}
// //                 <h2 className="card-title">{card.custom_profession || 'Mütəxəssis'}</h2>
// //                 <p className="card-subtitle">{`${card.first_name} ${card.last_name}`}</p>
// //                 <div className="card-location">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     className="location-icon"
// //                   >
// //                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
// //                     <circle cx="12" cy="10" r="3"></circle>
// //                   </svg>
// //                   {/* API-də şəhər adı gəlmədiyi üçün müvəqqəti mətn. Bunu dinamikləşdirmək lazımdır */}
// //                   <span>Bakı, Azərbaycan</span>
// //                 </div>
// //               </div>
// //               {/* 6. Reytinq məlumatı API-da olmadığı üçün bu blok silindi */}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Card;


// import './card.css'; 
// import Card1 from '../assets/card1.svg'; 
// import arrow from '../assets/arrow-down.svg'; 
// import usta2 from '../assets/usta2.jpg';
// import usta3 from '../assets/usta3.jpg';

// const Card = () => {
//   return (
//     <section className="component-container">
      
//       <div className="categories-hero">
//         <h2>Elanlar</h2>
//         <a href="#" className="see-more-link">
//           <span>Daha Çox</span>
//           <img src={arrow} alt="arrow-right" className="arrow-icon" />
//         </a>
//       </div>

//       <div className="main-profiles">
//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={Card1} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta2} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>


//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta3} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>


//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={Card1} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta2} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta3} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={Card1} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta2} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="profile-card">
//         <div className="card-image-container">
//           <img src={usta3} alt="Profile" className="card-image" />
//         </div>
//         <div className="card-content">
//           <div className="card-info">
//             <h2 className="card-title">Elektrik</h2>
//             <p className="card-subtitle">Rəsul Quliyev</p>
//             <div className="card-location">
//               {/* Location Pin SVG ikonu */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="location-icon"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                 <circle cx="12" cy="10" r="3"></circle>
//               </svg>
//               <span>Bakı, Azərbaycan</span>
//             </div>
//           </div>
//           <div className="card-rating">
//             {/* Star SVG ikonu */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="star-icon"
//             >
//               <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.336 24 12 20.232 4.664 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
//             </svg>
//             <span>4.5</span>
//           </div>
//         </div>
//       </div>


//       </div>


//     </section>
//   );
// };

// export default Card;

import './card.css';
import arrow from '../assets/arrow-down.svg';
import { useState, useEffect } from 'react';

// API-nin əsas ünvanı (şəkillər üçün)
const API_BASE_URL = 'https://api.peshekar.online';

const Card = () => {
  
  const [datas, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/professionals/?limit=8`); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="component-container">
      <div className="categories-hero">
        <h2 style={{fontSize: "2rem"}}>Ustalarımız</h2>
        <a href="#" className="see-more-link">
          <span>Daha Çox</span>
          <img src={arrow} alt="arrow-right" className="arrow-icon" />
        </a>
      </div>
      <div className="main-profiles">
        
        {datas.results && datas.results.slice(0,9).map((card) => (
        
          <div className="profile-card" key={card.id}>
            <div className="card-image-container">
              
              <img 
                src={card.profile_image ? `${API_BASE_URL}${card.profile_image}` : ''} // null olarsa, standart şəkil
                alt={`${card.full_name}`} 
                className="card-image" 
              />
            </div>
            <div className="card-content">
              <div className="card-info">
              
                <h2 className="card-title">{card.profession_speciality || 'Mütəxəssis'}</h2>
                <p className="card-subtitle">{`${card.full_name}`}</p>
                <div className="card-location">
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
          
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;