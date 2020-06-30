const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  top: {
    type: String,
    required: false
  },

  image: {
    type: String,
    required: true
  },

  bottom: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Meme', schema);
