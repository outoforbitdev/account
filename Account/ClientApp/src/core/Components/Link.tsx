import * as React from 'react';
import { Component } from 'react';
import { UniqueKey } from './Component';
import { getClassName } from './IComponentProps';
import { IComponentProps } from './IComponentProps';
import '../Styles/Link.css';

interface ILinkProps extends IComponentProps {
    onClick?: () => void;
}

interface IComponentStyle {
    width?: string;
}

export function Link(props: ILinkProps) {
    const uniqueKey = UniqueKey("OODCoreComponentLink");

    let className = "OODCoreComponentLink";

    return (
        <span onClick={props.onClick}
            className={getClassName(className, props.className, props.theme)}
        >
            {props.children}
        </span>
    );
}