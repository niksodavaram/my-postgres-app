 🚀 Enterprise-Level Node.js PostgreSQL Application

[![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/)
[![Node.js](https://shields.io/badge/Node.js-339933?logo=Node.js&logoColor=FFF&style=flat-square)](https://nodejs.org/)
[![PostgreSQL](https://shields.io/badge/PostgreSQL-4169E1?logo=PostgreSQL&logoColor=FFF&style=flat-square)](https://www.postgresql.org/)
[![Express](https://shields.io/badge/Express-000000?logo=Express&logoColor=FFF&style=flat-square)](https://expressjs.com/)
[![Jest](https://shields.io/badge/Jest-C21325?logo=Jest&logoColor=FFF&style=flat-square)](https://jestjs.io/)
[![ESLint](https://shields.io/badge/ESLint-4B32C3?logo=ESLint&logoColor=FFF&style=flat-square)](https://eslint.org/)
[![License](https://shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <img src="https://nodejs.org/static/images/logo.svg" width="100" alt="Node.js"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width="100" alt="PostgreSQL"/>
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="100" alt="TypeScript"/>
</div>

A production-ready Node.js application using PostgreSQL, Express, and TypeScript. Built with clean architecture principles focusing on modularity, maintainability, and scalability.


![GitHub last commit](https://img.shields.io/github/last-commit/niksodavaram/my-postgres-app)
![GitHub issues](https://img.shields.io/github/issues/niksodavaram/my-postgres-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/niksodavaram/my-postgres-app)
![GitHub followers](https://img.shields.io/github/followers/niksodavaram?style=social)


## 📖 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [API Documentation](#-api-documentation)
- [Development](#-development)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features
- **TypeScript Support**: Full TypeScript implementation for better type safety
- **PostgreSQL Integration**: Robust database integration with connection pooling
- **RESTful API**: Well-structured API endpoints following REST principles
- **Error Handling**: Comprehensive error handling and logging
- **Environment Configuration**: Secure configuration using dotenv
- **Code Quality**: ESLint and Prettier for consistent code style
- **Type Definitions**: Strong typing for database models and API responses

## 📂 Project Structure
```
src/
├── api/
│ ├── controllers/ # Request handlers
│ ├── middlewares/ # Express middlewares
│ ├── routes/ # API routes
│ └── services/ # Business logic
├── config/
│ └── database.ts # Database configuration
├── db/
│ └── migrations/ # Database migrations
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
└── server.ts # Application entry point
```
## 🔧 Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn
- Git

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/niksodavaram/my-postgres-app.git
cd my-postgres-app
```
2. Install dependencies
```bash
yarn install
```
3. Create a .env file in the root directory 
```env
PORT=3000
PGHOST=localhost
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=your_database
PGPORT=5432
```
4. Set up the database
```bash
# Create database
psql -U postgres
CREATE DATABASE your_database;

# Run migrations
yarn db:migrate
```
5. Start the development server
```bash
yarn dev
```
## 🚀 API Documentation
## Users Endpoints
#### Create User
* End Point
```curl
POST /api/users
```
* Request Body 
```json
{
    "username": "testuser",
    "email": "test@example.com"
}
```
* Response 
```json
{
    "success": true,
    "message": "User created successfully."
}
```
#### Get All Users
* End Point
```json
GET /api/users
```
* Resposne
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "username": "testuser",
            "email": "test@example.com",
            "createdAt": "2025-08-06T10:00:00.000Z",
            "isActivated": true
        }
    ]
}
```
## 💻 Development
### Available Scripts

    yarn dev: Start development server with hot-reload
    yarn build: Build for production
    yarn start: Start production server
    yarn test: Run tests
    yarn lint: Run ESLint
    yarn format: Format code with Prettier

### Database Migrations

To create a new migration:
```bash

yarn migration:create my_migration_name
```
To run migrations:
```bash

yarn db:migrate
```
## 🧪 Testing

Run the test suite:
```bash

yarn test
```
Run tests with coverage:
```bash

yarn test:coverage
```
## 🤝 Contributing

Fork the repository
* Create your feature branch (git checkout -b feature/amazing-feature)
* Commit your changes (git commit -m 'Add amazing feature')
* Push to the branch (git push origin feature/amazing-feature)
* Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
## 👤 Author

Nik Sodavaram

    GitHub: @niksodavaram

## 🙏 Acknowledgments

Node.js community
PostgreSQL community
TypeScript team

## 📫 Support

For support, email nik.sodavaram@gmail.com or open an issue on GitHub.





