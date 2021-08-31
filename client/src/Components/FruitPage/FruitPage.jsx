import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitCard from '../FruitCard/FruitCard.jsx';
const { fruitPic } = require('../../../../data/fruitPicture');

const FruitPage = () => {
  const [fruits, setFruits] = useState([]);

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


  if(fruits.length !== 0) {
    return (
      <div>
        {fruits.map((fruit, index) => {
          return (
            <div key={index}>
              <FruitCard fruit={fruit} />
            </div>
          )
        })}
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