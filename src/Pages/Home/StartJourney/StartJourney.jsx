import React from "react";
import "./StartJourney.css";
import journeyData from "../../../assets/js/journeyData.json";

function StartJourney() {
  const { mainContent, cardOne, cardTwo } = journeyData;

  return (
    <div className="row journey-container">
      <div className="col-lg">
        <div className="col-lg journey-main">
          <h2>{mainContent.title}</h2>
          <p>{mainContent.description}</p>
        </div>
      </div>

      <div className="col-lg d-flex align-items-center justify-content-center">
        <div
          className="first-outer-border d-flex align-items-center justify-content-center"
          // style={{
          //   transition: "transform 0.3s", // Add a transition for a smoother effect
          // }}
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.transform = "rotate(45deg)";
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.transform = "rotate(0deg)";
          // }}
        >
          <div
            className="train-svg-journey"
            style={{
              borderRadius: "30px",
              Background: "var(--gray-50, #FFF)",
              boxShadow:
                " 0px 10.875px 21.751px 0px rgba(96, 97, 112, 0.16), 0px 2.719px 5.438px 0px rgba(40, 41, 61, 0.04)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M5.09375 28.0417H28.6571"
                stroke="#B05D33"
                stroke-width="1.35942"
              />
              <path
                d="M2.96085 29.4937C2.78388 29.6659 2.78388 29.9451 2.96085 30.1172C3.13781 30.2894 3.42472 30.2894 3.60168 30.1172L2.96085 29.4937ZM9.9457 23.9447C10.1226 23.7726 10.1226 23.4934 9.9457 23.3212C9.7687 23.1491 9.48178 23.1491 9.30482 23.3212L9.9457 23.9447ZM3.60168 30.1172L9.9457 23.9447L9.30482 23.3212L2.96085 29.4937L3.60168 30.1172Z"
                fill="#D67B4D"
              />
              <path
                d="M2.96085 29.4937C2.78388 29.6659 2.78388 29.9451 2.96085 30.1172C3.13781 30.2894 3.42472 30.2894 3.60168 30.1172L2.96085 29.4937ZM9.9457 23.9447C10.1226 23.7726 10.1226 23.4934 9.9457 23.3212C9.7687 23.1491 9.48178 23.1491 9.30482 23.3212L9.9457 23.9447ZM3.60168 30.1172L9.9457 23.9447L9.30482 23.3212L2.96085 29.4937L3.60168 30.1172Z"
                fill="#D67B4D"
              />
              <path
                d="M30.7904 29.4937C30.9673 29.6659 30.9673 29.9451 30.7904 30.1172C30.6134 30.2894 30.3265 30.2894 30.1495 30.1172L30.7904 29.4937ZM23.8055 23.9447C23.6286 23.7726 23.6286 23.4934 23.8055 23.3212C23.9825 23.1491 24.2695 23.1491 24.4465 23.3212L23.8055 23.9447ZM30.1495 30.1172L23.8055 23.9447L24.4465 23.3212L30.7904 29.4937L30.1495 30.1172Z"
                fill="#D67B4D"
              />
              <path
                d="M30.7904 29.4937C30.9673 29.6659 30.9673 29.9451 30.7904 30.1172C30.6134 30.2894 30.3265 30.2894 30.1495 30.1172L30.7904 29.4937ZM23.8055 23.9447C23.6286 23.7726 23.6286 23.4934 23.8055 23.3212C23.9825 23.1491 24.2695 23.1491 24.4465 23.3212L23.8055 23.9447ZM30.1495 30.1172L23.8055 23.9447L24.4465 23.3212L30.7904 29.4937L30.1495 30.1172Z"
                fill="#D67B4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5314 4.45568C10.8335 4.29802 11.5283 3.7935 11.8909 3.03671C12.344 2.09073 12.7971 1.61774 14.1566 1.61774H15.9691H18.688C20.0474 1.61774 20.5005 2.09073 20.9537 3.03671C21.3162 3.7935 22.011 4.29802 22.3131 4.45568H25.0319C26.5336 4.45568 27.7508 5.64005 27.7508 7.10105V18.3413C27.7508 23.2113 23.6932 27.1592 18.688 27.1592H14.1566C9.15131 27.1592 5.09375 23.2113 5.09375 18.3413V7.10105C5.09375 5.64005 6.31102 4.45568 7.81259 4.45568H10.5314Z"
                fill="#42A8C3"
              />
              <path
                d="M18.6877 4.26347C18.6877 4.15901 18.6214 4.05197 18.5184 3.94923C17.9957 3.42813 17.1703 3.38168 16.422 3.38168C15.6736 3.38168 14.8187 3.38737 14.3127 3.92382C14.217 4.02522 14.1562 4.13843 14.1562 4.26347C14.1562 4.70436 14.1562 5.14526 14.7227 5.14526H18.1212C18.6877 5.14526 18.6877 4.70436 18.6877 4.26347Z"
                fill="white"
              />
              <path
                d="M8.71875 9.52437C8.71875 8.55035 9.53026 7.76077 10.5313 7.76077H22.313C23.3141 7.76077 24.1255 8.55035 24.1255 9.52437V13.0515C24.1255 15.9735 21.691 18.3422 18.6878 18.3422H14.1564C11.1533 18.3422 8.71875 15.9735 8.71875 13.0515V9.52437Z"
                fill="white"
              />
              <mask
                id="mask0_739_4388"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="8"
                y="7"
                width="17"
                height="12"
              >
                <path
                  d="M8.71875 9.52437C8.71875 8.55035 9.53026 7.76077 10.5313 7.76077H22.313C23.3141 7.76077 24.1255 8.55035 24.1255 9.52437V13.0515C24.1255 15.9735 21.691 18.3422 18.6878 18.3422H14.1564C11.1533 18.3422 8.71875 15.9735 8.71875 13.0515V9.52437Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_739_4388)">
                <path
                  d="M22.7657 9.08345C22.7657 8.02531 21.1042 7.76077 20.047 7.76077H24.1252L24.1251 18.7831C21.1042 18.93 12.706 18.7831 14.156 18.7831C15.9686 18.7831 19.1406 17.4605 20.5001 16.5787C21.7437 15.772 22.7658 14.3742 22.7657 13.0515V9.08345Z"
                  fill="#C3D3DB"
                />
              </g>
            </svg>
          </div>

          {/* first card */}

          <div
            className="card card-journey"
            style={{ width: "10rem", height: "auto" }}
          >
            <img
              src={cardOne.image}
              className="card-img-top-journey"
              alt="..."
            />
            <div className="card-body card-journey-body">
              <h6 className="card-title card-journey-title">{cardOne.title}</h6>
              <p className="card-text card-journey-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="12"
                  viewBox="0 0 13 15"
                  fill="none"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.912109 6.57036C0.912109 3.44378 3.52484 0.916687 6.6852 0.916687C9.85447 0.916687 12.4672 3.44378 12.4672 6.57036C12.4672 8.14589 11.8942 9.60858 10.9511 10.8483C9.91067 12.2159 8.6283 13.4074 7.18485 14.3426C6.85449 14.5588 6.55635 14.5751 6.19377 14.3426C4.7421 13.4074 3.45973 12.2159 2.42821 10.8483C1.48442 9.60858 0.912109 8.14589 0.912109 6.57036ZM4.78328 6.74606C4.78328 7.79347 5.63797 8.61726 6.68594 8.61726C7.73459 8.61726 8.59751 7.79347 8.59751 6.74606C8.59751 5.70682 7.73459 4.84293 6.68594 4.84293C5.63797 4.84293 4.78328 5.70682 4.78328 6.74606Z"
                    fill="#42A7C3"
                  />
                </svg>
                {cardOne.location}
              </p>
            </div>
          </div>

          {/* second card */}
          <div
            className="card card-journey-second"
            style={{ width: "8rem", height: "auto" }}
          >
            <img
              src={cardTwo.image}
              className="card-img-top-journey"
              alt="..."
            />
            <div className="card-body card-journey-body">
              <h6 className="card-title card-journey-title-second">
                {cardTwo.title}
              </h6>
              <p className="card-text card-journey-text-second">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="12"
                  viewBox="0 0 13 15"
                  fill="none"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.912109 6.57036C0.912109 3.44378 3.52484 0.916687 6.6852 0.916687C9.85447 0.916687 12.4672 3.44378 12.4672 6.57036C12.4672 8.14589 11.8942 9.60858 10.9511 10.8483C9.91067 12.2159 8.6283 13.4074 7.18485 14.3426C6.85449 14.5588 6.55635 14.5751 6.19377 14.3426C4.7421 13.4074 3.45973 12.2159 2.42821 10.8483C1.48442 9.60858 0.912109 8.14589 0.912109 6.57036ZM4.78328 6.74606C4.78328 7.79347 5.63797 8.61726 6.68594 8.61726C7.73459 8.61726 8.59751 7.79347 8.59751 6.74606C8.59751 5.70682 7.73459 4.84293 6.68594 4.84293C5.63797 4.84293 4.78328 5.70682 4.78328 6.74606Z"
                    fill="#42A7C3"
                  />
                </svg>
                {cardTwo.location}
              </p>
            </div>
          </div>

          <div className="plane-journey-svg">
            <p
              style={{
                borderRadius: "32.626px",
                background: "var(--gray-50, #FFF)",
                boxShadow:
                  "0px 10.875px 21.751px 0px rgba(96, 97, 112, 0.16), 0px 2.719px 5.438px 0px rgba(40, 41, 61, 0.04)",
                width: "165px",
                height: "35px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                style={{ marginRight: "10px" }}
              >
                <path
                  d="M9.76507 24.1528L12.0308 24.1528L17.695 15.09L23.9257 15.09C24.866 15.09 25.625 14.331 25.625 13.3907C25.625 12.4505 24.866 11.6914 23.9257 11.6914L17.695 11.6914L12.0308 2.62863L9.76507 2.62863L12.5972 11.6914L6.36652 11.6914L4.66724 9.42574L2.96796 9.42574L4.10081 13.3907L2.96796 17.3557L4.66724 17.3557L6.36652 15.09L12.5972 15.09L9.76507 24.1528Z"
                  fill="#42A7C3"
                />
              </svg>
              Jakarta - Bali
            </p>
          </div>

          <div className="circle-container">
            <div className="outer-border">
              <img
                src="images/Home/journey-main.png"
                alt="Journey Main"
                className="circle-image"
              />
              <div className="middle-border">
                {/*orange medium-ellipse */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 136 135"
                    fill="none"
                    style={{ position: "relative", top: "35px", left: "50px" }}
                  >
                    <ellipse
                      cx="67.6849"
                      cy="67.5576"
                      rx="67.4026"
                      ry="67.3823"
                      fill="#FA8443"
                    />
                  </svg>
                </div>
                <div className="inner-border"></div>
              </div>
            </div>
          </div>
          <div className="blue-ellipse-journey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="97"
              height="97"
              viewBox="0 0 97 97"
              fill="none"
            >
              <ellipse
                cx="48.9196"
                cy="48.0821"
                rx="48.0494"
                ry="48.0349"
                fill="url(#paint0_linear_790_1500)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_790_1500"
                  x1="96.969"
                  y1="96.117"
                  x2="0.899205"
                  y2="0.0181318"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#42A7C3" />
                  <stop offset="0.750282" stop-color="#8ADBF0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* orange small ellipse */}
        <div className="ellipse-journey-small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
          >
            <ellipse
              cx="17.8014"
              cy="17.4052"
              rx="17.3512"
              ry="17.3459"
              fill="url(#paint0_linear_770_4378)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_770_4378"
                x1="35.1525"
                y1="34.7512"
                x2="0.460661"
                y2="0.0488335"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA679" />
                <stop offset="0.750282" stop-color="#FA8443" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StartJourney;
