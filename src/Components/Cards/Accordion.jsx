import React, { useState } from "react";
import "./Accordion.css";
import accordionData from "../../assets/js/accordionData.json";

function Accordion() {
  const [activeSection, setActiveSection] = useState(1);
  const [hoveredSection, setHoveredSection] = useState(1);

  const handleAccordionHover = (sectionNumber) => {
    setActiveSection(sectionNumber === activeSection ? 1 : sectionNumber);
    setHoveredSection(sectionNumber);
  };

  const handleAccordionLeave = () => {
    setHoveredSection(null);
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        className="row accordion-container"
        style={{ width: "90%", overflowX: "scroll" }}
      >
        <ul>
          {accordionData.map((section) => (
            <li
              key={section.id}
              className={
                activeSection === section.id || hoveredSection === section.id
                  ? "active"
                  : ""
              }
              style={{
                background: `url("${section.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "16.761px",
              }}
              onMouseEnter={() => handleAccordionHover(section.id)}
              onMouseLeave={handleAccordionLeave}
            >
              <div
                className="section-title-accordion"
                onClick={() => handleAccordionHover(section.id)}
              >
                <h2
                  className={
                    hoveredSection === section.id ||
                    (activeSection === section.id && !hoveredSection)
                      ? "expanded"
                      : ""
                  }
                >
                  {section.title}
                </h2>
                <h6
                  className={
                    hoveredSection === section.id ||
                    (activeSection === section.id && !hoveredSection)
                      ? "expanded"
                      : ""
                  }
                >
                  {section.description}
                </h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Accordion;
