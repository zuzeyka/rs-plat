import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
        <section id="about" className="relative w-full lg:py-44 text-center text-typography">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-10 left-10 w-16 h-1 bg-primary"></div>
                <div className="absolute top-20 left-30 w-1 h-16 bg-primary"></div>
                <div className="absolute bottom-10 right-10 w-16 h-1 bg-secondary"></div>
                <div className="absolute bottom-20 right-0 w-1 h-16 bg-secondary"></div>
            </div>

            <div className="container lg:flex mx-auto">
                <div className="w-full">
                    <h2 className="lg:text-7xl text-3xl font-bold font-montserrat mb-4">{t('about.title')}</h2>
                    <h3 className="lg:text-3xl text-lg font-bold text-typography mb-4">{t('about.subtitle')}</h3>
                    <p className="lg:text-2xl text-lg leading-relaxed mb-10">{t('about.description')}</p>
                </div>

                <div className="grid grid-cols-2 gap-10 w-full">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="rounded-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                        >
                            <motion.h3
                                className="text-4xl font-bold text-typography"
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: stat.id * 0.3 }}
                            >
                                ~{isVisible ? stat.value : '0'}+
                            </motion.h3>
                            <p className="text-lg text-typography">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
