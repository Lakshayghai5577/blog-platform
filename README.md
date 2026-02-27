#  MERN Blog Platform

##  Project Description

This project is a user-centric Blog Platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create accounts, log in securely, publish blog posts, and view posts created by themselves and other users.

The system implements JWT-based authentication and provides full CRUD functionality for blog posts.

---

## Features

###  User Management & Authentication

* User Registration with unique username
* Secure password hashing using bcrypt.js
* User Login with JSON Web Token (JWT)
* Authentication state persistence using localStorage
* Logout functionality
* Protected routes for authenticated users

###  Blog Post Management

* Create new blog posts (title + content)
* View all posts (latest first)
* View single post details
* Edit own posts only
* Delete own posts only
* Automatic author and timestamp tracking

###  UI Features

* Responsive layout
* Navigation based on login status
* Clean forms with validation
* Success and error messages
* Loading indicators

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Hooks

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* bcrypt.js
* CORS
* dotenv

### Database

* MongoDB (Atlas or Local)

---

##  Project Structure

BLOG-PLATFORM
│
├── client → React Frontend
├── server → Node/Express Backend
├── README.md
├── mongodb-queries.txt
└── .gitignore

---

##  Installation & Setup

###  Prerequisites

* Node.js installed
* npm installed
* MongoDB Atlas account OR Local MongoDB installed

---

## 🏭 Backend Setup

1. Open terminal in project root

cd server
npm install

2. Create `.env` file inside server folder

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretkey
PORT=5000

3. Start backend server

npm run dev

Server runs on:
http://localhost:5000

---

## Frontend Setup

Open a new terminal:

cd client
npm install
npm start

Frontend runs on:
http://localhost:3000

---

##  API Endpoints (Sample)

### Auth Routes

POST /api/auth/register → Register new user
POST /api/auth/login → Login user

### Post Routes

GET /api/posts → Get all posts
GET /api/posts/:id → Get single post
POST /api/posts → Create post (auth required)
PUT /api/posts/:id → Update post (auth required)
DELETE /api/posts/:id → Delete post (auth required)

---

## Database Schema

### User

* username (unique)
* password (hashed)

### Post

* title
* content
* author (User reference)
* createdAt
* updatedAt

---

##  Security Features
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Authorization checks for post ownership

---

##  How to Test

1. Register a new user
2. Login with credentials
3. Create a post
4. View all posts
5. Edit or delete your post
6. Logout and verify protected access

---

##  MongoDB Queries

Refer to the file:

mongodb-queries.txt

for sample database commands.

---

##  Author

Developed as part of a MERN Stack Capstone Project.

---

##  Notes

* node_modules folders are excluded from GitHub
* .env file contains sensitive information and is not uploaded
* Only the main branch repository link should be submitted

---

##  Conclusion

This project demonstrates a complete MERN stack implementation with authentication, authorization, RESTful APIs, database integration, and responsive frontend design.
