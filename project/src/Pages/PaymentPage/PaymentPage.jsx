import React, { useState } from 'react';
import './PaymentPage.css';
import { FaRegSquareCheck, FaRegSquare} from 'react-icons/fa6';
import { FaChevronDown,FaRegTimesCircle } from 'react-icons/fa';
import Option from './Arrow_button.jsx';
import visa from './Visa.png';
import master from './masterCard.png';
import shoe from './shoe.png';

export default function ProductPage(){
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [promoCode, setPromoCode] = useState("");
    const [showFullAddress, setShowFullAddress] = useState(false);

    const addCodeClick=()=>{
        setIsInputVisible(true);
    }

    const inputChange=(e)=>{
        setPromoCode(e.target.value);
    }

    const toggleFullAddress = () => {
        setShowFullAddress(!showFullAddress);
    }

    return(
        <div className='top'>
            <div id="left">
                <nav>
                    <div className="top">
                        <div className="done">
                            <FaRegSquareCheck/><span>Cart</span>
                        </div>
                        <div className="done">
                            <FaRegSquareCheck/><span>Shipping</span>
                        </div>
                        <div className="todo">
                            <FaRegSquare/><span>Checkout</span>
                        </div>
                    </div>
                </nav>

                <div className="box1">
                    <h2>Payment Method</h2>
                    <Option text="Paytm"/>
                    <Option text="Google Pay"/>
                    <Option text="Debit Card"/>
                    <div id="debit">
                        Debit Card
                        <form>
                            <div className='cards'>
                                <img src={master} className='cardImg'></img>
                                <label>Axim Bank</label>
                                <label>**** **** **** 4578</label>
                                <input type="radio" name="method"></input>
                            </div>
                            <div className='cards'>
                                <img src={visa} className='cardImg'></img>
                                <label>HDFC Bank</label>
                                <label>**** **** **** 4521</label>
                                <input type="radio" name="method"></input>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>

            <div id="right">
                <FaRegTimesCircle id="close"/>
                <div id='head' className='top'>
                    <div>
                        <img src={shoe} id='shoe'></img>
                    </div>
                    <div>
                        <div style={{width: "150px"}}>
                            Nike Men's Joyride Run Flyknit Shoes
                        </div><br/>
                        <div style={{fontWeight:"bold"}}>$66.00</div>
                    </div>
                    
                </div>
                <div className='bill'>
                    <div>Offers</div>
                    <div className='num'>{isInputVisible? (<textarea value={promoCode} onChange={inputChange}/>):(<span onClick={addCodeClick} style={{color:"blue"}}>Add Code</span>)}</div>
                </div><br/>
                
                <div className='bill'>
                    Payment details
                </div>
                <hr/>

                <div className='bill'>
                    <div>
                        <div>Order</div>
                        <div>Delivery</div>
                    </div>
                    <div className='num'>
                        <div>$66.00</div>
                        <div>$2.00</div>
                    </div>
                </div>
                <hr/>

                <div className='bill' style={{fontWeight:"bold"}}>
                    <div>Total</div>
                    <div className='num'>$68.00</div>
                </div>

                <div className='bill'>
                    <div>Address</div>
                    <div className='num' style={{width:"90px"}}>{showFullAddress ? "12, WLS Regancy, New Hampshire, USA" : "12, WLS Regancy..."}<FaChevronDown onClick={toggleFullAddress} /></div>
                </div>

                <br/>

                <button className='Pay'>Pay Now</button>
                
            </div>

            
        </div>
    );
}