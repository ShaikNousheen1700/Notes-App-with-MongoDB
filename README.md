
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
Notes-App-with-MongoDB/
│
├─ backend/
│   ├─ server.js
│   ├─ routes/
│   ├─ models/
│   ├─ middleware/
│
├─ frontend/
│   ├─ login.html
│   ├─ signup.html
│   ├─ index.html
│   ├─ style.css
│   ├─ script.js
│
├─ .env.sample
├─ .gitignore      
├─ package.json
├─ README.md       
```


## Future Improvements

- Add password encryption
- Add JWT authentication
- Deploy project online

---

## Author

- Nousheen
- Computer Science Student
- Aspiring Full Stack Developer




