import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TalentBackground = ({ children }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Generate stars only once
    const stars = useMemo(() => {
        return [...Array(80)].map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5
        }));
    }, []);

    return (
        <div className="relative min-h-screen bg-base-black overflow-hidden selection:bg-brand-periwinkle/30">
            {/* Base Grain/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

            {/* Aurora Glows - Centered Bottom */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] aurora-glow opacity-40 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[40%] bg-brand-lavender/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Moving Beam */}
            <div className="absolute inset-0 opacity-20">
                <div className="beam left-[20%] --delay:0s" />
                <div className="beam left-[60%] --delay:5s" />
            </div>

            {/* Static Grid (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Reactive Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-40 z-0"
                style={{
                    background: useSpring(
                        `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(216, 165, 255, 0.08), transparent 80%)`,
                        { damping: 50, stiffness: 200 }
                    )
                }}
            />

            {/* Twinkling Starfield */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            width: star.size,
                            height: star.size,
                            top: star.top,
                            left: star.left,
                            '--duration': `${star.duration}s`,
                            '--delay': `${star.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Content Overflow */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default TalentBackground;
