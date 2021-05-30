const db = require("../../db/config");
const User = db.User;
const Employee = db.Employee;
const apiResponse = require("../../helpers/apiResponse");
// const {validationResult} = require('express-validator')

const LoginUser = async (req, res) => {
  try {
      console.log("body", req.body)
    return apiResponse.successResponse(res,"Call Success and call details added to db");
  } catch (err) {
    return apiResponse.ErrorResponse(res, "Something went wrong, please try again.");
  }
};

module.exports = {
  LoginUser,
};
