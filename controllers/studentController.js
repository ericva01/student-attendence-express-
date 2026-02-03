const db = require("../models");
const Student = db.STUDENTS;
const Joi = require('joi');

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        gender: Joi.string().length(1).required(),
        date_of_birth: Joi.date().required(),
        phone: Joi.string().required(),
        class_id: Joi.number().integer().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({
            statuscode: 400,
            message: error.details[0].message,
            data: null
        });
        return;
    }

    // Create a Student
    const student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        phone: req.body.phone,
        class_id: req.body.class_id,
    };

    // Save Student in the database
    Student.create(student)
        .then(data => {
            res.status(201).json({
                statuscode: 201,
                message: "Student created successfully.",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                statuscode: 500,
                message: err.message || "Some error occurred while creating the Student.",
                data: null
            });
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    Student.findAll()
        .then(data => {
            res.status(200).json({
                statuscode: 200,
                message: "Students retrieved successfully.",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                statuscode: 500,
                message: err.message || "Some error occurred while retrieving students.",
                data: null
            });
        });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).json({
                    statuscode: 200,
                    message: "Student retrieved successfully.",
                    data: data
                });
            } else {
                res.status(404).json({
                    statuscode: 404,
                    message: `Cannot find Student with id=${id}.`,
                    data: null
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                statuscode: 500,
                message: "Error retrieving Student with id=" + id,
                data: null
            });
        });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Student.update(req.body, {
        where: { student_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    statuscode: 200,
                    message: "Student was updated successfully.",
                    data: null
                });
            } else {
                res.status(404).json({
                    statuscode: 404,
                    message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`,
                    data: null
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                statuscode: 500,
                message: "Error updating Student with id=" + id,
                data: null
            });
        });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { student_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    statuscode: 200,
                    message: "Student was deleted successfully!",
                    data: null
                });
            } else {
                res.status(404).json({
                    statuscode: 404,
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`,
                    data: null
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                statuscode: 500,
                message: "Could not delete Student with id=" + id,
                data: null
            });
        });
};