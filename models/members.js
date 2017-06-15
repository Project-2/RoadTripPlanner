module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  
  member: { 
    type: DataTypes.STRING,
   allowNull: false
  },
 car: {
  type: DataTypes.STRING,
  allowNull: true
    
  },
  ride: {
    type: DataTypes.STRING,
    allowNull: true,
      
  }
  });

return User;
};