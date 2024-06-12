import shoe1 from "../../assets/Product_Page/Product_1.png";
import shoe2 from "../../assets/Product_Page/Product_2.png";
import shoe3 from "../../assets/Product_Page/Product_3.png";
import shoe4 from "../../assets/Product_Page/Product_4.png";
import shoe5 from "../../assets/Product_Page/Product_5.png";
import shoe6 from "../../assets/Product_Page/Product_6.png";
import Carousel from "./Carousal";
import ProductPagedetails from "./ProductPagedetails";
import Service from "../ServicePage/service";
import { useState } from "react";
import "./ProductPage.css";

function ProductPage() {

    const slides=[
        {src:shoe1,alt:"shoe1"},
        {src:shoe2,alt:"shoe2"},
        {src:shoe3,alt:"shoe3"},
        {src:shoe4,alt:"shoe4"},
        {src:shoe5,alt:"shoe5"},
        {src:shoe6,alt:"shoe6"},];

    const [slide, setSlide] = useState(0);

  return (
    <>
       <h1 style={{textAlign:"center", marginTop:"4.5rem"}}>Product Details</h1>
        <div className="prod">
            <Carousel data={slides} currentSlide={slide} setCurrentSlide={setSlide}/>
            <ProductPagedetails data={slides} currentSlide={slide} setCurrentSlide={setSlide}/>
        </div>
        <div className="servicce">
            <Service></Service>
        </div>
        
    </>
  )
}

export default ProductPage