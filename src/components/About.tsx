import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative w-full text-center text-typography-dark">
            <div className="container py-8 lg:flex flex-col gap-6 relative">
                <div className="absolute inset-0 bg-cover bg-black opacity-50 rounded-3xl bg-center w-full h-full z-0"></div>
                <img src="logo_runva_.svg" alt="logo" className="w-full h-96 object-cover" />
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
