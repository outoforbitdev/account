import React from 'react';
import { TextField } from '../core/Components/TextField';
import { Modal } from '../core/Components/Modal';
import { PasswordField } from '../core/Components/PasswordField';

export function Login() {
    return (
        <Modal>
            <label>Username</label>
            <div><TextField clearable /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable /></div>
            <button>Login</button>
        </Modal>
    );
}