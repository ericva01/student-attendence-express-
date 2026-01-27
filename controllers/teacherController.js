const db = require("../models");
const Teacher = db.Teacher;

// Create and Save a new Teacher
exports.create = (req, res) => {
    // Validate request
    if (!req.body.teacher_name) {
        res.status(400).send({
            message: "Content can not be empty!"
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
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Teacher."
            });
        });
};

// Retrieve all Teachers from the database.
exports.findAll = (req, res) => {
    Teacher.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving teachers."
            });
        });
};

// Find a single Teacher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Teacher.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Teacher with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Teacher with id=" + id
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
                res.send({
                    message: "Teacher was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Teacher with id=" + id
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
                res.send({
                    message: "Teacher was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Teacher with id=" + id
            });
        });
};