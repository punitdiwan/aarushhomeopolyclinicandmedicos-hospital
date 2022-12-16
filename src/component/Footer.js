import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-col footer-col-1">
            <h4>Best Homeopathic Doctor in Khargone.</h4>
            <p>
            Homoeopathy consultant. Expertise in all Homeopathic treatments like Pimples, Pigmentation Allergy, Stomach Disorders, Head / Brain & Nervous System, Respiratory Disorders, Urinary system, Heart & Blood Circulation, Liver & Gallbladder, Eyes/ Sight , Mouth, Tongue & Throat Psychological Disorders, Depression Treatment, Children Allergies Treatment, Female Disorders, and incurable cases like cancer, cerebral palsy, ADHD, and many other illnesses..
            </p>
          </div>
          <div className="footer-col footer-col-2">
            <h4>Get In Touch</h4>
            <p>
            # Shri Siddhi Avenue, Bistan Rd, Khargone, Madhya Pradesh 451001
            </p>
  
            <div className="contact-detail">
              <p>Contact Number : <a href="tel: 62611 57702">+91 62611 57702 </a></p>
              <p>Contact Number : <a href="tel: 99775 65674">+91 99775 65674</a></p>
              <p>Email :  <a href="mailto:shubhamjaiswal1707@gmail.com">shubhamjaiswal1707@gmail.com</a></p>
            </div>
            <div className="footer-icon">
              <a href="https://www.facebook.com/aarushhomeoofficial/photos">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://instagram.com/aarush_homoeo_polyclinc?igshid=MWI4MTIyMDE=">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.0940160368004!2d75.61543371494609!3d21.815298085577684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb0b8f51e4a29c93!2zMjHCsDQ4JzU1LjEiTiA3NcKwMzcnMDMuNCJF!5e0!3m2!1sen!2sin!4v1670934457038!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright © Dr. Shubham Jaiswal</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <i class="fa-sharp fa-solid fa-heart"></i> by{" "}
              <a href="https://maitretech.com/">maitretech.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
