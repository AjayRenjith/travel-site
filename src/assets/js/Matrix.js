import React from 'react';

const Matrix = () => {
  const matrix = Array.from({ length: 3 }, (_, rowIndex) => (
    <div key={rowIndex} style={{ marginBottom: '10px' }}>
      {Array.from({ length: 5 }, (_, colIndex) => (
        <i
          key={colIndex}
          className="bi bi-circle-fill"
          style={{ margin: '0px 15px', color:"white", fontSize:"12px" }}
        ></i>
      ))}
    </div>
  ));

  return <>{matrix}</>;
};

export default Matrix;