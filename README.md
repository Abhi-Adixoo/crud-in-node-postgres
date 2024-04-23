# CRUD in Node.js with PostgreSQL Documentation

This documentation outlines the implementation of CRUD (Create, Read, Update, Delete) operations in a Node.js application using a PostgreSQL database. The application structure is divided into several key components: database configuration, models, controllers, and routes.

## Database Configuration

The PostgreSQL database connection is configured in `studentsdb.js`, utilizing the `pg` library's `Pool` class for connection pooling.

## Models

SQL queries for CRUD operations are defined in `src/student/model.js`. These queries are used by the controller to interact with the PostgreSQL database.

## Controllers

Controllers handle the business logic for the CRUD operations. They are defined in `src/student/controller.js` and utilize the queries from the model.

### `getStudentsHandler`

1. **Database Query Execution:** Initiates a query to the PostgreSQL database to fetch all students using the `getStudents` SQL command.
2. **Error Handling:** Checks for any errors during the query execution. If an error occurs, it logs the error and sends a `500 Internal Server Error` response.
3. **Successful Response:** If the query is successful, it sends a `200 OK` response with the fetched students' data in JSON format.

### `getStudentsByIdHandler`

1. **Parameter Extraction:** Extracts the student's ID from the request parameters.
2. **Database Query Execution:** Uses the extracted ID to query the database for a specific student using the `getStudentsById` SQL command.
3. **Error Handling:** If an error occurs during the query, it logs the error and sends a `500 Internal Server Error` response.
4. **Successful Response:** If the student is found, it sends a `200 OK` response with the student's data in JSON format.

### `addStudent`

1. **Request Body Extraction:** Extracts the new student's details (name, age, class, subject) from the request body.
2. **Existence Check:** Queries the database to check if a student with the same name already exists using the `checkNameExists` SQL command.
3. **Error Handling for Existence Check:** If an error occurs during this query, it logs the error and sends a `500 Internal Server Error` response.
4. **Existence Validation:** If a student with the same name exists, it sends a `400 Bad Request` response indicating the student already exists.
5. **Insertion:** If the student does not exist, it proceeds to insert the new student into the database using the `insertStudent` SQL command.
6. **Error Handling for Insertion:** Checks for any errors during the insertion process. If an error occurs, it logs the error and sends a `500 Internal Server Error` response.
7. **Successful Insertion:** After successful insertion, it sends a `201 Created` response indicating the student was added successfully.

### `updateStudent`

1. **Parameter and Body Extraction:** Extracts the student's ID from the request parameters and the new details from the request body.
2. **Database Update Execution:** Uses the extracted information to update the student's details in the database using the `updateStudentById` SQL command.
3. **Error Handling:** If an error occurs during the update, it logs the error and sends a `500 Internal Server Error` response.
4. **Successful Update:** If the update is successful, it sends a `200 OK` response indicating the student was updated successfully.

### `deleteStudent`

1. **Parameter Extraction:** Extracts the student's ID from the request parameters.
2. **Database Deletion Execution:** Uses the extracted ID to delete the student from the database using the `deleteStudentById` SQL command.
3. **Error Handling:** If an error occurs during the deletion, it logs the error and sends a `500 Internal Server Error` response.
4. **Successful Deletion:** If the deletion is successful, it sends a `200 OK` response indicating the student was deleted successfully.

## Routes

Routes define the endpoints for the CRUD operations and are set up in `src/student/routes.js`. These routes utilize the controller functions to handle requests.

## Server Setup

The server is configured in `app.js`, where middleware for parsing JSON requests is set up, and student routes are mounted under `/api/v1/student`.
