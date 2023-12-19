import React, { useState } from "react";
import "./TDFlipCards.css";
import Marquee from "react-fast-marquee";
import img2 from "../../../assets/images/ofr-2.png";

const SVGIcon = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 18 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="me-1"
  >
    <path
      id="Vector"
      d="M9.32289 22.2157C7.78131 20.9008 6.3524 19.4592 5.05109 17.9061C3.09827 15.5737 0.779298 12.1001 0.779298 8.79006C0.778451 7.0996 1.27911 5.44689 2.21791 4.04108C3.15671 2.63527 4.49145 1.53955 6.05322 0.892608C7.61498 0.245662 9.33357 0.076564 10.9915 0.406715C12.6494 0.736865 14.1721 1.55142 15.3669 2.7473C16.1623 3.53924 16.7929 4.48109 17.2219 5.51832C17.651 6.55556 17.8701 7.66759 17.8665 8.79006C17.8665 12.1001 15.5475 15.5737 13.5947 17.9061C12.2934 19.4592 10.8645 20.9008 9.32289 22.2157ZM9.32289 5.12852C8.35179 5.12852 7.42046 5.51429 6.73379 6.20096C6.04712 6.88764 5.66135 7.81896 5.66135 8.79006C5.66135 9.76116 6.04712 10.6925 6.73379 11.3792C7.42046 12.0658 8.35179 12.4516 9.32289 12.4516C10.294 12.4516 11.2253 12.0658 11.912 11.3792C12.5987 10.6925 12.9844 9.76116 12.9844 8.79006C12.9844 7.81896 12.5987 6.88764 11.912 6.20096C11.2253 5.51429 10.294 5.12852 9.32289 5.12852Z"
      fill="#EE684A"
    />
  </svg>
);

const FlipCard = ({
  imgSrc,
  location,
  details,
  backTitle,
  backDescription,
  backButtonLabel,
}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`col-lg`}
      style={{ margin: "50px 50px" }}
      onClick={handleClick}
    >
      <div
        className="card-tfc"
        style={{ transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0)" }}
      >
        <div className="card__face card-front">
          <img
            src={imgSrc}
            alt={`Image for ${location}`}
            className="class-img-top"
            style={{
              width: "240px",
              height: "140px",
              padding: "10px",
              borderRadius: "15px",
            }}
          />
          <div className="card-body" style={{ paddingLeft: "10px" }}>
            <p className="card-text card-heading-tdf">{location}</p>
            <p className="card-text card-text-tdf d-flex justify-content-left align-items-center pb-3">
              <SVGIcon />
              {details}
            </p>
          </div>
        </div>
        {/* <div className="card__face card-back">
        <h3>{backTitle}</h3>
            <p>{backDescription}</p>
            <button>{backButtonLabel}</button>
        </div> */}
      </div>
    </div>
  );
};

function TDFlipCards() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <Marquee
        pauseOnHover
        direction="right"
        speed={60}
        style={{ overflowY: "hidden" }}
      >
        <div className="flip-container d-grid">
          <FlipCard
            imgSrc={img2}
            location="Ranu"
            details="Jammu, India"
            backTitle="Back Title 1"
            backDescription="Back Description 1"
            backButtonLabel="Click me 1"
          />
          <FlipCard
            imgSrc={img2}
            location="Ranu"
            details="Jammu, India"
            backTitle="Back Title 2"
            backDescription="Back Description 2"
            backButtonLabel="Click me 2"
          />
        </div>

        <div className="flip-container">
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
        </div>

        <div className="flip-container d-grid">
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
        </div>

        <div className="flip-container">
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
        </div>

        <div className="flip-container d-grid">
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
        </div>

        <div className="flip-container">
          <FlipCard imgSrc={img2} location="Ranu" details="Jammu, India" />
        </div>
      </Marquee>
    </div>
  );
}

export default TDFlipCards;
