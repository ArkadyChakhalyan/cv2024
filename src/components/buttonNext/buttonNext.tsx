import React, { FC } from 'react';
import './buttonNext.scss';
import { TButtonNextProps } from './types';
import { ArrowRightIcon } from '../../icons/arrowRightIcon';
import { Link } from 'react-router-dom';

export const ButtonNext: FC<TButtonNextProps> = ({
    children,
    link,
}) => {
    return <Link
        to={'/' + link}
        className={'button-next'}
        onClick={() => document.body.scrollTo({ top: 0, behavior: 'smooth' })}
    >
        {children}
        <ArrowRightIcon />
    </Link>;
}
