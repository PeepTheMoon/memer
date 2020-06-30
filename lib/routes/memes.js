const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()

  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(memes => res.send(memes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Meme
      .findByIdAndUpdate(
        { _id: req.params.id }, 
        { top: 'When someone says',
          image: 'myimage.gif',
          bottom: 'something nice' },
        { new: true }
      )
      .then(meme => res.send(meme))
      .catch(next);
  });
