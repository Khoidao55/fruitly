import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitCard from '../FruitCard/FruitCard.jsx';
import FruitCardInfo from '../FruitCard/FruitCardInfo/FruitCardInfo.jsx';
import './FruitPage.css';
const { fruitPic } = require('../../../../data/fruitPicture');

const FruitPage = () => {
  let toggle = false;
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(async () => {
    const fruitData = await axios.get('/fruits');
    setFruits(fruitData.data);
  }, []);

  //adds photo to the fruit object.
  for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].name in fruitPic) {
      fruits[i].photo = fruitPic[fruits[i].name];
    }
  }

  const onClickFruit = (fruit) => {
    setSelectedFruit(fruit);
  }

  if(fruits.length !== 0) {
    return (
      <div className='image-gallery-container'>
          {fruits.map((fruit, index) => {
            return (
              <div key={index} onClick={() => onClickFruit(fruit)}>
                <FruitCard fruit={fruit} />
              </div>
            )
          })}
          {selectedFruit &&
          <FruitCardInfo
            selectedFruit={selectedFruit}
            setSelectedFruit={setSelectedFruit}
          />}
        </div>
    )
  } else {
    return (
      <div>
        <h1> Loading... </h1>
      </div>
    )
  }
}

export default FruitPage;