import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section
            id="about"
            className="relative w-full shadow-lg hover:shadow-2xl transition-shadow  dark:bg-typography bg-typography-dark rounded-3xl text-center text-typography dark:text-typography-dark"
        >
            <div className="container py-8 lg:flex flex-col gap-6 relative">
                <img src="logo_runva.svg" alt="logo" className="w-full" />
                <div className="lg:flex relative">
                    <div className="w-full z-10 p-4 relative">
                        <p className="lg:text-2xl text-lg z-10 leading-relaxed">{t('about.subtitle')}</p>
                    </div>

                    <div className="w-full z-10 p-4 relative">
                        <p className="lg:text-2xl text-lg z-10 leading-relaxed">{t('about.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
