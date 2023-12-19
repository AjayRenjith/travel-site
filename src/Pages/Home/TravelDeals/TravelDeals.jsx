import React, { useState } from "react";
import "./TravelDeals.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BookNow from "../../../Components/Bottons/BookNow/BookNow";
import SaveGuide from "../../../Components/Bottons/BookNow/SaveGuide/SaveGuide";
import cardsData from "../../../assets/js/CardsData.json";
import StarRating from "../../../Components/Bottons/StarRating/StarRating";

const DealsData = {
  headings: [
    {
      className: "parag-one heading-fifth",
      text: "FIND YOUR",
    },
    {
      className: "parag-two heading-second",
      text: "CO-TRAVEL DEALS",
    },
    {
      className: "parag-three heading-third",
      text: "Showing Deals For : Nov 10 - Nov  12",
    },
  ],
};

function TravelDeals() {
  const [rating, setRating] = useState(0);
  const { headings } = DealsData;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: "100%",
    border: "0px",
    borderRadius: "17.619px",
    background: "#FFF",
    boxShadow: "0px 44.52743px 89.05486px -29.68496px rgba(15, 15, 15, 0.10)",
    backdropFilter: "blur(14.842480659484863px)",
    width: "400.841px",
    cursor: "pointer",
  };

  return (
    <>
      <Row>
        {headings.map((heading, index) => (
          <Col key={index} className={`col-lg-12 ${heading.className}`}>
            <p className={`m-auto`}>{heading.text}</p>
          </Col>
        ))}
      </Row>

      <Container
        fluid
        className="deals-main deals-main d-flex justify-content-center align-items-center"
      >
        <div>
          <Row>
            {cardsData.map((card, index) => (
              <Col
                key={index}
                lg
                className="d-flex justify-content-center align-items-center m-auto"
                style={{ paddingBottom: "50px" }}
              >
                <Card
                  style={cardStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    style={{ position: "relative", top: "54px", left: "20px" }}
                  >
                    <StarRating rating={4.0} />
                  </div>
                  <Card.Img
                    variant="top"
                    src={card.imageSrc}
                    style={{
                      alignItems: "center",
                      gap: "235.52px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      padding: "10px 10px 10px 10px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="deals-card-title">
                      {card.title}
                    </Card.Title>
                    <Card.Text>
                      <p className="deals-card-parag">
                        <span className="deals-card-parag-first">
                          {card.location.from}
                        </span>{" "}
                        to{" "}
                        <span className="deals-card-parag-second">
                          {card.location.to}
                        </span>
                      </p>

                      <p className="deals-card-parag-third">
                        {card.description}
                      </p>

                      <p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 19 18"
                            fill="none"
                          >
                            <path
                              d="M9.43272 1.47119C5.3876 1.47119 2.09131 4.76749 2.09131 8.8126C2.09131 12.8577 5.3876 16.154 9.43272 16.154C13.4778 16.154 16.7741 12.8577 16.7741 8.8126C16.7741 4.76749 13.4778 1.47119 9.43272 1.47119ZM12.7804 7.58659L9.76309 9.85508C9.74841 9.86242 9.72638 9.86977 9.7117 9.88445C9.68967 9.8918 9.67498 9.89914 9.65295 9.90648C9.58688 9.94318 9.50613 9.96521 9.43272 9.96521C9.35931 9.96521 9.28589 9.94318 9.21981 9.91382C9.20513 9.90647 9.19046 9.89913 9.16844 9.89179C9.15376 9.88445 9.13905 9.87711 9.12437 9.86977L6.92195 8.35744C6.67234 8.18859 6.60629 7.84353 6.78248 7.59393C6.95133 7.34432 7.29636 7.27825 7.54597 7.4471L9.41805 8.73185L12.1197 6.70562C12.3619 6.52209 12.707 6.57347 12.8905 6.81574C13.0741 7.05801 13.0227 7.40305 12.7804 7.58659Z"
                              fill="#1D1D1F"
                            />
                          </svg>
                        </span>
                        <span className="deals-card-parag-fourth px-2 align-items-center">
                          {card.duration}
                        </span>
                      </p>

                      <p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 19 19"
                            fill="none"
                          >
                            <path
                              d="M9.20248 8.8779C11.1439 8.8779 12.7314 7.29992 12.7314 5.35853C12.7314 3.41713 11.1534 1.82959 9.20248 1.82959C7.26108 1.82959 5.68311 3.40757 5.68311 5.35853C5.68311 7.30948 7.26108 8.8779 9.20248 8.8779Z"
                              fill="#1D1D1F"
                            />
                            <path
                              d="M11.9561 10.2446H6.91614C4.65915 10.2446 2.83252 12.0808 2.83252 14.3282V14.9786C2.83252 15.8967 3.58804 16.6522 4.50613 16.6522H14.3661C15.2842 16.6522 16.0397 15.8967 16.0397 14.9786V14.3378C16.0397 12.0808 14.2035 10.2446 11.9561 10.2446Z"
                              fill="#1D1D1F"
                            />
                          </svg>
                        </span>
                        <span className="deals-card-parag-fifth px-2 align-items-center">
                          {card.peopleJoined}
                        </span>
                      </p>
                    </Card.Text>

                    <div className="row">
                      <div className="col-lg-6 d-flex justify-content-end">
                        <span>
                          <BookNow />
                        </span>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-left">
                        <span>
                          <SaveGuide />
                        </span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default TravelDeals;
