import React from 'react';
import { useImmer } from 'use-immer';
import Grid from './grid';
import { state } from './state';

const ChestModal = () => {
  // Set immer state to our default state
  const [chestState, updateChestState] = useImmer(state);

  return (
    <div className="modal-chest-wrapper">
      <div className="overlay" />
      <div className="modal-chest">
        <div className="top">
          <div className="header">
            <h4>Chest</h4>
            <div className="close">x</div>
          </div>
          <Grid
            chestState={chestState}
            updateChestState={updateChestState}
            inventoryType="chestState"
          />
        </div>
        <div className="middle">
          <div className="header">
            <h4>Inventory</h4>
          </div>
          <Grid
            chestState={chestState}
            updateChestState={updateChestState}
            inventoryType="inventoryState"
          />
        </div>
        <div className="bottom">
          <Grid
            chestState={chestState}
            updateChestState={updateChestState}
            inventoryType="hotBarState"
          />
        </div>
      </div>
    </div>
  )
};

export default ChestModal;