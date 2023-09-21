import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username or Email:</label>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            </div>
            <div>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    );
};

export default LoginForm;
