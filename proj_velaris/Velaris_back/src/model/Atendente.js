const { Model, DataTypes } = require('sequelize')

class Atendente extends Model {
    static init(datacon){
        super.init(
            {
                nome_atendente: {
                    type: DataTypes.STRING(30),
                    allowNull: false
                },
                email: { 
                    type: DataTypes.STRING(30),
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {
                            msg: 'Email já cadastrado'
                        }
                    }
                },
                senha: {
                    type: DataTypes.STRING(30),
                    allowNull: false
                },
                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuarios',
                        key: 'id'
                    }
                }


            },
            {
                sequelize: datacon,
                tableName: 'atendentes',
                modelName: 'atendente'
            }
        )
    }

    static associate (models) {
        Atendente.belongsTo(models.usuario, {foreignKey: 'id_usuario'})
        Atendente.hasMany(models.perfil, {foreignKey: 'id_atendente'})
        
    }
}

module.exports = Atendente