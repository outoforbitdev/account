import React from 'react';
import { TextField } from '../core/Components/TextField';
import { Modal } from '../core/Components/Modal';
import { PasswordField } from '../core/Components/PasswordField';
import { Button } from '../core/Components/Button';

export function Login() {
    return (
        <Modal>
            <label>Username</label>
            <div><TextField clearable /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable /></div>
            <Button text={"Login"}
                width={"234px"}
            />
        </Modal>
    );
}