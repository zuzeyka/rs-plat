import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    return (
        <section id="services" className="h-screen flex items-center justify-center">
            <h2 className="text-3xl font-semibold">{t('services.title')}</h2>
        </section>
    );
};

export default Services;
