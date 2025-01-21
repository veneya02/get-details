const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // your MySQL username
    password: 'nvlab@2025',      // your MySQL password
    database: 'student_db'
});

// Test database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create student (POST) endpoint
app.post('/api/students', (req, res) => {
    const { firstName, lastName, email, enrollment, branch, college, year } = req.body;
    
    const query = `INSERT INTO students 
        (first_name, last_name, email, enrollment, branch, college, year) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(
        query, 
        [firstName, lastName, email, enrollment, branch, college, year],
        (err, result) => {
            if (err) {
                console.error('Database error:', err);
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ 
                success: true, 
                id: result.insertId, 
                message: 'Student added successfully' 
            });
        }
    );
});

// Start server
const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});