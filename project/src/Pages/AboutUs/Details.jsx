import logo from "../../assets/Company_Logo/logo.jpg";
import TopBrands from "../../components/Monthly News Letter/TopBrands.jsx";
import "./AboutUs.css";


function Details() {
  return (
    <>
        <div className="details_container">

          <div className="details_container2">

              <div className="companylogo">
                 <img src={logo} alt="CompanyLogo" />
              </div>

              <div className="information">

                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe labore soluta, odio quo a. Sed hic consequatur accusamus alias blanditiis in nihil unde odit dignissimos facilis velit, illum qui.
                Sapiente, nemo! Amet optio necessitatibus consectetur quaerat natus nisi ipsum asperiores explicabo debitis dolore? Distinctio tempora magnam dolorem libero minus dignissimos, labore facere non. Esse doloremque reiciendis alias inventore odio.
                </p>

                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe labore soluta, odio quo a. Sed hic consequatur accusamus alias blanditiis in nihil unde odit dignissimos facilis velit, illum qui.
                Sapiente, nemo! Amet optio necessitatibus consectetur quaerat natus nisi ipsum asperiores explicabo debitis dolore? Distinctio tempora magnam dolorem libero minus dignissimos, labore facere non. Esse doloremque reiciendis alias inventore odio.
                </p>

                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe labore soluta, odio quo a. Sed hic consequatur accusamus alias blanditiis in nihil unde odit dignissimos facilis velit, illum qui.
                Sapiente, nemo! Amet optio necessitatibus consectetur quaerat natus nisi ipsum asperiores explicabo debitis dolore? Distinctio tempora magnam dolorem libero minus dignissimos, labore facere non. Esse doloremque reiciendis alias inventore odio.
                </p>

              </div>
          </div>

          <div className="discount">
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
          </div>
          
          <div className="topbrandss">
            <TopBrands></TopBrands>
          </div>
          
            
        </div>
    </>
  )
}

export default Details