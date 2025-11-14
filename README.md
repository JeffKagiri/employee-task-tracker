🚀 Employee TaskTrack – MERN Stack Employee Task Management System

Live Application:
https://employee-task-tracker-dnavb0b3ffc3f0dw.southafricanorth-01.azurewebsites.net/

GitHub Repository:
https://github.com/JeffKagiri/employee-task-tracker.git

📌 Project Overview

Employee TaskTrack is a full-stack MERN (MongoDB, Express.js, React, Node.js) task management system built to help employees create, manage, update, filter, and track their tasks efficiently. The application includes secure JWT authentication, a modern responsive UI, and complete CRUD operations for task management.

Deployed successfully on Microsoft Azure App Services with a fully working backend, frontend, and database integration.

📚 Table of Contents

Phase 1 – Backend Setup

Phase 2 – Authentication & Authorization

Phase 3 – Task Creation & Listing

Phase 4 – Task Update & Deletion

Phase 5 – Task Filtering & Sorting

Phase 6 – Deployment (Azure App Services)

Technical Specifications

How to Run Locally

Future Improvements

Conclusion

✅ Phase 1 — Backend Setup & Configuration
Accomplishments

Initialized Node.js project and installed core dependencies:

express, mongoose, dotenv, bcryptjs, jsonwebtoken,
cors, express-validator


Created backend folder structure:

src/
├── config/db.js
├── controllers/
├── middleware/
├── models/
├── routes/
└── server.js


Connected to MongoDB using Mongoose.

Set up Express server with route placeholders.

Configured .env and added nodemon scripts for development.

Outcome

A working backend server with a stable connection to the MongoDB database.

🔐 Phase 2 — User Authentication & Authorization
Features Implemented

User registration (/api/auth/register)

User login (/api/auth/login)

Password hashing with bcryptjs

JWT token generation & validation

Authentication middleware (auth.js)

User-specific route protection

Outcome

Only authenticated users can access private routes and manage their tasks securely.

📝 Phase 3 — Task Creation & Listing
Features Added

Task model with:

title, description, deadline, status, priority, createdAt, user


Endpoints:

POST /api/tasks → create a new task

GET /api/tasks → fetch tasks belonging to logged-in user

React frontend:

TaskForm component

TaskList & TaskItem

Axios API integration

Beautiful responsive UI in main.css

Outcome

Users can create tasks and view them in a well-organized dashboard interface.

✏️ Phase 4 — Task Update & Deletion
Enhancements

Implemented task editing:

PUT /api/tasks/:id


Implemented task deletion:

DELETE /api/tasks/:id


Frontend supports:

Edit mode in TaskForm

Delete confirmation

Automatic UI refresh

Outcome

Full CRUD functionality achieved — users can fully manage the task lifecycle.

🔍 Phase 5 — Task Filtering & Sorting
Added Features

Filter tasks by:

pending

in progress

completed

Search tasks by:

title

description

Sort tasks by:

deadline

priority

Frontend:

FilterBar component

Dashboard integration

Real-time querying

Outcome

Users can locate tasks quickly and organize work efficiently.

🌐 Phase 6 — Deployment (Azure App Services)
Deployment Summary
Category	Status
Build Optimization	✅ Completed
Azure Web App Setup	✅ Completed
Environment Variables	✅ Configured
SSL Certificate	✅ Enabled
CI/CD Pipeline	✅ Enabled
Database Connection	✅ Successful
Post-Deployment Testing	✅ Passed
Deployment Platform

Azure App Service (Linux)

Runtime: Node.js

Region: South Africa North

URL:
https://employee-task-tracker-dnavb0b3ffc3f0dw.southafricanorth-01.azurewebsites.net/

SSL: Enabled

Issues Resolved

PWA Manifest Icon Errors → fixed by adjusting manifest

User Registration 400 Error → incorrect password length → resolved

Static Assets 404 → corrected build paths

API Endpoint Testing → validated and confirmed working

Current Deployment Status

⭐⭐⭐⭐⭐ 100% Operational

Responsive UI

Fully functional task operations

Authentication working

PWA features enabled

Stable uptime

🧰 Technical Specifications
Backend

Node.js

Express

JWT Auth

MongoDB Atlas

Bcrypt password hashing

Frontend

React.js

Axios

React Router

Progressive Web App (PWA) support

Fully responsive UI

▶️ Running the App Locally
1. Clone the repository
git clone https://github.com/JeffKagiri/employee-task-tracker.git

2. Install backend dependencies
npm install

3. Start backend
npm run dev

4. Setup frontend
cd client
npm install
npm start

5. Environment Variables

Create a .env file in backend root:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d


Create .env in client:

REACT_APP_BASE_URL=http://localhost:5000

🔮 Future Improvements

Multi-user roles (admin, manager, employee)

Task analytics dashboard

Team task assignments

Email notifications

Dark mode UI

Activity logs

🏁 Conclusion

The Employee TaskTrack system has been fully developed, tested, and deployed.
All six phases were executed successfully — from backend setup to Azure deployment.

The final product is:
✅ Secure
✅ Fast
✅ Fully functional
✅ Deployed
✅ Ready for user acceptance testing

Live Application:
https://employee-task-tracker-dnavb0b3ffc3f0dw.southafricanorth-01.azurewebsites.net/
