import logo from "../../assets/Company_Logo/logo.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Authentication from "./Authetication";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
   const [showMediaIcons, setShowMediaIcons] = useState(false);
    
    return(
    <>
    <div className="container1">
        <nav className="main-nav">
            <div className="logo">
                 <img src={logo} alt="" className="logo"/>
            </div>

            <div className="menu-link">

              <ul>

              <Link to={"/"}>
                <li>
                  <a>Home</a>
                </li>
                </Link>
                
                <Link to={"/shop"}>
                <li>
                  <a>Shop</a>
                </li>
                </Link>

                <Link to={"/about"}>
                 <li>
                  <a>About</a>
                </li>
                </Link>
                
                <Link to={"/contact"}>
                <li>
                  <a>Contact</a>
                </li>
                </Link>

              </ul>
            </div>

            <div className={ showMediaIcons ? "mobile-menu-link" : "destop" } >
              <ul>
               <li>
                <a href="#"> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 576 512"><path fill="#000000" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                  <span>Home</span>
                </a>
               </li>

              <li>
                <a href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"  viewBox="0 0 640 512"><path fill="#000000" d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/></svg>
                 <span>Shop</span> 
                </a>
              </li>

              <li>
                <a href="#">
                 <svg xmlns="http://www.w3.org/2000/svg"  height="22" width="22" viewBox="0 0 576 512"><path fill="#000000" d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg>
                 <span> About</span> 
                </a>
              </li>
   
              <li>
                <a href="#">
                 <svg xmlns="http://www.w3.org/2000/svg"  height="22" width="22" viewBox="0 0 512 512"><path fill="#000000" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                 <span>Contact</span>
                </a>
              </li>

            <div className="col2">
              <li>
                <a href="#" className="icon-images">
                
                <div className="accunt" onClick={<Authentication></Authentication>}>
                <AccountCircleIcon className="img"></AccountCircleIcon>
                </div>
                </a>
              </li>

              <li>
                <a href="#" className="icon-images">
                <EmailIcon className="img"></EmailIcon>
                </a>
              </li>
            </div>
         </ul>
       </div>


      <div className="user-info">
         <ul className="user-info-desktop">
             <li>
               <a href="#" className="icon-images">
                 <AccountCircleIcon className="img"></AccountCircleIcon>
                 </a>
              </li>

              <li>
                <a href="#" className="icon-images">
                <EmailIcon className="img"></EmailIcon>
                </a>
              </li>
          </ul>

       <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
           </a>
        </div>
      </div>
    </nav>
  </div>  
</>
  );
}

