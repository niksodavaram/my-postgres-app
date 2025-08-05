import { client } from './db/client.ts';
import { getAllUsers, insertUser } from './queries/users.ts';

export async function main() {
  try {
    await client.connect();
    console.log('Connected to the database!');

    await insertUser('bob', 'bob@example.com');
    console.log('Inserted bob.');

    const users = await getAllUsers();
    console.log('Users:', users);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}