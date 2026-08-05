const test = require('node:test');
const assert = require('node:assert/strict');
const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

test('GET /passeios retorna a lista inicial de passeios', async () => {
  const response = await request.get('/passeios');

  assert.equal(response.status, 200);
  assert.equal(response.body.length, 3);
  assert.equal(response.body[0].nome, 'Aurora Clássica');
});

test('POST /login autentica admin e retorna token', async () => {
  const response = await request.post('/login').send({
    email: 'admin@aurora.com',
    senha: 'admin123'
  });

  assert.equal(response.status, 200);
  assert.ok(response.body.token);
  assert.equal(response.body.usuario.tipo, 'admin');
});

test('cliente consegue criar, listar e cancelar sua reserva', async () => {
  const loginResponse = await request.post('/login').send({
    email: 'maria@email.com',
    senha: 'cliente123'
  });

  const token = loginResponse.body.token;

  const createResponse = await request.post('/reservas')
    .set('Authorization', `Bearer ${token}`)
    .send({
      id_passeio: 1,
      data: '2026-12-20',
      quantidade_pessoas: 2
    });

  assert.equal(createResponse.status, 201);
  assert.equal(createResponse.body.status, 'RESERVADO');

  const listResponse = await request.get('/reservas')
    .set('Authorization', `Bearer ${token}`);

  assert.equal(listResponse.status, 200);
  assert.ok(listResponse.body.some((reserva) => reserva.id === createResponse.body.id));

  const cancelResponse = await request.patch(`/reservas/${createResponse.body.id}`)
    .set('Authorization', `Bearer ${token}`);

  assert.equal(cancelResponse.status, 200);
  assert.equal(cancelResponse.body.status, 'CANCELADO');
});

test('admin consegue criar passeio e visualizar todas as reservas', async () => {
  const loginResponse = await request.post('/login').send({
    email: 'admin@aurora.com',
    senha: 'admin123'
  });

  const token = loginResponse.body.token;

  const createPasseioResponse = await request.post('/passeios')
    .set('Authorization', `Bearer ${token}`)
    .send({
      nome: 'Aurora do Norte',
      descricao: 'Passeio especial',
      destino: 'Alta Noruega',
      preco: 5000,
      capacidade_maxima: 10
    });

  assert.equal(createPasseioResponse.status, 201);
  assert.equal(createPasseioResponse.body.nome, 'Aurora do Norte');

  const reservasResponse = await request.get('/reservas/admin')
    .set('Authorization', `Bearer ${token}`);

  assert.equal(reservasResponse.status, 200);
  assert.ok(Array.isArray(reservasResponse.body));
});
