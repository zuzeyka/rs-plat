import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="h-screen flex items-center justify-center">
            <h2 className="text-3xl font-semibold">{t('about.title')}</h2>
        </section>
    );
};

export default About;
