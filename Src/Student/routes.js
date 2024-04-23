const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// Route handler for GET request to fetch students
router.get("/", controller.getStudentsHandler);

router.get("/:id", controller.getStudentsByIdHandler);

// Route handler for POST request to add a new student
router.post("/", controller.addStudent);

// Route handler for PUT request to update a student by ID
router.put("/:id", controller.updateStudent);

// Route handler for DELETE request to delete a student by ID
router.delete("/:id", controller.deleteStudent);




module.exports = router;