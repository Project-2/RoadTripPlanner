module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
  
  username: { 
    type: DataTypes.STRING,
   allowNull: false,
      validate: {
        len: [1]
      }
 },
 location: {
  type: DataTypes.STRING,
  allowNull: false,
      validate: {
        len: [1]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
  }
 },
  car: {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  },
 ride: {
  type: DataTypes.BOOLEAN
 },
 //img: {
  //type:DataTypes.STRING
 //}

 });
return Trip;
};