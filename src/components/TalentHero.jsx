import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';
import { ArrowRight, Calendar, Star, Zap, Globe2, Activity } from 'lucide-react';

const logos = [
    "Goldman Sachs", "BlackRock", "JPMorgan", "Citadel", "Bridgewater", "Renaissance"
];

const dataPoints = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    val: (Math.random() * 1000).toFixed(4),
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 10
}));

const TalentHero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouseX.set((clientX / window.innerWidth) - 0.5);
            mouseY.set((clientY / window.innerHeight) - 0.5);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen bg-transparent text-white pt-32 md:pt-40 lg:pt-52 pb-16 overflow-hidden flex flex-col items-center justify-start text-center">
            {/* Precision Background - Data Float */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                {dataPoints.map(p => (
                    <div
                        key={p.id}
                        className="data-float"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    >
                        0x{p.val}
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto px-6">
                {/* Institutional Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
                >
                    <Activity size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mono-data">Real-time Alpha Node Active</span>
                </motion.div>

                {/* Headline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 md:mb-8"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-beautique font-normal tracking-tight leading-[1.1] md:leading-[1.05] max-w-4xl mx-auto italic">
                        No Noise. <br />
                        <span className="brand-highlight underline decoration-white/10 underline-offset-8">Just Numbers.</span>
                    </h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-slate-400 text-sm sm:text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-70"
                >
                    AI4INVEST deploy algorithmic decision engines built on the bedrock of pure data. Pure execution. Absolute alpha.
                </motion.p>

                {/* CTA Buttons - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-20 md:mb-24"
                >
                    <Magnetic>
                        <button className="w-full sm:w-auto bg-white text-black px-10 py-4.5 rounded-xl font-bold transition-all hover:bg-slate-200 cursor-pointer flex items-center justify-center gap-3 group text-sm shadow-2xl">
                            Deploy Node <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Magnetic>
                    <Magnetic>
                        <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4.5 rounded-xl font-bold hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm backdrop-blur-md group">
                            <span className="text-slate-500 group-hover:text-white transition-colors mono-data mr-2">/cmd</span> Reach Experts
                        </button>
                    </Magnetic>
                </motion.div>

                {/* Visual Anchor - Data Dense Mock */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-5xl mx-auto aspect-[21/9] glass rounded-3xl border border-white/5 shadow-3xl relative overflow-hidden group mb-24 md:mb-32"
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                >
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-8 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[9px] mono-data text-slate-500 uppercase tracking-widest">Strategy_Lab_V4.log</span>
                        </div>
                        <div className="flex-1 p-8 grid grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${30 + Math.random() * 60}%` }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }}
                                            className="h-full bg-brand-periwinkle/30"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[8px] mono-data text-slate-600">
                                        <span>SIGNAL_{i}</span>
                                        <span>{(Math.random() * 10).toFixed(2)}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/5 text-[10vw] font-thin select-none tracking-tighter mono-data">0.9998</div>
                    </div>
                </motion.div>
            </div>

            {/* Logo Cloud */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="container border-t border-white/5 pt-16 pb-8"
            >
                <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-10 opacity-20 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-1000 px-6">
                    {logos.map((logo, idx) => (
                        <span key={idx} className="text-sm md:text-base font-bold tracking-tighter text-white select-none cursor-default uppercase flex items-center gap-2 mono-data">
                            {logo}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section >
    );
};

export default TalentHero;
