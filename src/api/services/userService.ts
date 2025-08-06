import pool from '../../config/database.ts';
import type { User } from '../../types/user.ts';

export async function addUser(username: string, email: string): Promise<void> {
  const query = `
  INSERT INTO users (username, email) 
  VALUES ($1, $2) 
  RETURNING id, username, email, created_at, is_activated
  `
  ;
  try {
    const result = await pool.query(query, [username, email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
  
}

export async function fetchAllUsers(): Promise<User[]> {
  const query = `
  SELECT 
    id, 
    username, 
    email, 
    created_at, 
    is_activated
  FROM users
  ORDER BY created_at DESC
  `
  ;
  try {
    const result = await pool.query(query);
    return result.rows;

  } catch (error) {
    throw error;
  }
 
}

export async function getUserById(id: number): Promise<User | null> {
  const query = `
  SELECT * FROM users WHERE id = $1
  `  
  ;
  const result = await pool.query(query, [id]);
  return result.rows[0] || null;
}