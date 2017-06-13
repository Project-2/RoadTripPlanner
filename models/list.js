module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    volunteer: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  });
  return Post;
};
