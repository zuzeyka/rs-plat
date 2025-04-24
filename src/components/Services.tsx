import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Service {
    id: number;
    title: string;
    description: string;
    unitCost: number;
    icon: string;
}

const Services = () => {
    const { t } = useTranslation();

    const services: Service[] = t('services.list', { returnObjects: true }) as Service[];

    return (
        <section id="services" className="w-full mx-auto my-20 text-center text-typography dark:text-typography-dark relative">
            <h2 className="lg:text-7xl text-3xl font-bold text-center mb-4 text-secondary">{t('services.title')}</h2>
            <h3 className="text-center lg:text-3xl text-lg mb-10 text-secondary">{t('services.description')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow bg-typography-dark dark:bg-typography"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex justify-center items-center mb-4">
                            <span className="text-3xl mr-4">{service.icon}</span>
                            <h3 className="lg:text-4xl text-2xl font-semibold">{service.title}</h3>
                        </div>
                        <p className="lg:text-xl text-lg">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
