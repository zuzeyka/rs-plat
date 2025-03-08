import { motion } from 'framer-motion';

interface DecorativeElementsProps {
    orientation: 'horizontal' | 'vertical';
}

const DecorativeElements: React.FC<DecorativeElementsProps> = ({ orientation }) => {
    return (
        <div className="absolute w-full h-full inset-0">
            {orientation === 'horizontal' ? (
                <>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 h-2 bg-primary"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -top-5 -right-6 text-5xl text-secondary font-bold"
                    >
                        +
                    </motion.div>
                </>
            ) : (
                <>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 w-2 bg-primary"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-4 -left-3 text-5xl text-secondary font-bold"
                    >
                        +
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default DecorativeElements;
