# Employee TaskTrack – Phase 2 Report

## User Authentication and Authorization

### Objective

The goal of this phase was to implement secure user authentication and authorization so employees can:

- Register accounts.
- Log in with credentials.
- Access their personal task lists using token-based authentication (JWT).

This ensures that each user’s data remains private and only accessible to them.

---

### Work Completed

1. **User Authentication Added**

   - Implemented registration and login using email and password.
   - Passwords are securely hashed using bcrypt before saving in MongoDB.
   - Upon successful login or registration, a JWT token is generated and sent to the client.
   - Tokens expire automatically after a set duration (`JWT_EXPIRES_IN` from `.env`).

2. **Authorization Setup**

   - Introduced middleware (`auth.js`) to verify JWT tokens in the request header.
   - If the token is valid, the user’s ID and role are attached to `req.user`.
   - All private routes, such as task management, are now protected by this middleware.
   - This ensures users can only view or modify their own tasks.

3. **New API Endpoint**

   - Added `GET /api/auth/me` route to allow users to retrieve their own profile information.
   - Returns safe, public user details (without password).

4. **Code Improvements**

   - Enhanced error handling and response consistency across all authentication routes.
   - Improved input validation using express-validator to prevent invalid data.
   - Updated the User model with a role field and a `toPublic()` method for secure data return.

5. **Environment and Security**
   - All sensitive data (like the database URI and JWT secret) is managed through the `.env` file.
   - `.env` is ignored in Git using `.gitignore` to prevent leaks.

---

### Updated Project Structure

```
src/
├─ config/
│  └─ db.js
├─ controllers/
│  ├─ authController.js     ← updated with register, login, and getMe
│  └─ taskController.js
├─ middleware/
│  └─ auth.js               ← updated to handle JWT verification
├─ models/
│  ├─ User.js               ← updated with role and toPublic() method
│  └─ Task.js
├─ routes/
│  ├─ auth.js               ← added /me route
│  └─ tasks.js
└─ server.js
```

---

### Endpoints Overview

| Method | Endpoint             | Description                       | Access                   |
| ------ | -------------------- | --------------------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user               | Public                   |
| POST   | `/api/auth/login`    | Log in and receive JWT token      | Public                   |
| GET    | `/api/auth/me`       | Retrieve logged-in user’s profile | Private (Token required) |
| GET    | `/api/tasks`         | Fetch all user’s tasks            | Private                  |
| POST   | `/api/tasks`         | Create a new task                 | Private                  |
| PUT    | `/api/tasks/:id`     | Update an existing task           | Private                  |
| DELETE | `/api/tasks/:id`     | Delete a task                     | Private                  |

---

### Outcome

- The system now has a fully secure authentication layer.
- Each employee can register, log in, and work only with their own tasks.
- Unauthorized access is blocked automatically through token verification.
- The backend is now ready for the next phase — building the frontend interface and connecting it to these endpoints.
