// import { useState } from 'react';
// import './header.css';
// import { useState, useEffect, useRef } from 'react';
// import './header.css'; // CSS faylınızın qoşulduğundan əmin olun
// import ArrowDown from '../assets/arrow-down.svg'; // Bu faylın yolunun düzgün olduğundan əmin olun
// import Logo from '../assets/logo.svg';
// import BurgerMenu from '../assets/burgerMenu.svg';
// import User from '../assets/profile-circle.svg';
// import SearchIcon from '../assets/search.svg';
// import ArrowDown from '../assets/arrow-down.svg';
// import BurgerMenuOverlay from './BurgerMenu';

// function Header() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 

//   const toggleMenu = () => { 
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//       <header className="header-container">
//         <div className="logo">
//           <img src={Logo} />
//         </div>
//         <button className="menu-button" onClick={toggleMenu}> 
//         <img src={BurgerMenu} alt="Menu" />
//       </button>
//         <div className="search-area">
//           <div className="search-input-wrapper">
//             <img src={SearchIcon} alt="ss" />
//             <input
//               type="text"
//               placeholder="Axtar"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             {searchTerm && (
//               <button className="clear-button" onClick={() => setSearchTerm('')}>
//                 <p>.</p>
//               </button>
//             )}
//           </div>
//           <div className="city-selector-wrapper">
//             <select
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               <option value="" disabled>Şəhər seçin</option>
//               <option value="baku">Bakı</option>
//               <option value="ganja">Gəncə</option>
//               <option value="sumqayit">Sumqayıt</option>
//             </select>
//            <img src={ArrowDown} alt="arrow-down" />
//           </div>
//         </div>
//         <button className="search-button-primary">Axtar</button>
//         <button className="register-button">
//           Daxil Ol
//         </button>
//         <button className="register-button">
//           <img src={User} />
//           Qeydiyyat
//         </button>
//         <BurgerMenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
//       </header>
//   );
// }

// export default Header;




// function Header() {
//   // --- State-lər ---
//   const [cities, setCities] = useState([]);
//   const [cityInputValue, setCityInputValue] = useState('');
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // Xətaları saxlamaq üçün state

//   const citySelectorRef = useRef(null);

//   // --- API sorğusu ---
//   useEffect(() => {
//     console.log('1. Komponent yükləndi. API sorğusu başlayır...');
//     setErrorMessage(''); // Köhnə xətanı təmizlə
    
//     fetch('https://masters-1.onrender.com/api/v1/cities/')
//       .then(response => {
//         console.log('2. API-dan cavab gəldi. Status:', response.status);
//         if (!response.ok) {
//           // Əgər cavab uğurlu deyilsə (məs. 404, 500) xəta yarat
//           throw new Error(`API xətası: Server ${response.status} statusu ilə cavab verdi.`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('3. Məlumatlar uğurla alındı:', data);
//         if (Array.isArray(data)) {
//           setCities(data);
//           console.log(`4. 'cities' state-i yeniləndi. Yaddaşa ${data.length} şəhər yazıldı.`);
//         } else {
//           console.error('GƏLƏN DATA MASSİV (ARRAY) DEYİL!', data);
//           setErrorMessage('API-dan gələn data düzgün formatda deyil.');
//         }
//       })
//       .catch(error => {
//         // Bu blok şəbəkə xətası və ya yuxarıdakı "throw new Error" zamanı işləyir
//         console.error('!!! API SORĞUSU ZAMANI CİDDİ XƏTA:', error);
//         setErrorMessage(`Şəhərləri yükləmək mümkün olmadı. Təfərrüat üçün konsola (F12) baxın. Xəta: ${error.message}`);
//       });
//   }, []); // Boş massiv sorğunun yalnız bir dəfə getməsini təmin edir

