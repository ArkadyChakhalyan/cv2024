import React from 'react';
import './loader.scss';
import { LOADING } from './constants';
import { useTranslation } from 'react-i18next';

export const Loader = () => {
    const { t } = useTranslation();
    return <div className={'loader'}>
        {t(LOADING)}
    </div>;
}
