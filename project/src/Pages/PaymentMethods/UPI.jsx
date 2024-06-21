import "./MethodsStyle.css";

function UPI() {
  return (
    <>
        <div className="method3">

<div className="radio-check">
  <input id="pp-Xwdztw-97" type="radio" name="ppw-instrumentRowSelection" value="SelectableAddCreditCard" />
</div>

<div className="upi">
  <span style={{marginLeft:".3rem"}}>Other UPI Apps</span>

  <div className="upi-info">
     <div className="info">
       <input type="text" id="wd" placeholder="Enter UPI ID" name="sif" className="upId" />
       <span>
       <input name="Event" className="button-text" type="submit" />
       </span>
     <p>The UPI ID is in the format of name/phone number@bankname</p>
     </div>
  </div>
</div>

</div>
    </>
  )
}

export default UPI