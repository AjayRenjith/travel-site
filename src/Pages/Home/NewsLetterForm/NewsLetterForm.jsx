import React, { useState } from "react";
import "./NewsLetterForm.css";
import GetStarted from "../../../Components/Bottons/GetStarted/GetStarted";
import Matrix from "../../../assets/js/Matrix";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newsletter-container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div
          className="col-lg-7 newsletter-first-bg d-grid align-items-center-justify-content-center"
          style={{ padding: "80px 80px 80px 130px" }}
        >
          <h3>Subscibe to</h3>
          <h2>Our Newsletter</h2>
          <p>
            Get weekly update about our product on your email, Stay tunned for
            our fun adventure..
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form d-flex">
            <input
              type="email"
              id="email"
              required
              placeholder="pixelbohosample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="newsletter-button">
              <GetStarted />
            </div>
          </form>
        </div>

        <div className="col-lg newsletter-second-bg">
          <div className="newsletter-matrix">
            <Matrix />
          </div>
        </div>

        <div className="newsletter-bottom-container d-flex justify-content-center align-items-center">
          <div className="col-g-12 newsletter-bottom-bg my-5">

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
