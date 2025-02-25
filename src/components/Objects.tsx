import { useTranslation } from 'react-i18next';

const Objects = () => {
    const { t } = useTranslation();
    return (
        <section id="objects" className="h-screen flex items-center justify-center">
            <h2 className="text-3xl font-semibold">{t('objects.title')}</h2>
        </section>
    );
};

export default Objects;
