import React from 'react';

export function Login() {
    return (
        <div>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button>Login</button>
        </div>
    );
}