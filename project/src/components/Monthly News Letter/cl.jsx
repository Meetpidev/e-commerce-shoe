
import './Carousel.css'; 
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

  return (
    <div className="carousel2">
      <div className="carousel-innerss">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default Cl;
