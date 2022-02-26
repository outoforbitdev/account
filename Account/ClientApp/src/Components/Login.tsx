import React from 'react';
import { TextField } from '../core/Components';
import { PasswordField } from '../core/Components/PasswordField';

export function Login() {
    return (
        <div>
            <label>Username</label>
            <TextField />
            <label>Password</label>
            <PasswordField />
            <button>Login</button>
        </div>
    );
}