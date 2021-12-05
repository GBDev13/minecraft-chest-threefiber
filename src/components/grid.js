import React from 'react';
import SmartBlock from './smartBlock';

const Grid = ({ chestState, updateChestState, inventoryType }) => {
  return (
    <div className="grid">
      {Object.keys(chestState[inventoryType]).map(function (key, index) {
        return (
          <div key={index}>
            <SmartBlock inventoryType={inventoryType} item={chestState[inventoryType][key]}/>
          </div>
        )
      })}
    </div>
  )
};

export default Grid;