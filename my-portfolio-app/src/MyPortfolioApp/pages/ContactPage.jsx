import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
    const { t } = useTranslation();
    return <h1>{ t('contact.title') }</h1>;
};
