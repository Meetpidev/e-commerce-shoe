import CreditCard from "./CreditCard";
import "./MethodsStyle.css";

function EMI() {
  return (
   <>
    <div className="method4">

<div className="radio-check">
  <input id="pp-Xwdztw-97" type="radio" name="ppw-instrumentRowSelection" value="SelectableAddCreditCard" />
</div>

<div className="emi">
  <span>EMI</span>

  <CreditCard></CreditCard>
  
</div>
</div>
   </>
  )
}

export default EMI