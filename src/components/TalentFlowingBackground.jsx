import { motion } from 'framer-motion';

export default function TalentFlowingBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary Orbiting Glow */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 159, 67, 0.08) 0%, rgba(255, 159, 67, 0.01) 50%, rgba(0, 0, 0, 0) 70%)',
                    top: '20%',
                    left: '20%',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -100, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Secondary Floating Glow */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 159, 67, 0.05) 0%, rgba(255, 159, 67, 0.01) 50%, rgba(0, 0, 0, 0) 70%)',
                    bottom: '10%',
                    right: '10%',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
                animate={{
                    x: [0, -150, 50, 0],
                    y: [0, 80, -40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Drifting Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white opacity-20"
                    style={{
                        width: Math.random() * 4 + 1 + 'px',
                        height: Math.random() * 4 + 1 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
}
