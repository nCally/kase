
const { DataTypes, Model } = require("sequelize");
const db = require("..");
const User = require("./user");

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    text: DataTypes.STRING,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize: db,
    underscored: true
  }
)

Post.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = Post;