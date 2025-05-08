import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactsSection = () => {
    const { t, i18n } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(t('contacts.callbackTextlaceholder'));
    const [formSuccess, setFormSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setMessage(t('contacts.callbackTextlaceholder'));
    }, [i18n.language, t]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError(t('contacts.formErrorEmpty'));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(t('contacts.formErrorInvalidEmail'));
            return;
        }

        try {
            const res = await fetch('/api/sendContact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const text = await res.text();
            let data: { ok?: boolean; error?: string };
            try {
                data = JSON.parse(text);
            } catch {
                data = { error: text || 'Invalid JSON response' };
            }

            if (!res.ok) {
                throw new Error(data.error || t('contacts.formErrorGeneric'));
            }

            setFormSuccess(true);
            setName('');
            setEmail('');
            setMessage(t('contacts.callbackTextlaceholder'));
            setTimeout(() => setFormSuccess(false), 5000);
        } catch (err: any) {
            console.error(err);
            setError(err.message || t('contacts.formErrorGeneric'));
        }
    };

    return (
        <section
            id="contacts"
            className="
        relative rounded-t-3xl
        bg-gradient-to-r from-primary-light to-secondary-light
        text-typography py-20
      "
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-10">
                <motion.div
                    className="w-full md:w-1/2 px-4 mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="lg:text-4xl text-2xl font-bold mb-6">{t('contacts.title')}</h2>
                    <p className="text-lg mb-6">{t('contacts.description')}</p>
                    <div className="space-y-4">
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.address')}</h3>
                            <a
                                href="https://maps.app.goo.gl/o3sTRkRrBakMp3Mc7"
                                className="hover:underline font-semibold text-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('contacts.addressValue')}
                            </a>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.phone')}</h3>
                            <a href={`tel:${t('contacts.phoneValue')}`} className="hover:underline font-semibold text-secondary">
                                {t('contacts.phoneValue')}
                            </a>
                        </div>
                        <div>
                            <h3 className="lg:text-xl text-lg font-semibold">{t('contacts.email')}</h3>
                            <a href={`mailto:${t('contacts.emailValue')}`} className="hover:underline font-semibold text-secondary">
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
                    className="w-full md:w-1/2 bg-background text-primary rounded-lg shadow-2xl p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="lg:text-4xl text-2xl font-bold mb-4">{t('contacts.callbackTitle')}</h3>
                    <p className="mb-6">{t('contacts.callbackDescription')}</p>

                    <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t('contacts.callbackNamePlaceholder')}
                            className="p-3 bg-background-light dark:bg-background-dark border border-typography-dark dark:text-typography-dark text-typography rounded"
                        />
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('contacts.callbackEmailPlaceholder')}
                            className="p-3 bg-background-light dark:bg-background-dark border border-typography-dark dark:text-typography-dark text-typography rounded"
                        />
                        <Input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t('contacts.callbackTextlaceholder')}
                            className="p-3 bg-background-light dark:bg-background-dark border border-typography-dark dark:text-typography-dark text-typography rounded"
                        />

                        {error && <p className="text-red-500">{error}</p>}

                        <Button type="submit" className="bg-primary hover:bg-primary-dark text-typography-dark py-3 rounded transition-colors">
                            {t('contacts.callbackSubmit')}
                        </Button>
                    </form>

                    {formSuccess && (
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
