const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('. routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app)
    .post('/api/v1/spells')
    .send({
       url: `/api/spells/acid-arrow`,
       name: 'Acid Arrow'})
  });

  it('adds a new spell to your spellbook', () => {
    return request(app)
    .post('/api/v1/spells')
    .send({
      url: `/api/spells/acid-arrow`,
      name: 'Acid Arrow'})
    .then((res) => {
      expect(res.body).toEqual({
        id: '2',
        url: '/api/spells/acid-arrow',
        name: 'Acid Arrow'
      });
    });
  });

  it('gets all spells in your spellbook', async () => {
    const res = await request(app)
      .get('/api/v1/spells')
    expect(res.body).toEqual([{
      id: '1',
      url: '/api/spells/acid-arrow',
      name: 'Acid Arrow'
    }]);
  });

  it('gets a single spell by its ID', async () => {
    const res = await request(app)
      .get('/api/v1/spells/1');

    expect(res.body).toEqual({
      id: '1',
      url: '/api/spells/acid-arrow',
      name: 'Acid Arrow'
    });
  });

  it('changes the name or url of a spell in your spellbook', () => {
    return request(app)
      .put('/api/v1/spells/1')
      .send({ name: 'Acrid Dart' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          url: '/api/spells/acid-arrow',
          name: 'Acrid Dart'
        });
      });
  });

  it('deletes a spell from your spellbook', () => {
    return request(app)
      .delete('/api/v1/spells/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          url: '/api/spells/acid-arrow',
          name: 'Acid Arrow'
        });
      });
  });

});
