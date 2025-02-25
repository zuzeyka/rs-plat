import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="h-screen flex items-center justify-center">
            <h2 className="text-3xl font-semibold">{t('contact.title')}</h2>
        </section>
    );
};

export default Contact;
