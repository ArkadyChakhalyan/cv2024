import { ReactElement } from 'react';

export interface ILink {
    click: () => void;
    divider?: boolean;
    icon?: ReactElement;
    img?: string;
    label?: string;
}
