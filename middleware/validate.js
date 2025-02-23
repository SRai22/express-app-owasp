const validateRegistration = (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        const errors = [];

        // Username validation
        if (!username || username.length < 5) {
            errors.push({ field: 'username', message: 'Username must be at least 5 characters long' });
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            errors.push({ field: 'username', message: 'Username can only contain letters, numbers and underscore' });
        }

        // Password validation
        if (!password || password.length < 8) {
            errors.push({ field: 'password', message: 'Password must be at least 8 characters long' });
        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
            errors.push({ field: 'password', message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character' });
        }

        // Email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address' });
        }

        if (errors.length > 0) {
            return res.render('register', { errors: errors });
        }
        next();
    } catch (error) {
        console.error('Validation error:', error);
        return res.render('register', { 
            errors: [{ field: 'general', message: 'An error occurred during validation' }] 
        });
    }
};

module.exports = validateRegistration;