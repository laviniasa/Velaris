const { Model, DataTypes } = require('sequelize')

class Perfil extends Model {
    static init(datacon){
        super.init(
            {
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuarios',
                        key: 'id',
                    }
                },
                
                id_atendente: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'atendentes',
                        key: 'id',
                    }
                },

                id_comentario: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'comentarios',
                        key: 'id',
                    }
                },

                id_livro: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'livros',
                        key: 'id',
                    }
                },
            },
            {
                sequelize: datacon,
                tableName: 'perfis',
                modelName: 'perfil'
            }
        )
    }

    static associate (models) {
        Perfil.belongsTo(models.comentario, {foreignKey: 'id_comentario'})
        Perfil.belongsTo(models.atendente, {foreignKey: 'id_atendente'})
        Perfil.belongsTo(models.usuario, {foreignKey: 'id_usuario'})
        Perfil.belongsTo(models.livro, {foreignKey: 'id_livro'})

    }
}

module.exports = Perfil;