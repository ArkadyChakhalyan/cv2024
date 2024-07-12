import React from 'react';
import './user.scss';
//@ts-ignore
import src from '../../../assets/avatar.jpg';
import { USERNAME } from './constants';
import { useTranslation } from 'react-i18next';

export const User = () => {
    const { t } = useTranslation();
    return <div className='user'>
        <img src={src} className={'avatar'} alt={'Arkady Chakhalyan'}/>
        <p className={'username'}>{t(USERNAME)}</p>
    </div>;
}
