const axios = require('axios');
const { fruitData } = require('../../data/fruitData.js');

const getFruits = async (req, res) => {
  res.status(200).json(fruitData);
}

module.exports.getFruits = getFruits;