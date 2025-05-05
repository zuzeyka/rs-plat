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
            const imageCount = Number(t(`objects.${campaignId}.image-count`));
            const videoCount = Number(t(`objects.${campaignId}.video-count`, { defaultValue: 0 }));

            const basePath = `/objects/${campaignId}/`;
            const imagesArray = Array.from({ length: imageCount }, (_, index) => `${basePath}${index}.jpg`);
            const videosArray = Array.from({ length: videoCount }, (_, index) => `${basePath}video${index}.mp4`);
            setMedia([...imagesArray, ...videosArray]);
        };

        importMedia();
    }, [campaignId, t]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    return (
        <div
            ref={ref}
            className={`w-full h-[90vh] flex flex-col justify-center items-center mx-auto p-8 md:p-12 rounded-lg bg-gray-100 shadow-lg transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
            {media.length > 0 && (
                <>
                    {isVideo(media[activeIndex]) ? (
                        <video src={media[activeIndex]} controls className="w-full h-[60vh] z-10 relative object-cover rounded-xl mb-6" />
                    ) : (
                        <img
                            src={media[activeIndex]}
                            alt={`Media ${activeIndex + 1}`}
                            className="w-full h-[60vh] z-10 relative object-cover rounded-xl mb-6"
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
                <CarouselContent className="flex h-[20vh]">
                    {media.map((item, index) => (
                        <CarouselItem className="basis-1/2 sm:basis-1/3 h-full" key={index}>
                            {isVideo(item) ? (
                                <video src={item} className="w-full h-full object-cover rounded-xl" muted loop />
                            ) : (
                                <img src={item} alt={`Media ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-typography text-white p-2 rounded-full focus:outline-none" onClickCapture={handlePrevious} />
                <CarouselNext className="bg-typography text-white p-2 rounded-full focus:outline-none" onClickCapture={handleNext} />
            </Carousel>
        </div>
    );
};

export default ObjectPage;
