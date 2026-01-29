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
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 md:mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-[9px] font-bold uppercase tracking-widest mb-6">
                        <Milestone size={12} />
                        <span>Strategic Vision</span>
                    </div>
                    <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 text-slate-900">
                        The Road to <br />
                        <span className="text-fade decoration-brand-orange/50 underline underline-offset-8">Autonomous Finance.</span>
                    </h2>
                    <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed max-w-xl mx-auto">
                        We are building the operating system for the next generation of quantitative investors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent -z-10" />

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

                                <div className={`w-24 h-24 rounded-3xl ${i === 0 ? 'glass-card border-brand-orange/30 shadow-[0_0_30px_rgba(255,159,67,0.2)]' : 'glass-card'} flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110`}>
                                    <step.icon size={32} className={i === 0 ? 'text-brand-orange' : 'text-slate-700'} />
                                    {i === 0 && (
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg animate-bounce">
                                            NOW
                                        </div>
                                    )}
                                </div>


                                <div className="glass-card p-8 rounded-3xl w-full min-h-[280px] flex flex-col items-center hover:bg-white transition-colors">
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${i === 0 ? 'text-brand-orange' : 'text-slate-400'}`}>
                                        {step.phase}
                                    </span>
                                    <h3 className="text-xl font-serif text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-slate-600 text-xs font-medium leading-relaxed mb-6">
                                        {step.desc}
                                    </p>

                                    <div className="mt-auto flex flex-wrap justify-center gap-2">
                                        {step.features.map((feat, j) => (
                                            <span key={j} className="px-2 py-1 rounded bg-black/5 text-[9px] font-bold text-slate-600 uppercase tracking-wide">
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
