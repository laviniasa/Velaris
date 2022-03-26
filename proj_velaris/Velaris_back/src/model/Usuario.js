const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(datacon){
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {
                            msg: 'Email já utilizado'
                        }
                    }
                },
                foto: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                id_seguidores: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'follows',
                        key: 'id'
                    }
                }
            },
            {
                sequelize: datacon,
                tableName: 'usuarios',
                modelName: 'usuario',
            }
        )
    }

    static associate(models) {
        Usuario.hasMany(models.atendente, {foreignKey: 'id_usuario'})
        Usuario.hasMany(models.comentario, {foreignKey: 'id_usuario'})
        Usuario.hasMany(models.perfil, {foreignKey: 'id_usuario'})
        Usuario.belongsTo(models.follow, {foreignKey: 'id_seeguidores'})
    }
}

module.exports = Usuario