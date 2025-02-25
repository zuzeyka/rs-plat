import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">{t('hero.title')}</h1>
        </section>
    );
};

export default Hero;
