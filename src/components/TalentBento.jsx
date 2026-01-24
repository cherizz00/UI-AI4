import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { BrainCircuit, Database, ShieldCheck, LineChart, Zap, Globe, Fingerprint } from 'lucide-react';

const bentoItems = [
    {
        title: "Model Intelligence",
        description: "Proprietary LLMs trained on decades of high-frequency tick data and institutional research.",
        icon: BrainCircuit,
        className: "md:col-span-2 md:row-span-2",
        color: "text-brand-periwinkle",
        shimmer: true
    },
    {
        title: "Liquidity Models",
        description: "Analyze market microstructure to find hidden liquidity and execute with zero slippage.",
        icon: Database,
        className: "md:col-span-1 md:row-span-1",
        color: "text-brand-lavender"
    },
    {
        title: "Alpha Signals",
        description: "High-conviction trading signals generated through a combination of ML and quant frameworks.",
        icon: LineChart,
        className: "md:col-span-1 md:row-span-2",
        color: "text-orange-400"
    },
    {
        title: "Risk Guard",
        description: "Real-time hedging and exposure monitoring across all global asset classes.",
        icon: ShieldCheck,
        className: "md:col-span-1 md:row-span-1",
        color: "text-emerald-400"
    },
    {
        title: "Deep Sentiment",
        description: "NLP engines processing millions of news feeds and social signals in real-time.",
        icon: Fingerprint,
        className: "md:col-span-1 md:row-span-1",
        color: "text-pink-400"
    },
    {
        title: "Global Execution",
        description: "High-bandwidth gateway to 100+ global exchanges with nanosecond latency.",
        icon: Globe,
        className: "md:col-span-2 md:row-span-1",
        color: "text-brand-periwinkle",
        shimmer: true
    }
];

const TalentBento = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section id="features" className="py-16 sm:py-24 bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6">
                            Intelligence, <span className="brand-highlight text-3xl sm:text-4xl">unbound.</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base font-light opacity-70">
                            The same frameworks used by the world's most elite hedge funds, now available for your capital.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[180px] sm:auto-rows-[220px] relative group/grid" onMouseMove={handleMouseMove}>
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`glass border border-white/10 rounded-2xl md:rounded-[32px] p-6 md:p-9 flex flex-col justify-between group overflow-hidden relative border-glow cursor-default ${item.className} ${item.shimmer ? 'shimmer' : ''}`}
                        >
                            {/* Spotlight Effect */}
                            <motion.div
                                className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                                style={{
                                    background: useMotionTemplate`
                                        radial-gradient(
                                            600px circle at ${mouseX}px ${mouseY}px,
                                            rgba(216, 165, 255, 0.1),
                                            transparent 80%
                                        )
                                    `,
                                }}
                            />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500`}>
                                    <item.icon size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Zap size={18} className="text-brand-lavender" />
                                </div>
                            </div>
                            <div className="relative z-10 text-left">
                                <h3 className="text-base md:text-lg font-beautique mb-2 group-hover:brand-highlight transition-all tracking-tight transition-all duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed max-w-[260px] text-[11px] md:text-xs opacity-80">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                <item.icon size={120} className="md:w-[150px] md:h-[150px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentBento;
