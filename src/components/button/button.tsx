import React, { FC } from 'react';
import './button.scss';
import { TButton } from './types';

export const Button: FC<TButton> = ({
    children,
    className,
    ...props
}) => {
    return <button
        className={`button ${className || ''}`}
        {...props}
    >
        {children}
    </button>;
}
