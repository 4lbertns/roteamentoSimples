const express = require('express');
const app = express();
const path = require('path');

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, '/view/index.html')));

app.get('/home/roteamento', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/roteamento.html')));
app.get('/home/roteamento/abc', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/abc.html')));
app.get('/home/roteamento/abc/123', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoSimples/123.html')));

// ----------------------------------------------------------------------------------------------------------------------------------

app.get('/home/input1', (req, res) => {
    res.send(`
        <form method='GET' action='/home/input2'>
            <input type='text' name='nome' placeholder='Digite seu nome...' requered></input>
            <input type='text' name='idade' placeholder='Digite sua idade...' requered></input>
            <button type='submit'>Enviar</button>
        </form>`
    )
})
app.get('/home/input2', (req,res) => {
    let nomeInput = req.query.nome;
    let idadeInput = req.query.idade;

    res.send(`
        Entre no link: <a href='http://localhost:3000/home/form/${nomeInput}/${idadeInput}'>${nomeInput}/${idadeInput}</a>`
    )
});
app.get('/home/form/:urlNome/:urlIdade', (req,res) => {
    let nomeParam = req.params.urlNome;
    let idadeParam = req.params.urlIdade;

    res.send(`
        Seu nome é: ${nomeParam} e sua idade é: ${idadeParam}.
        <br><br>
        <a href='http://localhost:3000/home'>Voltar</a>`
    )
});

// ----------------------------------------------------------------------------------------------------------------------------------

// app.get('/home/form', (req, res) => res.sendFile(path.join(__dirname, '/view/roteamentoForm/index.html')))
// app.get('/home/form/saida', (req,res) => res.sendFile(path.join(__dirname, '/view/roteamentoForm/saida.html')));

// ----------------------------------------------------------------------------------------------------------------------------------

app.get('/codes', (req, res) => res.sendFile(path.join(__dirname, '/codes.html')))

// ----------------------------------------------------------------------------------------------------------------------------------

app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000. Acesse http://localhost:3000/home');
});