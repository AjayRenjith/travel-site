import React, { useState } from "react";
import "./StartJourneyCard.css";
import { animated, interpolate, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import move from "lodash-move";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styled from "styled-components";
import ImageRow from "./ImageRow";

const Wrap = styled.div({
  alignItems: "center",
  display: "flex",
  height: "90vh",
  justifyContent: "center",
});

const CardWrap = styled.div({
  height: "480px",
  position: "relative",
  width: "350px",
});

const cards = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", "#747474"];

const popularImages = [
  "images/Home/bloga.png",
  "images/Home/blogb.png",
  "images/Home/blogc.png",
  "images/Home/blogd.png",
];

const travellerImages = [
  "images/Home/suf-one.jpg",
  "images/Home/suf-two.jpg",
  "images/Home/suf-three.jpg",
  "images/Home/suf-four.jpg",
];

const experienceImages = [
  "images/Home/bloga.png",
  "images/Home/blogb.png",
  "images/Home/blogc.png",
  "images/Home/blogd.png",
];

const cotravelImages = [
  "images/Home/suf-one.jpg",
  "images/Home/suf-two.jpg",
  "images/Home/suf-three.jpg",
  "images/Home/suf-four.jpg",
];

const allImages = [
  ...popularImages,
  ...travellerImages,
  ...experienceImages,
  ...cotravelImages,
];

function getActiveImages(tabId) {
  switch (tabId) {
    case "popular":
      return popularImages;
    case "traveller":
      return travellerImages;
    case "experience":
      return experienceImages;
    case "cotravel":
      return cotravelImages;
    case "all":
      return allImages;
    default:
      return [];
  }
}

const config = { tension: 500, friction: 20 };
const CARD_RATIO = "480px";
const CARD_COUNT = cards.length;
const CARD_OFFSET = -10;

const setScale = (count) => 1 - count / 20;

const setter = (order, curIndex, y, down) => (index) => {
  index = order.indexOf(index);
  const isBelow = y < -100;

  return down && index === curIndex
    ? {
        scale: isBelow ? setScale(CARD_COUNT) : 1,
        y,
        zIndex: isBelow ? 0 : CARD_COUNT + 1,
        config,
        immediate: (key) => key === "y" || key === "zIndex",
      }
    : {
        scale: setScale(index),
        y: index * CARD_OFFSET,
        zIndex: CARD_COUNT - index + 1,
        immediate: (key) => key === "zIndex",
      };
};

function StartJourneyCard() {
  const ref = React.useRef(null);
  const cardOrder = React.useRef(cards.map((_, index) => index));
  const [showImages, setShowImages] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);
  const [activeTab, setActiveTab] = useState("popular");
  const activeImages = getActiveImages(activeTab);

  const [springs, setSprings] = useSprings(
    CARD_COUNT,
    setter(cardOrder.current)
  );

  const bind = useDrag(({ args: [origIndex], down, movement: [, y] }) => {
    const curIndex = cardOrder.current.indexOf(origIndex);
    const newOrder = move(cardOrder.current, curIndex, 0);

    disableBodyScroll(ref.current, { reserveScrollBarGap: true });

    if (!down) {
      cardOrder.current = newOrder;
      enableBodyScroll(ref.current);
      setShowImages(true);
    }

    setSprings(setter(cardOrder.current, curIndex, y, down));
  });

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleTabClick = (tabId) => {
    setShowImages(false);
    setSelectedImageIndex(0);
    setActiveTab(tabId);
  };

  const journeyCardData = [
    {
      id: 1,
      title: "START YOUR",
      second_title: "JOURNEY",
      highlightColor: "#FF881B",
    },
  ];

  const journeyItems = journeyCardData.map((item) => (
    <h2 key={item.id} className="heading-sixth">
      {item.title}{" "}
      <span style={{ color: item.highlightColor }}>{item.second_title}</span>
    </h2>
  ));

  return (
    <div>
      {journeyItems}
      <div className="tab-container d-flex justify-content-center align-items-center">
        {["popular", "traveller", "experience", "cotravel", "all"].map(
          (tabId, index) => (
            <div
              key={tabId}
              className={`tab ${activeTab === tabId ? "active" : ""}`}
              onClick={() => handleTabClick(tabId)}
              style={{ margin: index > 0 ? "0 30px" : 0 }}
            >
              {tabId === "all"
                ? "View All"
                : `${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`}
            </div>
          )
        )}
      </div>

      <div className="tab-content">
        {["popular", "traveller", "experience", "cotravel", "all"].includes(
          activeTab
        ) && (
          <Wrap>
            <CardWrap ref={ref}>
              {springs.map(({ scale, y, zIndex }, index) => {
                const imageUrl =
                  index === selectedImageIndex
                    ? activeImages[selectedImageIndex]
                    : activeImages[index];
                return (
                  <animated.div
                    {...bind(index)}
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "3% / 5%",
                      cursor: "grab",
                      left: 0,
                      paddingTop: CARD_RATIO,
                      position: "absolute",
                      right: 0,
                      transform: interpolate(
                        [y, scale],
                        (y, scale) => `translateY(${y}px) scale(${scale})`
                      ),
                      transformOrigin: "top center",
                      zIndex,
                    }}
                    key={index}
                  />
                );
              })}
            </CardWrap>
          </Wrap>
        )}

        {showImages && (
          <div className="d-flex justify-content-center align-items-center mx-4">
            <ImageRow
              images={activeImages}
              bind={bind}
              onClick={handleImageClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default StartJourneyCard;
