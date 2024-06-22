import { useState } from 'react';
import "./PromoCode.css";

const PromoCode = ({ initialTotal, onApplyDiscount }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(initialTotal); 

  const validatePromoCode = () => {
    if (promoCode === "3bfk4444") {
      setDiscount(0.15); 
      const discountedTotal = initialTotal * (1 - 0.15);
      setTotal(discountedTotal.toFixed(2)); 
      onApplyDiscount(discountedTotal.toFixed(2));
    } else {
      setDiscount(0);
      setTotal(initialTotal); 
      onApplyDiscount(initialTotal);
    }
  }

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  }

  const handlePromoCodeApply = () => {
    validatePromoCode();
  }

  return (
    <div>
      <div className='bill'>
        <div>Offers</div>
        <div className='num'>
          {isInputVisible ? (
            <div>
            <input
                type="text"
                value={promoCode}
                onChange={handlePromoCodeChange}
                className="promo-input"
                placeholder="Enter Promo Code"
              />
              <button onClick={handlePromoCodeApply} className='apply-button'>Apply</button>
            </div>
          ) : (
            <span onClick={() => setIsInputVisible(true)} style={{color:"blue", cursor:"pointer"}}>Add Code</span>
          )}
        </div>
      </div>

      <div className='bill' style={{marginTop:"2rem"}}>Payment details </div> <hr />

    <div className='bill'>
        <div>
           <div>Order</div>
                <div>Delivery</div>
            </div>
        <div className='num'>
            <div>$66.00</div>
            <div>$2.00</div>
        </div>
    </div><hr/>


      <div className='bill'>
        <div>Total</div>
        <div className='num'>${total}</div>
      </div>
      {
        discount > 0 && (
        <div className="save">You Are Saving 15%</div>
      ) 
      }
    </div>
  );
};

export default PromoCode;
