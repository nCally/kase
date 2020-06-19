
const { DataTypes, Model } = require("sequelize");
const db = require("..");
const User = require("./user");
const Post = require("./post");

class Like extends Model { }

Like.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  },
  {
    sequelize: db
  }
)

Like.belongsTo(User);
Like.belongsTo(Post);