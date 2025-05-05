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
    const cardVariant = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section id="objects" className="w-full relative mx-auto my-20 px-4 text-center text-secondary">
            <h2 className="lg:text-7xl text-3xl mb-4">{title}</h2>
            <h3 className="lg:text-3xl text-lg font-bold">{subtitle}</h3>

            <div className="grid md:grid-cols-3 gap-6">
                {objects.map((obj, idx) => (
                    <motion.a
                        key={obj.key}
                        href={obj.link}
                        className="relative flex flex-col justify-end overflow-hidden rounded-lg cursor-pointer bg-transparent lg:p-10 p-4 h-full"
                        variants={cardVariant}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        whileHover="hover"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex flex-col items-start mb-4">
                            <h3 className="text-lg font-bold dark:text-typography-dark text-typography">{obj.title}</h3>
                            <div className="flex items-center mt-1">
                                <MapPinIcon className="w-4 h-4 mr-1" />
                                <h4 className="text-sm">{obj.city}</h4>
                            </div>
                        </div>

                        <motion.img
                            src={`objects/${obj.key}.jpg`}
                            alt={obj.title}
                            className="w-full md:h-96 h-64 object-cover rounded-lg border-4 border-secondary shadow-lg hover-effect"
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
