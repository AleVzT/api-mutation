const { expect } = require('chai');
const request = require('supertest');
const assert = require('chai').assert;
const { app, server }  = require('../index');

describe('POST /mutation/', function () {
  this.afterAll(() => {
    server.close();
  });

  it('deberia retornar un codigo de estado 200 si se detecta una mutacion', function (done) {
    request(app)
      .post('/mutation/')
      .send({
        dna: [
          'ATGCGA',
          'CAGTGC',
          'TTATGT',
          'AGAAGG',
          'CCCCTA',
          'TCACTG'
        ]
      })
      .expect(200, done);
  });

  it('deberia retornar un codigo de estado 403 si no se detecta una mutacion', function (done) {
    request(app)
      .post('/mutation/')
      .send({
        dna: [
          'ATGCGA',
          'CAGTGC',
          'TTATTT',
          'AGACGG',
          'GCGTCA', 
          'TCACTG'
        ]
      })
      .expect(403, done);
  });

  it('Debemos verificar que al ser la request body vacio, responder campos requeridos Error', async () => {
    await request(app).post('/mutation/')
      .expect(400)
      .expect('Content-Type', /application\/json/)
  });
  
});
