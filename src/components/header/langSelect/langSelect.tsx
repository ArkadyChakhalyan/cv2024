import React, { useEffect, useState } from 'react';
import './langSelect.scss';
import { LANGUAGE_EN, LANGUAGE_LOCAL_STORAGE_KEY, LANGUAGE_RU } from './constants';
import { CarretDownIcon } from '../../../icons/carretDownIcon';
import { useTranslation } from 'react-i18next';
import { EAppLang, ILanguage } from './types';
import { getAppLanguage } from '../../../selectors/getAppLanguage';
import { MEDIA_S } from '../../../constants';

export const LangSelect = () => {
    const { i18n, t } = useTranslation();

    const languages: ILanguage[] = [
        {
            label: t(LANGUAGE_EN),
            value: EAppLang.EN,
        },
        {
            label: t(LANGUAGE_RU),
            value: EAppLang.RU,
        },
    ];

    const [open, setOpen] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [lang, setLang] = React.useState(EAppLang.EN);

    const onSelect = (lang: EAppLang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, lang);
        setLang(lang);
        setOpen(false);
    };

    const onBlur = (e: React.FocusEvent) => {
        const target = e.relatedTarget as HTMLElement;
        if (!target || !target.closest('.select')) {
            setOpen(false);
        }
    };

    useEffect(() => {
        const lang = getAppLanguage();
        i18n.changeLanguage(lang);
        setLang(lang as EAppLang);
    }, []);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && !target.closest('.select')) {
                setOpen(false);
            }
        };
        if (open) document.documentElement.addEventListener('click', onClickOutside);
        return () => {
            if (!open) document.documentElement.removeEventListener('click', onClickOutside);
        }
    }, [open]);

    useEffect(() => {
        const onResize = () => {
            setMobile(window.innerWidth <= MEDIA_S);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    const languageLabel = languages.find(item => item.value === lang).label;

    return <div className={`select ${open ? 'open' : ''}`}>
        <button
            className={'select-button'}
            onClick={() => setOpen(!open)}
        >
            {mobile ? languageLabel.slice(0, 3) : languageLabel}
            <CarretDownIcon />
        </button>
        {open &&
            <div className={'select-dropdown'} onBlur={onBlur}>
                {languages.map(language => (
                    <button
                        key={language.value}
                        className={`select-item ${lang === language.value ? 'selected' : ''}`}
                        onClick={() => onSelect(language.value)}
                    >
                        {language.label}
                    </button>
                ))}
            </div>
        }
    </div>;
}
