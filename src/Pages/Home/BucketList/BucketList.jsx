import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BucketList.css";
import "./../../../assets/styles/global.css";
import Swiper from "swiper";

const bucketListData = {
  headings: [
    {
      className: "parag-one heading-first",
      text: "MAKE YOUR",
    },
    {
      className: "parag-two heading-second",
      text: "BUCKETLIST",
    },
  ],
  cards: [
    {
      originalImgSrc: "images/Home/suf-one.jpg",
      hoverImgSrc: "images/Home/bloga.png",
      title: "SURFING",
      location: "Goa",
      description: "DISCOVER THE SEA FROM GOA",
    },
    {
      originalImgSrc: "images/Home/suf-two.jpg",
      hoverImgSrc: "images/Home/blogb.png",
      title: "VIEW",
      location: "View",
      description: "DISCOVER THE EARTH FROM ABOVE",
    },
    {
      originalImgSrc: "images/Home/suf-three.jpg",
      hoverImgSrc: "images/Home/blogc.png",
      title: "RELAX",
      location: "Relax",
      description: "OBSERVE THE SUNSET ON MARS",
    },
    {
      originalImgSrc: "images/Home/suf-four.jpg",
      hoverImgSrc: "images/Home/blogd.png",
      title: "INSPECT",
      location: "Inspect",
      description: "THE MINE BASE ON THE MOON",
    },

    {
      originalImgSrc: "images/Home/suf-four.jpg",
      hoverImgSrc: "images/Home/blogd.png",
      title: "INSPECT",
      location: "Inspect",
      description: "THE MINE BASE ON THE MOON",
    },

    {
      originalImgSrc: "images/Home/suf-four.jpg",
      hoverImgSrc: "images/Home/blogd.png",
      title: "INSPECT",
      location: "Inspect",
      description: "THE MINE BASE ON THE MOON",
    },

    {
      originalImgSrc: "images/Home/suf-four.jpg",
      hoverImgSrc: "images/Home/blogd.png",
      title: "INSPECT",
      location: "Inspect",
      description: "THE MINE BASE ON THE MOON",
    },

    {
      originalImgSrc: "images/Home/suf-four.jpg",
      hoverImgSrc: "images/Home/blogd.png",
      title: "INSPECT",
      location: "Inspect",
      description: "THE MINE BASE ON THE MOON",
    },
  ],
};

const BucketList = () => {
  const { headings, cards } = bucketListData;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  let swiper = null;

  const handleCardHover = (index) => {
    setHoveredIndex(index);
    swiper?.slideTo(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="row">
        {headings.map((heading, index) => (
          <div key={index} className={`col-lg-12 ${heading.className}`}>
            <p className={`m-auto`}>{heading.text}</p>
          </div>
        ))}
      </div>
      <div className="swiper-container pt-5 pb-4">
        <div className="swiper-wrapper">
          {cards.map((card, index) => (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginLeft: "80px"}}
            >
              <div
                key={index}
                className={`swiper-slide`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`card d-flex card-b-list m-auto ${
                    hoveredIndex === index || activeIndex === index
                      ? "expanded"
                      : ""
                  }`}
                >
                  <div className="card-med med-b-list">
                    <img
                      src={
                        hoveredIndex === index
                          ? card.hoverImgSrc
                          : card.originalImgSrc
                      }
                      alt=""
                      className="card-image"
                    />
                    <h2>{card.title}</h2>
                    <p className="b-list-parag-one">{card.location}</p>
                    <p className="b-list-parag-two">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default BucketList;
