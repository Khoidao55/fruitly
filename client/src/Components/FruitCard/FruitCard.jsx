import React from 'react';
import './FruitCard.css';

const FruitCard = ({ fruit, pic }) => {
  return (
    <div>
      <h1>{fruit.name}</h1>
      <img src={fruit.photo} style={{width: "30%", height: "30%"}}/>
    </div>
  )
}

export default FruitCard;