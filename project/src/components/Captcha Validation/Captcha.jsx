import { useRef, useState } from 'react';
import captchaImg from './captcha.jpg';

function Captcha() {

    const [user, setUser] = useState({
        username:""
    });

    const captchaRef = useRef(null);
  
    const characters ='abc123';
  
    function generateString(length) 
    {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;
     }
  
     const captcha = generateString(6) // Function called here and save in captcha variable
  
     let handleChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       user[name] = value;
       setUser(user);
    }
  
    const onSubmit = e => {
  
      var element =  document.getElementById("succesBTN");
      var inputData = document.getElementById("inputType");
       element.style.cursor = "wait";
       element.innerHTML  = "Checking...";
       inputData.disabled = true;
       element.disabled = true;
  
        var myFunctions = function(){
            if(captcha == user.username)
            {
              element.style.backgroundColor   = "green";
              element.innerHTML  = "Captcha Verified";
              element.disabled = true;
              element.style.cursor = "not-allowed";
              inputData.style.display = "none";
              
            }
            else
            {
              element.style.backgroundColor   = "red";
              element.style.cursor = "not-allowed";
              element.innerHTML  = "Not Matched";
              element.disabled = true;
  
              var myFunction = function(){
                element.style.backgroundColor   = "#007bff";
                element.style.cursor = "pointer";
                element.innerHTML  = "Verify Captcha";
                element.disabled = false;
                inputData.disabled = false;
                inputData.value ='sssss';
              };
              setTimeout(myFunction,5000);
            }
          }   
          setTimeout(myFunctions,5000); 
          captchaRef.current.reset();
    };

    
     return (
      <div className="containers" style={{marginTop:"1rem"}}>
        <div className="row mt-4">
            <div className="col-md-4">
            </div>
           
            <div className="col-md-8">
              <h4 id="captcha" style={{position:"absolute", left:"17rem", fontSize:"1.4rem", transform:"translateY(-.7rem)"}}>{captcha}</h4>
  
              <div className="form-group row">
                <img src={captchaImg} className="cimg" style={{height:"50px"}}/> 
              </div>
  
              <div className="form-group row">
                <input type="text" id="inputType" className="form-control" placeholder="Enter Captcha"
                  name="username"  onChange={handleChange} autoComplete="off" style={{width:"46%"}}
                  />
                <button type="button" id="succesBTN" ref={captchaRef}  onClick={onSubmit} className="Verify" style={{marginLeft:"1rem", padding:"8px", background:"#007bff", color:"white", border:"none"}}>Verify Captcha</button>
              
              </div>
          
             </div>
          </div>
        </div>
      );
  }
  export default Captcha;