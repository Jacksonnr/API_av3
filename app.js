// Tela principal da aplicação.
// informações de qual porta será atribuída a aplicação;


// IMPORTANTE!!!!!! Lembrar posteriormente de mudar as rotas (post, get, put e delete) para um arquivo somente de rotas, para melhorar a arquitetura


const express = require ('express');
const app = express();
const Jogos = require('./models/Jogos');
const Usuarios = require('./models/Usuarios');

app.use(express.json());



app.post('/cadastrar/jogos', async (req, res) =>{
    await Jogos.create(req.body)
    .then(() => {
        return res.json({
            mensagem: "Jogo cadastrado com sucesso!!"
        });
    }).catch(() => {
        return res.status(400).json({
            mensagem: "Erro!! Jogo não pode ser cadastrado."
        })
    })

});

app.post('/cadastrar/usuarios', async (req, res) =>{
    await Usuarios.create(req.body)
    .then(() => {
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!!"
        });
    }).catch(() => {
        return res.status(400).json({
            mensagem: "Erro!! Usuário não pode ser cadastrado."
        })
    })

});


app.listen(8080,() =>{
    console.log('Servidor iniciado na porta 8080')
} )