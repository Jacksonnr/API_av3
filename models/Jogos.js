//* Responsável pela criação das tabelas do banco dados;
// no comando "db.define" é necessário para criação do banco, onde você irá passar todos os dados da tabela do banco de dados;
// sempre passar no type qual o tipo do dado da tabela.
// Não é necessário informar a quantidade de caracteres que uma String irá receber;


const Sequelize = require ('sequelize');
const dataBase = require ('./dataBase');
const Jogos = dataBase.define('Jogos', {
    id:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desenvolvedora: { 
        type: Sequelize.STRING,
        allowNull: false,
    },
    plataforma: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado_Jogado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_User: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nota: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
Jogos.sync({alter: true});
module.exports = Jogos;