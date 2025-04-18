import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';

interface ObjectItem {
    key: string;
    title: string;
    city: string;
    imageCount: number;
    link: string;
}

const Objects = () => {
    const { t } = useTranslation();

    const raw = t('objects', { returnObjects: true }) as Record<string, any>;

    const title: string = raw.title;
    const subtitle: string = raw.subtitle;

    const keys = Object.keys(raw).filter((k) => k !== 'title' && k !== 'subtitle');

    const objects: ObjectItem[] = keys.map((key) => {
        const item = raw[key];
        return {
            key,
            title: item.title,
            city: item.city,
            imageCount: Number(item['image-count']),
            link: `/${key}`,
        };
    });

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
        <section id="objects" className="w-full relative mx-auto py-20 px-4 text-center text-secondary">
            <h2 className="lg:text-7xl text-3xl mb-4">{title}</h2>
            <h3 className="lg:text-3xl text-lg font-bold mb-10">{subtitle}</h3>

            <div className="grid md:grid-cols-3 gap-6">
                {objects.map((obj, idx) => (
                    <motion.a
                        key={obj.key}
                        href={obj.link}
                        className="relative overflow-hidden rounded-lg cursor-pointer bg-black lg:bg-transparent lg:p-10 p-8"
                        variants={cardVariant}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        whileHover="hover"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="relative lg:absolute lg:top-64 lg:-left-36 text-xl font-bold text-typography-dark transform -rotate-90 lg:opacity-0 whitespace-nowrap">
                            {obj.title}
                        </h3>
                        <div className="relative lg:absolute lg:-top-2 lg:-left-22 flex items-center justify-center lg:opacity-0 mb-4">
                            <MapPinIcon />
                            <h4 className="text-lg font-bold text-typography-dark ml-2">{obj.city}</h4>
                        </div>

                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
                            variants={overlayVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold text-typography-dark transform -rotate-90 mb-4">{obj.title}</h3>
                            <div className="flex items-center">
                                <MapPinIcon />
                                <h4 className="text-lg font-bold text-typography-dark ml-2">{obj.city}</h4>
                            </div>
                        </motion.div>

                        <motion.img
                            src={`objects/${obj.key}.png`}
                            alt={obj.title}
                            className="w-full h-full object-cover"
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
