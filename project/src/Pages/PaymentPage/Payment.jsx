import { FaRegTimesCircle } from 'react-icons/fa';
import { useState,useRef } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import shoe from '../../assets/Products_card/Shoes_1.png';
import CreditCard from "../PaymentMethods/CreditCard";
import NetBanking from "../PaymentMethods/NetBanking";
import UPI from "../PaymentMethods/UPI";
import EMI from "../PaymentMethods/EMI";
import Cash from "../PaymentMethods/Cash";
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from "../../components/Captcha Validation/Captcha";
import PromoCode from '../../components/PromoCodeDiscount/PromoCode';
import './Payment.css';
import "./payments.css";

function Payment() {

  const [verifiedbtn,setverifiedbtn] = useState(false);
  
  const [formData, setFormData] = useState({
    country: '',
    fullName: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    area: '',
    city: '',
    state: '',
    defaultAddress: false,
  });

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [total, setTotal] = useState(68.00); 
        
  const addCodeClick=()=>{
    setIsInputVisible(true);
  }

  const inputChange=(e)=>{
    setPromoCode(e.target.value);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Country: " + formData.country + ", " +
      "Full Name: " + formData.fullName + ", " +
      "Mobile Number: " + formData.mobileNumber + ", " +
      "Pincode: " + formData.pincode + ", " +
      "Address: " + formData.address + ", " +
      "Area: " + formData.area + ", " +
      "City: " + formData.city + ", " +
      "State: " + formData.state + ", " +
      "Default Address: " + formData.defaultAddress
  );
  captchaRef.current.reset();
  setverifiedbtn(false);
  };

  let onChange = (value)  => {
    console.log("Captcha value:", value);
    setverifiedbtn(true);
  }

  const handleApplyDiscount = (discountedTotal) => {
    setTotal(discountedTotal);
  }

  let captchaRef = useRef(null);

          
  return (
    <>
    <h2 className="cheout">Checkout</h2>

    <div className="checkOut">

          <div className="mainpayment">
            <div className="review">
             <h3 className="adrs">Your address</h3>

              <form className="ship-form" onSubmit={handleSubmit}>

                <div className="form-group">
                  <label>Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange}/>
                </div>

                <div className="form-group">
                  <label>Full Name(First and Last name)</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}/>
                 </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange}/>
                </div>

                <div className="form-group">
                  <label>Pincode</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="6 digits [0-0] PIN Code"/>
                </div>

                <div className="form-group">
                  <label>Flat, House no., Building, Company, Apartment</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                </div>

                <div className="form-group">
                  <label>Area, Street, Sector, Village</label>
                   <input type="text" name="area" value={formData.area} onChange={handleChange}/>
                </div>

                <div className="oneline">

                <div className="form-group2">
                  <input type="text" name="city" placeholder="Town/City" value={formData.city} onChange={handleChange}/>
                </div>

                <div className="form-group2">

                <div className="state">
                 <Form.Group as={Col} controlId="formGridState" className="botf2">
                  <Form.Select defaultValue="State" name="state" className="selection" value={formData.state} onChange={handleChange}>
                   <option>State</option>
                   <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                   <option value="Andhra Pradesh">Andhra Pradesh</option>
                   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                   <option value="Assam">Assam</option>
                   <option value="Bihar">Bihar</option>
                   <option value="Chhattisgarh">Chhattisgarh</option>
                   <option value="Chandigarh">Chandigarh</option>
                   <option value="Delhi">Delhi</option>
                   <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                   <option value="Goa">Goa</option>
                   <option value="Gujarat">Gujarat</option>
                   <option value="Haryana">Haryana</option>
                   <option value="Himachal Pradesh">Himachal Pradesh</option>
                   <option value="Jharkhand">Jharkhand</option>
                   <option value="Karnataka">Karnataka</option>
                   <option value="Kerala">Kerala</option>
                   <option value="Lakshadweep">Lakshadweep</option>
                   <option value="Madhya Pradesh">Madhya Pradesh</option>
                   <option value="Maharashtra">Maharashtra</option>
                   <option value="Manipur">Manipur</option>
                   <option value="Meghalaya">Meghalaya</option>
                   <option value="Mizoram">Mizoram</option>
                   <option value="Nagaland">Nagaland</option>
                   <option value="Odisha">Odisha</option>
                   <option value="Punjab">Punjab</option>
                   <option value="Puducherry">Puducherry</option>
                   <option value="Rajasthan">Rajasthan</option>
                   <option value="Sikkim">Sikkim</option>
                   <option value="Tamil Nadu">Tamil Nadu</option>
                   <option value="Telangana">Telangana</option>
                   <option value="Tripura">Tripura</option>
                   <option value="Uttar Pradesh">Uttar Pradesh</option>
                   <option value="Uttarakhand">Uttarakhand</option>
                   <option value="West Bengal">West Bengal</option>
                  </Form.Select>
                 </Form.Group>
                 </div>

                 </div>
              </div>

              <div className="default-adrs">

              <input 
              type="checkbox" 
              name="defaultAddress" 
              value="true" 
              aria-label="Make this my default address"  
              checked={formData.defaultAddress} 
              onChange={handleChange}
              />

              <span><span className="defaultt">Make this my default address</span></span>
              </div>

             <div className="verification">

              <div className="captcha">
                <Captcha></Captcha>
              </div>

              <div className="robo">
                <ReCAPTCHA ref={captchaRef} sitekey="6LdNNP4pAAAAADHvPHTGedpQ3mNfgbOREFbhcw0V" onChange={onChange} />,
              </div>

              </div>

                <button type="submit" className="submit" disabled={!verifiedbtn}>Submit</button>
            </form>
            </div>
           
            <h3 className="adrs" style={{marginTop:"3rem"}}>Select a payment method</h3>

            <div className="payment-methods">
              <CreditCard></CreditCard><hr />
              <NetBanking></NetBanking> <hr />
              <UPI></UPI><hr />
              <EMI></EMI><hr />
              <Cash></Cash>
            </div>

        </div>

        

        <div id="right">
    
                <FaRegTimesCircle id="close"/>
                <div id='head' className='top'>
                <div style={{background:"#F5F7F9"}}>
                         <img src={shoe} id='shoe'></img>
                  </div>
                    <div>
                      <div style={{width: "150px"}}>
                           Nike Mens Joyride Run Flyknit Shoes
                        </div><br/>
                       <div style={{fontWeight:"bold"}}>$68.00</div>
                     </div>
                    
               </div>

               <PromoCode initialTotal={68.00} onApplyDiscount={handleApplyDiscount}></PromoCode>
                 
                <div className="a-row1"><a href="" style={{fontSize:".76rem"}}>How are delivery costs calculated? &#160; Why didnt I qualify for FREE Delivery?</a></div>

                <br/>
                <div className="a-box-inner">
             
                
            </div>
           
            </div>
    </div>
    </>
  )
}
export default Payment

