
const { DataTypes, Model } = require("sequelize");
const db = require("..");

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    sequelize: db
  }
)

module.exports = User;