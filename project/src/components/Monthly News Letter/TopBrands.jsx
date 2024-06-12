import nike from "../../assets/Top_Brands/NikeLogo.png";
import gucci from "../../assets/Top_Brands/gucci.png";
import lv from "../../assets/Top_Brands/lv.png";
import adidas from "../../assets/Top_Brands/adidas.png";
import skechers from "../../assets/Top_Brands/Skechers-logo.png";
import Cl from "./cl";
import "./newsLetter.css";

function TopBrands() {
  return (
    <>
        <div className="Topbrands">
            <h2 style={{textAlign:"center"}}> Top brands Collections</h2>
                {/* <div className="flex1">
                    <div><img src={nike} className="shoe-img"></img></div>
                        <div><img src={gucci} className="shoe-img"></img></div>
                        <div><img src={lv} className="shoe-img"></img></div>
                        <div><img src={adidas} className="shoe-img"></img></div>
                        <div><img src={skechers} className="shoe-img"></img></div>
                 </div> */}

                 <div className="cl">
                  <Cl></Cl>
                 </div>

        </div>
    </>
  )
}

export default TopBrands  
                  
                    
                 