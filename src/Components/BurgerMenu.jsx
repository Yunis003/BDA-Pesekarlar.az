// import './burger.css';
// import arrow from '../assets/arrow-down.svg'; 
// import temir from '../assets/temir.svg';
// import ev from '../assets/ev.svg';
// import tehsil from '../assets/tehsil.svg';
// import gozelik from '../assets/gozellik.svg';
// import aile from '../assets/aile.svg';
// import ictimai from '../assets/ictimai.svg';

// function BurgerMenu({ isOpen, onClose }) {
//   return (
//     <div className={`burger-overlay ${isOpen ? 'open' : ''}`}>
//       <button className="close-button" onClick={onClose}>
//         &times; 
//       </button>
//       <div className="overlay-content">
//         <ul className="menu-categories">
//           <li>
//             <a href='#'>
//               <img src={temir} alt="Təmir və tikinti ikonu" /> 
//               Təmir və tikinti
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//           <li>
//             <a href='#'>
//               <img src={ev} alt="Ev və məişət xidmətləri ikonu" />
//               Ev və məişət xidmətləri
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//           <li>
//             <a href='#'>
//               <img src={tehsil} alt="Təhsil xidmətləri ikonu" />
//               Təhsil xidmətləri
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//           <li>
//             <a href='#'>
//               <img src={gozelik} alt="Gözəllik və sağlamlıq ikonu" />
//               Gözəllik və sağlamlıq
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//           <li>
//             <a href='#'>
//               <img src={aile} alt="Ailə və Baxıcı xidmətləri ikonu" />
//               Ailə və Baxıcı xidmətləri
              
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//           <li>
//             <a href='#'>
//               <img src={ictimai} alt="İctimai və fərdi təlimlər ikonu" />
//               İctimai və fərdi təlimlər
              
//             </a>
//             <img src={arrow} alt="" className='arrow-right' />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default BurgerMenu;

import React, { useState } from 'react';
import './burger.css';
import arrow from '../assets/arrow-down.svg';
import temir from '../assets/temir.svg';
import ev from '../assets/ev.svg';
import tehsil from '../assets/tehsil.svg';
import gozelik from '../assets/gozellik.svg';
import aile from '../assets/aile.svg';
import ictimai from '../assets/ictimai.svg';

// Bütün kateqoriya məlumatlarını bir yerdə saxlamaq kodu daha təmiz edir.
// Gələcəkdə yeni kateqoriya əlavə etmək çox asan olacaq.
const categoriesData = {
  temir: {
    name: 'Təmir və tikinti',
    icon: temir,
    subcategories: ['Santexnika və isitmə', 'Elektrik işləri', 'Dizayn və memarlıq', 'Usta xidməti', 'Təmir işləri'],
  },
  ev: {
    name: 'Ev və məişət xidmətləri',
    icon: ev,
    subcategories: ['Təmizlik xidmətləri', 'Mebel təmiri və yığılması', 'Yük daşıma', 'Pərdə və jalüz'],
  },
  tehsil: {
    name: 'Təhsil xidmətləri',
    icon: tehsil,
    subcategories: ['Repetitorlar', 'Xarici dil kursları', 'Musiqi dərsləri', 'Sürücülük kursları'],
  },
  gozellik: {
    name: 'Gözəllik və sağlamlıq',
    icon: gozelik,
    subcategories: ['Salon xidmətləri', 'Dietoloq', 'Psixoloq', 'İdman məşqçisi', 'Lazer epilyasiyası'],
  },
  aile: {
    name: 'Ailə və Baxıcı xidmətləri',
    icon: aile,
    subcategories: ['Dayə xidməti', 'Xəstə baxıcısı', 'Yaşlı baxıcısı', 'Ev köməkçisi'],
  },
  ictimai: {
    name: 'İctimai və fərdi təlimlər',
    icon: ictimai,
    subcategories: ['Biznes təlimləri', 'Marketinq təlimləri', 'İT və proqramlaşdırma', 'Fərdi inkişaf'],
  },
};

function BurgerMenu({ isOpen, onClose }) {
  // Sağ paneldə hansı kateqoriyanın alt menyusunun göstəriləcəyini saxlayır
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);

  // Kateqoriyaya kliklədikdə işə düşən funksiya
  const handleCategoryClick = (key) => {
    // Əgər eyni kateqoriyaya təkrar klikləsək, sağ paneli bağlayırıq
    if (activeCategoryKey === key) {
      setActiveCategoryKey(null);
    } else {
      // Əks halda, kliklənən kateqoriyanı aktiv edirik
      setActiveCategoryKey(key);
    }
  };

  return (
    <div className={`burger-overlay ${isOpen ? 'open' : ''} ${activeCategoryKey ? 'wide' : ''}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>

      {/* Əsas content sahəsi. İki hissədən ibarət olacaq: sol və sağ panellər. */}
      <div className="overlay-content">
        
        {/* SOL PANEL: Əsas kateqoriyalar */}
        <div className="main-categories-panel">
          <ul className="menu-categories">
            {Object.entries(categoriesData).map(([key, category]) => (
              <li
                key={key}
                className={activeCategoryKey === key ? 'active' : ''}
                onClick={() => handleCategoryClick(key)}
              >
                <a href='#'>
                  <img src={category.icon} alt={`${category.name} ikonu`} />
                  {category.name}
                </a>
                <img src={arrow} alt="ox" className='arrow-right' />
              </li>
            ))}
          </ul>
        </div>

        {/* SAĞ PANEL: Alt-kateqoriyalar (yalnız aktiv kateqoriya olanda görünür) */}
        {activeCategoryKey && (
          <div className="subcategory-panel">
            <h3 className="subcategory-title">
              {categoriesData[activeCategoryKey].name}
            </h3>
            <ul>
              {categoriesData[activeCategoryKey].subcategories.map((sub, index) => (
                <li key={index}>
                  <a href="#">{sub}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;