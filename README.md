# NESTJS CRUD WITH LOGIN & REGISTRATION - JWT TOKEN AUTHORIZATION
This is a simple CRUD API with login and registration system powered by Nodejs, Nestjs and TS

## Requirements
- NodeJS runtime
- NPM or Yarn package manager
- Postgres Database

## Features
- Completely written in [Typescript](https://typescriptlang.org/)
- [Nestjs](https://github.com/nestjs/nest) Nodejs framework
- [PostgreSQL](https://www.postgresql.org/docs/) Open Source Relational Database
- [TypeORM](https://typeorm.io/) SQL ORM for Nodejs

## How to install
- Clone the repository
- `git clone https://github.com/OjerIsaac/crud_nestjs.git`
- `cd crud_nestjs`
- Install dependencies
- `npm install`
- Setup environment variable
- `cp .env.sample .env`
- Fill in data for db (MySQL or Postgres)
- Run the server in dev env
- `npm run start:dev`

## Endpoints.
### Register User

POST
```shell
http://localhost:3000/api/v1/auth/register
```
PAYLOAD DATA

```shell
{
    "firstname": "isaac",
    "lastname": "ojerumu",
    "email": "isaac_001@gmail.com",
    "phone": "080100000000",
    "city": "FCT",
    "country": "Nigeria",
    "password": "password"
}
```

### Login User

POST
```shell
http://localhost:3000/api/v1/auth/login
```
PAYLOAD DATA

```shell
{
    "email": "isaac_001@gmail.com",
    "password": "password"
}
```

### Add an order

POST
```shell
http://localhost:3000/api/v1/3/new-order
```
PAYLOAD DATA

```shell
{
    "orderName": "indomie",
    "price": "200"
}
```

### Fetch orders

GET
```shell
http://localhost:3000/api/v1/fetch-order
```