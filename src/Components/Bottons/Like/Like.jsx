import React, { useState } from 'react';
import './Like.css'; 

const Heart = ({ id }) => {
  return (
    <svg
      id={id}
      width="35"
      height="35"
      viewBox="0 0 150 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M112.577 6.51645L112.588 6.51678L112.598 6.51707C124.83 6.85668 134.648 13.4871 139.798 25.162C147.658 42.9826 142.048 60.4882 131.657 75.7368C121.27 90.9784 106.855 102.747 99.8285 107.966C92.3832 113.495 84.0338 118.699 75 123.419C65.9653 118.698 57.6161 113.496 50.1717 107.966L50.1715 107.966C43.1455 102.747 28.7296 90.9784 18.3433 75.7368C7.95214 60.4882 2.34207 42.9826 10.2021 25.162L10.2022 25.1617C15.3515 13.4855 25.1696 6.85669 37.4015 6.51709L37.4155 6.51667C49.4687 6.15616 62.0214 12.1853 69.9783 21.8669L75 27.9771L80.0217 21.8669C87.982 12.1812 100.536 6.14284 112.577 6.51645Z"
        stroke="white"
        strokeWidth="13"
      />
    </svg>
  );
};

const Like = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  };

  return (
      <button onClick={handleClick} className={isFavorite ? 'favorite-stroke button-heart-like' : 'favorite-filled button-heart-like'}
      >
        <Heart id={isFavorite ? 'favorite-stroke' : 'favorite-filled'} />
      </button>
  );
};

export default Like;


