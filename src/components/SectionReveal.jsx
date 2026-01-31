import React from 'react';
import { motion } from 'framer-motion';

const SectionReveal = ({ children, type = 'slide-up', delay = 0 }) => {
    const variants = {
        'slide-up': {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
        },
        'slide-left': {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
        },
        'slide-right': {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
        },
        'flip': {
            initial: { opacity: 0, rotateX: -90, scale: 0.9 },
            animate: { opacity: 1, rotateX: 0, scale: 1 },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay }
        },
        'scale': {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay }
        }
    };

    const activeVariant = variants[type] || variants['slide-up'];

    return (
        <motion.div
            initial={activeVariant.initial}
            whileInView={activeVariant.animate}
            viewport={{ once: true, margin: "-5%" }}
            transition={activeVariant.transition}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
