import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedOffers.css";
import "./../../../assets/styles/global.css";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "./../../../assets/images/ofr-1.png";
import image2 from "./../../../assets/images/ofr-2.png";
import image3 from "./../../../assets/images/ofr-3.png";
import image4 from "./../../../assets/images/ofr-4.png";
import Ribbon from "../../../Components/Bottons/Ribbon/Ribbon";
import { ribbonData } from "../../../Components/Bottons/Ribbon/Ribbon";

const FeaturedOffersData = {
  headings: [
    {
      className: "parag-one heading-first m-0",
      text: "FEATURED",
    },
    {
      className: "parag-two heading-second m-0",
      text: "OFFERS",
    },
    {
      className: "parag-four",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],
};

const cardContents = [
  {
    heading: "The Beauty of amazing India!",
    subheading: "Kashmir, India!",
  },
  {
    heading: "Explore Sunset in Maldives",
    subheading: "Maldives, India!",
  },
  {
    heading: "It's the Beauty of Bangalore!",
    subheading: "Bangalore, India!",
  },
  {
    heading: "Explore the best in Bangalore",
    subheading: "Bangalore, India!",
  },
];

function FeaturedOffers() {
  const { headings } = FeaturedOffersData;
  const [isHoveredArray, setIsHoveredArray] = useState([false, false, false]);

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

  return (
    <Container fluid>
      <Row className="text-center">
        {headings.map((heading, index) => (
          <Col key={index} className={`col-lg-12 ${heading.className}`}>
            <p className="m-auto" style={{ width: "50%" }}>
              {heading.text}
            </p>
          </Col>
        ))}
      </Row>

      <Row className="card-container">
        {[image1, image2, image3, image4].map((image, index) => (
          <Col key={index} className="card-first">
            <div className="card mx-2 bg-transparent border-0">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  height: "439.511px",
                  width: "100%",
                  flexShrink: 0,
                  backgroundSize: "cover",
                  border: "none",
                  borderRadius: "7.147px",
                  boxShadow: isHoveredArray[index]
                    ? " 0px -99.4122px 15px 0px rgba(0, 0, 0, 0.43) inset, 0px 13.95274px 13.95274px 0px rgba(0, 0, 0, 0.25)"
                    : "0px -99.41322px 8.72046px 0px rgba(0, 0, 0, 0.43) inset, 0px 6.97637px 6.97637px 0px rgba(0, 0, 0, 0.25)",

                  transition:
                    "box-shadow 0.3s ease-in-out, background-size 0.3s ease-in-out",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Ribbon ribbonData={ribbonData[index]} />
                <div className="featured-flex-container">
                  <div className="featured-heading">
                    <h5>{cardContents[index].heading}</h5>
                    <h6>{cardContents[index].subheading}</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedOffers;
