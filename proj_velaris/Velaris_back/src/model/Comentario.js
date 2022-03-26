const { Model, DataTypes } = require('sequelize')

class Comentario extends Model {
    static init(datacon){
        super.init(
            {
                comentario: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'comentarios',                  
                        key: 'id'                     
                    }
                }
            },
            {
                sequelize: datacon,
                tableName: 'comentarios',
                modelName: 'comentario'
            }
        )
    }

    static associate (models) {
        Comentario.hasMany(models.perfil, {foreignKey: 'id_comentario'})
        Comentario.belongsTo(models.usuario, {foreignKey: 'id_usuario'})
    }
}

module.exports = Comentario