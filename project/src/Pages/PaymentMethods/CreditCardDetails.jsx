import { useState,useRef } from "react";
import visa from "../../common/footer/footer-imgs/visa.png";
import "./MethodsStyle.css";
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../../Secrects";

const CreditCardDetails = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expirationMonth, setExpirationMonth] = useState('01');
    const [expirationYear, setExpirationYear] = useState('2024');
    const [securityCode, setSecurityCode] = useState('');
    const [verified,setverified] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        cardNumber,
        nameOnCard,
        expirationMonth,
        expirationYear,
        securityCode,
      });
      setverified(false);
      captchaRef2.current.reset();
    };

    let Change = (value)  => {
      console.log("Captcha value:", value);
      setverified(true);
    }
  
    let captchaRef2 = useRef(null);
  
    return (
      <div className="credit-card-form">
      <div className="card-titles">
       <h3>Add a credit or debit card</h3>
       </div>
       
        <form onSubmit={handleSubmit}>
        
        <div className="formnd">
          <div className="user-card">
            <div className="form-group">
            <label>Card number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Name on card</label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              required
            />
          </div>
          <div className="form-group expiration-date">
            <label>Expiration date</label>
            <div>
              <select
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                required
              >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                required
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>
              Security Code (CVV/CVC)
              <a href="#" className="security-code-info">(What's this?)</a>
            </label>
            <input
              type="text"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              required
            />
            </div>

            <div className="form-group">
            <ReCAPTCHA ref={captchaRef2} sitekey={SITE_KEY} onChange={Change} />,
            </div>
        </div>
          
        <div className="acceptable">
           <div className="accepted-cards">
            <p>DRCOLLECTION accepts all major credit and debit cards:</p>
            <div className="cards-visa">
              <img src={visa} alt="Visa" />
              <img src={visa} alt="MasterCard" />
              <img src={visa} alt="Amex" />
              <img src={visa} alt="Discover" />
            </div>
          </div>
          </div>
          </div>
         
     <hr />
          <div className="form-actions">
            <button type="button" className="cancle-pay" onClick={() => console.log('Cancel clicked')}>Cancel</button>
            <button type="submit" ref={captchaRef2} disabled={!verified} className="payment-submit">Add your card</button>
          </div>
          
        </form>

        

      </div>
     
    );
  };
  
  export default CreditCardDetails;