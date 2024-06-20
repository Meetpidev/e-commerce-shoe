import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <div className="heading">
            <h1>Contact US</h1>
          </div>
          <div className="info">
            <div className="call">
              <div className="icoon">
                <FaPhoneAlt className="phone"/>
              </div>
              <div className="callUs">Call Us</div>
              <div className="no">+91 485624658</div>
            </div>

            <div className="mail">
              <div className="icoon">
                <MdEmail className="email"/>
              </div>
              <div className="email_us">Email Us</div>
              <div className="gmail">
                <a href="">DRcollection@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="first-part">

            <div className="first">
              <p>For Customer Asistant</p>
              <a href="#" className="msg"><i>Support@collection.com</i></a>
            </div>

            <div className="second">
              <p>For Coperate Enquiry Asistant</p>
              <a href="#" className="msg"><i>Coorporate@collection.com</i></a>
            </div>

            <div className="third">
              <p>For PR and Advertising Asistant</p>
              <a href="#" className="msg"><i>Pr@DRCollection.com</i></a>
            </div>

          </div>
          <div className="second-p">
            <p>

              <strong>Street:</strong> 601, Plot No 15, Megor Arcade, M.g.road<br></br> Nr
              Sindhuwadi, Ghatkoper (east)
            </p>
            <p><strong>City:</strong> Mumbai</p>
            <p><strong>State/province/area:</strong> Maharashtra</p>
            <p><strong>Zip code:</strong> 400077</p>
            <p><strong>Country:</strong> India</p>
            <p style={{color:"red"}}><strong>Mon-Sat (9:00 AM to 7:00 PM)</strong></p>
            
          </div>
        </div>
        </div>
    </>
  );
}


