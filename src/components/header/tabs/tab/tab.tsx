import React, { FC } from 'react';
import { TTab } from './types';
import { Link } from 'react-router-dom';
import './tab.scss';

export const Tab: FC<TTab> = ({
    active,
    tab,
}) => {
    return <Link
        to={'/' + tab.url}
        className={`tab ${active ? 'active' : ''}`}
    >
        <span className={'tab-label'}>{tab.label}</span>
    </Link>;
}
