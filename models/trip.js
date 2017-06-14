
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
  	name: {
  		type: DataTypes.STRING,
  		 allowNull: true     
  },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
    email: {
  	  type: DataTypes.STRING,
  	  allowNull: true       
  },
    password: {
      type: DataTypes.STRING,
      allowNull: true      
    }
  });

  return Trip;
};
