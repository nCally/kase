
const { DataTypes, Model } = require("sequelize");
const db = require("..");

class User extends Model {
    id
    firstname
    lastname
    password
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        sequelize: db
    }
)

module.exports = User;