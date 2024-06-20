
import shoef1 from "../../assets/Product_Page/Product_1_Sqare.png";
import map from "../../assets/Product_Page/India.png";
import days from "../../assets/Product_Page/Exchange.png";
import features from "../../assets/Product_Page/Feature_logo.png";
import reviews from "../../assets/Product_Page/Review_logo.png";
import QueAns from "../../assets/Product_Page/FYQs.png";
import care from "../../assets/Product_Page/Care_Info_logo.png";
import similarProd from "../../assets/Product_Page/Similar_product_logo.png";
import AccordionUsage from "./service_3";
import MenuListComposition from "../ProductPage/MenuListComposition";
import Service_1 from './service_1';
import Service_2 from './service_2';
import Service_4 from './service_4';
import Service_5 from './service_5';

export default function Services(){
    return(
        <>
        <div className="prod">
            <img src={shoef1} alt="adidas" className="left-img"/>
            {/* <Carousel data={slides} currentSlide={slide} setCurrentSlide={setSlide}/> */}
            <div className="prod3">
                <div className="services">
                <p className="ser"><img src={days} alt="free"/><br></br>7 days Free <br></br> Exchange Policy</p>
                <p className="ser"><img src={map} alt="india-map"/><br></br>Made in India <br></br> With Love</p>
                <p className="ser"><img src={QueAns} alt="delivery"/><br></br>Free Delivery <br></br> Within 4-5 days</p>

                </div>
                <MenuListComposition></MenuListComposition>
            </div> 
        </div>

      
        <div className="feature" >
        <p className="ser"><a href="#sec1"><img src={features} alt="features"/><br></br><b style={{color:"black"}}>Features</b></a></p>
        <p className="ser"><a href="#sec2"><img src={reviews} alt="reviews"/><br></br><b style={{color:"black"}}>Reviews</b></a></p>
        <p className="ser"><a href="#sec3"><img src={QueAns} alt="QueAns"/><br></br><b style={{color:"black"}}>FYQ's</b></a></p>
        <p className="ser"><a href="#sec4"><img src={care} alt="care"/><br></br><b style={{color:"black"}}>Care&info</b></a></p>
        <p className="ser"><a href="#sec5"><img src={similarProd} alt="similarProd"/><br></br><b style={{color:"black"}}>Similar Product</b></a></p>
        </div>
        
        <section id="sec1">
            <Service_1/>
       </section>
       
        <section id="sec2">
            <Service_2/>
        </section>
        
        <section id="sec3">
        <AccordionUsage/>
        </section>
     
        <section id="sec4">
            <Service_4/>
        </section>
   
        <section id="sec5">
            <Service_5/>
        </section>
        </>
    );
}


