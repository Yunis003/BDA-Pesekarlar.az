import React from "react";
import "./categories.css";
import { useState, useEffect } from "react";

// İkonları import edirik
import table from "../assets/table.svg"; // Dülgər üçün
import paint from "../assets/paint.svg"; // Rəngsaz/Malyar üçün
import electrician from "../assets/mdi.svg"; // Elektrik üçün
import plumber from "../assets/sicon.svg"; // Santexnik üçün
import other from "../assets/bor.svg"; // Digər üçün
import cleaning from "../assets/maki.svg"; // Təmizlik üçün
import arrow from "../assets/arrow-down.svg";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true); // Yüklənmə statusu üçün state

  // API-dan gələn `name` dəyərini import etdiyimiz ikonlarla əlaqələndiririk
  const iconMap = {
    carpenter: table,
    painter: paint,
    electrician: electrician,
    plumber: plumber,
    cleaning_services: cleaning,
    // Əgər API-dan gələn digər adlar varsa, bura əlavə edə bilərsiniz
    // Default ikon olaraq "other" təyin edirik
    default: other,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://masters-1.onrender.com/api/v1/services/"
        );
        const data = await response.json();
        // Yalnız display_name olanları və bəlkə də limitli sayda göstərək
        const filteredData = data.results
          .filter((cat) => cat.display_name)
          .slice(0, 6); // İlk 6-nı göstərək
        setCategoryData(filteredData);
      } catch (error) {
        console.error("Kateqoriyaları yükləyərkən xəta:", error);
      } finally {
        setLoading(false); // Yüklənmə bitdi
      }
    };

    fetchCategories();
  }, []); // Boş dependency array, yalnız bir dəfə işə düşməsi üçün

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
        {categoryData.slice(0,6).map((category) => (
          // 1. `.map()` içində return (parentheses ilə) istifadə olunur
          // 2. Hər element üçün unikal "key" propu əlavə edilir

          <div className="category1">
            <img src={table} alt="Category 1" className="category-img" />
            <div className="worker-data">
              <h2>{category.display_name}</h2>
              <p>{Math.floor(Math.random()*100)} Usta</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
