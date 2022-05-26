import React from 'react';
import { TextField } from '../core/Components/TextField';
import { Modal } from '../core/Components/Modal';
import { PasswordField } from '../core/Components/PasswordField';
import { Button } from '../core/Components/Button';

export function Creation() {
    return (
        <Modal>
            <label>Email</label>
            <div><TextField clearable /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable /></div>
            <label>Confirm Password</label>
            <div><PasswordField showable /></div>
            <Button text={"Create Account"}
                width={"234px"}
            />
        </Modal>
    );
}