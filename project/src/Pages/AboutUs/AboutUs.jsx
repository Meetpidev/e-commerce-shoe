import backGroundImg from "../../assets/Product_title/img4.jpg";
import "./AboutUs.css";
import Details from "./Details";

function AboutUs() {
  return (
   <>
      <div className="about_title">

        <img src={backGroundImg} alt="" />

        <div className="title">
            <h1>Best &nbsp;&nbsp;<span style={{color:"red"}}>2024</span></h1>
            <h1>Collections</h1>
            <p>Find your shoes that suits you the best and comfortble</p>
            <button className="shop_now">Shop Now</button>
        </div>
      </div>
      
      <h1 className="about">About Us</h1> 
         <div className="company_details">
           <Details></Details>
         </div>
   </>
  )
}

export default AboutUs