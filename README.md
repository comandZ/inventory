# Inventory Fullstack Project

This is a starter project learning to build and run server systems with the purpose of building, tracking, and updating an inventory.

## Dependencies

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

1. run: `npm install`
1. run: `npm run dev`

### Further Reading

1. [Express](https://expressjs.com/)
1. [PostgreSQL](https://www.postgresql.org/)

## Setting Up Database

### Installing Postgres on Mac with Homebrew

1. `brew update`
1. `brew doctor`
1. `brew install postgresql@14`

### Starting/Stop PostgreSQL
1. `brew services start postgresql@14`
1. `brew services stop postgresql@14`

1. `psql postgres`
  - `CREATE ROLE newUser WITH LOGIN PASSWORD 'password';`
  - `ALTER ROLE newUser CREATEDB;`