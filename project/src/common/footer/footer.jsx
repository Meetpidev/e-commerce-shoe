import gps from "./footer-imgs/location.png";
import mcard from "./footer-imgs/mastercard.png";
import paypal from "./footer-imgs/paypal.png";
import visa from "./footer-imgs/visa.png";
import btc from "./footer-imgs/bitcoin.png";
import apay from "./footer-imgs/applepay.png";
import gpay from "./footer-imgs/googlepay.png";

import "./footer.css";


export default function Footer() {
  const number="+91 7622817924";
  const mailid="drcollections.com";
  const add1="xyz, address line 1";
  const add2="xyz, address line 2";
  const citycode="City and Pincode";
  const country="state, country";

  return (
    <>
     <div className="container2">
      <div className="section">
        <h1 className="heading-contact">Contact Us</h1>
        <div className="contact-item">
        <svg className="svgs" xmlns="http://www.w3.org/2000/svg" height="12" width="12"  viewBox="0 0 512 512"><path fill="#fe0101" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <p className="content-contact">{number}</p>
        </div>
        <div className="contact-item">
        <svg className="svgs" xmlns="http://www.w3.org/2000/svg" height="12" width="12"  viewBox="0 0 512 512"><path fill="#ff0000" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
          <p className="content-contact">{mailid}</p>
        </div>
        <div className="contact-item-location">
          <img className="icon-gps" src={gps} alt="gps" />
          <div className="content-contact">
            <p>{add1}</p>
            <p>{add2}</p>
            <p>{citycode}</p>
            <p>{country}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Company</h1>
        <div className="content">
          <div className="spacing">
            <p>About Us</p>
          </div>
          <div className="spacing">
            <p>Careers</p>
          </div>
          <div className="spacing">
            <p>Terms & Conditions</p>
          </div>
          <div className="spacing">
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Customer Service</h1>
        <div className="content">
          <div className="spacing">
            <p>Track Order</p>
          </div>
          <div className="spacing">
            <p>Return Order</p>
          </div>
          <div className="spacing">
            <p>Cancel Order</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Connect with us:</h1>
        <div className="social-contact">
                <a href="#">
                <svg  className="svgs so-ico" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ff0000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                </a> 
                <a href="#">
                <svg  className="svgs" xmlns="http://www.w3.org/2000/svg" height="20" width="20"  viewBox="0 0 448 512"><path fill="#ff0000" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="#">
                <svg  className="svgs" xmlns="http://www.w3.org/2000/svg" height="20" width="20"  viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </a>
                </div>
      </div>

      <div className="section">
        <h1 className="heading">Payment Gateway</h1>
        <div>
          <img className="icons-payment" src={visa} alt="visa" />
          <img className="icons-payment" src={paypal} alt="paypal" />
          <img className="icons-payment" src={mcard} alt="mastercard" />
        </div>
        <div>
          <img className="icons-payment" src={apay} alt="applepay" />
          <img className="icons-payment" src={gpay} alt="googlepay" />
          <img className="icons-payment" src={btc} alt="bitcoin" />
        </div>
      </div>
      <div className="footer">
        <p>Designed and maintained by Clusters of Multi Organizations for Support & Services</p>
      </div>
    </div>
    </>
      );
    }
    
      {/* <div className="footer">

          <div className="sb__footer section__padding">

            <div className="sb__footer-links">
              <div className="sb__footer-links_div">

                <h4>Contact Us</h4>

                <div className="contact flexes">
                <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fe0101" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <p>{number}</p>
                </div>
                
                <div className="email flexes">
                <svg className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                <p>{mailid}</p>
                </div>
                  
               <div className="location flexes">
               <img className="icon-gps" src={gps}></img>
               <pre>
                {`${add1} \n ${add2} \n ${citycode} \n ${country}`}
               </pre>
               </div>

                
              </div>

              <div className="sb__footer-links_div company-details">
              <h4>Company</h4>
                 <a href="#">
                 About Us
                 </a>
                 <a href="#">
                  Process
                 </a>
                 <a href="#">
                  Career
                 </a>
                 <a href="#">
                  privacy Policy
                 </a>
                 <a href="#"> 
                 Blog
                 </a>
               
              </div>

              <div className="sb__footer-links_div">
              <h4>Customer Services</h4>
              <a href="#">
                  <p>Track Order</p>
                </a>
                <a href="#">
                  <p>Return Order</p>
                </a>
                <a href="#">
                  <p>Cancel Order</p>
                </a>
              </div>

              <div className="sb__footer-links_div">
              <h4>Cotact with Us</h4>
              <div className="social-contact">
                <a href="#">
                <svg  className="svgs so-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff0000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                </a> 
                <a href="#">
                <svg  className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff0000" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="#">
                <svg  className="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </a>
                </div>
              </div>

              <div className="sb__footer-links_div social">
               <h4>Payment Getway</h4>
               <div className="vpm">
               <img className="icons-payment" src={visa}></img>
               <img className="icons-payment" src={paypal}></img>
               <img className="icons-payment" src={mcard}></img>
               </div>
              <div className="bag">
                <img className="icons-payment" src={apay}></img>
                <img className="icons-payment" src={gpay}></img>
                <img className="icons-payment" src={btc}></img>
              </div>
              </div>

            </div>

            <hr /><hr />

            <div className="sb__footer-below">
              <div className="sb__footer-copyright">
               <p>
                @{new Date().getFullYear} CodeInn All right reserved.
               </p>
              </div>
              <div className="sb__footer-below-links">
              <a href="#">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Cookie Declarations</p>
                </div>
              </a>

              </div>

            </div>
          </div>
      </div>
    </> */}

