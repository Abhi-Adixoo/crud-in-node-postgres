const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
const checkNameExists = "SELECT * FROM students WHERE name = $1";
const insertStudent = "INSERT INTO students (name, age, studentclass, subject) VALUES ($1, $2, $3, $4)";
const updateStudentById = "UPDATE students SET name = $1, age = $2, studentclass = $3, subject = $4 WHERE id = $5";
const deleteStudentById = "DELETE FROM students WHERE id = $1";

module.exports = {
    getStudents,
    getStudentsById,
    checkNameExists,
    insertStudent,
    updateStudentById,
    deleteStudentById
};
