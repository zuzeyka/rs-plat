import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-typography-dark backgroundImage">
            <div
                className="absolute inset-0 bg-black opacity-50 z-10 bg-cover bg-center w-full h-full"
                style={{ backgroundImage: "url('home.png')" }}
            ></div>
            <div className="absolute inset-0 z-0 bg-black w-full h-full"></div>
            <h1 className="lg:text-7xl z-10 text-3xl font-bold font-monserrat mb-4">
                <span className="block">{t('hero.title')}</span>
                <span className="block">{t('hero.company')}</span>
            </h1>
            <p className="lg:text-2xl z-10 text-lg text-center">{t('hero.subtitle')}</p>
            <a
                href="#contacts"
                className="lg:text-2xl z-10 text-lg text-center bg-primary hover:bg-primary-dark rounded-xl mx-4 absolute bottom-10 text-typography-dark rounded-lg px-4 py-2 mt-6 hover:bg-primary-dark transition duration-300"
            >
                {t('hero.contact')}
            </a>
        </section>
    );
};

export default Hero;
