import { EAppLang } from '../components/header/langSelect/types';
import { LANGUAGE_LOCAL_STORAGE_KEY } from '../components/header/langSelect/constants';

export const getAppLanguage = (): EAppLang => {
    return localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) as EAppLang ||
        navigator.language.slice(0, 2) as EAppLang;
}
