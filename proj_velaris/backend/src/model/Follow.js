<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');

class Follow extends Model {
    static init(datacon){
        super.init(
            {
                seguidores: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                seguindo: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true
                }
            },
            {
                sequelize: datacon,
                tableName: 'follows',
                modelName: 'follow',
            }
        );
    }
    static associate (models){
        Follow.hasMany(models.usuario, {foreignKey: 'id_seguidores'})

    }

}

=======
const { Model, DataTypes } = require('sequelize');

class Follow extends Model {
    static init(datacon){
        super.init(
            {
                seguidores: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                seguindo: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true
                }
            },
            {
                sequelize: datacon,
                tableName: 'follows',
                modelName: 'follow',
            }
        );
    }
    static associate (models){
        Follow.hasMany(models.usuario, {foreignKey: 'id_seguidores'})

    }

}

>>>>>>> b1a1627fde6d93cfe286eefea41351c2713c2a0a
module.exports = Follow;