import { useState, useEffect } from 'react';
import './cl.css/'; 
import nike from '../../assets/Top_Brands/NikeLogo.png';
import gucci from "../../assets/Top_Brands/gucci.png";
import lv from "../../assets/Top_Brands/lv.png";
import adidas from "../../assets/Top_Brands/adidas.png";
import skechers from "../../assets/Top_Brands/Skechers-logo.png";

const images = [
  nike,
  gucci,
  lv,
  adidas,
  skechers,
  nike,
  gucci,
  lv,
  skechers,
  adidas,
  
];

const Cl = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayedImages = () => {
    const start = currentIndex;
    const end = (currentIndex + 4) % images.length;

    if (end > start) {
      return images.slice(start, end);
    } else {
      return [...images.slice(start), ...images.slice(0, end)];
    }
  };

  return (
    <div className="carousel2">
      {getDisplayedImages().map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
      ))}
    </div>
  );
};

export default Cl;
