const db = require("../models");
const Subject = db.SUBJECTS;

// Create and Save a new Subject
exports.create = (req, res) => {
    // Validate request
    if (!req.body.subject_name) {
        res.status(400).send({
            message: "Content can not be empty!",
            statuscode: 400
        });
        return;
    }

    // Create a Subject
    const subject = {
        subject_name: req.body.subject_name,
    };

    // Save Subject in the database
    Subject.create(subject)
        .then(data => {
            res.status(200).send({
                message: "Subject created successfully.",
                statuscode: 200,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Subject.",
                statuscode: 500
            });
        });
};

// Retrieve all Subjects from the database.
exports.findAll = (req, res) => {
    Subject.findAll()
        .then(data => {
            res.status(200).send({
                message: "Subjects retrieved successfully.",
                statuscode: 200,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving subjects.",
                statuscode: 500
            });
        });
};

// Find a single Subject with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Subject.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send({
                    message: "Subject retrieved successfully.",
                    statuscode: 200,
                    data: data
                });
            } else {
                res.status(404).send({
                    message: `Cannot find Subject with id=${id}.`,
                    statuscode: 404
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message ||"Error retrieving Subject with id=" + id,
                statuscode: 500
            });
        });
};

// Update a Subject by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Subject.update(req.body, {
        where: { subject_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Subject was updated successfully.",
                    statuscode: 200
                });
            } else {
                res.status(404).send({
                    message: `Cannot update Subject with id=${id}. Maybe Subject was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Subject with id=" + id,
                statuscode: 500
            });
        });
};

// Delete a Subject with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Subject.destroy({
        where: { subject_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Subject was deleted successfully!",
                    statuscode: 200
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Subject with id=${id}. Maybe Subject was not found!`,
                    statuscode: 404
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Could not delete Subject with id=" + id,
                statuscode: 500
            });
        });
};