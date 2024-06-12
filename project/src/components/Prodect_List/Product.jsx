import Shoes_1 from "../../assets/Products_card/Shoes_1.png";
import Shoes_2 from "../../assets/Products_card/Shoes_2.png";
import Shoes_3 from "../../assets/Products_card/Shoes_3.png";
import Shoes_4 from "../../assets/Products_card/Shoes_4.png";
import Shoes_5 from "../../assets/Products_card/Shoes_5.png";
import Shoes_6 from "../../assets/Products_card/Shoes_6.png";

import "./Product.css";

function Product({ title, idx }) {
  let oldprices = [
    "$2,000",
    "$2,000",
    "$2,000",
    "$3,000",
    "$2,000",
    "$2,000",
  ];
  let image = [ Shoes_1,Shoes_2,Shoes_3,Shoes_4,Shoes_5,Shoes_6 ];

  return (
    <>
      <div>
        <div className="product-card">
          <div className="image-box">
            <img src={image[idx]} alt="sample shoe" className="product-img" />
          </div>
        </div>

        <div>
          <div className="product-card-title">{title}</div>
          <div className="product-card-price">
            <span style={{color:"black", paddingRight:".6rem"}}>Rs</span><span style={{ color: "red" }}>{oldprices[idx]}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
