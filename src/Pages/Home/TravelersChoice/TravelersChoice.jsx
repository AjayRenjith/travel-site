import React from "react";
import "./TravelersChoice.css";

function TravelersChoice() {
  return (
    <div className="row t-choice-bg">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg">
            <h1 className="t-choice-heading">
              Travelers’ Choice Best of the best
            </h1>
            <p className="t-choice-parag">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="col-lg t-choice-bg-parent">
            <div className="t-choice-bg-first"></div>
            <div className="t-choice-bg-second"></div>
            <div className="t-choice-bg-third"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersChoice;
