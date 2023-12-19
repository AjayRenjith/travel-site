import React from "react";
import "./TrendingDestinations.css";
import TDFlipCards from "./TDFlipCards";

function TrendingDestinations() {
  const TrendingDtnData = [
    {
      id: 1,
      title: "Trending",
      second_title: "Destinations",
      sub_title: "Most popular choices for travelers from Asia",
      highlightColor: "#FF881B",
    },
  ];

  const TrendingDtnItems = TrendingDtnData.map((item) => (
    <div key={item.id} className="my-5">
      <h2 className="heading-sixth">
        {item.title}{" "}
        <span style={{ color: item.highlightColor }}>{item.second_title}</span>
      </h2>
      <p
        style={{
          color: item.highlightColor,
          textAlign: "center",
          fontSize: "25px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {item.sub_title}
      </p>
    </div>
  ));

  return (
    <div>
      {TrendingDtnItems}
      <div className="container-fluid">
      <TDFlipCards/>
      </div>
    </div>
  );
}

export default TrendingDestinations;
