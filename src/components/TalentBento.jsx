import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { BrainCircuit, Database, ShieldCheck, LineChart, Zap, Globe, Fingerprint } from 'lucide-react';

const bentoItems = [
    {
        title: "The Daily Brief",
        description: "Your 5-minute pre-market edge. Delivered at 8:00 AM, widely read by top fund managers.",
        icon: Globe,
        className: "col-span-2 row-span-2",
        color: "text-brand-orange",
        shimmer: true
    },
    {
        title: "Agentic AI Browser",
        description: "Autonomous agents that track macro trends and regime shifts.",
        icon: BrainCircuit,
        className: "col-span-1 row-span-1",
        color: "text-slate-900"
    },
    {
        title: "LLM Reasoning",
        description: "Transformer-based narrative synthesis connecting global signals to Indian equities.",
        icon: Database,
        className: "col-span-1 row-span-2",
        color: "text-brand-orange"
    },
    {
        title: "Full Equity Research",
        description: "Phase 2 expansion into long-term, data-backed company analysis.",
        icon: LineChart,
        className: "col-span-1 row-span-1",
        color: "text-slate-900"
    },
    {
        title: "Personalized AI",
        description: "An assistant that adapts to your research style and depth.",
        icon: Fingerprint,
        className: "col-span-1 row-span-1",
        color: "text-brand-orange"
    },
    {
        title: "Institutional Depth",
        description: "Hedge-fund-style macro insight without information overload.",
        icon: ShieldCheck,
        className: "col-span-2 row-span-1",
        color: "text-slate-900",
        shimmer: true
    }
];

const TalentBento = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section id="features" className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-4 md:mb-6 text-slate-900 leading-tight">
                            Platform <span className="text-fade">Expansion.</span>
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-semibold">
                            From daily pre-market intelligence to a full AI-powered equity research platform.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-1 md:gap-8 auto-rows-[110px] sm:auto-rows-[240px] relative group/grid" onMouseMove={handleMouseMove}>
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{
                                gridColumn: item.className.includes('col-span-2') ? 'span 2 / span 2' : 'span 1 / span 1',
                                gridRow: item.className.includes('row-span-2') ? 'span 2 / span 2' : 'span 1 / span 1'
                            }}
                            className={`glass-card rounded-[12px] md:rounded-[56px] p-2 md:p-14 flex flex-col justify-between group overflow-hidden relative cursor-default ${item.shimmer ? 'shimmer' : ''}`}
                        >

                            <motion.div
                                className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                                style={{
                                    background: useMotionTemplate`
                                            radial-gradient(
                                                600px circle at ${mouseX}px ${mouseY}px,
                                                rgba(255, 159, 67, 0.15),
                                                transparent 80%
                                            )
                                    `,
                                }}
                            />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className={`w-7 h-7 md:w-16 md:h-16 rounded-lg bg-black/5 flex items-center justify-center ${item.color} group-hover:bg-brand-orange group-hover:text-white transition-all duration-500`}>
                                    <item.icon size={14} className="md:w-6 md:h-6" />
                                </div>
                                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Zap size={22} className="text-brand-orange" />
                                </div>
                            </div>
                            <div className="relative z-10 text-left">
                                <h3 className="text-[9px] md:text-2xl font-serif mb-0.5 md:mb-3 transition-all duration-500 text-slate-900 tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                                    {item.title}
                                </h3>
                                <p className="text-slate-800 font-semibold leading-[1.1] text-[6.5px] md:text-sm line-clamp-3 md:line-clamp-none">
                                    {item.description}
                                </p>
                            </div>


                            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <item.icon size={140} className="md:w-[200px] md:h-[200px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentBento;
