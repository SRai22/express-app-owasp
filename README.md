# express-app-owasp
Web-602-Spring 2025

A secure user login application built with Express. This project demonstrates secure user registration and authentication through state-of-the-art practices, including input validation, sanitization against NoSQL injection and XSS attacks, and secure session management.

## Features

- **User Authentication:** Uses Passport with the local strategy ([see configuration in app.js](app.js)).
- **Registration Validation:** Validates username, password, and email on registration using a custom middleware ([middleware/validate.js](middleware/validate.js)).
- **Secure Sessions:** Implements secure sessions with `express-session` (configured in [app.js](app.js)).
- **Security Enhancements:** 
  - NoSQL injection prevention with `express-mongo-sanitize`.
  - XSS prevention with `xss-clean`.
  - HTTP security headers via `helmet`.
  - Rate limiting using `express-rate-limit`.
- **EJS Templating:** Server-side rendered pages are constructed using EJS views (located in the `views` folder).

## Getting Started

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/SRai22/express-app-owasp.git
   cd express-app-owasp
   ``` 

2. **Install Dependencies:**
    ```sh 
    npm install 
    ```

3. **Ensure MongoDB is running locally.**

### Running the Application
Start the server with 
```bash
    npm start
``` 
The server will be available at http://localhost:3000 

### Project Structure 
 - app.js: Main application file where Express, Passport, and other middleware are configured.

 - models/user.js: Mongoose model for users, integrated with Passport Local Mongoose for simplified authentication.

 - middleware/validate.js: Custom middleware that validates user input during registration.

 - views: Contains EJS templates for the UI (home, login, registration, etc.)
 
 - public/css/styles.css: Static CSS file for styling (if additional styling is needed).