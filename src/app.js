const express = require('express');
const validarPwd = require('./validarPwd');
const app = express();

app.use(express.json());  // Middleware para parsear el body de las peticiones

app.get('/', (req, res) => {
  const id = req.query.id;
  if(!id) res.status(404).send('404 Not Found');
  else res.send('Hello World!');
});

app.post('/user', (req, res) => { 
  const { name, pwd } = req.body;
  if(!name || !pwd) res.status(400).send('400 Bad Request');
  else {
    if(!validarPwd(pwd)) res.status(400).send('400 invalid pwd');
    else res.status(200).send('200 OK');
  }
});


module.exports = app;