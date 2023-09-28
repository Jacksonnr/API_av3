// Arquivo para criar e verificar a conexão com o banco de dados.
// Aqui é necessário passar os parâmetros do banco que irá ser cadastrado os dados
// Na criação do banco é necessário passar o nome do banco, nome e senha do usuário que irá cadastrar
// No host, passar o caminho de onde está o banco e no "dialect" passar qual a linguagem irá utilizar.
// O comando ".authenticate()" é opcional, sendo que pode ser utilizado para verificar se a conexão em tempo real está sendo efetuada

const Sequelize = require('sequelize');
const bancoTeste = new Sequelize ('teste', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql'
});

bancoTeste.authenticate()
.then(function(){
    console.log('Conexão com banco de dados realizada com sucesso!')
}).catch(function(){
    console.log('Erro na conexão com banco de dados');
})

module.exports = bancoTeste;