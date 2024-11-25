# Role-Based Access Control (RBAC) System

A secure backend implementation of Role-Based Access Control (RBAC) using Node.js and Express.js. This project provides user authentication, role-based authorization, and secure management of user roles and permissions.

## Features
### Authentication:
#### Secure user registration and login using hashed passwords (bcrypt).
#### Authentication via JSON Web Tokens (JWT).

### Role-Based Authorization:
#### Flexible role management (e.g., Admin, User, Moderator).
#### Enforced access control based on assigned roles and permissions.

### Scalability:
#### Modular and extensible code structure for adding new roles or endpoints.

### Security:
#### Implements industry-standard security practices.

## Installation
### 1. Clone the Repository

`git clone https://github.com/Godson1117/rbac-api.git`

`cd rbac-system`

### 2. Install the dependencies
`npm i`

### 3. Set up environment variables

#### Create a .env file in the root directory.
#### Add the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/rbac` (Replace with your MongoDb URI)
JWT_SECRET=your_jwt_secret`
JWT_EXPIRES_IN=1h
```

### 4. Start the server

`node app.js` or `nodemon app.js`



