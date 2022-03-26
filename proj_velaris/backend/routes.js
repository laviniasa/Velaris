<<<<<<< HEAD
const express = require('express');

const route = express.Router();

const ctrUsuario = require('./src/ctr/ctrUsuario');
const ctrPerfil = require('./src/ctr/ctrPerfil');
const ctrFollow = require('./src/ctr/ctrFollow');
const ctrLivro = require('./src/ctr/ctrLivro');
const ctrLeitura = require('./src/ctr/ctrLeitura');
const ctrAtendente = require('./src/ctr/ctrAtendente');

route.post('/login', ctrUsuario.login)

route.post('/usuario', ctrUsuario.create);
route.get('/usuario', ctrUsuario.read);
route.get('/usuario/:id', ctrUsuario.read);
route.put('/usuario/:id', ctrUsuario.update);
route.delete('/usuario/:id', ctrUsuario.del);

route.post('/follow', ctrFollow.create);
route.get('/follow', ctrFollow.read);
route.get('/follow/:id', ctrFollow.read);
route.put('/follow/:id', ctrFollow.update);
route.delete('/follow/:id', ctrFollow.del);

route.post('/perfil', ctrPerfil.create);
route.get('/perfil', ctrPerfil.read);
route.get('/perfil/:id', ctrPerfil.read);
route.put('/perfil/:id', ctrPerfil.update);
route.delete('/perfil/:id', ctrPerfil.del);

route.post('/livro', ctrLivro.create);
route.get('/livro', ctrLivro.read);
route.get('/livro/:id', ctrLivro.read);
route.put('/livro/:id', ctrLivro.update);
route.delete('/livro/:id', ctrLivro.del);

route.post('/leitura', ctrLeitura.create);
route.get('/leitura', ctrLeitura.read);
route.get('/leitura/:id', ctrLeitura.read);
route.put('/leitura/:id', ctrLeitura.update);
route.delete('/leitura/:id', ctrLeitura.del);

route.post('/atendente', ctrAtendente.create);
route.get('/atendente', ctrAtendente.read);
route.get('/atendente/:id', ctrAtendente.read);
route.put('/atendente/:id', ctrAtendente.update);
route.delete('/atendente/:id', ctrAtendente.del);

module.exports = route;

=======
const express = require('express');

const route = express.Router();

const ctrUsuario = require('./src/ctr/ctrUsuario');
const ctrPerfil = require('./src/ctr/ctrPerfil');
const ctrFollow = require('./src/ctr/ctrFollow');
const ctrLivro = require('./src/ctr/ctrLivro');
const ctrLeitura = require('./src/ctr/ctrLeitura');
const ctrAtendente = require('./src/ctr/ctrAtendente');

route.post('/login', ctrUsuario.login)

route.post('/usuario', ctrUsuario.create);
route.get('/usuario', ctrUsuario.read);
route.get('/usuario/:id', ctrUsuario.read);
route.put('/usuario/:id', ctrUsuario.update);
route.delete('/usuario/:id', ctrUsuario.del);

route.post('/follow', ctrFollow.create);
route.get('/follow', ctrFollow.read);
route.get('/follow/:id', ctrFollow.read);
route.put('/follow/:id', ctrFollow.update);
route.delete('/follow/:id', ctrFollow.del);

route.post('/perfil', ctrPerfil.create);
route.get('/perfil', ctrPerfil.read);
route.get('/perfil/:id', ctrPerfil.read);
route.put('/perfil/:id', ctrPerfil.update);
route.delete('/perfil/:id', ctrPerfil.del);

route.post('/livro', ctrLivro.create);
route.get('/livro', ctrLivro.read);
route.get('/livro/:id', ctrLivro.read);
route.put('/livro/:id', ctrLivro.update);
route.delete('/livro/:id', ctrLivro.del);

route.post('/leitura', ctrLeitura.create);
route.get('/leitura', ctrLeitura.read);
route.get('/leitura/:id', ctrLeitura.read);
route.put('/leitura/:id', ctrLeitura.update);
route.delete('/leitura/:id', ctrLeitura.del);

route.post('/atendente', ctrAtendente.create);
route.get('/atendente', ctrAtendente.read);
route.get('/atendente/:id', ctrAtendente.read);
route.put('/atendente/:id', ctrAtendente.update);
route.delete('/atendente/:id', ctrAtendente.del);

module.exports = route;

>>>>>>> b1a1627fde6d93cfe286eefea41351c2713c2a0a
