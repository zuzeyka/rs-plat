import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GeometricDecorations from '@/components/GeometricDecorations';

const About = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { id: 1, value: 1150, label: t('about.families') },
        { id: 2, value: 23, label: t('about.objects') },
        { id: 3, value: 30, label: t('about.commercial') },
        { id: 4, value: 4, label: t('about.cities') },
    ];

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

                <div className="grid grid-cols-2 gap-10 w-full z-10">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="rounded-lg p-6 z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                        >
                            <motion.h3
                                className="text-4xl font-bold z-10"
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: stat.id * 0.3 }}
                            >
                                ~{isVisible ? stat.value : '0'}+
                            </motion.h3>
                            <p className="text-lg z-10">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
