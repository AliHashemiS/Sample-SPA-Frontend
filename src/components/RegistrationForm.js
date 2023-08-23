import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setRegistrationMessage('Passwords do not match');
            return;
        }

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[0-9]).*$/;

        if (!passwordRegex.test(password)) {
            setRegistrationMessage('Password must contain at least one upper case letter, one special character, and one number');
            return;
        }

        try {
            // Make a POST request to your backend API for user registration
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data)
            setRegistrationMessage(data.message);
        } catch (error) {
            console.error('Registration failed:', error);
            setRegistrationMessage('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegistration}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
                {registrationMessage && <p>{registrationMessage}</p>}
            </form>
        </div>
    );
};

export default RegistrationForm;