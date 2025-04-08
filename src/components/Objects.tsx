import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';

const Objects = () => {
    const { t } = useTranslation();
    const objects = t('objects.list', { returnObjects: true }) as { city: string; title: string; link: string }[];

    const imageVariants = {
        initial: { x: 0, y: 0, scale: 1 },
        hover: { x: 20, y: 20, scale: 1.1 },
    };

    const overlayVariants = {
        initial: { x: 0, y: 0, opacity: 0 },
        hover: { x: -20, y: -20, opacity: 1 },
    };

    const cardVariant = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section id="objects" className="w-full mx-auto py-20 text-center text-secondary">
            <h2 className="lg:text-7xl text-3xl mb-10">{t('objects.title')}</h2>
            <h3 className="lg:text-3xl text-lg font-bold text-secondary mb-4">{t('objects.subtitle')}</h3>

            <div className="grid md:grid-cols-3 gap-6">
                {objects.map((object, index) => (
                    <motion.a
                        key={index}
                        href={object.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden rounded-lg cursor-pointer lg:p-10 px-8 lg:bg-transparent bg-black"
                        variants={cardVariant}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover="hover"
                    >
                        <h3 className="relative lg:absolute top-64 -left-36 text-typography-dark text-xl font-bold transform -rotate-90 lg:opacity-0 whitespace-nowrap">
                            {object.title}
                        </h3>
                        <div className="relative lg:absolute -top-2 -left-22 flex items-center justify-center lg:opacity-0">
                            <MapPinIcon></MapPinIcon>
                            <h4 className="text-typography-dark text-lg font-bold transform">{object.city}</h4>
                        </div>
                        <motion.div className="absolute inset-0 bg-black bg-opacity-50" variants={overlayVariants} transition={{ duration: 0.5 }}>
                            <h3 className="relative top-60 -left-36 text-typography-dark text-xl font-bold transform -rotate-90">{object.title}</h3>
                            <div className="relative -top-2 -left-22 flex items-center justify-center">
                                <MapPinIcon></MapPinIcon>
                                <h4 className="text-typography-dark text-lg font-bold transform">{object.city}</h4>
                            </div>
                        </motion.div>
                        <motion.img
                            src={`objects/${index}.png`}
                            alt={object.title}
                            className="relative w-full h-full object-cover"
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Objects;
