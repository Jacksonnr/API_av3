const Sequelize = require ('sequelize');
const dataBase = require ('./dataBase');
const Usuarios = dataBase.define('Usuarios',{
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

module.exports = Usuarios;