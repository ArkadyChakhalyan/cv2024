import { Tabs } from './tabs/tabs';
import React from 'react';
import './header.scss';
import { User } from './user/user';
import { LangSelect } from './langSelect/langSelect';

export const Header = () => {
    return <div className={'header'}>
        <User />
        <Tabs />
        <LangSelect />
    </div>;
}
