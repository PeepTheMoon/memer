require('../data-helpers/data.helpers');

const request = require('supertest');
const app = require('../lib/app');
const Meme = require('../lib/models/Meme');

describe('meme routes', () => {
  it('creates a meme with POST', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'When someone says',
        image: 'myimage.gif',
        bottom: 'something nice'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          top: 'When someone says',
          image: 'myimage.gif',
          bottom: 'something nice',
          __v: 0
        });
      });
  });
});
