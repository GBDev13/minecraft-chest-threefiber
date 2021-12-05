import React from 'react'

function Item({ item }) {
  const itemVisual = require(`../assets/items/${item.item}.svg`);
  
  return (
    <div>
      <img src={itemVisual} alt={itemVisual}/>
    </div>
  )
}

export default Item
