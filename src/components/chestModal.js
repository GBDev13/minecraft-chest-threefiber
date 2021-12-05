import React from 'react';
import { useImmer } from 'use-immer';
import Grid from './grid';
import { state } from './state';

// React Spring
import { useTransition, a } from 'react-spring';

// Chest Audio
import chestCloseSound from '../assets/sound/close-chest.mp3';

const closeChest = new Audio(chestCloseSound);

const ChestModal = ({ open, setOpen }) => {
  // Set immer state to our default state
  const [chestState, updateChestState] = useImmer(state);

  const closeModal = () => {
    setOpen(!open);
    closeChest.volume = 0.3;
    closeChest.play();
  };

  const transitions = useTransition(open, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  })

  return transitions.map(({ item, key, props }) => item && (
    <a.div key={key} style={props} className="modal-chest-wrapper">
      <div className="overlay" onClick={closeModal}/>
      <div className="modal-chest">
        <div className="top">
          <div className="header">
            <h4>Chest</h4>
            <div className="close" onClick={closeModal}>x</div>
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
    </a.div>
  ))
};

export default ChestModal;