import { ReactElement } from 'react';

export interface ILink {
    divider?: boolean;
    download?: boolean;
    icon?: ReactElement;
    img?: string;
    label?: string;
    link: string;
}
