import { client } from "../db/client.ts";

export async function getAllUsers() {
  const res = await client.query('SELECT * FROM users');
  return res.rows;
}

export async function insertUser(username: string, email: string) {
  await client.query(
    'INSERT INTO users (username, email) VALUES ($1, $2)',
    [username, email]
  );
}