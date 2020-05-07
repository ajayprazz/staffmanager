var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    title: String,
    organization: String,
    managedBy: String,
    office: String,
    email: String,
    phoneNo: String
})

var EmployeeModel = mongoose.model('employee', employeeSchema);

module.exports = EmployeeModel;
