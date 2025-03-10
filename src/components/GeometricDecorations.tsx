import React from 'react';
import { motion } from 'framer-motion';

interface GeometricDecorationsProps {
    className?: string;
    horizontalCount?: number;
    verticalCount?: number;
    plusCount?: number;
    color: string;
    secondaryColor: string;
}

const GeometricDecorations: React.FC<GeometricDecorationsProps> = ({
    className,
    color,
    secondaryColor = color,
    horizontalCount = 0,
    verticalCount = 0,
    plusCount = 5,
}) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
            {[...Array(horizontalCount)].map((_, i) => {
                const topPos = ((i + 1) / (horizontalCount + 1)) * 100;
                return (
                    <motion.div
                        key={`h-${i}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                        className={'absolute left-0 z-0 w-full h-1 origin-left ' + 'bg-' + color}
                        style={{ top: `${topPos}%` }}
                    />
                );
            })}

            {[...Array(verticalCount)].map((_, i) => {
                const leftPos = ((i + 1) / (verticalCount + 1)) * 100;
                return (
                    <motion.div
                        key={`v-${i}`}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                        className={'absolute top-0 z-0 w-1 h-full origin-top ' + 'bg-' + secondaryColor}
                        style={{ left: `${leftPos}%` }}
                    />
                );
            })}

            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={'absolute bottom-60 z-0 right-60  w-1 h-40 ' + 'bg-' + secondaryColor}
                style={{ transformOrigin: 'bottom right' }}
            />

            {[...Array(plusCount)].map((_, index) => {
                const topPos = Math.random() * 80 + 10;
                const leftPos = Math.random() * 80 + 10;
                return (
                    <motion.div
                        key={`plus-${index}`}
                        animate={{
                            rotate: [0, 15, -15, 0],
                            opacity: [0.7, 1, 0.7, 0.7],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className={'absolute text-3xl z-0 font-bold ' + 'text-' + color}
                        style={{ top: `${topPos}%`, left: `${leftPos}%` }}
                    >
                        +
                    </motion.div>
                );
            })}

            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className={'absolute top-10 right-10 z-0 text-4xl font-bold ' + 'text-' + color}
            >
                +
            </motion.div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={'absolute rounded-full z-0 ' + 'bg-' + secondaryColor}
                style={{
                    width: '40px',
                    height: '40px',
                    top: '20%',
                    left: '80%',
                }}
            />

            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className={'absolute z-0 ' + 'bg-' + secondaryColor}
                style={{
                    width: '50px',
                    height: '50px',
                    top: '70%',
                    left: '10%',
                }}
            />
        </div>
    );
};

export default GeometricDecorations;
