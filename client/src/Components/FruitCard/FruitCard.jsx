import React from 'react';
import './FruitCard.css';

const FruitCard = ({ fruit, pic }) => {
  return (
    <div>
      <h1 className='fruit-name'>{fruit.name}</h1>
      <img className='fruit-pic' alt={`picture-of-${fruit.name}`} src={fruit.photo} />
    </div>
  )
}

export default FruitCard;