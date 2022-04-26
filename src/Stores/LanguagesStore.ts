import {getLanguagesData} from "../Providers/LanguagesProvider";

export const getLanguagesList = () => {
    return getLanguagesData();
}