import React from "react";
import "./Plan.css";
import Accordion from "../../../Components/Cards/Accordion";

const bucketListData = {
  headings: [
    {
      className: "parag-one heading-first",
      text: "Guides, Lists, And Itineraries",
    },
    {
      className: "parag-five heading-second",
      text: "Plan Your Adventure",
    },
  ],
};

function Plan() {
  const { headings } = bucketListData;
  return (
    <>
      <div className="row">
        {headings.map((heading, index) => (
          <div key={index} className={`col-lg-8 ${heading.className}`}>
            <p className={`m-auto`}>{heading.text}</p>
          </div>
        ))}
        <div
          className="col-lg justify-content-end"
          style={{ position: "relative", left: "150px", top:"55px",color: "#42A8C3",fontWeight: 600 }}
        >
          <p><a href="">View all Destinations</a></p>
        </div>
      </div>

      <div className="expanding-container">
        <Accordion />
      </div>
    </>
  );
}

export default Plan;
