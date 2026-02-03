import { motion } from 'framer-motion';

export default function TalentFlowingBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary Orbiting Glow */}
            <motion.div
                className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 159, 67, 0.08) 0%, rgba(255, 159, 67, 0.01) 50%, rgba(0, 0, 0, 0) 70%)',
                    top: '20%',
                    left: '20%',
                    transform: 'translate3d(0,0,0)',
                    willChange: 'transform',
                }}
                animate={{
                    x: [0, 50, -25, 0],
                    y: [0, -50, 25, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Drifting Particles - Reduced to 3 for better performance */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white opacity-10"
                    style={{
                        width: '3px',
                        height: '3px',
                        top: (20 + i * 25) + '%',
                        left: (20 + i * 25) + '%',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                        transform: 'translate3d(0,0,0)',
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 15 + i * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                    }}
                />
            ))}
        </div>
    );
}
