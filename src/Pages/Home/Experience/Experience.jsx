import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Experience.css";
import "./../../../assets/styles/global.css";
import image1 from "./../../../assets/images/exp-1.png";
import image2 from "./../../../assets/images/exp-2.png";
import image3 from "./../../../assets/images/exp-3.png";
import image4 from "./../../../assets/images/exp-4.png";
import image5 from "./../../../assets/images/exp-4.png";
import image6 from "./../../../assets/images/exp-4.png";
import image7 from "./../../../assets/images/exp-4.png";
import image8 from "./../../../assets/images/exp-4.png";

const ExperienceData = {
  headings: [
    {
      className: "parag-one heading-first",
      text: "FIND THE",
    },
    {
      className: "parag-two heading-second",
      text: "EXPERIENCE",
    },
    {
      className: "parag-three heading-third",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],
};

const cardContents = [
  {
    heading: "The Beauty of amazing India!",
    subheading: "Kashmir, India!",
    additionalContent: {
      price: "$ 350",
      duration: "Flight + 4 nights",
      description: "Kashmir",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunset in Maldives",
    subheading: "Maldives, India!",
    additionalContent: {
      price: "$ 450",
      duration: "Flight + 5 nights",
      description: "Maldives",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "It's the Beauty of Bangalore!",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 550",
      duration: "Flight + 3 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunrise in Bangalore",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 400",
      duration: "Flight + 4 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunrise in Bangalore",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 400",
      duration: "Flight + 4 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunrise in Bangalore",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 400",
      duration: "Flight + 4 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunrise in Bangalore",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 400",
      duration: "Flight + 4 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
  {
    heading: "Explore the best Sunrise in Bangalore",
    subheading: "Bangalore, India!",
    additionalContent: {
      price: "$ 400",
      duration: "Flight + 4 nights",
      description: "Bangalore",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  },
];

function Experience() {
  const { headings } = ExperienceData;

  const [isHoveredArray, setIsHoveredArray] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    const newIsHoveredArray = [...isHoveredArray];
    newIsHoveredArray[index] = true;
    setIsHoveredArray(newIsHoveredArray);
  };

  const handleMouseLeave = (index) => {
    const newIsHoveredArray = [...isHoveredArray];
    newIsHoveredArray[index] = false;
    setIsHoveredArray(newIsHoveredArray);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className="experience-bg">
      <Row>
        {headings.map((heading, index) => (
          <Col key={index} className={`col-lg-12 ${heading.className}`}>
            <p className={`m-auto`}>{heading.text}</p>
          </Col>
        ))}
      </Row>

      <Slider {...sliderSettings} className="card-container">
        {cardContents.map((card, index) => (
          <div key={index} className="card-first">
            <div
              className="card mx-3 bg-transparent card-second border-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${
                    [
                      image1,
                      image2,
                      image3,
                      image4,
                      image5,
                      image6,
                      image7,
                      image8,
                    ][index]
                  })`,
                  backgroundRepeat: "no-repeat",
                  height: "514.979px",
                  width: "100%",
                  flexShrink: 0,
                  backgroundSize: "cover",
                  border: "none",
                  borderRadius: "26px",
                  boxShadow: isHoveredArray[index]
                    ? "0 8px 10px rgba(0, 0, 0, 0.5)"
                    : "0 8px 30px rgba(0, 0, 0, 0.1)",
                  transition:
                    "box-shadow 0.3s ease-in-out, background-size 0.3s ease-in-out",
                }}
              >
                <div className="experience-flex-container">
                  <div className="experience-heading">
                    <h5 className="pb-2 px-5">{card.heading}</h5>
                    <div className="d-flex flex-column px-5">
                      <h6 className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="20"
                          viewBox="0 0 16 17"
                          fill="none"
                          className="mx-1"
                        >
                          <path
                            d="M6.56168 16.4882C4.35987 14.5803 2.71595 12.8204 1.62992 11.2082C0.54389 9.59609 0.00058326 8.10557 0 6.73666C0 4.68358 0.661417 3.04754 1.98425 1.82852C3.30767 0.609507 4.83348 0 6.56168 0C8.45844 0 10.0682 0.682415 11.3911 2.04724C12.7139 3.41207 13.2913 5.32867 13.1234 7.79703L15.3981 5.52231L16 6.12423L12.6859 9.43832L9.37183 6.12423L9.97375 5.52231L12.2485 7.79703C12.4164 5.67979 11.9545 3.99708 10.8626 2.74891C9.77078 1.49956 8.33712 0.874891 6.56168 0.874891C4.9653 0.874891 3.61855 1.42082 2.52143 2.51269C1.42374 3.60455 0.874891 5.01254 0.874891 6.73666C0.874891 7.82794 1.33858 9.09128 2.26597 10.5267C3.19335 11.9615 4.62526 13.5628 6.56168 15.3307C6.85331 15.0682 7.19889 14.7431 7.59843 14.3552C7.99738 13.9668 8.32108 13.6489 8.56955 13.4016C8.44007 13.2219 8.34791 13.0341 8.29309 12.8381C8.23826 12.6422 8.21085 12.4456 8.21085 12.2485C8.21085 11.7369 8.39137 11.3007 8.75241 10.9396C9.11344 10.5786 9.54972 10.3978 10.0612 10.3972C10.5728 10.3972 11.009 10.578 11.3701 10.9396C11.7311 11.3013 11.9119 11.7375 11.9125 12.2485C11.9125 12.76 11.7317 13.1963 11.3701 13.5573C11.0085 13.9183 10.5722 14.0992 10.0612 14.0997C9.92243 14.0997 9.78011 14.0866 9.6343 14.0604C9.48906 14.0347 9.35987 13.9904 9.24672 13.9274C8.8466 14.3427 8.42082 14.7649 7.96938 15.1942C7.51794 15.6241 7.0487 16.0548 6.56168 16.4882Z"
                            fill="white"
                          />
                        </svg>
                        {card.subheading}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                  <div className="ver_mas">
                    <span id="click" className="">
                      <div className="row">
                        <div className="col-lg-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="60"
                            viewBox="0 0 35 12"
                            fill="none"
                          >
                            <path
                              d="M19.3504 9.3796H17.3657V11.5177H16.014V9.3796H14.04V8.18697H16.014V6.05957H17.3657V8.18697H19.3504V9.3796Z"
                              fill="white"
                            />
                            <path
                              d="M28.4114 4.2008V1.99023H22.6768V11.9378H34.1461V4.2008H28.4114ZM24.9706 10.8325H23.8237V9.72722H24.9706V10.8325ZM24.9706 8.62193H23.8237V7.51665H24.9706V8.62193ZM24.9706 6.41137H23.8237V5.30608H24.9706V6.41137ZM24.9706 4.2008H23.8237V3.09552H24.9706V4.2008ZM27.2645 10.8325H26.1176V9.72722H27.2645V10.8325ZM27.2645 8.62193H26.1176V7.51665H27.2645V8.62193ZM27.2645 6.41137H26.1176V5.30608H27.2645V6.41137ZM27.2645 4.2008H26.1176V3.09552H27.2645V4.2008ZM32.9992 10.8325H28.4114V9.72722H29.5584V8.62193H28.4114V7.51665H29.5584V6.41137H28.4114V5.30608H32.9992V10.8325ZM31.8522 6.41137H30.7053V7.51665H31.8522V6.41137ZM31.8522 8.62193H30.7053V9.72722H31.8522V8.62193Z"
                              fill="white"
                            />
                            <path
                              d="M10.8959 8.53386V7.42857L6.30815 4.66537V1.62584C6.30815 1.16714 5.92393 0.796875 5.44795 0.796875C4.97197 0.796875 4.58775 1.16714 4.58775 1.62584V4.66537L0 7.42857V8.53386L4.58775 7.15225V10.1918L3.44081 11.0207V11.8497L5.44795 11.2971L7.45509 11.8497V11.0207L6.30815 10.1918V7.15225L10.8959 8.53386Z"
                              fill="white"
                            />
                          </svg>
                        </div>

                        <div className="col-lg-6">
                          <h2 className="pt-3">
                            {card.additionalContent.price}
                          </h2>
                        </div>
                      </div>

                      <div className="row">
                        {" "}
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          {card.additionalContent.duration}
                        </p>
                      </div>

                      <div className="col-lg-12 pt-3">
                        <h2
                          style={{
                            fontSize: "32.817px",
                            fontStyle: "normal",
                            fontWeight: 600,
                          }}
                        >
                          {card.additionalContent.description}
                        </h2>
                        <p
                          className="pt-1"
                          style={{
                            color: "#FFF",
                            fontSize: "17.675px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            letterSpacing: "0.24px",
                            width: "85%",
                          }}
                        >
                          {card.additionalContent.additionalText}
                        </p>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Experience;
