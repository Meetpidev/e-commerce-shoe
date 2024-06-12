// import image from "../components-imges/discount-imges/img4.jpg";

import "./discount.css";
function Discount() {
  return (
    <>
      <div className="discount-page">
            <h1 className="discount-title-content">

              <span className="get-discount">Get discount&nbsp;</span>

              Get{" "}
              <span className="get-discount">discount</span>{" "}

              for membership
            </h1>
            <p className="discount-description">
              New membership will get 20% discount for first purchase
            </p>
            <button className="bjoin">
              Join now
            </button>
          </div>
      
    </>
  );
}

export default Discount;
