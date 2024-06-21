import { useState } from "react";
import visa from "../../common/footer/footer-imgs/visa.png";
import mastercard from "../../common/footer/footer-imgs/mastercard.png";
import applepay from "../../common/footer/footer-imgs/applepay.png";
import paypal from "../../common/footer/footer-imgs/paypal.png";
import CreditCardDetails  from "./CreditCardDetails";
import "./MethodsStyle.css";

function CreditCard() {

    const [cardInfo,setCardInfo] = useState(false);

    const handleCardInfoClick = (e) => {
        e.preventDefault();
        setCardInfo(!cardInfo);
    };

    return (
        <>
            <div className="methods">

                <div className="radio-check">
                    <input id="pp-Xwdztw-97" type="radio" name="selection" value="SelectableAddCreditCard" />
                </div>

                <div className="pay">
                    <span>Credit or debit card</span>

                    <div className="pay-cards">

                        <span className="issuer-image">
                            <img src={visa} alt="visa" className="paycard" />
                        </span>

                        <span className="issuer-image">
                            <img src={mastercard} alt="visa" className="paycard" />
                        </span>

                        <span className="issuer-image">
                            <img src={applepay} alt="visa" className="paycard" />
                        </span>

                        <span className="issuer-image">
                            <img src={paypal} alt="visa" className="paycard" />
                        </span>

                        <span className="issuer-image">
                            <img src={visa} alt="visa" className="paycard" />
                        </span>

                        <span className="issuer-image">
                            <img src={visa} alt="visa" className="paycard" />
                        </span>

                    </div>

                    <div className="a-row pmts-add-cc-default-trigger">

                        <img alt=""
                            src="https://cdn3.iconfinder.com/data/icons/bubble-set-sign-control/48/Pluse_3-512.png"
                            className="trigger-common-image pluse"
                        />

                        <img alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStW4LZfllKrMYQLJeCEpdtfU6ZHDReFijm0Q&s"
                            className="trigger-image card-pic"
                        />

                        <a className="pp" href="#" onClick={handleCardInfoClick}>Enter card details</a>
                        {cardInfo && <CreditCardDetails></CreditCardDetails>}
                        <span className="dr">DRCollection accepts all major credit &amp;  cards</span>

                    </div>

                </div>
            </div>
        </>
    )
}

export default CreditCard