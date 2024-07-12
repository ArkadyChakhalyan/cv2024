import React, { useEffect, useState } from 'react';
import './links.scss';
import {
    CODEWARS,
    CODEWARS_BADGE,
    CODEWARS_BADGE_SMALL,
    CV,
    EMAIL,
    GITHUB,
    GITHUB_LINK,
    GOOGLE_SPACING,
    LINKEDIN,
    LINKEDIN_LINK,
    TG,
    TG_LINK
} from './constants';
import { Card } from '../../card/card';
import { ILink } from './types';
import { MailIcon } from '../../../icons/mailIcon';
import { openLink } from '../../../helpers/openLink';
import { TelegramIcon } from '../../../icons/telegramIcon';
import { MEDIA_S } from '../../../constants';
import { useTranslation } from 'react-i18next';
import { DownloadIcon } from '../../../icons/downloadIcon';
import { UserInfoIcon } from '../../../icons/userInfoIcon';
import { LinkedInIcon } from '../../../icons/linkedInIcon';
import { GithubIcon } from '../../../icons/githubIcon';
//@ts-ignore
import cvEn from '../../../assets/cv_en.pdf';
//@ts-ignore
import cvRu from '../../../assets/cv_ru.pdf';
import { getAppLanguage } from '../../../selectors/getAppLanguage';
import { EAppLang } from '../../header/langSelect/types';

export const Links = () => {
    const { t } = useTranslation();

    const [links, setLinks] = useState([]);

    useEffect(() => {
        const onResize = () => {
            const links: ILink[] = [
                {
                    click: () => window.open(`mailto:${EMAIL}`),
                    icon: <MailIcon />,
                    label: EMAIL,
                },
                {
                    click: () => openLink(GITHUB_LINK),
                    icon: <GithubIcon />,
                    label: GITHUB,
                },
                {
                    click: () => openLink(TG_LINK),
                    icon: <TelegramIcon />,
                    label: TG,
                },
                {
                    click: () => openLink(LINKEDIN_LINK),
                    icon: <LinkedInIcon />,
                    label: LINKEDIN,
                },
                {
                    click: () => openLink(getAppLanguage() === EAppLang.EN ? cvEn : cvRu),
                    icon: <DownloadIcon />,
                    label: t(CV),
                    divider: true,
                },
                {
                    click: () => openLink(CODEWARS, ),
                    img: window.innerWidth <= MEDIA_S ? CODEWARS_BADGE_SMALL : CODEWARS_BADGE,
                },
            ];
            setLinks(links);
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [t]);

    return <div className='links'>
        <Card>
            <UserInfoIcon />
            {links.map(link => (
                <>
                    {link.divider && <div className={'divider'}/>}
                    <button className={'link'} key={link.label} onClick={link.click} >
                        {link.icon && link.icon}
                        {link.label && link.label}
                        {link.img && <img src={link.img} alt={link.label}/>}
                    </button>
                </>
            ))}
        </Card>
    </div>;
}
