import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const featureList = [
    {
        title: "Millisecond Execution",
        desc: "High-frequency gateway to 100+ global exchanges.",
        icon: Zap,
        color: "text-brand-periwinkle"
    },
    {
        title: "ML-Native Alpha",
        desc: "Proprietary models finding structural edges in noise.",
        icon: Target,
        color: "text-brand-lavender"
    },
    {
        title: "Risk Orchestration",
        desc: "Dynamic hedging and cross-asset factor exposure labs.",
        icon: Shield,
        color: "text-emerald-400"
    }
];

const TalentFeatures = () => {
    return (
        <section className="py-12 sm:py-16 bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {featureList.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 glass rounded-2xl md:rounded-[40px] border border-white/5 hover:border-brand-periwinkle/30 transition-all group"
                        >
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center ${f.color} mb-6 md:mb-8 group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500`}>
                                <f.icon size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h4 className="text-white font-beautique text-lg md:text-xl mb-2 md:mb-3 tracking-tight group-hover:brand-highlight transition-all">{f.title}</h4>
                            <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentFeatures;
