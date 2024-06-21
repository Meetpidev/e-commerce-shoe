
// import "./ProductPage.css";
// import "./Carousal.css";

// export default function Carousel({ data, currentSlide, setCurrentSlide }) {

//     const nextSlide = () => {
//         setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
//       };
    
//       const prevSlide = () => {
//         setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
//       };

      
//   return (
//     <>
       
//        <div className="prod-2">
//       <div className="carousel">
//         {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
//         {data.map((item, idx) => (
//           <img
//             src={item.src}
//             alt={item.alt}
//             key={idx}
//             className={currentSlide === idx ? "slide" : "slide slide-hidden"}
//           />
//         ))}
//         {/* <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" /> */}
//         <span className="indicators">
//           {data.map((_, idx) => (
//             <button
//               key={idx}
//               className={
//                 currentSlide === idx ? "indicator" : "indicator indicator-inactive"
//               }
//               onClick={() => setCurrentSlide(idx)}
//             ></button>
//           ))}
//         </span>
//       </div>
//     </div>

//     </>
//   )
// }

import "./ProductPage.css";
import "./Carousal.css";

export default function Carousel({ data, currentSlide, setCurrentSlide }){
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className="prod-2">
      <div className="carousel">
      
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={currentSlide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
       
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                currentSlide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setCurrentSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
}