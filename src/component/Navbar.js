import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const[down,setDown] = useState(false);
  const[downt,setDownt] = useState(false);
  const[downth,setDownth] = useState(false);


  return (
    <>
      {/* -------------------Top-nav------------------- */}
      <div className="top-nav">
        <div className="topnav-row">
          <div className="topnav-col">
            <img src="img/logo.png" alt=" load logo..." />
          </div>
          <div className="topnav-col topnav-col-1">
            <div className="topnav-pad topnav-bor">
              <p>Emergency Help</p>
              <h5><a href="tel:6261157702">+91 6261157702</a></h5>
            </div>
            <div className="topnav-add topnav-add-1 topnav-pad">
              <i class="fa-solid fa-location-dot"></i>
              <p>
                Shri Siddhi Avenue, Bistan Rd, Khargone, Madhya Pradesh 451001
              </p>
            </div>
            <div className="topnav-add topnav-pad">
              <i class="fa-regular fa-clock"></i>
              <div>
                <p>Monday - Saturday - 9:00am - 8:00pm</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* ---------------------------Menu-bar---------------------------- */}

      <div className="menu-bar pc-menubar">
        <div className="menubar-row">
         
          <div className="menubar-col-1">
            <ul>
              <li><Link to="/">Home</Link></li>

              <li><a href="#">About Us <button onClick={()=>setDown(!down)} className="drop-icon">{down?<i class=" drop-icon fa-solid fa-minus"></i> : <i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
             
            {
              down?<div className="drop-link" onClick={()=>setDown(!down)}>
              <li><Link to="/aboutdoctor"> Dr. Shubham Jaiswal</Link></li>
             {/* <li><a href="#">Gallery</a></li> */}
              </div>:""
            }

              </li>
              <li><a href="#">Specialized Services<button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i>:<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li><Link to="/nervoussystem">Head / Brain & Nervous System </Link></li>
               <li><Link to="/respiration">Respiratory System </Link></li>
               <li><Link to="/urinary">Urinary system</Link></li>
               <li><Link to="/heart">Heart & Blood Circulation </Link></li>
               <li><Link to="/liver">Liver & Gallbladder</Link></li>
               <li><Link to="/eyesight">Eyes/ Sight</Link></li>
               <li><Link to="/mouth">Mouth, Tongue & Throat</Link></li>
              </div>:""
            }
              </li>

              {/* <li><Link to="/treatment">Treatments<button onClick={()=>setDownth(!downth)} className="drop-icon">{downth?<i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button></Link>
              {
              downth?<div className="drop-link" onClick={()=>setDownth(!downth)}>
              <li><a to="/rootcanal">Root Canal Treatment</a></li>
               <li><a href="#">Crown & Bridges</a></li>
               <li><a href="#">Dentures</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Dental Implant</a></li>
               <li><a href="#">Smile Makeover</a></li>
               <li><a href="#">Braces & Aligners</a></li>
               <li><a href="#">Kids Dentistry</a></li>
              </div>:""
            }
              </li> */}

              <li><Link to="/treatment">Treatments</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="menu-bar mobile-menubar">
        <div className="menubar-row">
         
          <div className={show?"menubar-mobile":"menubar-col-1"}>
            <ul>
            <button className="close-menu" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-xmark"></i>:null}</button>
              <li  onClick={()=>setShow(!show)}><Link to="/">Home</Link></li>
              <li><a href="#">About Us <button onClick={()=>setDown(!down)} className="drop-icon">{down?<i class=" drop-icon fa-solid fa-minus"></i> : <i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
             
            {
              down?<div className="drop-link" onClick={()=>setDown(!down)}>
              <li  onClick={()=>setShow(!show)}><Link to="/aboutdoctor"> Dr. Shubham Jaiswal</Link></li>
              </div>:""
            }

              </li>
              <li><a href="#">Specialized Services<button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i>:<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li  onClick={()=>setShow(!show)}><Link to="/nervoussystem">Head / Brain & Nervous System </Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/respiration">Respiratory System </Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/urinary">Urinary system</Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/heart">Heart & Blood Circulation </Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/liver">Liver & Gallbladder</Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/eyesight">Eyes/ Sight</Link></li>
               <li  onClick={()=>setShow(!show)}><Link to="/mouth">Mouth, Tongue & Throat</Link></li>
              </div>:""
            }
              </li>

             

              <li  onClick={()=>setShow(!show)}><Link to="/treatment">Treatments</Link></li>
              <li  onClick={()=>setShow(!show)}><Link to="/gallery">Gallery</Link></li>
              <li  onClick={()=>setShow(!show)}><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <button className="menu-icon" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-bars"></i>}</button>
        </div>
      </div>
     

    </>
  );
};

export default Navbar;
