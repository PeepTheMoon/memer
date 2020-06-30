const { prepare } = require('../data-helpers/data.helpers');

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

  it('gets all memes with GET', async() => {
    const memes = prepare(await Meme.find());

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id with GET', async() => {
    const meme = prepare(await Meme.findOne());

    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });

  it('updates a meme by id with PUT', async() => {
    const meme = prepare(await Meme.findOne());

    return request(app)
      .put(`/api/v1/memes/${meme._id}`)
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
