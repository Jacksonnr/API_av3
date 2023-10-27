const Sequelize = require ('sequelize');
const dataBase = require ('./dataBase');
const Usuarios_Jogos = dataBase.define('Usuarios_Jogos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FK_Usuario: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
    FK_Jogo: {
        type: Sequelize.INTEGER, 
        unique: true,
        allowNull: false
    }
});

Usuarios_Jogos.sync({alter: true});
module.exports = Usuarios_Jogos;