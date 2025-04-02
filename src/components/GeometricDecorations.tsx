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
                        className={'absolute left-0 z-0 w-full h-1 origin-left bg-' + color}
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
                        className={'absolute top-0 z-0 w-1 h-full origin-top bg-' + secondaryColor}
                        style={{ left: `${leftPos}%` }}
                    />
                );
            })}

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
                        className={'absolute text-3xl z-0 font-bold text-' + color}
                        style={{ top: `${topPos}%`, left: `${leftPos}%` }}
                    >
                        +
                    </motion.div>
                );
            })}
        </div>
    );
};

export default GeometricDecorations;
