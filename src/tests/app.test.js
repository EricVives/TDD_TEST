const app = require('../app');
const request = require('supertest');

describe('App - GET /', () => {
  test("GET / debe retornar 400 si no tiene el parametro 'id'", () => {
    return request(app).get('/').expect(404);
  });

  test("GET / debe retornar 200 si tiene el parametro 'id'", async() => {
    const response =  await request(app).get('/').query({ id: 1 });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('App - POST /user', () => {
 
  test("POST /user debe retornar 400 si no tiene el parametro 'name'", async () => {
    const resp = await request(app).post('/user').send({ pwd: "123" });
    expect(resp.status).toBe(400);
    expect(resp.text).toBe('400 Bad Request');
  });
  
  test("POST /user debe retornar 400 si no tiene el parametro 'pwd'", async () => {
    const resp = await request(app).post('/user').send({ name: "test" });
    expect(resp.status).toBe(400);
    expect(resp.text).toBe('400 Bad Request');
  });

  //Todo bien //Debes asegurarte que cumple los test de validarPwd para que este funcione
  test("POST /user debe retornar 200 si tiene los parametros", async() => {
    const resp = await request(app).post('/user').send({name: "test", pwd: "123456a!"});
    expect(resp.status).toBe(200);
    expect(resp.text).toBe('200 OK');
  });

  test("POST /user debe retornar 400 invalid pwd si no valida", async() => {
    const resp = await request(app).post('/user').send({name: "test", pwd: "123"});
    expect(resp.status).toBe(400);
    expect(resp.text).toBe('400 invalid pwd');
  });

});