import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useInView from '@/components/useInView';

const isVideo = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.mov', '.webm', '.ogg'];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

const ObjectPage: React.FC = () => {
    const { campaignId } = useParams();
    const { t } = useTranslation();
    const [ref, isInView] = useInView(0.2);

    const [media, setMedia] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const importMedia = () => {
            const imageCount = Number(t(`projects.${campaignId}.image-count`));
            const videoCount = Number(t(`projects.${campaignId}.video-count`, { defaultValue: 0 }));

            const basePath = `/projects/${campaignId}/`;
            const imagesArray = Array.from({ length: imageCount }, (_, index) => `${basePath}${index}.jpg`);
            const videosArray = Array.from({ length: videoCount }, (_, index) => `${basePath}video${index}.mp4`);
            setMedia([...imagesArray, ...videosArray]);
        };

        importMedia();
    }, [campaignId, t]);

    const campaignData = t(`projects.${campaignId}.post-text`, {
        returnObjects: true,
    }) as {
        event_title: string;
        event_description: string;
        event_highlights_title: string;
        event_highlights: string[];
        event_effect_title: string;
        event_effects: string[];
        event_thanks: string;
    };

    return (
        <div ref={ref} className={`max-w-4xl mx-auto p-4 md:p-6 bg-background rounded-lg shadow-md ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className={`text-2xl md:text-3xl font-bold text-typography mb-4 text-center ${isInView ? 'animate-slide-in-from-top' : 'opacity-0'}`}>
                {campaignData.event_title}
            </h1>
            <p className={`text-base md:text-lg text-typography mb-6 text-justify ${isInView ? 'animate-slide-in-from-bottom' : 'opacity-0'}`}>
                {campaignData.event_description}
            </p>

            {media.length > 0 && (
                <>
                    {isVideo(media[activeIndex]) ? (
                        <video
                            src={media[activeIndex]}
                            controls
                            className={`w-full h-96 object-cover rounded-xl mb-6 ${isInView ? 'animate-zoom-in' : 'opacity-0'}`}
                        />
                    ) : (
                        <img
                            src={media[activeIndex]}
                            alt={`Media ${activeIndex + 1}`}
                            className={`w-full h-96 object-cover rounded-xl mb-6 ${isInView ? 'animate-zoom-in' : 'opacity-0'}`}
                        />
                    )}
                </>
            )}

            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
            >
                <CarouselContent className="flex">
                    {media.map((item, index) => (
                        <CarouselItem className={`basis-1/2 sm:basis-1/3 h-48 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} key={index}>
                            {isVideo(item) ? (
                                <video src={item} className="w-full h-full object-cover rounded-xl" muted loop />
                            ) : (
                                <img src={item} alt={`Media ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="bg-background text-white p-2 rounded-full"
                    onClickCapture={() => setActiveIndex((activeIndex - 1 + media.length) % media.length)}
                />
                <CarouselNext
                    className="bg-gray-800 text-white p-2 rounded-full"
                    onClickCapture={() => setActiveIndex((activeIndex + 1) % media.length)}
                />
            </Carousel>

            <h2 className={`text-xl md:text-2xl font-bold text-typography mt-8 mb-4 ${isInView ? 'animate-slide-in-from-top' : 'opacity-0'}`}>
                {campaignData.event_highlights_title}
            </h2>
            <ul className={`mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
                {campaignData.event_highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-4 bg-primary bg-opacity-10 p-4 rounded-lg shadow-lg">
                        <span className="text-typography font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            {index + 1}
                        </span>
                        <p className="text-sm md:text-lg text-typography-secondary">{highlight}</p>
                    </li>
                ))}
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-typography mt-8 mb-4 ${isInView ? 'animate-slide-in-from-bottom' : 'opacity-0'}`}>
                {campaignData.event_effect_title}
            </h2>
            <ul className={`mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
                {campaignData.event_effects.map((effect, index) => (
                    <li key={index} className="flex items-center gap-4 bg-secondary bg-opacity-10 p-4 rounded-lg shadow-lg">
                        <span className="text-typography font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            {index + 1}
                        </span>
                        <p className="text-sm md:text-lg text-typography-secondary">{effect}</p>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-center">
                <p className="text-base md:text-lg font-semibold text-primary text-center mb-4">{campaignData.event_thanks}</p>
                <p className="text-sm md:text-lg text-secondary text-center">
                    <a href="https://www.instagram.com/twmp.foundation/" target="_blank" rel="noopener noreferrer">
                        {t(`campaigns.event_cta`)}
                    </a>
                </p>
                <a href="/" className="hover:opacity-50 mt-4">
                    <img src="/logo.svg" alt="Logo" className="w-20 md:w-32" />
                </a>
            </div>
        </div>
    );
};

export default ObjectPage;
