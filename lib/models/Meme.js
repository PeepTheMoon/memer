const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  top: {
    type: String,
    required: false,
    maxlength: 30
  },

  image: {
    type: String,
    required: true
  },

  bottom: {
    type: String,
    required: false,
    maxlength: 40
  }
});

module.exports = mongoose.model('Meme', schema);
