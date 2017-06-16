module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    member: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false

  },

 car: {

  type: DataTypes.BOOLEAN,
  allowNull: true
    
  },
  ride: {
    type: DataTypes.BOOLEAN,
    allowNull: true     

  },
  carSeats: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

});

  return Member;
};


