<<<<<<< HEAD
const { Model, DataTypes} = require('sequelize');

class Leitura extends Model {
    static init(datacon) {
        super.init(
            {
                nome_leitura: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                feedback: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },
            {
                sequelize: datacon,
                tableName: 'leituras',
                modelName: 'leitura',
            }

        )
    }

    static associate (models){
        Leitura.hasMany(models.livro, {foreignKey: 'id_leitura'})
        Leitura.hasMany(models.perfil, {foreignKey: 'id_leitura'})

    }

}

=======
const { Model, DataTypes} = require('sequelize');

class Leitura extends Model {
    static init(datacon) {
        super.init(
            {
                nome_leitura: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                feedback: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },
            {
                sequelize: datacon,
                tableName: 'leituras',
                modelName: 'leitura',
            }

        )
    }

    static associate (models){
        Leitura.hasMany(models.livro, {foreignKey: 'id_leitura'})
        Leitura.hasMany(models.perfil, {foreignKey: 'id_leitura'})

    }

}

>>>>>>> b1a1627fde6d93cfe286eefea41351c2713c2a0a
module.exports = Leitura;