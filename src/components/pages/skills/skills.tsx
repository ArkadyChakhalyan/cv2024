import React from 'react';
import './skills.scss';
import {
    CSS_ITEM_1,
    CSS_ITEM_2,
    CSS_ITEM_3,
    CSS_ITEM_4,
    CSS_ITEM_5,
    CSS_ITEM_6,
    CSS_ITEM_7,
    CSS_ITEM_8,
    CSS_ITEM_9,
    CSS_LABEL,
    JS_ITEM_1,
    JS_ITEM_10,
    JS_ITEM_11,
    JS_ITEM_12,
    JS_ITEM_13,
    JS_ITEM_14,
    JS_ITEM_15,
    JS_ITEM_16,
    JS_ITEM_17,
    JS_ITEM_18,
    JS_ITEM_19,
    JS_ITEM_2,
    JS_ITEM_3,
    JS_ITEM_4,
    JS_ITEM_5,
    JS_ITEM_6,
    JS_ITEM_7,
    JS_ITEM_8,
    JS_ITEM_9,
    JS_LABEL,
    LANGS_ITEM_1,
    LANGS_ITEM_2,
    LANGS_ITEM_3,
    LANGS_ITEM_4,
    LANGS_LABEL,
    OTHER_ITEM_1,
    OTHER_ITEM_2,
    OTHER_ITEM_3,
    OTHER_ITEM_4,
    OTHER_LABEL
} from './constants';
import { ButtonNext } from '../../buttonNext/buttonNext';
import { EXPERIENCE } from '../../header/tabs/constants';
import { ROUTE_EXPERIENCE } from '../../constants';
import { Skill } from './skill/skill';
import { useTranslation } from 'react-i18next';
import { ISkill } from './types';
import { CssIcon } from '../../../icons/cssIcon';
import { JsIcon } from '../../../icons/jsIcon';
import { ListIcon } from '../../../icons/listIcon';
import { LanguagesIcon } from '../../../icons/languagesIcon';

export const Skills = () => {
    const { t } = useTranslation();

    const skills: ISkill[] = [
        {
            label: t(CSS_LABEL),
            items: [
                t(CSS_ITEM_1),
                t(CSS_ITEM_2),
                t(CSS_ITEM_3),
                t(CSS_ITEM_4),
                t(CSS_ITEM_5),
                t(CSS_ITEM_6),
                t(CSS_ITEM_7),
                t(CSS_ITEM_8),
                t(CSS_ITEM_9),
            ],
            icon: <CssIcon />,
        },
        {
            label: t(JS_LABEL),
            items: [
                t(JS_ITEM_1),
                t(JS_ITEM_2),
                t(JS_ITEM_3),
                t(JS_ITEM_4),
                t(JS_ITEM_5),
                t(JS_ITEM_6),
                t(JS_ITEM_7),
                t(JS_ITEM_8),
                t(JS_ITEM_9),
                t(JS_ITEM_10),
                t(JS_ITEM_11),
                t(JS_ITEM_12),
                t(JS_ITEM_13),
                t(JS_ITEM_14),
                t(JS_ITEM_15),
                t(JS_ITEM_16),
                t(JS_ITEM_17),
                t(JS_ITEM_18),
                t(JS_ITEM_19),
            ],
            icon: <JsIcon />,
        },
        {
            label: t(OTHER_LABEL),
            items: [
                t(OTHER_ITEM_1),
                t(OTHER_ITEM_2),
                t(OTHER_ITEM_3),
                t(OTHER_ITEM_4),
            ],
            icon: <ListIcon />,
        },
        {
            label: t(LANGS_LABEL),
            items: [
                t(LANGS_ITEM_1),
                t(LANGS_ITEM_2),
                t(LANGS_ITEM_3),
                t(LANGS_ITEM_4),
            ],
            icon: <LanguagesIcon />,
        },
    ];

    return <div className={'skills-container'}>
        <div className={'skills'}>
            <div className={'start'}>
                {skills.slice(0, 2).map(column=> (
                    <Skill
                        key={column.label}
                        label={column.label}
                        items={column.items}
                        icon={column.icon}
                    />
                ))}
            </div>
            <div className={'end'}>
                {skills.slice(2).map(column => (
                    <Skill
                        key={column.label}
                        label={column.label}
                        items={column.items}
                        icon={column.icon}
                    />
                ))}
            </div>
        </div>
        <ButtonNext link={ROUTE_EXPERIENCE}>{t(EXPERIENCE)}</ButtonNext>
    </div>;
}
