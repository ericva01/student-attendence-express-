module.exports = app => {
    const subjects = require("../controllers/subjectController.js");

    var router = require("express").Router();

    // Create a new Subject
    router.post("/", subjects.create);

    // Retrieve all Subjects
    router.get("/", subjects.findAll);

    // Retrieve a single Subject with id
    router.get("/:id", subjects.findOne);

    // Update a Subject with id
    router.put("/:id", subjects.update);

    // Delete a Subject with id
    router.delete("/:id", subjects.delete);

    app.use('/api/subjects', router);
};