import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-4">{t('contact.title')}</h2>
            <div className="text-center">
                <p className="text-lg">{t('contact.companyName', { defaultValue: 'RS Plåt AB' })}</p>
                <p>{t('contact.address', { defaultValue: 'Box 123, 123 45 Stockholm' })}</p>
                <p>{t('contact.phone', { defaultValue: '08-123 45 67' })}</p>
                <p>{t('contact.email', { defaultValue: 'info@rsplat.se' })}</p>
                <p>{t('contact.website', { defaultValue: 'www.rsplat.se' })}</p>
            </div>
        </section>
    );
};

export default Contact;
