import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Briefcase, Zap } from 'lucide-react';

const steps = [
    {
        title: "Identify Talent",
        desc: "We scan global quantitative talent pools using deep behavioral signals.",
        icon: Search
    },
    {
        title: "Verify Edge",
        desc: "Rigorous testing of strategy robustness and risk management skills.",
        icon: Zap
    },
    {
        title: "Partner & Deploy",
        desc: "Deploy capital with low latency and institutional-grade risk controls.",
        icon: Briefcase
    }
];

const TalentHiring = () => {
    return (
        <section className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6 leading-tight">
                            The Search for <br />
                            <span className="brand-highlight text-3xl sm:text-4xl">Extraordinary Alpha.</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base font-light mb-10 max-w-xl opacity-70">
                            We don't just hire quants; we partner with mathematical artisans who can find signal where the world sees noise.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 md:gap-5 items-start group">
                                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center text-brand-lavender border border-white/5 group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500 shrink-0">
                                        <step.icon size={18} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-beautique text-sm md:text-base mb-1 tracking-tight group-hover:text-brand-periwinkle transition-colors">{step.title}</h4>
                                        <p className="text-slate-500 text-[11px] md:text-xs font-light">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative w-full">
                        <div className="glass p-8 md:p-10 rounded-2xl md:rounded-[40px] border border-white/10 relative overflow-hidden group">
                            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-periwinkle flex items-center justify-center text-white">
                                    <Users size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1">Active Quant Search</p>
                                    <h3 className="text-xl md:text-2xl font-beautique text-white">42 Nodes Online</h3>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-1 md:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${60 + (i * 10)}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.2 }}
                                            className="h-full bg-brand-lavender/40"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="absolute -bottom-16 -left-16 w-56 h-56 md:w-64 md:h-64 bg-brand-periwinkle/10 blur-[80px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentHiring;
