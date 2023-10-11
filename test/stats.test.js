const request = require('supertest');
const assert = require('chai').assert;
const { app, server }  = require('../index');

describe('GET /stats', function() {
  after(() => {
    server.close();
  });

  it('Esperamos status 200', async () => {
    await request(app).get('/stats')
      .expect(200);
  });

  it('Deberia retornar 4 elemtos numericos [count_mutation, count_no_mutation, ratio, ratio_aditional]', async () => {
    const response = await request(app).get('/stats');
    request(app).get('/stats');
      assert.isNumber(response.body.count_mutation);
      assert.isNumber(response.body.count_no_mutation);
      assert.isNumber(response.body.ratio);
      assert.isNumber(response.body.ratio_aditional);
  });

  it('El valor del ratio deberia ser el resultado de la division entre count_mutation y count_no_mutation', async () => {
    const response = await request(app).get('/stats');
    request(app).get('/stats');
      assert.equal(response.body.ratio, response.body.count_mutation / response.body.count_no_mutation);
  });

  it('El valor del ratio_aditional deberia ser el resultado de dividir count_mutations entre la sumatoria de count_no_mutation mas count_mutations', async () => {
    const response = await request(app).get('/stats');
    request(app).get('/stats');
      assert.equal(response.body.ratio_aditional, response.body.count_mutation / (response.body.count_no_mutation + response.body.count_mutation));
  });
  
});