// import { useState } from 'react';
// import './Payment.css';
// import { FaRegSquareCheck, FaRegSquare} from 'react-icons/fa6';
// import { FaChevronDown,FaRegTimesCircle } from 'react-icons/fa';
// import Option from './Arrow_button.jsx';
// import visa from '../../assets/Payment_Page/Visa.png';
// import master from '../../assets/Payment_Page/masterCard.png';
// import shoe from '../../assets/Products_card/Shoes_1.png';

// export default function ProductPage(){
//     const [isInputVisible, setIsInputVisible] = useState(false);
//     const [promoCode, setPromoCode] = useState("");
//     const [showFullAddress, setShowFullAddress] = useState(false);

//     const addCodeClick=()=>{
//         setIsInputVisible(true);
//     }

//     const inputChange=(e)=>{
//         setPromoCode(e.target.value);
//     }

//     const toggleFullAddress = () => {
//         setShowFullAddress(!showFullAddress);
//     }

//     return(
//         <div className='top'>
//             <div id="left">
//                 <nav>
//                     <div className="top2">
//                         <div className="done">
//                             <FaRegSquareCheck/><span>Cart</span>
//                         </div>
//                         <div className="done">
//                             <FaRegSquareCheck/><span>Shipping</span>
//                         </div>
//                         <div className="todo">
//                             <FaRegSquare/><span>Checkout</span>
//                         </div>
//                     </div>
//                 </nav>

//                 <div className="box1">
//                     <h2>Payment Method</h2>
//                     <Option text="Paytm"/>
//                     <Option text="Google Pay"/>
//                     <Option text="Debit Card"/>
//                     <div id="debit">
//                         Debit Card
//                         <form>
//                             <div className='cards'>
//                                 <img src={master} className='cardImg'></img>
//                                 <label>Axim Bank</label>
//                                 <label>**** **** **** 4578</label>
//                                 <input type="radio" name="method"></input>
//                             </div>
//                             <div className='cards'>
//                                 <img src={visa} className='cardImg'></img>
//                                 <label>HDFC Bank</label>
//                                 <label>**** **** **** 4521</label>
//                                 <input type="radio" name="method"></input>
//                             </div>
//                         </form>
                        
//                     </div>
//                 </div>
//             </div>

//             <div id="right">
//                 <FaRegTimesCircle id="close"/>
//                 <div id='head' className='top'>
//                     <div style={{background:"#F5F7F9"}}>
//                         <img src={shoe} id='shoe'></img>
//                     </div>
//                     <div>
//                         <div style={{width: "150px"}}>
//                             Nike Men's Joyride Run Flyknit Shoes
//                         </div><br/>
//                         <div style={{fontWeight:"bold"}}>$66.00</div>
//                     </div>
                    
//                 </div>
//                 <div className='bill'>
//                     <div>Offers</div>
//                     <div className='num'>{isInputVisible? (<textarea value={promoCode} onChange={inputChange}/>):(<span onClick={addCodeClick} style={{color:"blue"}}>Add Code</span>)}</div>
//                 </div><br/>
                
//                 <div className='bill'>
//                     Payment details
//                 </div>
//                 <hr/>

//                 <div className='bill'>
//                     <div>
//                         <div>Order</div>
//                         <div>Delivery</div>
//                     </div>
//                     <div className='num'>
//                         <div>$66.00</div>
//                         <div>$2.00</div>
//                     </div>
//                 </div>
//                 <hr/>

//                 <div className='bill' style={{fontWeight:"bold"}}>
//                     <div>Total</div>
//                     <div className='num'>$68.00</div>
//                 </div>

//                 <div className='bill'>
//                     <div>Address</div>
//                     <div className='num' style={{width:"90px"}}>{showFullAddress ? "12, WLS Regancy, New Hampshire, USA" : "12, WLS Regancy..."}<FaChevronDown onClick={toggleFullAddress} /></div>
//                 </div>

//                 <br/>

//                 <button className='Pay'>Pay Now</button>
                
//             </div>

            
//         </div>
//     );
// }