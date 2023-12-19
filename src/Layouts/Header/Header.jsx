import React, { useContext } from "react";
import CoTravelNavbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { HoverContext } from "../../assets/js/HoverContext";

const Header = () => {
  const { isHovered, setIsHovered } = useContext(HoverContext);

  return (
    <div
      className={`${styles["header-container"]} ${
        isHovered ? styles["hovered"] : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="navbar-fixed-top">
        <CoTravelNavbar />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles["text-container-one"]}>Travel.</p>
        <p className={styles["text-container-two"]}>Explore.</p>
        <p className={styles["text-container-three"]}>Destination.</p>
      </div>
      <div className={styles["description-container"]}>
        <p
          className={`${styles["description-container-one"]} ${
            isHovered ? styles["white"] : ""
          }`}
        >
          Collecting the Memories....
        </p>
        <p
          className={`${styles["description-container-two"]} ${
            isHovered ? styles["white"] : ""
          }`}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
    </div>
  );
};

export default Header;
