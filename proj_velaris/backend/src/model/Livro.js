<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');

class Livro extends Model {
    static init(datacon) {
        super.init(
            {
                
                nome_livro: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                capa: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                capitulo: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                escrita: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                id_leitura: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'leituras',
                        key: 'id',
                    }
                }
            },
            {
                sequelize: datacon,
                tableName: 'livros',
                modelName: 'livro',
            }
        );
    }

    static associate (models){
        Livro.hasMany(models.perfil, {foreignKey: 'id_livro'})
        Livro.belongsTo(models.leitura, {foreignKey: 'id_leitura'})
    }
}

=======
const { Model, DataTypes } = require('sequelize');

class Livro extends Model {
    static init(datacon) {
        super.init(
            {
                
                nome_livro: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                capa: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                capitulo: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                escrita: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                id_leitura: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'leituras',
                        key: 'id',
                    }
                }
            },
            {
                sequelize: datacon,
                tableName: 'livros',
                modelName: 'livro',
            }
        );
    }

    static associate (models){
        Livro.hasMany(models.perfil, {foreignKey: 'id_livro'})
        Livro.belongsTo(models.leitura, {foreignKey: 'id_leitura'})
    }
}

>>>>>>> b1a1627fde6d93cfe286eefea41351c2713c2a0a
module.exports = Livro;