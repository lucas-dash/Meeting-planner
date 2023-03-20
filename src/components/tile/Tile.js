import React from 'react';

export const Tile = ({ propData }) => {
  return (
    <div className="tile-container">
      {Object.values(propData).map((value, index) => {
        return (
          <p key={index} className={index === 0 ? 'tile tile-title' : 'tile'}>
            {value}
          </p>
        );
      })}
    </div>
  );
};
