import pool from "../db-config/db.js";

export const getAllStudents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students ORDER BY id');
        res.status(200).json(result.rows)
    } catch (error) {
    console.error(error);

    res.status(500).json({
        name: error.name,
        message: error.message,
        stack: error.stack
    });
}
}


export const createStudent = async (req, res) => {
    const { name, course, year, date_of_birth, email, mobile_number, gender, address } = req.body;
    const photoPath = req.file ? req.file.filename : null;
}
