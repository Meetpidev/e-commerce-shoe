import backGroundImg from "../../assets/Product_title/backGroundimg.png";
import "./Product_Title.css";

function Product_Title() {
  return (
    <>
      <div className="product_title">
        <img src={backGroundImg} alt="" />
        <div className="title">
            <h1><span>Best</span> &nbsp;&nbsp;<span className="year">2024</span></h1>
            <h1>Collections</h1>
            <p>Find your shoes that suits you the best and comfortble</p>
            <button className="shop_now">Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Product_Title


// import { useState } from 'react';
// import "./slider_content.css";

// const ImageSlider = ({ slides }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   const goToNextSlide = () => {
//     const newIndex = (currentSlideIndex + 1) % slides.length;
//     setCurrentSlideIndex(newIndex);
//   };

//   const goToPreviousSlide = () => {
//     const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//     setCurrentSlideIndex(newIndex);
//   };

//   return (
//     <div className="image-slider">
     
//     <div className="left active">
//       <span className='title'>{slides[currentSlideIndex].title}</span>
//       <p className="subtitle">{slides[currentSlideIndex].subtitle}</p>
//       <h3 className='decscription'>{slides[currentSlideIndex].description}</h3>
//       <button onClick={goToPreviousSlide} className='prev'><i>&#8592;</i></button>
//       <a href="#" className='btn'>Add To Card</a>
//     </div>

//     <div className="right">
//       <div className="slide">
//         <img src={slides[currentSlideIndex].url} alt={slides[currentSlideIndex].description} className='shoe'/>
//         <button onClick={goToNextSlide} className='next'><i>&#8594;</i></button>
//       </div>
//     </div>
      
//     </div>
//   );
// };

// export default ImageSlider;
