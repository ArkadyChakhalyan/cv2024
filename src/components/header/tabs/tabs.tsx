import { ABOUT, EXPERIENCE, LINKS, PROJECTS, SKILLS } from './constants';
import { Tab } from './tab/tab';
import './tabs.scss';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ITab } from './tab/types';
import { ROUTE_DEFAULT, ROUTE_EXPERIENCE, ROUTE_LINKS, ROUTE_PROJECTS, ROUTE_SKILLS } from '../../constants';

export const Tabs = () => {
    const { t } = useTranslation();

    const tabs: ITab[] = [
        {
            url: ROUTE_DEFAULT,
            label: t(ABOUT),
        },
        {
            url: ROUTE_SKILLS,
            label: t(SKILLS),
        },
        {
            url: ROUTE_EXPERIENCE,
            label: t(EXPERIENCE),
        },
        {
            url: ROUTE_PROJECTS,
            label: t(PROJECTS),
        },
        {
            url: ROUTE_LINKS,
            label: t(LINKS),

        },
    ];

    const location = useLocation();
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const activeIdx = tabs.findIndex(tab => tab.url && location.pathname.includes(tab.url));
        setActiveIdx(activeIdx > -1 ? activeIdx : 0);
    }, [location]);

    return <div className={'tabs'}>
        {tabs.map((tab, idx) => (
            <Tab
                key={tab.label}
                tab={tab}
                active={activeIdx === idx}
            />
        ))}
        <div
            className={'slider'}
            style={{
                width: `${1 / tabs.length * 100}%`,
                left: `${activeIdx / tabs.length * 100}%`,
            }}
        />
    </div>;
}
