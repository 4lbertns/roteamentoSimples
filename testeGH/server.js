const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Tela /. <br/><br/><br/> Para acessar a tela /home, <a href="http://localhost:3000/home">clique aqui!</a>');
})

app.get('/home', (req, res) => {
    res.send('Tela home. <br/><br/><br/> Para retornar à tela /, <a href="http://localhost:3000/">clique aqui!</a>');
});

app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000. Acesse http://localhost:3000/');
});