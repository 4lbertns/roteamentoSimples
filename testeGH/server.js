const express = require('express');
const app = express();
const path = require('path');

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/index.html')));

app.get('/home/roteamento', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/roteamento.html')));
app.get('/home/roteamento/abc', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/abc.html')));
app.get('/home/roteamento/abc/123', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/123.html')));

// app.get('/home/form', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoForm/index.html')))
// app.get('/home/form/saida', (req,res) => res.sendFile(path.join(__dirname, '/view/roteamentoForm/saida.html')));

app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000. Acesse http://localhost:3000/home');
});