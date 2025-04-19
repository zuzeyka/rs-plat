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
            const imagesArray = Array.from({ length: imageCount }, (_, index) => `${basePath}${index}.png`);
            const videosArray = Array.from({ length: videoCount }, (_, index) => `${basePath}video${index}.mp4`);
            setMedia([...imagesArray, ...videosArray]);
        };

        importMedia();
    }, [campaignId, t]);

    return (
        <div ref={ref} className={`max-w-4xl mx-auto p-4 md:p-6 bg-background rounded-lg shadow-md ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            {media.length > 0 && (
                <>
                    {isVideo(media[activeIndex]) ? (
                        <video
                            src={media[activeIndex]}
                            controls
                            className={`w-full h-96 z-10 relative object-cover rounded-xl mb-6 ${isInView ? 'animate-zoom-in' : 'opacity-0'}`}
                        />
                    ) : (
                        <img
                            src={media[activeIndex]}
                            alt={`Media ${activeIndex + 1}`}
                            className={`w-full h-96 z-10 relative object-cover rounded-xl mb-6 ${isInView ? 'animate-zoom-in' : 'opacity-0'}`}
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
        </div>
    );
};

export default ObjectPage;
