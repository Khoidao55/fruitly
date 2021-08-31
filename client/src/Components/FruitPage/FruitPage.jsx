import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FruitPage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(async () => {
    const fruitData = await axios.get('/fruits');
    setFruits(fruitData.data);
  }, []);

  console.log(fruits);
  if(fruits.length !== 0) {
    return (
      <div>
        <h1> Fruit Page !</h1>
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