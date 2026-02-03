const db = require("../models");
const Teacher = db.TEACHERS;

// Create and Save a new Teacher
exports.create = (req, res) => {
    // Validate request
    if (!req.body.teacher_name) {
        res.status(400).send({
            message: "Content can not be empty!",
            statuscode: 400
        });
        return;
    }

    // Create a Teacher
    const teacher = {
        teacher_name: req.body.teacher_name,
        phone_number: req.body.phone_number,
        email: req.body.email,
    };

    // Save Teacher in the database
    Teacher.create(teacher)
        .then(data => {
            res.status(200).send({
                message: "Teacher created successfully.",
                statuscode: 200,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Teacher.",
                statuscode: 500
            });
        });
};

// Retrieve all Teachers from the database.
exports.findAll = (req, res) => {
    Teacher.findAll()
        .then(data => {
            res.status(200).send({
                message: "Teachers retrieved successfully.",
                statuscode: 200,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving teachers.",
                statuscode: 500
            });
        });
};

// Find a single Teacher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Teacher.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send({
                    message: "Teacher retrieved successfully.",
                    statuscode: 200,
                    data: data
                });
            } else {
                res.status(404).send({
                    message: `Cannot find Teacher with id=${id}.`,
                    statuscode: 404
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Teacher with id=" + id,
                statuscode: 500
            });
        });
};

// Update a Teacher by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Teacher.update(req.body, {
        where: { teacher_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Teacher was updated successfully.",
                    statuscode: 200
                });
            } else {
                res.status(404).send({
                    message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`,
                    statuscode: 404
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Teacher with id=" + id,
                statuscode: 500
            });
        });
};

// Delete a Teacher with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Teacher.destroy({
        where: { teacher_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Teacher was deleted successfully!",
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`,
                    statuscode: 404
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Teacher with id=" + id,
                statuscode: 500
            });
        });
};