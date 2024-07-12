import React, { FC, useEffect, useRef, useState } from 'react';
import './skill.scss';
import { Card } from '../../../card/card';
import { TSkill } from './types';
import { SHOW_MORE, SKILL_MAX_VISIBLE_ITEMS } from './constants';
import { CloseIcon } from '../../../../icons/closeIcon';
import { Button } from '../../../button/button';
import { useTranslation } from 'react-i18next';

export const Skill: FC<TSkill> = ({
    icon,
    items,
    label,
}) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(null);

    const ref = useRef(null);

    const onClickOutside = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target && target === ref.current) {
            setOpen(false);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
    };

    useEffect(() => {
        document.documentElement.style.overflowY = open ? 'hidden' : 'auto';
    }, [open]);

    return <>
        {open &&
            <div
                ref={ref}
                className={'overlay'}
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <Card className={'skill'}>
                    <button
                        className={'button-icon'}
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon />
                    </button>
                    {icon}
                    <p className={'skill-title'}>{label}</p>
                    <ul className={'skill-items'}>
                        {items.map(item => (
                            <li className={'skill-item'} key={item}>{item}</li>
                        ))}
                    </ul>
                </Card>
            </div>
        }
        <Card className={'skill'}>
            {icon}
            <p className={'skill-title'}>{label}</p>
            <ul className={'skill-items'}>
                {items.slice(0, SKILL_MAX_VISIBLE_ITEMS).map(item => (
                    <li className={'skill-item'} key={item}>{item}</li>
                ))}
            </ul>
            {items.length > SKILL_MAX_VISIBLE_ITEMS &&
                <Button
                    onClick={() => {
                        setOpen(true);
                        setTimeout(() => {
                            const button = document.querySelector('.button-icon') as HTMLElement;
                            if (button) button.focus();
                        }, 0);
                    }}
                >
                    {`${t(SHOW_MORE, { count: items.length - SKILL_MAX_VISIBLE_ITEMS })}`}
                </Button>
            }
        </Card>
    </>;
}
