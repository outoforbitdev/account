import React from 'react';
import { Screens } from '../App';
import { Button } from '../core/Components/Button';
import { Link } from '../core/Components/Link';
import { Modal } from '../core/Components/Modal';
import { PasswordField } from '../core/Components/PasswordField';
import { TextField } from '../core/Components/TextField';
import { ILoginProps } from './Login';

export function Creation(props: ILoginProps) {
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
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Login)}>
                I have an existing account
            </Link>
        </Modal>
    );
}