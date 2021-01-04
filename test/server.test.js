const supertest = require('supertest');
const app = require('../app');
const data = require('../moviedata');
const { expect } = require('chai');

describe('GET /movie', () => {
  it('returns json', () => {
    return supertest(app)
      .get('/movie')
      .expect('Content-Type', /json/)
      .expect(200)
  })
});