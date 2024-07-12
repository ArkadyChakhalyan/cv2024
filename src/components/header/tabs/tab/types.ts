export type TTab = {
    active: boolean;
    tab: ITab;
}

export interface ITab {
    label: string;
    url: string;
}
