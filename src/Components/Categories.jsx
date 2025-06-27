import React from "react";
import "./categories.css";
import { useState, useEffect } from "react";

import table from "../assets/table.svg"; 
import paint from "../assets/paint.svg"; 
import electrician from "../assets/mdi.svg"; 
import plumber from "../assets/sicon.svg"; 
import other from "../assets/bor.svg"; 
import cleaning from "../assets/maki.svg"; 
import arrow from "../assets/arrow-down.svg";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const iconMap = {
    carpenter: table,
    painter: paint,
    electrician: electrician,
    plumber: plumber,
    cleaning_services: cleaning,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.peshekar.online/api/v1/categories/"
        );
        const data = await response.json();
        
        const filteredData = data
          .filter((cat) => cat.display_name)
          .slice(0, 6); 
        setCategoryData(filteredData);
      } catch (error) {
        console.error("Kateqoriyaları yükləyərkən xəta:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCategories();
  }, []); 

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>Yüklənir...</div>
    );
  }

return (
    <section className="categories">
        <div className="categories-hero">
            <h2 style={{ fontSize: "2rem" }}>Kateqoriyalar</h2>
            <p
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                }}
            >
                Daha Çox{" "}
                <img
                    src={arrow}
                    alt="arrow-right"
                    style={{ rotate: "-90deg", width: "20px" }}
                />
            </p>
        </div>
        <div className="main-categories">
            {categoryData.slice(0,6).map((category, index) => {
                // Get a random icon from iconMap
                const iconKeys = Object.keys(iconMap);
                const randomKey = iconKeys[Math.floor(Math.random() * iconKeys.length)];
                const randomIcon = iconMap[randomKey];
                
                return (
                    <div className="category1" key={index}>
                        <img src={randomIcon} alt="Category Icon" className="category-img" />
                        <div className="worker-data">
                            <h2>{category.display_name}</h2>
                            <p>{Math.floor(Math.random() * 100) + 50}+ Usta</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
);
};

export default Categories;



// import './categories.css';
// import table from '../assets/table.svg'
// import paint from '../assets/paint.svg'
// import bor from '../assets/bor.svg'
// import mdi from '../assets/mdi.svg'
// import maki from '../assets/maki.svg'
// import sicon from '../assets/sicon.svg'
// import arrow from '../assets/arrow-down.svg'
// const Categories = () => {
//   return (
//     <section className='categories'>
//         <div className="categories-hero">
//             <h2>Kateqoriyalar</h2>
//             <p style={{ display: "flex", alignItems:"center", gap:"10px" }}>Daha Cox <img src={arrow} alt="arrow-right" style={{ rotate:"-90deg", width:"20px" }} /></p>
//         </div>
//         <div className="main-categories">
//             <div className="category1">
//                 <img src={table} alt="Category 1" />
//                 <div className="worker-data">
//                 <h2>Mebel yığımı</h2>
//                 <p>90+ Usta</p>
//                 </div>
//             </div>
//             <div className="category1">
//                 <img src={paint} alt="Category 2" />
//                 <div className="worker-data">
//                 <h2>Rəngsaz</h2>
//                 <p>150+ Usta</p>
//                 </div>
//             </div>
//             <div className="category1">
//                 <img src={bor} alt="Category 3" />
//                 <div className="worker-data">
//                 <h2>Santexnik</h2>
//                 <p>400+ Usta</p>
//                 </div>
//             </div>
//             <div className="category1">
//                 <img src={mdi} alt="Category 4" />
//                 <div className="worker-data">
//                 <h2>Təmir və tikinti</h2>
//                 <p>360+ Usta</p>
//                 </div>
//             </div>
//             <div className="category1">
//                 <img src={maki} alt="Category 3" />
//                 <div className="worker-data">
//                 <h2>Mexanik</h2>
//                 <p>760+ Usta</p>
//                 </div>
//             </div>
//             <div className="category1">
//                 <img src={sicon} alt="Category 4" />
//                 <div className="worker-data">
//                 <h2>Derzi</h2>
//                 <p>566+ Usta</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Categories