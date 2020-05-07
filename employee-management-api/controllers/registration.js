var express = require('express');
var router = express.Router();

var EmployeeModel = require('./../models/employee.model');

function map_user_request(employee, details) {
    if (details.name) {
        employee.name = details.name;
    }
    if (details.title) {
        employee.title = details.title;
    }
    if (details.organization) {
        employee.organization = details.organization;
    }
    if (details.managedBy) {
        employee.managedBy = details.managedBy;
    }
    if (details.office) {
        employee.office = details.office;
    }
    if (details.email) {
        employee.email = details.email;
    }
    if (details.phoneNo) {
        employee.phoneNo = details.phoneNo;
    }

    return employee;
}

module.exports = function () {
    router.route('')
        .post(function (req, res, next) {
            var newEmployee = new EmployeeModel({});
            var mappedEmployee = map_user_request(newEmployee, req.body);
            mappedEmployee.save(function (err, employee) {
                if (err) {
                    return next(err);
                }
                res.status(200).json(employee);
            })
        })
        .get(function (req, res, next) {
            EmployeeModel.find({})
                .exec(function (err, employees) {
                    if (err) {
                        return next(err);
                    }
                    res.status(200).json(employees);
                })
        })

    router.route('/:id')
        .get(function (req, res, next) {
            EmployeeModel.findById(req.params.id)
                .exec(function (err, employee) {
                    if (err) {
                        return next(err);
                    }
                    if (employee) {
                        res.status(200).json(employee);
                    } else {
                        res.status(404).json({
                            message: 'employee not found'
                        })
                    }
                })
        })
        .put(function (req, res, next) {
            EmployeeModel.findById(req.params.id)
                .exec(function (err, employee) {
                    if (err) {
                        return next(err);
                    }
                    if (employee) {
                        var updateEmployee = map_user_request(employee, req.body);
                        updateEmployee.save(function (err, updated) {
                            if (err) {
                                return next(err);
                            }
                            res.status(200).json(updated);
                        })
                    } else {
                        res.status(404).json({
                            message: 'employee not found'
                        })
                    }
                })
        })
        .delete(function (req, res, next) {
            EmployeeModel.findById(req.params.id)
                .exec(function (err, employee) {
                    if (err) {
                        return next(err);
                    }
                    if (employee) {
                        employee.remove(function (err, done) {
                            if (err) {
                                return next(err);
                            }
                            res.status(200).json(employee);
                        })
                    } else {
                        res.status(404).json({
                            message: 'employee not found'
                        })
                    }
                })
        })

    return router;
}