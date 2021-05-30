const db = require("../../db/config");
const User = db.User;
const Employee = db.Employee;
const apiResponse = require("../../helpers/apiResponse");
// const {validationResult} = require('express-validator');

const RegisterUser = async (req, res) => {
  try {
      //do validation 
      console.log("body", req.body)
      const employee = {
        employeeId: req.body.employeeId,
        organization_name: req.body.organization_name
      };

      Employee.create(employee)
          .then((emp_data)=>{
              const user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                empId: emp_data['id']
              };
              User.create(user)
                .then((user_data)=>{
                  return res.send(user_data)
                })
          })
          .catch((emp_err)=>{
              return res.send(emp_err)
          })
    // return apiResponse.successResponse(res,"Call Success and call details added to db");
  } catch (err) {
    return apiResponse.ErrorResponse(res, "Something went wrong, please try again.");
  }
};

module.exports = {
  RegisterUser,
};
