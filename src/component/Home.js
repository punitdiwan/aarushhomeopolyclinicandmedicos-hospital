import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="./img/slider1.jpg" className="d-block w-100" alt="..." />
            <div className="slide-cont">
              <h1>Homeopathic Medicines Are Natural, Safe With No Side Effect</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="./img/slide4.png" className="d-block w-100" alt="..." />
            {/* <div className="slide-cont slide-hair">
              <h1>HAIR FALL TREATMENT</h1>
              <p>  RELIABLE PERMANENT SOLUTION ON BALDNESS, 100% SAFE & NATURAL HAIR </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="./img/slider2.png" className="d-block w-100" alt="..." />
            <div className="slide-cont slide-hair">
              <h1>HAIR FALL TREATMENT</h1>
              <p>  RELIABLE PERMANENT SOLUTION ON BALDNESS, 100% SAFE & NATURAL HAIR </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="./img/slider3.png" className="d-block w-100" alt="..." />
            <div className="slide-cont">
              <h1>SKIN  TREATMENT</h1>
              <p>RESTORE YOUR SKIN TO IT'S NATURAL BEAUTY</p>
            </div>
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}

          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="hairskin">
        <div className="hs-row">
          <div className="hs-col hs-col-1">
            <img src="./img/Hair.png" />
            <div>
              <h3>Hair Treatment</h3>
              <p>
                Alopecia Areata can be the cause of psychological stress.
                Because hair loss can lead to significant changes in appearance.
              </p>
            </div>
          </div>
          <div className="hs-col hs-col-2">
            <img src="./img/Skin.png" />
            <div>
              <h3>Skin Treatment</h3>
              <p>
                Pimples or acne are a problem faced by almost everyone. Acne is
                a skin disorder causing redness and pimples formation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome">
        <h3>Welcome to Aarush Homoeo polyclinic, Khargone </h3>
        <div className="wel-row">
          <div className="wel-col">
            <img src="./img/Homeopathi.jpg" />
          </div>
          <div className="wel-col">
            <p>
              Homeopathy is the most trusted natural form of medicine that to
              date is being used by millions of people worldwide. Homeopathy
              runs on the objective that “the body can cure itself,” and with
              this particular idea, <b>Dr. Shubham Jaiswal</b>, an eminent
              homeopath and <b>Best Homeopathy Doctor in Khargone</b> started
              the <b>Aarush Homoeo polyclinic and Medicos</b>, a chain of
              homeopathy clinics spread in and across Khargone.
            </p>
            <p>
              <b>Aarush Homoeo polyclinic and Medicos ,Khargone </b>comes
              forward with a holistic approach to treat patients with
              personalized Constitutional{" "}
              <em>
                <b> Homeopathic Treatment</b>
              </em>{" "}
              that serves to be far better than the conventional treatments. It
              consists of a top and well-experienced group of Homeopathic
              doctors who happen to be experts in their particular line of
              fields.
            </p>
          </div>
        </div>
      </div>

      <div className="welcome">
        <h3>About Dr. Shubham Jaiswal</h3>
        <div className="wel-row">
          <div className="wel-col wel-col-img">
            <img src="./img/dr.jpeg" />
          </div>
          <div className="wel-col">
            <p>
              <b>
                Dr. Shubham Jaiswal Consultant Homeopathic and Biochemic,
              </b>{" "}
              completed B.H.M.S (Bachelor of Homoeopathic Medicine & Surgery)
              from  Madhya Pradesh Medical Science University Jabalpur.
            </p>
            <p>Dr. Shubham Jaiswal is highly Qualified with 2 years of  experience .</p>
            <p>
             
              He is well known all over<b> Khargone </b> He is Expertise in all{" "}
              <em>
                <b> Homeopathic Treatment</b>
              </em>{" "}
              Many patients come to{" "}
              <b>Aarush Homoeo polyclinic and Medicos ,Khargone </b> to treat
              health-related issues from all cities in Madhya Pradesh.
            </p>
            <p> <b>Aarush Homoeo polyclinic and Medicos ,Khargone Establishment Year  - 1 april 2022 </b> </p>
            <Link to="/aboutdoctor"><button>Read More</button></Link>
          </div>
        </div>
      </div>

      <div className="why-h">
        <div className="why-top-cont">
          <h1>Why Homeopathy?</h1>
          <p>
            Patients often have these doubts. Especially those, who have never
            taken homeopathic medicines. Here is a comprehensive description of
            what is so special & unique about homeopathy.
          </p>
        </div>
        <div className="why-row">
          <div className="why-col">
            <h3>Why Homeopathy..?</h3>
            <p>
              Homeopathy is an advanced science that works on genetic level &
              helps to attain sound health. 100% natural, no drug interactions,
              and Non-habit forming. They can be taken by nearly anyone at any
              time, from infants to the elderly including anyone taking
              prescription medications. High margin of safety. They can be given
              to young children without fear of miss dosing or overdosing.
            </p>
          </div>
          <div className="why-col">
            <h3>What Homeopathy Can do..?</h3>
            <p>
              Especially in case of chronic, long-standing, and recurring
              diseases like allergies, bronchitis, Chron’s diseases, Psoriasis,
              Rheumatism, Sinusitis, Trigeminal Neuralgia, Ulcerative Colitis,
              Vitiligo, etc, homeopathy offers results which can change the life
              of patients. In the cases of allergic diseases like Asthma,
              urticaria, and the like, it can enhance the body’s immune
              mechanism is such as the way that the body no more reacts in
              abnormal ways by producing constricted bronchial tubes, the
              abnormal release of histamine, spasm, inflammation, etc.
            </p>
          </div>
        </div>
      </div>

      <section className="facilities">
      <div className="facil-cont">
      <h1>Our Treatment</h1>
        <p>Homeopathy that makes someone who is ill become healthy.</p>
      </div>
        <div className="facility-row">
          <div className="facilities-col">
            <img src="img/service1.png" alt="" />
            <h3>Child Care</h3>
            <p>
              Child care is the action or skill of looking after children by a
              daycare center, nannies, babysitters, teachers.
            </p>
          </div>
          <div className="facilities-col">
            <img src="img/service2.png" alt="" />
            <h3>Hair Loss Treatment</h3>
            <p>
              Physical or mental stress can cause temporary hair loss. The
              reason for phase prematurely,...
            </p>
          </div>
          <div className="facilities-col">
            <img src="img/service3.png" alt="" />
            <h3>Skin Treatment</h3>
            <p>
              Acne is a disease that involves the oil glands of the skin. The
              skin has pores that connect to oil glands located under the skin.
            </p>
          </div>
          <div className="facilities-col">
            <img src="img/service4.png" alt="" />
            <h3>Hormonal Imbalance</h3>
            <p>
              Hormonal imbalances occur when there is much or too little of a
              hormone in the bloodstream.
            </p>
          </div>
        </div>
      </section>


      <div className="client">
  <img src="" alt="" />
  <div className="client-row">
    <h3>Our Testimonials</h3>
    <h1>What our Patients Say</h1>
  </div>
</div>

<section class="testimonials">
     <div class="testim-row">
      <div class="testimonials-col">
        {/* <img src="image/user1.jpg" alt="" /> */}
        <div>
          <p>Thank you so much Dr. You’ve been a great help, I was suffering from this allergy since years no one could help me but you brought me out within a month. I’m really grateful. Thank you so much, good bless...</p>
          <h3>Kush yadav </h3>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-line co"></i>
        </div>
      </div>
      <div class="testimonials-col">
        <img src="image/user2.jpg" alt="" />
        <div>
          <p>"I just want to say that i received a quality of the care and really appreciated the treatment that was given to me it works within a less span of time... Thanks Dr. Shubham Jaiswal"</p>
          <h3>Vinod Jaiswal</h3>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-fill co"></i>
          <i class="ri-star-half-line co"></i>
        </div>
      </div>
     </div>
    </section>
    </>
  );
};

export default Home;
