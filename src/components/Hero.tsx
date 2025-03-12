import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-typography backgroundImage">
            <div
                className="absolute inset-0 bg-black opacity-50 z-10 bg-cover bg-center w-full h-full"
                style={{ backgroundImage: "url('home.png')" }}
            ></div>
            <div className="absolute inset-0 z-0 bg-black w-full h-full"></div>
            <h1 className="lg:text-7xl z-10 text-3xl font-bold font-monserrat mb-4">{t('hero.title')}</h1>
            <p className="lg:text-2xl z-10 text-lg max-w-md text-center">
                {t('hero.subtitle', { defaultValue: 'Welcome to our website. We provide the best services for you.' })}
            </p>
        </section>
    );
};

export default Hero;
