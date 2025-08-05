# My Postgres App

A TypeScript Node.js application starter with PostgreSQL integration, featuring environment-based configuration and automated tests with Jest. Use this as a foundation for building robust data-driven backends or services.

---

## Features

- 📦 **TypeScript** for type safety
- 🐘 **PostgreSQL** database connection using `pg`
- 🔑 **dotenv** for environment variable management
- 🧪 **Jest** and **ts-jest** for unit/integration testing
- 🛠️ Easy scripts for development and testing

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/my-postgres-app.git
cd my-postgres-app
```

2. Install dependencies
```sh
yarn install
```

3. Configure Environment Variables

Create a .env file in the root directory (see .env.example if provided):
```ini
PGHOST=localhost
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=your_db_name
PGPORT=5432
```

4. Run Database Migrations

You can use your favorite migration tool or run SQL manually to create tables needed (e.g., users). Example:
```sql

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

5. Start the Application
```sh
yarn start
```

You should see output similar to:

```sh
Connected to the database!
Inserted bob.
Users: [ { id: 1, username: 'bob', email: 'bob@example.com' } ]
Done in 0.29s.
```
Testing

This project uses Jest for testing.

Run all tests:
```sh
yarn test
```

Example test output:

    PASS  src/queries/users.test.ts
      ✓ insertUser adds a user and getAllUsers returns it (XX ms)

    Test files: Place in src/**/*.test.ts.

Note:
Tests will run against your configured database. It's recommended to use a separate test database.
Project Structure

├── src/
│   ├── db/             # Database client and connection
│   ├── queries/        # Query and model logic
│   ├── index.ts        # Entry point
│   └── ...             # Other modules
├── .env                # Environment variables
├── package.json
├── jest.config.cjs     # Jest configuration
├── tsconfig.json
└── README.md

Database Inspection

You can view and manage your database with pgAdmin:

Open pgAdmin and connect to your Postgres server.

Select your database and open the Query Tool.

Run queries such as:
```sql

    SELECT * FROM users;
```
Scripts
```sh
yarn start — Run the app with ts-node
ya```rn test — Run all tests via Jest
```
Contributing

Pull requests and issues welcome! Please open an issue to discuss your ideas.
License

MIT