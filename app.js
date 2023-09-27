// Tela principal da aplicação.
// informações de qual porta será atribuída a aplicação;


// IMPORTANTE!!!!!! Lembrar posteriormente de mudar as rotas (post, get, put e delete) para um arquivo somente de rotas, para melhorar a arquitetura


const express = require ('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/', async (req, res) =>{
    res.send('Pagina inicial');
});

app.post('/cadastrar', async (req, res) =>{
    await User.create(req.body)
    .then(() => {
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!!"
        });
    }).catch(() => {
        return res.status(400).json({
            mensagem: "Erro!! Usuário não pode ser cadastrado."
        })
    })
    res.send('Pagina cadastrar');

});


app.listen(8080,() =>{
    console.log('Servidor iniciado na porta 8080')
} )