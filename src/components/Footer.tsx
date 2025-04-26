import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-typography dark:bg-black dark:text-white text-typography-dark py-12 relative">
            <div className="container mx-auto px-4 items-center flex flex-col">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
                        <div>
                            <h3 className="font-semibold text-secondary mb-2">{t('footer.followUs', 'Follow Us')}</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-typography-secondary transition-colors" aria-label="Facebook">
                                    <svg width="24" height="24" fill="currentColor">
                                        <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.2l-.3 3h-1.9v7A10 10 0 0022 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-typography-secondary transition-colors" aria-label="Twitter">
                                    <svg width="24" height="24" fill="currentColor">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.67a4.27 4.27 0 001.32 5.71 4.2 4.2 0 01-1.94-.54v.06a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.68 8.68 0 0024 5.54a8.45 8.45 0 01-2.54.7z" />
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-typography-secondary transition-colors" aria-label="Instagram">
                                    <svg width="24" height="24" fill="currentColor">
                                        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-8 border-t border-typography-secondary pt-4 text-center lg:text-sm text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p>{t('footer.copyright')}</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
