import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Phone number submitted:', phoneNumber);
    };

    return (
        <section id="contact" className="h-screen flex flex-col items-center justify-center p-8">
            <h2 className="text-3xl font-semibold mb-6">{t('contact.title')}</h2>
            <div className="text-center mb-8">
                <p className="text-lg font-medium">{t('contact.companyName', { defaultValue: 'RS Plåt AB' })}</p>
                <p>{t('contact.address', { defaultValue: 'Box 123, 123 45 Stockholm' })}</p>
                <p>{t('contact.phone', { defaultValue: '08-123 45 67' })}</p>
                <p>{t('contact.email', { defaultValue: 'info@rsplat.se' })}</p>
                <p>{t('contact.website', { defaultValue: 'www.rsplat.se' })}</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">
                        {t('contact.form.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder={t('contact.form.name-placeholder')}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">
                        {t('contact.form.phone')}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder={t('contact.form.phone-placeholder')}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {t('contact.form.submit')}
                </button>
            </form>
        </section>
    );
};

export default Contact;
