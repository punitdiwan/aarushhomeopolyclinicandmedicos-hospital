import React from 'react'

const Contactus = () => {
  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1>Contact Us</h1>
          <p>Doctor {" > "} Contact Us</p>
        </div>
      </div>

      <div className="contact">
        <div className="contact-row">
          <div className="contact-col">
            <h2>Our Office Inforamtion</h2>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-location-dot"></i>
              <div className="contact-cont">
                <h5>Location</h5>
                <p>
                # Shri Siddhi Avenue, Bistan Rd, Khargone, Madhya Pradesh 451001
                </p>
              </div>
            </div>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <h5>Call Us</h5>
                <p>62611 57702 , 9977565674</p>
              </div>
            </div>
            <div className="contact-col-l">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>shubhamjaiswal1707@gmail</p>
              </div>
            </div>
          </div>
          <div className="contact-col contact-col-r">
            <p>WHO WE ARE</p>
            <h1>Enquiry Form.</h1>
            {/* <form action="https://formspree.io/f/mvoyevep" method="POST"> */}
            <form action="#" method="POST">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="UserName"
                    class="form-control"
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    name="Number"
                    class="form-control"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="email"
                    name="Email"
                    class="form-control"
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="Subject"
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  name="Message"
                  class="form-control"
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
              <div   className="contact-recaptch">
                {/* <ReCAPTCHA
               
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                /> */}
              </div>
              <div className="send-msg">
                <button type="submit" value="Submit" >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="contact-img">
        <img src="https://www.postplanner.com/hs-fs/hubfs/How-to-Contact-Facebook-Support-1.png?noresize&width=980&height=515&name=How-to-Contact-Facebook-Support-1.png" />
      </div> */}
    </>
  )
}

export default Contactus
