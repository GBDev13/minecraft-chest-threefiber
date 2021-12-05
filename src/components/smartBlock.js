import React from 'react'
import Item from './item'

const SmartBlock = ({ inventoryType, item }) => {
  return (
    <div className="grid-item">
      {item.item && (
        <Item item={item} />
      )}
    </div>
  )
}

export default SmartBlock
