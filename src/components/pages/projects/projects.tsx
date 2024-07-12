import React from 'react';
import './projects.scss';
import { ButtonNext } from '../../buttonNext/buttonNext';
import { LINKS } from '../../header/tabs/constants';
import { ROUTE_LINKS } from '../../constants';
import { Card } from '../../card/card';
import {
    GO_TO,
    PROJECT_1_DESCRIPTION,
    PROJECT_1_LINK,
    PROJECT_1_NAME,
    PROJECT_1_STACK,
    PROJECT_2_DESCRIPTION,
    PROJECT_2_LINK,
    PROJECT_2_NAME,
    PROJECT_2_STACK
} from './constants';
import { Button } from '../../button/button';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import project1Preview from '../../../assets/project1.png'
//@ts-ignore
import project2Preview from '../../../assets/project2.png'
import { IProject } from './types';

export const Projects = () => {
    const { t } = useTranslation();

    const projects: IProject[] = [
        {
            description: t(PROJECT_1_DESCRIPTION),
            name: t(PROJECT_1_NAME),
            link: PROJECT_1_LINK,
            preview: project1Preview,
            stack: t(PROJECT_1_STACK),
        },
        {
            description: t(PROJECT_2_DESCRIPTION),
            name: t(PROJECT_2_NAME),
            link: PROJECT_2_LINK,
            preview: project2Preview,
            stack: t(PROJECT_2_STACK),
        },
    ];

    return <div className={'projects-container'}>
        <div className={'projects'}>
            {projects.map(project => (
                <Card key={project.name} className={'project'}>
                    <div className={'top'}>
                        <img className={'project-img'} src={project.preview} alt={project.name} />
                        <p className={'project-name'}>{project.name}</p>
                        <p className={'project-description'}>{project.description}</p>
                    </div>
                    <div className={'bottom'}>
                        <Button onClick={() => window.open(project.link, '_blank')}>
                            {GO_TO}
                        </Button>
                        <p className={'project-stack'}>{project.stack}</p>
                    </div>
                </Card>
            ))}
        </div>
        <ButtonNext link={ROUTE_LINKS}>{t(LINKS)}</ButtonNext>
    </div>;
}
