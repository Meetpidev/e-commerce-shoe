import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xeojjegw"); 

  const Buttonclicked = () => {
    alert("Thank you for your response");
  };

  return (
    <>
      <div className="container-contact">
        <div className="contactus">
          <div className="first">
            <div className="heading">
              <h1>Let&apos;s get in touch</h1>
            </div>
            <div className="info">
              <div className="contact">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="no">+91 485624658</div>
              </div>
              <div className="contact">
                <div className="icon">
                  <MdEmail />
                </div>
                <div className="gmail">
                  <a href="mailto:DRcollection@gmail.com">
                    DRcollection@gmail.com
                  </a>
                </div>
              </div>
              <div className="restgmail">
                <div className="firstm">
                  <p>For Customer Assistant</p>
                  <a href="mailto:Support@collection.com">
                    Support@collection.com
                  </a>
                </div>
                <div className="secondm">
                  <p>For Corporate Enquiry Assistant</p>
                  <a href="mailto:Coorporate@collection.com">
                    Coorporate@collection.com
                  </a>
                </div>
                <div className="thirdm">
                  <p>For PR and Advertising Assistant</p>
                  <a href="mailto:Pr@DRCollection.com">Pr@DRCollection.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <form className="contact-form"
              onSubmit={(e) => {
                handleSubmit(e);
                if (state.succeeded) {
                  Buttonclicked();
                }
              }}
            >
              <div className="group">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="names"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="email names"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="group">
                <textarea
                  id="message"
                  name="message"
                  className="messages"
                  placeholder="Enter Your Message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" className="consub" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;