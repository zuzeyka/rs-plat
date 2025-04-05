import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';

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

    const [selectedServiceId, setSelectedServiceId] = useState<number>(services[0]?.id || 1);
    const [area, setArea] = useState<number>(0);
    const [cost, setCost] = useState<number | null>(null);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const service = services.find((s) => s.id === selectedServiceId);
        if (service && area > 0) {
            setCost(area * service.unitCost);
        }
    };

    return (
        <section id="services" className="w-full mx-auto my-20 text-center text-secondary">
            <h2 className="lg:text-7xl text-3xl font-bold text-center mb-4">{t('services.title')}</h2>
            <h3 className="text-center lg:text-3xl text-lg mb-10">{t('services.description')}</h3>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <span className="text-3xl mr-4">{service.icon}</span>
                                <h3 className="lg:text-4xl text-2xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="lg:text-xl text-lg">{service.description}</p>
                            <p className="mt-4 font-bold text-primary lg:text-xl text-lg">
                                {t('services.unitCost')}: ${service.unitCost} / m²
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="rounded-lg shadow-lg p-8">
                    <div className="sticky top-10">
                        <h3 className="lg:text-4xl text-2xl font-bold mb-4">{t('services.calculatorTitle')}</h3>
                        <form onSubmit={handleCalculate} className="space-y-4">
                            <div>
                                <label className="block mb-2 lg:text-xl text-lg" htmlFor="service">
                                    {t('services.selectService')}
                                </label>
                                <select
                                    id="service"
                                    className="w-full bg-white text-black dark:bg-black dark:text-white p-2 border border-gray-300 rounded"
                                    value={selectedServiceId}
                                    onChange={(e) => setSelectedServiceId(Number(e.target.value))}
                                >
                                    {services.map((service) => (
                                        <option key={service.id} value={service.id}>
                                            {service.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 lg:text-xl text-lg" htmlFor="area">
                                    {t('services.area')}
                                </label>
                                <Input
                                    id="area"
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter area in m²"
                                    value={area}
                                    onChange={(e) => setArea(Number(e.target.value))}
                                />
                            </div>

                            <Button type="submit" className="w-full bg-primary lg:text-xl text-lg py-2 rounded hover:bg-blue-700 transition-colors">
                                {t('services.calculate')}
                            </Button>
                        </form>
                        {cost !== null && (
                            <motion.div
                                className="mt-6 p-4 rounded shadow text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-xl font-semibold">
                                    {t('services.estimatedCost')}: ${cost.toLocaleString()}
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
