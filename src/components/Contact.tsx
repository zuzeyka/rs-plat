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
            <div className="mt-8 w-full max-w-4xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.6564822695857!2d20.224652977415086!3d63.829951777097634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b7a34845d7b%3A0xc5c054b10cebc864!2zS3Zhcm52w6RnZW4gNywgOTAzIDIwIFVtZcOl!5e0!3m2!1sru!2sse!4v1740687999265!5m2!1sru!2sse"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
