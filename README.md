# Project Information

## Description

This Back-End project is a library book-rental system. It is a REST API that allows you to manage books and users. It is developed with <b>Express.js, Sequelize, and MySQL</b>.

# Project initialization

## Installation

```bash
$ npm install
```

## Running the app

1. Make sure you have MySQL installed and running on your machine.
2. Create a database named `db_library`.
3. Create a `config.json` file in the [config](/config/) directory and add the following variables:

```bash
{
  "development": 
  {
    "username": "root",
    "password": "your_password",
    "database": "db_library",
    "host": "localhost",
    "dialect": "mysql"
    "migration-path": "/database/migrations",
    "seeders-path": "/database/seeders",
  }
}
```

4. Run the following commands to run and undo the migration:

```bash
$ npm run migrate
$ npm run migrate:undo
```

5. Run the following command to start the server:


```bash
# development
$ npm run start
```
