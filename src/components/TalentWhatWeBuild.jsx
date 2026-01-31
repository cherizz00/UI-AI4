import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap, BarChart3, Binary, Layers, Globe2, Activity, Plus } from 'lucide-react';

const frameworks = [
    {
        icon: < Globe2 size={24} />,
        title: "Global Macroeconomics",
        desc: "Deep integration of sovereign data, inflation vectors, and interest rate regimes."
    },
    {
        icon: <Activity size={24} />,
        title: "Microstructure & Derivatives",
        desc: "Analysis of order flow, liquidity dynamics, and volatility surfaces."
    },
    {
        icon: <Layers size={24} />,
        title: "Cross-Asset Correlations",
        desc: "Mapping hidden dependencies across equities, fixed income, and commodities."
    },
    {
        icon: <Zap size={24} />,
        title: "Behavioural & Regime Signals",
        desc: "Real-time detection of market sentiment shifts and structural break-points."
    }
];

const TalentWhatWeBuild = () => {
    return (
        <section className="section-py bg-[#F8F9FA] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

            <div className="container relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6"
                    >
                        <Shield size={12} className="text-brand-orange" />
                        <span className="badge-institutional text-[10px] text-slate-500">Core Architecture</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-fluid-h2 text-black mb-6"
                    >
                        What We Build
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif italic text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
                    >
                        Model-driven financial intelligence engines designed for investing, risk management, and capital allocation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-jakarta font-bold text-slate-900 flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
                            Unified Frameworks
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We develop unified quantitative frameworks that fuse disparate data streams into actionable intelligence:
                        </p>

                        <div className="space-y-6">
                            {frameworks.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                                    className="flex gap-4 group"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-premium border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-orange transition-colors duration-300">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                                        <p className="text-slate-500 text-sm leading-snug">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-12 text-left">
                            <a
                                href="/?page=who-we-are"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-brand-orange transition-colors cursor-pointer uppercase tracking-[0.2em] group decoration-none"
                            >
                                <Plus size={12} className="text-brand-orange group-hover:scale-110 transition-transform" />
                                <span>Read More</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Binary size={120} />
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                                <Cpu size={14} className="text-brand-orange" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">MoE Architecture</span>
                            </div>

                            <h3 className="text-3xl font-jakarta font-bold mb-6 leading-tight">
                                Mixture of Experts <br />
                                <span className="text-slate-400">Framework</span>
                            </h3>

                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                All signals are embedded into a single cohesive modelling stack that is inline with the <strong className="text-white">Mixture of Experts Framework</strong> — a novel architecture designed for specialized financial inference.
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Autonomous Inference Nodes</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TalentWhatWeBuild;
