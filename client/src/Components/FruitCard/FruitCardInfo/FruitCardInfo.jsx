import React from 'react';
import './FruitCardInfo.css';

const FruitCardInfo = ({ selectedFruit, setSelectedFruit }) => {
  const clickOffImage = (event) => {
    if(event.target.classList.contains('enlarged-background')) {
      setSelectedFruit(null);
    }
  }

  return (
    <div className='popup-container'>
      <div className="enlarged-background" onClick={clickOffImage}>
        <img src={selectedFruit.photo} />
        <div className='fruit-facts'>
          <p>{selectedFruit.name}</p>
          <p>Fat: {selectedFruit.nutritions.fat}</p>
          <p>Calories: {selectedFruit.nutritions.calories}</p>
          <p>Sugar: {selectedFruit.nutritions.sugar}</p>
          <p>Cabohydrates: {selectedFruit.nutritions.carbohydrates}</p>
          <p>Protein: {selectedFruit.nutritions.protein}</p>
        </div>
      </div>
    </div>
  )
}

export default FruitCardInfo;