//   // Kənara klikləmə
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (citySelectorRef.current && !citySelectorRef.current.contains(event.target)) {
//         setIsCityDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Şəhər seçimi
//   const handleCitySelect = (city) => {
//     setCityInputValue(city.display_name);
//     setIsCityDropdownOpen(false);
//   };

//   const filteredCities = Array.isArray(cities) ? cities.filter(city =>
//     city.display_name.toLowerCase().includes(cityInputValue.toLowerCase())
//   ) : [];

//   console.log('KOMPONENT RENDER OLUNUR:', { 
//       isOpen: isCityDropdownOpen, 
//       citiesInMemory: cities.length, 
//       filteredCitiesToShow: filteredCities.length 
//   });

//   return (
//     <header className="header-container">
      
      

         
//       <div className="city-selector-wrapper" ref={citySelectorRef}>
//         <input
//           type="text"
//           className="city-input"
//           placeholder="Şəhər axtar..."
//           value={cityInputValue}
//           onFocus={() => setIsCityDropdownOpen(true)}
//           onChange={(e) => setCityInputValue(e.target.value)}
//         />
//         <img
//           src={ArrowDown}
//           alt="arrow-down"
//           style={{ cursor: 'pointer' }}
//           onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//         />

//         {isCityDropdownOpen && (
//           <div className="city-dropdown">
//             {/* Əgər xəta varsa, onu göstər */}
//             {errorMessage && (
//                 <div style={{ padding: '10px', color: 'red' }}>{errorMessage}</div>
//             )}

//             {/* Əgər xəta yoxdursa, şəhərləri göstər */}
//             {!errorMessage && filteredCities.length > 0 && (
//               filteredCities.map(city => (
//                 <div key={city.id} className="city-item" onClick={() => handleCitySelect(city)}>
//                   {city.display_name}
//                 </div>
//               ))
//             )}

//             {/* Əgər nəticə yoxdursa */}
//             {!errorMessage && filteredCities.length === 0 && (
//                 <div style={{ padding: '10px', color: '#888' }}>Nəticə tapılmadı.</div>
//             )}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState, useEffect, useRef } from 'react';
import './header.css';
import Logo from '../assets/logo.svg';
import BurgerMenu from '../assets/burgerMenu.svg';
import User from '../assets/profile-circle.svg';
import SearchIcon from '../assets/search.svg';
import ArrowDown from '../assets/arrow-down.svg';
import BurgerMenuOverlay from './BurgerMenu';

function Header() {
 
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [cities, setCities] = useState([]);
  const [cityInputValue, setCityInputValue] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [apiError, setApiError] = useState('');
  const citySelectorRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch('https://masters-1.onrender.com/api/v1/cities/')
      .then(response => {
        if (!response.ok) {
          throw new Error('API cavabı uğursuz oldu');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setCities(data);
        } else {
          setApiError('API-dan gələn məlumatlar düzgün formatda deyil.');
        }
      })
      .catch(error => {
        setApiError('Şəhərləri yükləmək mümkün olmadı.');
        console.error("API xətası:", error);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (citySelectorRef.current && !citySelectorRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city) => {
    setCityInputValue(city.display_name);
    setIsCityDropdownOpen(false);
  };

  const filteredCities = cities.filter(city =>
    city.display_name.toLowerCase().includes(cityInputValue.toLowerCase())
  );

  return (
    <header className="header-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <img src={BurgerMenu} alt="Menu" />
      </button>

      <div className="search-area">
        <div className="search-input-wrapper">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Axtar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-button" onClick={() => setSearchTerm('')}>
              <p>.</p>
            </button>
          )}
        </div>
      </div>

      <div className="city-selector-wrapper" ref={citySelectorRef}>
        <input
          type="text"
          className="city-input"
          placeholder="Şəhər seçin"
          value={cityInputValue}
          onFocus={() => setIsCityDropdownOpen(true)}
          onChange={(e) => setCityInputValue(e.target.value)}
        />
        <img
          src={ArrowDown}
          alt="arrow-down"
          style={{ cursor: 'pointer' }}
          onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
        />
        {isCityDropdownOpen && (
          <div className="city-dropdown">
            {apiError && <div style={{ padding: '10px', color: 'red' }}>{apiError}</div>}
            {!apiError && filteredCities.map(city => (
              <div key={city.id} className="city-item" onClick={() => handleCitySelect(city)}>
                {city.display_name}
              </div>
            ))}
            {!apiError && filteredCities.length === 0 && (
              <div style={{ padding: '10px', color: '#888' }}>Nəticə tapılmadı</div>
            )}
          </div>
        )}
      </div>

      <button className="search-button-primary">Axtar</button>
      
      <button className="register-button">Daxil Ol</button>

      <button className="register-button">
        <img src={User} alt="User Icon"/>
        Qeydiyyat
      </button>

      <BurgerMenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;