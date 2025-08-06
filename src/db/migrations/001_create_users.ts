import pool from '../../config/database.ts';
import { createUsersTableQuery } from '../schemas/userSchema.ts';

export async function up() {
  try {
    // Drop table if exists
    await pool.query('DROP TABLE IF EXISTS users');

    // Create users table with correct columns
    await pool.query(createUsersTableQuery);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
    throw error;
  }
}

export async function down() {
  try {
    await pool.query(`DROP TABLE IF EXISTS users`);
    console.log('Users table dropped successfully');
  } catch (error) {
    console.error('Error dropping users table:', error);
    throw error;
  }
}