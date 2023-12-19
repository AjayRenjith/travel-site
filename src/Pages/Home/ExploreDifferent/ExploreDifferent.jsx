import React from "react";
import "./ExploreDifferent.css";
import { Container, Row, Col } from "react-bootstrap";
import LearnMore from "../../../Components/Bottons/LearnMore/LearnMore";
import data from "../../../assets/js/explore_data.json";

const DiffData = {
  headings: [
    {
      className: "parag-one heading-first",
      text: "explore",
    },
    {
      className: "parag-two heading-second",
      text: "the different",
    },
  ],
};

function ExploreDifferent() {
  const { headings } = DiffData;
  return (
    <>
      <Row className="pb-4">
        {headings.map((heading, index) => (
          <Col key={index} className={`col-lg-12 ${heading.className}`}>
            <p className={`m-auto`}>{heading.text}</p>
          </Col>
        ))}
      </Row>

      <Container fluid style={{ width: "91%" ,paddingBottom:"90px"}}>
        <div className="row my-4">
          {data.slice(0, 2).map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="dif-explore-bg">
                <div className="row">
                  <div
                    className="col-lg-6 dif-explore-img"
                    style={{ padding: "2% 2% 2% 7%" }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  <div className="col-lg explore-title-first">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <div className="left-align">
                      <LearnMore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {data.slice(2, 4).map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="dif-explore-bg">
                <div className="row">
                  <div className="col-lg explore-title-second">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <div style={{ paddingLeft: "10%" }}>
                      <LearnMore />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 dif-explore-img"
                    style={{ padding: "2% 7% 2% 2%" }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ExploreDifferent;
