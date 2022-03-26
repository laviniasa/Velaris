require('dotenv').config();
const {Sequelize} = require('sequelize');

const Comentario = require('../model/Comentario');
const Atendente = require('../model/Atendente');
const Leitura = require('../model/Leitura');
const Usuario = require('../model/Usuario');
const Follow = require('../model/Follow');
const Perfil = require('../model/Perfil');
const Livro = require('../model/Livro');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});
const sync = () => {
    Comentario.init(sequelize);
    Atendente.init(sequelize);
    Leitura.init(sequelize);
    Usuario.init(sequelize);
    Follow.init(sequelize);
    Perfil.init(sequelize);
    Livro.init(sequelize);

    Comentario.associate(sequelize.models);
    Atendente.associate(sequelize.models);
    Leitura.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    Follow.associate(sequelize.models);
    Perfil.associate(sequelize.models);
    Livro.associate(sequelize.models);

    sequelize.sync({force : true})

}

module.exports = {
    sequelize, sync
}