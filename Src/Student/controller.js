const pool = require('../../studentsdb');
const { getStudents, getStudentsById, checkNameExists, insertStudent, updateStudentById, deleteStudentById } = require('./model');

// Controller function to handle GET request for fetching students
const getStudentsHandler = (req, res) => {
    pool.query(getStudents, (error, results) => {
        if (error) {
            console.error("Error fetching students:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(200).json(results.rows);
    });
};

// Controller function to handle GET request for fetching a student by ID
const getStudentsByIdHandler = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(getStudentsById, [id], (error, results) => {
        if (error) {
            console.error("Error fetching student by ID:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(200).json(results.rows);
    });
};

// Controller function to handle POST request for adding a new student
const addStudent = (req, res) => {
    const { name, age, studentclass, subject } = req.body;
    // Check if student already exists
    pool.query(checkNameExists, [name], (error, results) => {
        if (error) {
            console.error("Error checking student existence:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        if (results.rows.length > 0) {
            res.status(400).send("Student already exists");
            return;
        }
        // Add the student
        pool.query(insertStudent, [name, age, studentclass, subject], (error, results) => {
            if (error) {
                console.error("Error adding student:", error);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.status(201).send("Student added successfully");
        });
    });
};

// Controller function to handle PUT request for updating a student by ID
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, studentclass, subject } = req.body;
    // Update the student
    pool.query(updateStudentById, [name, age, studentclass, subject, id], (error, results) => {
        if (error) {
            console.error("Error updating student:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(200).send("Student updated successfully");
    });
};

// Controller function to handle DELETE request for deleting a student by ID
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    // Delete the student
    pool.query(deleteStudentById, [id], (error, results) => {
        if (error) {
            console.error("Error deleting student:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(200).send("Student deleted successfully");
    });
};

module.exports = {
    getStudentsHandler,
    getStudentsByIdHandler,
    addStudent,
    updateStudent,
    deleteStudent
};
