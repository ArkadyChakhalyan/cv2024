import React from 'react';
import './experience.scss';
import { ButtonNext } from '../../buttonNext/buttonNext';
import { PROJECTS } from '../../header/tabs/constants';
import { ROUTE_PROJECTS } from '../../constants';
import { Card } from '../../card/card';
import { useTranslation } from 'react-i18next';
import { IExperience } from './types';
import {
    EXPERIENCE_1_DATES,
    EXPERIENCE_1_DESCRIPTION,
    EXPERIENCE_1_OCCUPANCY,
    EXPERIENCE_2_DATES,
    EXPERIENCE_2_DESCRIPTION_1,
    EXPERIENCE_2_DESCRIPTION_2,
    EXPERIENCE_2_DESCRIPTION_3,
    EXPERIENCE_2_DESCRIPTION_4,
    EXPERIENCE_2_OCCUPANCY
} from './constants';

export const Experience = () => {
    const { t } = useTranslation();

    const experiences: IExperience[] = [
        {
            dates: t(EXPERIENCE_1_DATES),
            occupancy: t(EXPERIENCE_1_OCCUPANCY),
            description: [t(EXPERIENCE_1_DESCRIPTION)],
        },
        {
            dates: t(EXPERIENCE_2_DATES),
            occupancy: t(EXPERIENCE_2_OCCUPANCY),
            description: [
                t(EXPERIENCE_2_DESCRIPTION_1),
                t(EXPERIENCE_2_DESCRIPTION_2),
                t(EXPERIENCE_2_DESCRIPTION_3),
                t(EXPERIENCE_2_DESCRIPTION_4),
            ],
        },
    ];

    return <div className={'experiences-container'}>
        <div className={'experiences'}>
            {experiences.map(experience => (
                <Card key={experience.dates} className={'experience'}>
                    <p className={'experience-occupancy'}>{experience.occupancy}</p>
                    <p className={'experience-dates'}>{experience.dates}</p>
                    {experience.description.map(text => (
                        <span className={'experience-description'} key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                </Card>
            ))}
        </div>
        <ButtonNext link={ROUTE_PROJECTS}>{t(PROJECTS)}</ButtonNext>
    </div>;
}
