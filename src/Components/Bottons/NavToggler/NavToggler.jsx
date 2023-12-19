import React from "react";
import "./NavToggler.css";

function NavToggler() {
  return (
    <button className="btn-toggle-nav">
      <span className="toggle-line-full"></span>
      <span className="toggle-line-medium"></span>
      <span className="toggle-line-small"></span>
    </button>
  );
}

export default NavToggler;
