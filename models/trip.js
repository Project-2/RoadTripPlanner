module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
  	name: {
  		type: DataTypes.STRING,
  		 allowNull: false    
  },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    email: {
  	  type: DataTypes.STRING,
  	  allowNull: false       
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false      
    }
  });

  return Trip;
};