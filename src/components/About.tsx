import { useTranslation } from 'react-i18next';
import GeometricDecorations from '@/components/GeometricDecorations';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative w-full text-center text-typography-dark">
            <div className="container lg:flex mx-auto p-10 lg:p-20 relative">
                <div className="absolute inset-0 bg-cover bg-black opacity-50 rounded-3xl bg-center w-full h-full z-0"></div>
                <GeometricDecorations
                    color="primary-dark"
                    secondaryColor="secondary"
                    horizontalCount={0}
                    verticalCount={0}
                    plusCount={Math.floor(Math.random() * (20 - 5 + 1)) + 10}
                />
                <div className="w-full z-10 relative">
                    <h2 className="lg:text-7xl text-3xl font-bold z-10 font-montserrat mb-4">{t('about.title')}</h2>
                    <h3 className="lg:text-3xl text-lg font-bold z-10 mb-4">{t('about.subtitle')}</h3>
                    <p className="lg:text-2xl text-lg z-10 leading-relaxed mb-10">{t('about.description')}</p>
                </div>

                <div className="w-full z-10 text-left p-4 text-left lg:p-10 bg-background rounded-lg relative">
                    <h3 className="lg:text-3xl text-2xl text-center font-bold mb-6">{t('about.guaranteeTitle', 'Vi garanterar:')}</h3>
                    <ul className="space-y-4 lg:text-xl text-lg">
                        <li>✅ {t('about.point1')}</li>
                        <li>✅ {t('about.point2')}</li>
                        <li>✅ {t('about.point3')}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
