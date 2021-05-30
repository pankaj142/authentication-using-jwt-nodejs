const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("Employee", {
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
        unique: true
      },
      organization_name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
      },
    });
    return Employee;
  };
