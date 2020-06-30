const chance = require('chance').Chance();
const Meme = require('../lib/models/Meme');

module.exports = async({ memes = 20 } = {}) => {
  const topString = [...Array(10)].map(() => chance.sentence({ words: 3 }));

  const bottomString = [...Array(10)].map(() => chance.sentence({ words: 5 }));

  const image = [...Array(30)].map(() => chance.url({ extensions: ['gif', 'jpg', 'png'] }));

  await Meme.create([...Array(memes)].map(() => ({
    top: chance.pickone(topString),
    image: chance.pickone(image),
    bottom: chance.pickone(bottomString)
  })));
};
