const db = require("../models");
const Attendance = db.Attendance;

// Create and Save a new Attendance
exports.create = (req, res) => {
    // Validate request
    if (!req.body.student_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Attendance
    const attendance = {
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
        att_date: req.body.att_date,
        att_status: req.body.att_status,
    };

    // Save Attendance in the database
    Attendance.create(attendance)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Attendance."
            });
        });
};

// Retrieve all Attendances from the database.
exports.findAll = (req, res) => {
    Attendance.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving attendances."
            });
        });
};

// Find a single Attendance with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Attendance.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Attendance with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Attendance with id=" + id
            });
        });
};

// Update a Attendance by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Attendance.update(req.body, {
        where: { att_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Attendance was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Attendance with id=${id}. Maybe Attendance was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Attendance with id=" + id
            });
        });
};

// Delete a Attendance with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Attendance.destroy({
        where: { att_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Attendance was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Attendance with id=${id}. Maybe Attendance was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Attendance with id=" + id
            });
        });
};