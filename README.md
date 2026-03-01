<<<<<<< HEAD
# Online Journal (Personal Diary) — Full Stack App
Technologies: HTML, CSS, JavaScript (frontend) • Node.js, Express.js (backend) • MongoDB (database)
Auth: bcrypt + JWT

## What this includes
- Backend: `backend/` (server, routes, models, middleware)
- Frontend: `frontend/` (HTML pages, CSS, JS)
- `.env.sample` with environment variables to configure
- `package.json` at project root for installing server dependencies

## Quick setup (local)
1. Install Node.js (v14+ recommended) and npm.
2. Install MongoDB locally **or** create a free MongoDB Atlas cluster.
3. Copy `.env.sample` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
4. From project root, install dependencies:
   ```
   npm install
   ```
5. Start the server:
   ```
   node backend/server.js
   ```
6. Open frontend:
   - Open `frontend/login.html` (or `frontend/index.html` after login) in your browser.
   - The frontend calls backend at `http://localhost:5000`.

## Project structure
```
online_journal/
├─ backend/
│  ├─ server.js
│  ├─ routes/
│  │  ├─ authRoutes.js
│  │  └─ entryRoutes.js
│  ├─ models/
│  │  ├─ User.js
│  │  └─ Entry.js
│  └─ middleware/
│     └─ authMiddleware.js
├─ frontend/
│  ├─ login.html
│  ├─ signup.html
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
├─ .env.sample
└─ package.json
```

## Notes
- This project uses JWT stored in browser localStorage for simplicity.
- For production, use secure cookies, HTTPS, and stronger protections.
- If you use MongoDB Atlas, whitelist your local IP or allow access from anywhere (not recommended).
=======
# Notes-App-with-MongoDB

A secure full stack Notes Management Application with user authentication and CRUD functionality. Users can sign up, log in, and create, edit, and delete notes. All data is stored securely in MongoDB.

---

## Features

- User Signup and Login Authentication
- Create Notes
- Edit Notes
- Delete Notes
- Secure data storage in MongoDB
- Full Stack Implementation (Frontend + Backend)

---

## Technologies Used

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB

---

## Project Structure


## How to Run the Project

1. Clone the repository

2. Install dependencies

3. Start server

---

## Future Improvements

- Add password encryption
- Add JWT authentication
- Deploy project online

---

## Author

- Nousheen
- Computer Science Student
- Aspiring Full Stack Developer



>>>>>>> 171678be7e885d3b8b37a4f3aea190ed0f6d8d92
