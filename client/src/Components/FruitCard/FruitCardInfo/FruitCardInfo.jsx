import React from 'react';
import './FruitCardInfo.css';

const FruitCardInfo = ({ selectedFruit, setSelectedFruit }) => {
  const { fat, calories, sugar, carbohydrates, protein } = selectedFruit.nutritions;

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
          <p style={{textDecoration: 'underline'}}>{selectedFruit.name}</p>
          <p>Fat: {fat}</p>
          <p>Calories: {calories}</p>
          <p>Sugar: {sugar}</p>
          <p>Cabohydrates: {carbohydrates}</p>
          <p>Protein: {protein}</p>
        </div>
      </div>
    </div>
  )
}

export default FruitCardInfo;