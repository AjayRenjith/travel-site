import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:"20px 5px 20px 0px",
    width: "250px",
    borderRadius: "60px",
    backgroundColor: "white",
    color: "#1E1E1E",
    fontSize: "14px",
    fontWeight: "600",
    border: "0px solid black",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle}>
      Get Started
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__get-started ms-5"
      >
        <g id="Icon Container" clip-path="url(#clip0_983_3724)">
          <path
            id="Vector (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.1219 7.89378C13.4803 7.53541 14.0614 7.53541 14.4197 7.89378L19.7729 13.2469C19.945 13.419 20.0417 13.6524 20.0417 13.8958C20.0417 14.1392 19.945 14.3726 19.7729 14.5447L14.4197 19.8979C14.0614 20.2563 13.4803 20.2563 13.1219 19.8979C12.7636 19.5395 12.7636 18.9585 13.1219 18.6001L16.9085 14.8135H8.41768C7.91086 14.8135 7.5 14.4027 7.5 13.8958C7.5 13.389 7.91086 12.9781 8.41768 12.9781H16.9085L13.1219 9.19158C12.7636 8.83321 12.7636 8.25216 13.1219 7.89378Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_983_3724">
            <rect
              width="26.875"
              height="26.875"
              fill="white"
              transform="translate(0.333984 0.458984)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default GetStarted;
