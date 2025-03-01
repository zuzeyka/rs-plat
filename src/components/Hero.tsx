import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
        >
            <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-lg max-w-md text-center">
                {t('hero.subtitle', { defaultValue: 'Welcome to our website. We provide the best services for you.' })}
            </p>
        </section>
    );
};

export default Hero;
