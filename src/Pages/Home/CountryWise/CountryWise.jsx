import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import countryImage1 from "../../../assets/images/country-two.jpg";
import countryImage2 from "../../../assets/images/country-three.jpg";
import countryImage3 from "../../../assets/images/country-one.jpg";
import countryImage4 from "../../../assets/images/country-four.jpg";
import countryImage5 from "../../../assets/images/country-three-Copy.jpg";
import countryImage6 from "../../../assets/images/country-two-Copy.jpg";
import countryImage7 from "../../../assets/images/country-one-Copy.jpg";
import Tours from "../../../Components/Bottons/12Tours/Tours";
import TourSmall from "../../../Components/Bottons/12Tours/TourSmall";

const CountryData = {
  headings: [
    {
      className: "parag-one heading-first m-0",
      text: "EXPLORE BY",
    },
    {
      className: "parag-two heading-second m-0",
      text: "country's WISE",
    },
    {
      className: "parag-four",
      text: "",
    },
  ],
};

function CountryWise() {
  const { headings } = CountryData;
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <>
      <Container>
        <Row className="text-center">
          {headings.map((heading, index) => (
            <Col key={index} className={`col-lg-12 ${heading.className}`}>
              <p className="m-auto" style={{ width: "90%" }}>
                {heading.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      <div style={{ padding: "50px 100px 0px 100px" }}>
        <div className="row">
          <div className="col-lg">
            <div className="col-lg-12 d-flex">
              <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage1})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage1})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "240px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage1})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage1})`
                        ? "19%"
                        : "30%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage1})`
                        ? "40.818px"
                        : "22.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                  DUBAI
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage1})`
                        ? "40%"
                        : "40%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage1})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage1})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage1})` && <TourSmall />}
                </div>
              </div>

              <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage1})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage2})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  margin: "0px 0px 0px 5px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage2})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage2})`
                        ? "19%"
                        : "30%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage2})`
                        ? "40.818px"
                        : "22.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                  DUBAI
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage2})`
                        ? "40%"
                        : "40%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage2})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage2})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage2})` && <TourSmall />}
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage3})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage3})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "350px",
                  margin: "12px 12px 0px 12px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage3})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage3})`
                        ? "15%"
                        : "26%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage3})`
                      ? "65.818px"
                      : "50.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                  Singapore
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage3})`
                        ? "45%"
                        : "45%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage3})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage3})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage3})` && <Tours />}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg country-fourth px-0 ${
              hoveredCountry === `url(${countryImage4})` ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCountry(`url(${countryImage4})`)}
            onMouseLeave={() => setHoveredCountry(null)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              width: "100%",
              height: "602px",
            }}
          >
            <div
              className="backdrop"
              style={{
                backgroundImage: `url(${countryImage4})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                filter:
                  hoveredCountry === `url(${countryImage4})`
                    ? "blur(1px) brightness(60%)"
                    : "none",
                transition: "filter 0.5s ease-in-out",
                position: "absolute",
                zIndex: -1,
              }}
            ></div>

            <p
              style={{
                position: "absolute",
                top: hoveredCountry === `url(${countryImage4})` ? "30%" : "41%",
                textAlign: "center",
                fontSize:
                  hoveredCountry === `url(${countryImage4})`
                    ? "65.818px"
                    : "50.818px",
                color: "#fff",
                fontWeight: 600,
                textTransform: "uppercase",
                zIndex: 1,
                transition: "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
              }}
            >
              AUSTRALIA
            </p>
            <div
              style={{
                position: "absolute",
                top: hoveredCountry === `url(${countryImage4})` ? "50%" : "50%",
                textAlign: "center",
                transition: " 0.5s ease-in-out",
                opacity: hoveredCountry === `url(${countryImage4})` ? 1 : 0,
                pointerEvents:
                  hoveredCountry === `url(${countryImage4})` ? "auto" : "none",
                zIndex: 1,
                paddingTop: "20px",
              }}
            >
              {hoveredCountry === `url(${countryImage4})` && <Tours />}
            </div>
          </div>

          <div className="col-lg">
            <div className="col-lg-12 d-flex">
            <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage5})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage5})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "240px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage5})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage5})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage5})`
                        ? "19%"
                        : "30%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage5})`
                        ? "40.818px"
                        : "22.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                 OMAN
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage5})`
                        ? "40%"
                        : "40%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage5})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage5})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage5})` && <TourSmall />}
                </div>
              </div>

              <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage6})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage6})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  margin: "0px 0px 0px 5px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage6})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage6})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage6})`
                        ? "19%"
                        : "30%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage6})`
                        ? "40.818px"
                        : "22.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                 Paris
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage6})`
                        ? "40%"
                        : "40%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage6})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage6})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage6})` && <TourSmall />}
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className={`col-lg country-fourth px-0 ${
                  hoveredCountry === `url(${countryImage7})` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCountry(`url(${countryImage7})`)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "350px",
                  margin: "12px 12px 0px 12px",
                }}
              >
                <div
                  className="backdrop"
                  style={{
                    backgroundImage: `url(${countryImage7})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    filter:
                      hoveredCountry === `url(${countryImage7})`
                        ? "blur(1px) brightness(60%)"
                        : "none",
                    transition: "filter 0.5s ease-in-out",
                    position: "absolute",
                    zIndex: -1,
                  }}
                ></div>

                <p
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage7})`
                        ? "15%"
                        : "26%",
                    textAlign: "center",
                    fontSize:
                      hoveredCountry === `url(${countryImage7})`
                      ? "65.818px"
                      : "50.818px",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    zIndex: 1,
                    transition:
                      "top 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  }}
                >
                  London
                </p>
                <div
                  style={{
                    position: "absolute",
                    top:
                      hoveredCountry === `url(${countryImage7})`
                        ? "45%"
                        : "45%",
                    textAlign: "center",
                    transition: " 0.5s ease-in-out",
                    opacity: hoveredCountry === `url(${countryImage7})` ? 1 : 0,
                    pointerEvents:
                      hoveredCountry === `url(${countryImage7})`
                        ? "auto"
                        : "none",
                    zIndex: 1,
                    paddingTop: "20px",
                  }}
                >
                  {hoveredCountry === `url(${countryImage7})` && <Tours />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryWise;
