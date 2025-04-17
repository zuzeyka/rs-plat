import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import GeometricDecorations from './GeometricDecorations';
import { Button } from './ui/button';

const ContactsSection = () => {
    const { t } = useTranslation();
    const [phone, setPhone] = useState('');
    const [callbackSuccess, setCallbackSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleCallbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
        if (phone.trim() === '') {
            setError(t('contacts.callbackErrorEmpty'));
        } else if (!phoneRegex.test(phone)) {
            setError(t('contacts.callbackErrorInvalid'));
        } else {
            setCallbackSuccess(true);
            setPhone('');
            setError('');
            setTimeout(() => setCallbackSuccess(false), 5000);
        }
    };

    return (
        <section id="contacts" className="relative rounded-t-3xl bg-gradient-to-r from-primary-light to-secondary-light text-typography py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-10">
                <GeometricDecorations
                    color="secondary-light"
                    secondaryColor="typography"
                    horizontalCount={0}
                    verticalCount={0}
                    plusCount={Math.floor(Math.random() * (20 - 5 + 1)) + 10}
                />
                <motion.div
                    className="w-full md:w-1/2 mb-10 md:mb-0 z-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="lg:text-4xl text-2xl font-bold mb-6 z-10">{t('contacts.title')}</h2>
                    <p className="text-lg mb-6 z-10">{t('contacts.description')}</p>
                    <div className="space-y-4 z-10">
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.address')}</h3>
                            <a href="https://maps.app.goo.gl/5JdVy8KzgxkrJBpf8">{t('contacts.addressValue')}</a>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.phone')}</h3>
                            <a href={`tel:${t('contacts.phoneValue')}`} className="hover:underline text-secondary">
                                {t('contacts.phoneValue')}
                            </a>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.email')}</h3>
                            <a href={`mailto:${t('contacts.emailValue')}`} className="hover:underline text-secondary">
                                {t('contacts.emailValue')}
                            </a>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.hours')}</h3>
                            <p>{t('contacts.hoursValue')}</p>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.organizationNumber')}</h3>
                            <p>{t('contacts.organizationNumberValue')}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 bg-background text-primary z-10 rounded-lg shadow-2xl p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="lg:text-4xl text-2xl font-bold mb-4">{t('contacts.callbackTitle')}</h3>
                    <p className="mb-6">{t('contacts.callbackDescription')}</p>
                    <form onSubmit={handleCallbackSubmit} className="flex flex-col space-y-4">
                        <PhoneInput
                            country={'se'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputClass="p-3 bg-background border text-typography border-typography-dark rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            inputStyle={{ width: '100%' }}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <Button type="submit" className="bg-primary hover:bg-primary-dark text-typography-dark py-3 rounded transition-colors">
                            {t('contacts.callbackSubmit')}
                        </Button>
                    </form>
                    {callbackSuccess && (
                        <motion.div
                            className="mt-4 p-4 bg-green-200 text-green-800 rounded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {t('contacts.callbackSuccess')}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactsSection;
