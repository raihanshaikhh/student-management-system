import dotenv from 'dotenv'
import pool from './db-config/db.js'
import express from 'express'
import studentRoutes from './routes/studentRoutes.js'
dotenv.config();

const app = express()
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Database connection failed' });
  }
});
app.use('/students', studentRoutes)


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
export default app;