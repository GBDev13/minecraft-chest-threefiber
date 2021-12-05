import React from 'react'
import { useDrop } from 'react-dnd'
import Item from './item'

const SmartBlock = ({ inventoryType, item, position, moveItem }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (item) => {
      // function to update the item in our state
      moveItem(item.position, position, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  })

  return (
    <div className={`${isOver ? 'grid-item is-over' : 'grid-item'}`} ref={drop}>
      {item.item && (
        <Item
          item={item}
          inventoryType={inventoryType}
          position={position}
        />
      )}
    </div>
  )
}

export default SmartBlock
