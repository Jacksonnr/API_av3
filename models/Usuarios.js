const Sequelize = require ('sequelize');
const db = require ('./db');
const Jogos = require('./Jogos');
const Usuarios = db.define('Usuarios',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

// Usuarios.hasMany(Jogos, { foreignKey: 'id_User' });

Usuarios.sync();

module.exports = Usuarios;