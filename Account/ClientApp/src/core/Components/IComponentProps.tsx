import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IsNullOrEmpty } from '../Library/String'

export enum StyleThemes {
    Light = "OODCoreStyleThemeLight",
    Dark = "OODCoreStyleThemeDark",
}

export interface IComponentProps {
    className?: string;
    children?: ReactNode;
    theme?: StyleThemes;
    changeTheme?: (theme: StyleThemes) => void;
}

export function getClassName(
    standardClassName?: string,
    additionalClassName?: string,
    theme?: StyleThemes): string {

    return combineClassNames(
        standardClassName,
        //combineClassNames(additionalClassName, theme ? theme : StyleThemes.Light)
        additionalClassName
    );
}

function combineClassNames(firstName?: string, secondName?: string): string {
    if (!IsNullOrEmpty(firstName)) {
        if (!IsNullOrEmpty(secondName)) {
            return firstName + " " + secondName;
        }
        return firstName!;
    }
    else if (!IsNullOrEmpty(secondName)) {
        return secondName!;
    }
    return "";
}