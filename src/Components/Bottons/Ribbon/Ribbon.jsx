import React from "react";
import './Ribbon.css'

export const ribbonData = [
  {
    "firstLine": "Upto",
    "secondLine": "30%",
    "thirdLine": "Off"
  },
  {
    "firstLine": "Special",
    "secondLine": "Discount",
    "thirdLine": ""
  },
  {
    "firstLine": "Limited",
    "secondLine": "Time",
    "thirdLine": "Offer"
  },
  {
    "firstLine": "Exclusive",
    "secondLine": "Deals",
    "thirdLine": ""
  }
];

function Ribbon({ ribbonData }) {
  return (
    <div className="ribbon-box">
      <div className="ribbon">
        <span className="ribbon-name-first">{ribbonData.firstLine}</span>{" "}
        <span className="ribbon-name-second">{ribbonData.secondLine}</span>{" "}
        <span className="ribbon-name-third">{ribbonData.thirdLine}</span>
      </div>
    </div>
  );
}

export default Ribbon;
