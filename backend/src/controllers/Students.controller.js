import pool from "../db-config/db.js";

export const getAllStudents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students ORDER BY id');
        res.status(200).json(result.rows)
    } catch (error) {
        console.error(error.message);
        res.status(200).json({
            "message": "Internal Server Error"
        })

    }
}

export const createStudent = async (req, res) => {
    
}
