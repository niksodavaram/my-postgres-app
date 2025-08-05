import { client } from '../src/db/client.ts';
import { insertUser, getAllUsers } from '../src/queries/users.ts';

beforeAll(async () => {
  await client.connect();
});

afterAll(async () => {
  // Clean up test data and close connection
  await client.query("DELETE FROM users WHERE username = 'jest_tester'");
  await client.end();
});

test('insertUser adds a user and getAllUsers returns it', async () => {
  await insertUser('jest_tester', 'jest@example.com');
  const users = await getAllUsers();
  expect(users).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        username: 'jest_tester',
        email: 'jest@example.com',
      }),
    ])
  );
});