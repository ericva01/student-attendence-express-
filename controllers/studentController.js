const db = require("../models");
const Student = db.Student;

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
        res.status(400).send({
            message: "Content can not be empty!"
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
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Student."
            });
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    Student.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving students."
            });
        });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Student with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Student with id=" + id
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
                res.send({
                    message: "Student was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with id=" + id
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
                res.send({
                    message: "Student was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });
};