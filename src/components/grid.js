import React from 'react';

// React DND
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Components
import SmartBlock from './smartBlock';

const Grid = ({ chestState, updateChestState, inventoryType }) => {

  const updateItem = (blockFrom, blockTo, item) => {
    // If dragging to new inventory type run this
    if(item.inventoryType !== inventoryType) {
      updateChestState((draft) => {
        const to = draft[inventoryType][blockTo].item;

        if(!!to) {
          draft[item.inventoryType][blockFrom].item = to;
          draft[inventoryType][blockTo].item = item.id;
        } else {
          draft[item.inventoryType][blockFrom].item = null;
          draft[inventoryType][blockTo].item = item.id;
        }
      });
    } // Update item from the sam inventory type
    else {
      updateChestState((draft) => {
        const to = draft[inventoryType][blockTo].item;

        if (!!to) {
          draft[inventoryType][blockFrom].item = to;
          draft[inventoryType][blockTo].item = item.id;
        } else {
          draft[inventoryType][blockFrom].item = null;
          draft[inventoryType][blockTo].item = item.id;
        }
      })
    }
  };

  // Function will grab where our block are coming from and goin to and store them in a var for their state
  const moveItem = (from, to, item) => {
    const blockFrom =  `block${from.replaceAll(",", "")}`;
    const blockTo =  `block${to.replaceAll(",", "")}`;
    updateItem(blockFrom, blockTo, item);
  };

  // Get the X & Y of block
  const getXYPosition = (i) => {
    const x = i % 9;
    const y = Math.floor(i / 9);
    return { x, y };
  };

  // Return X & Y of the block in an array string
  const getPosition = (i) => {
    const {x, y} = getXYPosition(i);
    const block = [x,y];
    return `${block}`;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid">
        {Object.keys(chestState[inventoryType]).map(function (key, index) {
          return (
            <div key={index}>
              <SmartBlock
                inventoryType={inventoryType}
                item={chestState[inventoryType][key]}
                position={getPosition(index)}
                moveItem={moveItem}
              />
            </div>
          )
        })}
      </div>
    </DndProvider>
  )
};

export default Grid;