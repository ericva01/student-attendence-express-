module.exports = app => {
    const attendances = require("../controllers/attendanceController.js");

    var router = require("express").Router();

    // Create a new Attendance
    router.post("/", attendances.create);

    // Retrieve all Attendances
    router.get("/", attendances.findAll);

    // Retrieve a single Attendance with id
    router.get("/:id", attendances.findOne);

    // Update a Attendance with id
    router.put("/:id", attendances.update);

    // Delete a Attendance with id
    router.delete("/:id", attendances.delete);

    app.use('/api/attendances', router);
};