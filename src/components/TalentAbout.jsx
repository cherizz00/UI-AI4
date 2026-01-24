import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, BarChart3 } from 'lucide-react';

const features = [
    {
        title: "Model Integrity",
        desc: "Rigorous backtesting and validation across all market regimes.",
        icon: Shield,
        color: "text-brand-periwinkle"
    },
    {
        title: "Execution Edge",
        desc: "Proprietary execution algorithms minimizing market impact.",
        icon: Zap,
        color: "text-brand-lavender"
    },
    {
        title: "Precision Alpha",
        desc: "Identifying structural inefficiencies with machine learning.",
        icon: Target,
        color: "text-emerald-400"
    },
    {
        title: "Risk Control",
        desc: "Dynamic, real-time risk management and factor exposure hedging.",
        icon: BarChart3,
        color: "text-pink-400"
    }
];

const TalentAbout = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6 leading-tight">
                            Engineered for <br />
                            <span className="brand-highlight text-3xl sm:text-4xl">Institutional Performance.</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base font-light mb-8 md:mb-10 max-w-xl opacity-70 leading-relaxed">
                            AI4INVEST bridges the gap between raw data and refined alpha. We provide the infrastructure for the next generation of model-driven capital.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            {features.map((feature, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center ${feature.color} mb-4 md:mb-5 border border-white/5 group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500`}>
                                        <feature.icon size={18} />
                                    </div>
                                    <h4 className="text-white font-beautique text-sm md:text-base mb-1 md:mb-1.5 tracking-tight group-hover:brand-highlight transition-all duration-300">{feature.title}</h4>
                                    <p className="text-slate-500 text-[11px] md:text-xs font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden sm:block"
                    >
                        <div className="aspect-square glass rounded-[32px] md:rounded-[48px] border border-white/10 flex items-center justify-center p-12 md:p-16 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-periwinkle/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="relative z-10 w-full h-full border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                                <div className="w-3/4 h-3/4 border border-brand-lavender/20 rounded-full flex items-center justify-center animate-spin-slow-reverse">
                                    <div className="w-1/2 h-1/2 bg-brand-periwinkle/10 blur-[50px] rounded-full" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/10 text-[60px] md:text-[100px] font-thin select-none tracking-tighter">AI.01</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TalentAbout;
