import * as React from 'react';
import { Screens } from '../App';
import { Button } from '../core/Components/Button';
import { IComponentProps } from '../core/Components/IComponentProps';
import { Link } from '../core/Components/Link';
import { Modal } from '../core/Components/Modal';
import { PasswordField } from '../core/Components/PasswordField';
import { TextField } from '../core/Components/TextField';

export interface ILoginProps extends IComponentProps {
    changeScreen: (screen: Screens) => void;
}

export function Login(props: ILoginProps) {
    return (
        <Modal>
            <label>Username</label>
            <div><TextField clearable /></div>
            <div><span /></div>
            <label>Password</label>
            <div><PasswordField showable /></div>
            <Button text={"Login"}
                width={"234px"} 
            /><br />
            <Link onClick={() => props.changeScreen(Screens.Create)}>
                Create Account
            </Link>
        </Modal>
    );
}