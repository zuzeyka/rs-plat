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
        <section id="contact" className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-4">{t('contact.title')}</h2>
            <div className="text-center">
                <p className="text-lg">{t('contact.companyName', { defaultValue: 'RS Plåt AB' })}</p>
                <p>{t('contact.address', { defaultValue: 'Box 123, 123 45 Stockholm' })}</p>
                <p>{t('contact.phone', { defaultValue: '08-123 45 67' })}</p>
                <p>{t('contact.email', { defaultValue: 'info@rsplat.se' })}</p>
                <p>{t('contact.website', { defaultValue: 'www.rsplat.se' })}</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="name" className="block mb-2">
                    {t('contact.form.name')}
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 mb-4"
                    placeholder={t('contact.form.name-placeholder')}
                />
                <label htmlFor="phone" className="block mb-2">
                    {t('contact.form.phone')}
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 mb-4"
                    placeholder={t('contact.form.phone-placeholder')}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    {t('contact.form.submit')}
                </button>
            </form>
            <div className="mt-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.6564822695857!2d20.224652977415086!3d63.829951777097634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b7a34845d7b%3A0xc5c054b10cebc864!2zS3Zhcm52w6RnZW4gNywgOTAzIDIwIFVtZcOl!5e0!3m2!1sru!2sse!4v1740687999265!5m2!1sru!2sse"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
