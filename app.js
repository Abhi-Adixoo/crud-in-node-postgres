const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route handler for the root URL
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Mount student routes under '/api/v1/student'
app.use("/api/v1/student", studentRoutes);

// Start the server
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});