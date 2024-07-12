import React, { FC } from 'react';
import './card.scss';
import { TCard } from './types';

export const Card: FC<TCard> = ({
    children,
    className,
}) => {
    return <div className={`card ${className || ''}`}>
        {children}
    </div>;
}
