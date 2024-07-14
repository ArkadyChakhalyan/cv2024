import React, { useEffect, useState } from 'react';
import './links.scss';
import {
    CODEWARS,
    CODEWARS_BADGE,
    CODEWARS_BADGE_SMALL,
    CV, EMAIL,
    EMAIL_LINK,
    GITHUB,
    GITHUB_LINK,
    LINKEDIN,
    LINKEDIN_LINK,
    TG,
    TG_LINK
} from './constants';
import { Card } from '../../card/card';
import { ILink } from './types';
import { MailIcon } from '../../../icons/mailIcon';
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
                    icon: <MailIcon />,
                    label: EMAIL,
                    link: EMAIL_LINK,
                },
                {
                    icon: <GithubIcon />,
                    label: GITHUB,
                    link: GITHUB_LINK,
                },
                {
                    icon: <TelegramIcon />,
                    label: TG,
                    link: TG_LINK,
                },
                {
                    icon: <LinkedInIcon />,
                    label: LINKEDIN,
                    link: LINKEDIN_LINK,
                },
                {
                    download: true,
                    divider: true,
                    icon: <DownloadIcon />,
                    label: t(CV),
                    link: getAppLanguage() === EAppLang.EN ? cvEn : cvRu,
                },
                {
                    img: window.innerWidth <= MEDIA_S ? CODEWARS_BADGE_SMALL : CODEWARS_BADGE,
                    link: CODEWARS,
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
                    <a
                        href={link.link}
                        target={'_blank'}
                        className={'link'}
                        key={link.label}
                        download={link.download}
                    >
                        {link.icon && link.icon}
                        {link.label && link.label}
                        {link.img && <img src={link.img} alt={link.label}/>}
                    </a>
                </>
            ))}
        </Card>
    </div>;
}
