import React, { useEffect, useState } from 'react';
import { Header } from '../header/header';
import { Route, Routes } from 'react-router';
import { ROUTE_EXPERIENCE, ROUTE_LINKS, ROUTE_PROJECTS, ROUTE_SKILLS } from '../constants';
import { About } from '../pages/about/about';
import { Skills } from '../pages/skills/skills';
import { Experience } from '../pages/experience/experience';
import { Loader } from '../loader/loader';
import { LOADING_TIME } from './constants';
import { Projects } from '../pages/projects/projects';
import { Links } from '../pages/links/links';

export const App = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, LOADING_TIME);
    }, []);
    return <>
        <Header />
        {isLoading ?
            <Loader />
            : <Routes>
                <Route path={'/'} element={<About />} />
                <Route path={ROUTE_SKILLS} element={<Skills />} />
                <Route path={ROUTE_EXPERIENCE} element={<Experience />} />
                <Route path={ROUTE_PROJECTS} element={<Projects />} />
                <Route path={ROUTE_LINKS} element={<Links />} />
            </Routes>
        }
    </>;
}
