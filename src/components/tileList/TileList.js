import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ listdata }) => {
  return (
    <div>
      {listdata.map((data, index) => {
        return <Tile key={index} propData={data} />;
      })}
    </div>
  );
};
