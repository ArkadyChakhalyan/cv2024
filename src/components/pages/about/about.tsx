import React from 'react';
import './about.scss';
import { ButtonNext } from '../../buttonNext/buttonNext';
import { SKILLS } from '../../header/tabs/constants';
import { ROUTE_SKILLS } from '../../constants';
import { Card } from '../../card/card';
import { useTranslation } from 'react-i18next';
import { ABOUT_PARAGRAPH_1, ABOUT_PARAGRAPH_2, ABOUT_PARAGRAPH_3 } from './constants';
import { UserIcon } from '../../../icons/userIcon';

export const About = () => {
    const { t } = useTranslation();

    const aboutText: string[] = [
        t(ABOUT_PARAGRAPH_1),
        t(ABOUT_PARAGRAPH_2),
        t(ABOUT_PARAGRAPH_3),
    ];

    return <div className={'about'}>
        <Card>
            <UserIcon />
            {aboutText.map(text => (
                <p className={'about-text'} key={text}>{text}</p>
            ))}
        </Card>
        <ButtonNext link={ROUTE_SKILLS}>{t(SKILLS)}</ButtonNext>
    </div>;
}
