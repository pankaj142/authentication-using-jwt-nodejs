const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
        validate : {
          len : {
            args : [5,50],
            msg:'Please enter username with min 5 chars and maz 50 char'
          }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
      },
      empId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: true, 
      },
    });
    User.associate = function(models){
      User.belongsTo(models.Employee, {foreignKey: 'empId', as : "employee"})
    }
    return User;
  };