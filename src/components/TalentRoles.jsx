import React from 'react';
import { motion } from 'framer-motion';
import { Target, BrainCircuit, Rocket, Lock, Milestone } from 'lucide-react';

const roadmapSteps = [
    {
        phase: "PHASE 1 (LIVE)",
        title: "Pre-Market Intelligence",
        desc: "Daily actionable reports for NIFTY, BANK NIFTY, and FINNIFTY. Delivered at 8:00 AM IST.",
        icon: Target,
        features: ["Market Sentiment", "Key Levels", "Global Cues"],
        color: "bg-brand-orange"
    },
    {
        phase: "PHASE 2 (Q3 2026)",
        title: "Agentic Research Core",
        desc: "Autonomous AI agents performing deep-dive fundamental and macro research on demand.",
        icon: BrainCircuit,
        features: ["Live Data Scanning", "Custom Queries", "Macro Correlation"],
        color: "bg-slate-900"
    },
    {
        phase: "PHASE 3 (2027)",
        title: "Institutional API",
        desc: "Direct feed integration for HFT desks and quantitative family offices.",
        icon: Lock,
        features: ["Low Latency", "Raw Alpha Factors", "White Labeling"],
        color: "bg-slate-900"
    }
];

const TalentRoles = () => {
    return (
        <section id="roadmap" className="section-py bg-transparent relative overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-2 md:mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-[6.5px] md:text-[9px] font-bold uppercase tracking-widest mb-2 md:mb-6">
                        <Milestone size={10} />
                        <span>Strategic Vision</span>
                    </div>
                    <h2 className="text-fluid-h2 font-serif tracking-tight mb-1.5 md:mb-6 text-slate-900 leading-tight">
                        The Road to <br />
                        <span className="text-fade decoration-brand-orange/50 underline underline-offset-4 md:underline-offset-8">Autonomous Finance.</span>
                    </h2>
                    <p className="text-slate-800 text-[8px] md:text-base font-semibold leading-none max-w-xl mx-auto italic">
                        We are building the operating system for the next generation of quantitative investors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-1 md:gap-8 relative pt-2">
                    {/* Connecting Line */}
                    <div className="absolute top-[20px] md:top-[50px] left-0 w-full h-[0.5px] md:h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent -z-10" />

                    {/* NOW Indicator Dot on Line */}
                    <div className="absolute top-[20px] md:top-[50px] left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                        <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 md:w-3 md:h-3 bg-brand-orange rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,159,67,0.5)]"
                        />
                        <span className="absolute -top-3 md:-top-6 text-[4px] md:text-[8px] font-bold text-brand-orange uppercase tracking-wider bg-white/50 backdrop-blur-[2px] px-1 rounded-sm">NOW</span>
                    </div>

                    {roadmapSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Transitioned from NOW badge on icon to line indicator */}
                                <div className={`w-9 h-9 md:w-24 md:h-24 rounded-lg md:rounded-2xl ${i === 0 ? 'glass-card border-brand-orange/30 shadow-[0_0_15px_rgba(255,159,67,0.15)]' : 'glass-card'} flex items-center justify-center mb-2 md:mb-8 relative z-10 transition-transform duration-500`}>
                                    <step.icon size={15} className={i === 0 ? 'text-brand-orange md:w-8 md:h-8' : 'text-slate-700 md:w-8 md:h-8'} />
                                </div>


                                <div className="glass-card p-2 rounded-lg md:p-10 rounded-xl md:rounded-[40px] w-full min-h-[100px] md:min-h-320px flex flex-col items-center hover:bg-white transition-all group-hover:border-brand-orange/30">
                                    <span className={`text-[6px] md:text-[12px] font-bold uppercase tracking-wider md:tracking-[0.3em] mb-1 md:mb-6 ${i === 0 ? 'text-brand-orange' : 'text-slate-400'}`}>
                                        {step.phase}
                                    </span>
                                    <h3 className="text-[8.5px] md:text-2xl font-serif text-slate-900 mb-1 md:mb-6 leading-none">{step.title}</h3>
                                    <p className="text-slate-600 text-[6.5px] md:text-sm font-medium leading-[1.3] mb-4 px-2 max-w-[280px]">
                                        {step.desc}
                                    </p>

                                    <div className="mt-auto flex flex-wrap justify-center gap-1">
                                        {step.features.map((feat, j) => (
                                            <span key={j} className="px-1.5 py-0.5 rounded-sm bg-black/5 text-[5px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentRoles;
