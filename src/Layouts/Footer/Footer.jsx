import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import SendRequest from "../../Components/Bottons/SendRequest/SendRequest";

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <FooterItem heading="Reach us">
            <Row>
              <p>
                <a href="" className="d-flex align-items-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <g id="bxs:phone-call">
                      <path
                        id="Vector"
                        d="M26.667 14.9987H29.3336C29.3336 8.15867 24.1696 3 17.3203 3V5.66667C22.7363 5.66667 26.667 9.59067 26.667 14.9987Z"
                        fill="#FF881B"
                      />
                      <path
                        id="Vector_2"
                        d="M17.3337 11.0016C20.1377 11.0016 21.3337 12.1976 21.3337 15.0016H24.0004C24.0004 10.7016 21.6337 8.33495 17.3337 8.33495V11.0016ZM21.8964 18.259C21.6402 18.0261 21.3035 17.9019 20.9574 17.9126C20.6114 17.9233 20.283 18.068 20.0417 18.3163L16.851 21.5976C16.083 21.451 14.539 20.9696 12.9497 19.3843C11.3604 17.7936 10.879 16.2456 10.7364 15.483L14.015 12.291C14.2636 12.0498 14.4086 11.7214 14.4193 11.3752C14.43 11.0291 14.3056 10.6923 14.0724 10.4363L9.14571 5.01895C8.91243 4.7621 8.58821 4.60629 8.24191 4.58463C7.89561 4.56297 7.55451 4.67717 7.29104 4.90295L4.39771 7.38429C4.16719 7.61564 4.0296 7.92355 4.01104 8.24962C3.99104 8.58295 3.60971 16.479 9.73238 22.6043C15.0737 27.9443 21.7644 28.335 23.607 28.335C23.8764 28.335 24.0417 28.327 24.0857 28.3243C24.4117 28.306 24.7195 28.1678 24.9497 27.9363L27.4297 25.0416C27.6557 24.7783 27.7701 24.4373 27.7487 24.091C27.7273 23.7447 27.5717 23.4204 27.315 23.187L21.8964 18.259V18.259Z"
                        fill="#FF881B"
                      />
                    </g>
                  </svg>
                  +1012 3456 789
                </a>
              </p>

              <p>
                <a href="" className="d-flex align-items-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <g id="ic:sharp-email">
                      <path
                        id="Vector"
                        d="M29.3327 5.66406H2.66602V26.9974H29.3327V5.66406ZM26.666 10.9974L15.9994 17.6641L5.33268 10.9974V8.33073L15.9994 14.9974L26.666 8.33073V10.9974Z"
                        fill="#FF881B"
                      />
                    </g>
                  </svg>
                  demo@gmail.com
                </a>
              </p>
              <p>
                <a href="" className="d-flex align-items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <g id="carbon:location-filled">
                      <path
                        id="Vector"
                        d="M16 2.33203C13.0837 2.33547 10.2878 3.4955 8.22564 5.55766C6.16348 7.61981 5.00345 10.4157 5.00001 13.332C4.99652 15.7153 5.77499 18.0338 7.21601 19.932C7.21601 19.932 7.51601 20.327 7.56501 20.384L16 30.332L24.439 20.379C24.483 20.326 24.784 19.932 24.784 19.932L24.785 19.929C26.2253 18.0316 27.0034 15.7142 27 13.332C26.9966 10.4157 25.8365 7.61981 23.7744 5.55766C21.7122 3.4955 18.9163 2.33547 16 2.33203ZM16 17.332C15.2089 17.332 14.4355 17.0974 13.7777 16.6579C13.1199 16.2184 12.6072 15.5937 12.3045 14.8628C12.0017 14.1319 11.9225 13.3276 12.0769 12.5517C12.2312 11.7757 12.6122 11.063 13.1716 10.5036C13.731 9.94419 14.4437 9.56323 15.2196 9.40889C15.9956 9.25455 16.7998 9.33376 17.5307 9.63651C18.2616 9.93926 18.8864 10.452 19.3259 11.1098C19.7654 11.7675 20 12.5409 20 13.332C19.9987 14.3925 19.5768 15.4091 18.827 16.159C18.0771 16.9089 17.0605 17.3307 16 17.332Z"
                        fill="#FF881B"
                      />
                    </g>
                  </svg>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </a>
              </p>
            </Row>
            <Row>
              <div className="sm-icons-footer d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 39 38"
                  fill="none"
                  className=" me-3"
                  style={{
                    border: "2px solid #FF881B",
                    borderRadius: "60%",
                    padding: "10px",
                  }}
                >
                  <path
                    d="M19.2353 11.7646C17.8392 11.7646 16.4744 12.1786 15.3136 12.9542C14.1528 13.7299 13.248 14.8323 12.7138 16.1221C12.1795 17.412 12.0397 18.8312 12.3121 20.2005C12.5845 21.5698 13.2567 22.8276 14.2439 23.8148C15.2311 24.802 16.4889 25.4742 17.8582 25.7466C19.2275 26.019 20.6467 25.8792 21.9366 25.3449C23.2264 24.8107 24.3288 23.9059 25.1045 22.7451C25.8801 21.5843 26.2941 20.2195 26.2941 18.8234C26.2922 16.9519 25.5478 15.1576 24.2245 13.8342C22.9011 12.5109 21.1068 11.7665 19.2353 11.7646ZM19.2353 23.5293C18.3045 23.5293 17.3947 23.2533 16.6208 22.7362C15.847 22.2191 15.2438 21.4842 14.8876 20.6243C14.5314 19.7644 14.4382 18.8182 14.6198 17.9053C14.8014 16.9925 15.2496 16.154 15.9077 15.4959C16.5658 14.8377 17.4044 14.3895 18.3172 14.208C19.2301 14.0264 20.1763 14.1196 21.0361 14.4757C21.896 14.8319 22.631 15.4351 23.1481 16.209C23.6652 16.9828 23.9412 17.8927 23.9412 18.8234C23.9412 20.0715 23.4454 21.2685 22.5628 22.151C21.6803 23.0335 20.4834 23.5293 19.2353 23.5293ZM26.2941 3.5293H12.1765C9.99304 3.53163 7.89972 4.40003 6.3558 5.94394C4.81189 7.48785 3.9435 9.58117 3.94116 11.7646V25.8822C3.9435 28.0657 4.81189 30.159 6.3558 31.7029C7.89972 33.2468 9.99304 34.1152 12.1765 34.1175H26.2941C28.4775 34.1152 30.5708 33.2468 32.1148 31.7029C33.6587 30.159 34.5271 28.0657 34.5294 25.8822V11.7646C34.5271 9.58117 33.6587 7.48785 32.1148 5.94394C30.5708 4.40003 28.4775 3.53163 26.2941 3.5293ZM32.1765 25.8822C32.1765 27.4423 31.5567 28.9385 30.4536 30.0417C29.3504 31.1448 27.8542 31.7646 26.2941 31.7646H12.1765C10.6164 31.7646 9.12016 31.1448 8.017 30.0417C6.91385 28.9385 6.2941 27.4423 6.2941 25.8822V11.7646C6.2941 10.2045 6.91385 8.70829 8.017 7.60514C9.12016 6.50198 10.6164 5.88224 12.1765 5.88224H26.2941C27.8542 5.88224 29.3504 6.50198 30.4536 7.60514C31.5567 8.70829 32.1765 10.2045 32.1765 11.7646V25.8822ZM28.647 11.1764C28.647 11.5254 28.5435 11.8666 28.3496 12.1568C28.1557 12.447 27.8801 12.6732 27.5577 12.8067C27.2352 12.9403 26.8804 12.9752 26.5381 12.9072C26.1957 12.8391 25.8813 12.671 25.6345 12.4242C25.3877 12.1774 25.2196 11.863 25.1515 11.5206C25.0835 11.1783 25.1184 10.8235 25.252 10.501C25.3855 10.1786 25.6117 9.90296 25.9019 9.70906C26.1921 9.51515 26.5333 9.41165 26.8823 9.41165C27.3504 9.41165 27.7992 9.59757 28.1302 9.92852C28.4611 10.2595 28.647 10.7083 28.647 11.1764Z"
                    fill="#FF881B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 39 38"
                  fill="none"
                  className=" me-3"
                  style={{
                    border: "2px solid #FF881B",
                    borderRadius: "60%",
                    padding: "10px",
                  }}
                >
                  <path
                    d="M27.6079 3.1377H22.902C20.8219 3.1377 18.827 3.96402 17.3561 5.4349C15.8852 6.90577 15.0589 8.9007 15.0589 10.9808V15.6867H10.353V21.9612H15.0589V34.5102H21.3334V21.9612H26.0393L27.6079 15.6867H21.3334V10.9808C21.3334 10.5648 21.4987 10.1658 21.7929 9.87165C22.087 9.57747 22.486 9.4122 22.902 9.4122H27.6079V3.1377Z"
                    stroke="#FF881B"
                    stroke-width="2.82353"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 39 38"
                  fill="none"
                  className=" me-3"
                  style={{
                    border: "2px solid #FF881B",
                    borderRadius: "60%",
                    padding: "10px",
                  }}
                >
                  <path
                    d="M24.653 17.8446L17.5942 13.1387C17.417 13.0205 17.211 12.9526 16.9982 12.9423C16.7854 12.9319 16.5738 12.9796 16.386 13.0802C16.1982 13.1807 16.0412 13.3304 15.9318 13.5132C15.8224 13.696 15.7646 13.9051 15.7648 14.1181V23.5299C15.7646 23.7429 15.8224 23.952 15.9318 24.1348C16.0412 24.3176 16.1982 24.4673 16.386 24.5678C16.5738 24.6684 16.7854 24.716 16.9982 24.7057C17.211 24.6954 17.417 24.6275 17.5942 24.5093L24.653 19.8034C24.8144 19.696 24.9467 19.5504 25.0383 19.3795C25.1298 19.2087 25.1777 19.0178 25.1777 18.824C25.1777 18.6302 25.1298 18.4393 25.0383 18.2684C24.9467 18.0976 24.8144 17.952 24.653 17.8446ZM18.1177 21.3313V16.324L21.8795 18.824L18.1177 21.3313ZM34.931 10.224C34.7924 9.68186 34.5269 9.18044 34.1564 8.7611C33.7859 8.34176 33.321 8.01653 32.8001 7.81223C27.7589 5.86517 19.7354 5.88282 19.2942 5.88282C18.853 5.88282 10.8295 5.86517 5.78831 7.81223C5.26738 8.01653 4.80248 8.34176 4.43198 8.7611C4.06148 9.18044 3.796 9.68186 3.65743 10.224C3.27655 11.6916 2.82361 14.374 2.82361 18.824C2.82361 23.274 3.27655 25.9563 3.65743 27.424C3.79579 27.9664 4.06118 28.4681 4.43169 28.8877C4.8022 29.3073 5.26721 29.6328 5.78831 29.8372C10.6177 31.7005 18.1765 31.7652 19.1971 31.7652H19.3913C20.4118 31.7652 27.9751 31.7005 32.8001 29.8372C33.3212 29.6328 33.7862 29.3073 34.1567 28.8877C34.5272 28.4681 34.7926 27.9664 34.931 27.424C35.3118 25.9534 35.7648 23.274 35.7648 18.824C35.7648 14.374 35.3118 11.6916 34.931 10.224ZM32.653 26.8416C32.6082 27.0221 32.5213 27.1893 32.3993 27.3296C32.2774 27.47 32.1239 27.5794 31.9516 27.649C27.2971 29.4461 19.381 29.4137 19.3045 29.4137H19.2942C19.2148 29.4137 11.3045 29.4431 6.64714 27.649C6.47474 27.5794 6.32129 27.47 6.19936 27.3296C6.07742 27.1893 5.99049 27.0221 5.94567 26.8416C5.58831 25.499 5.17655 23.0255 5.17655 18.824C5.17655 14.6225 5.58831 12.149 5.93537 10.8137C5.97936 10.6322 6.06592 10.4638 6.1879 10.3224C6.30988 10.181 6.46377 10.0706 6.63684 10.0005C11.1251 8.26664 18.6457 8.23576 19.2618 8.23576H19.3016C19.381 8.23576 27.2986 8.20929 31.9486 10.0005C32.121 10.07 32.2745 10.1795 32.3964 10.3198C32.5183 10.4602 32.6053 10.6274 32.6501 10.8078C33.0001 12.149 33.4118 14.6225 33.4118 18.824C33.4118 23.0255 33.0001 25.499 32.653 26.8343V26.8416Z"
                    fill="#FF881B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 38 38"
                  fill="none"
                  className=" me-3"
                  style={{
                    border: "2px solid #FF881B",
                    borderRadius: "60%",
                    padding: "10px",
                  }}
                >
                  <path
                    d="M36.3811 10.1393C36.2921 9.9243 36.1414 9.74053 35.9479 9.61122C35.7545 9.48191 35.527 9.41287 35.2944 9.41282H30.8194C30.1937 8.34838 29.3033 7.46393 28.2346 6.84547C27.166 6.22701 25.9555 5.89558 24.7208 5.88341C23.801 5.87134 22.888 6.04337 22.0357 6.38936C21.1833 6.73536 20.4088 7.24834 19.7576 7.89811C19.0874 8.55579 18.5555 9.34083 18.1931 10.2071C17.8307 11.0733 17.6451 12.0032 17.6473 12.9422V13.8378C11.7267 12.2761 6.88407 7.45988 6.8326 7.40841C6.67476 7.24917 6.47471 7.13835 6.256 7.089C6.0373 7.03965 5.80904 7.05383 5.59812 7.12985C5.3872 7.20587 5.20239 7.34059 5.06547 7.51812C4.92854 7.69566 4.84519 7.90862 4.82524 8.13194C4.19142 15.1599 6.2326 19.8628 8.06054 22.5702C8.95183 23.9085 10.0361 25.1078 11.2782 26.129C9.03848 28.7069 5.51201 30.0613 5.47377 30.0761C5.30776 30.1382 5.15795 30.2371 5.03553 30.3653C4.91311 30.4935 4.82125 30.6478 4.7668 30.8165C4.71236 30.9852 4.69675 31.164 4.72113 31.3396C4.74551 31.5152 4.80925 31.683 4.9076 31.8305C5.01789 31.9952 5.45907 32.5731 6.53701 33.1128C7.86936 33.7805 9.62965 34.1187 11.7649 34.1187C22.1576 34.1187 30.8414 26.1158 31.7282 15.8187L36.1267 11.4216C36.2912 11.257 36.4032 11.0473 36.4484 10.8191C36.4937 10.5908 36.4703 10.3542 36.3811 10.1393ZM29.7635 14.4643C29.5618 14.6665 29.4405 14.9352 29.4223 15.2202C28.8238 24.4981 21.0708 31.7658 11.7649 31.7658C10.212 31.7658 9.11789 31.5599 8.35024 31.3128C10.0429 30.3937 12.4032 28.8128 13.9208 26.5363C14.0099 26.4025 14.0706 26.2518 14.0992 26.0936C14.1277 25.9353 14.1235 25.7729 14.0869 25.6164C14.0502 25.4598 13.9819 25.3124 13.886 25.1833C13.7902 25.0542 13.6689 24.9462 13.5297 24.8658C13.4605 24.8261 7.0723 20.9922 7.05907 10.7481C9.41201 12.6599 13.7135 15.6261 18.6282 16.4525C18.7966 16.4809 18.9692 16.4723 19.134 16.4273C19.2988 16.3822 19.4518 16.3018 19.5823 16.1917C19.7129 16.0816 19.8179 15.9443 19.8901 15.7895C19.9623 15.6347 19.9998 15.466 20.0002 15.2952V12.9422C19.9989 12.3147 20.1231 11.6932 20.3656 11.1143C20.608 10.5355 20.9638 10.0109 21.412 9.57164C21.8416 9.1412 22.3532 8.80125 22.9165 8.5719C23.4798 8.34255 24.0833 8.22845 24.6914 8.23635C26.5532 8.25988 28.2929 9.39517 29.0208 11.0613C29.1126 11.2708 29.2634 11.449 29.4549 11.5741C29.6463 11.6992 29.8701 11.7658 30.0988 11.7658H32.4517L29.7635 14.4643Z"
                    fill="#FF881B"
                  />
                </svg>
              </div>
            </Row>
          </FooterItem>

          <FooterItem heading="Company">
            <p>
              <a href="">About</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
            <p>
              <a href="">Blogs</a>
            </p>
          </FooterItem>

          <FooterItem heading="Legal">
            <p>
              <a href="">Privacy Policy</a>
            </p>
            <p>
              <a href="">Terms & Services</a>
            </p>
            <p>
              <a href="">Terms of Use</a>
            </p>
            <p>
              <a href="">Refund Policy</a>
            </p>
          </FooterItem>

          <FooterItem heading="Quick Links">
            <p>
              <a href="">Techlabz Keybox</a>
            </p>
            <p>
              <a href="">Downloads</a>
            </p>
            <p>
              <a href="">Forum</a>
            </p>
          </FooterItem>
          <FooterItem>
            <div className="footer-form-container">
              <p>FEEDBACK</p>
              <h4>
                Seeking personalized support? Request a call from our team
              </h4>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    name="name"
                    required
                    className="bg-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  name="phone"
                  className="bg-transparent"
                  required
                />
                <div>
                  <SendRequest />
                </div>
              </form>
            </div>
          </FooterItem>
        </Row>
      </Container>
    </div>
  );
}

function FooterItem({ heading, children }) {
  return (
    <Col className="footer-links-item">
      <div className="footer-link-links">
        <h4>{heading}</h4>
        {children}
      </div>
    </Col>
  );
}

export default Footer;