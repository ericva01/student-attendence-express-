const db = require("../models");
const Class = db.Class;

// Create and Save a new Class
exports.create = (req, res) => {
    // Validate request
    if (!req.body.class_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Class
    const newClass = {
        class_name: req.body.class_name,
        academic_year: req.body.academic_year,
        teacher_id: req.body.teacher_id,
    };

    // Save Class in the database
    Class.create(newClass)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Class."
            });
        });
};

// Retrieve all Classes from the database.
exports.findAll = (req, res) => {
    Class.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving classes."
            });
        });
};

// Find a single Class with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Class.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Class with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Class with id=" + id
            });
        });
};

// Update a Class by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Class.update(req.body, {
        where: { class_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Class was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Class with id=${id}. Maybe Class was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Class with id=" + id
            });
        });
};

// Delete a Class with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Class.destroy({
        where: { class_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Class was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Class with id=${id}. Maybe Class was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Class with id=" + id
            });
        });
};