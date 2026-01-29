import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const featureList = [
    {
        title: "Macro Sentiment",
        desc: "AI-synthesized global macro trends and their direct impact on Indian indices.",
        icon: Target,
        color: "text-brand-orange"
    },
    {
        title: "Volatility Alerts",
        desc: "Early warning signals for VIX spikes and liquidity drying up in key sectors.",
        icon: Zap,
        color: "text-black"
    },
    {
        title: "Sector Rotation",
        desc: "Predictive capital flow analysis identifying the next big sector move before it happens.",
        icon: Shield,
        color: "text-brand-orange"
    }
];

const TalentFeatures = () => {
    return (
        <section className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {featureList.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 md:p-14 glass-card rounded-[48px] group relative overflow-hidden"
                        >
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-black/[0.03] flex items-center justify-center ${f.color} mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-700`}>
                                <f.icon size={24} className="md:w-7 md:h-7" />
                            </div>
                            <h4 className="text-slate-900 font-serif text-2xl md:text-3xl mb-4 tracking-tight transition-all duration-500">{f.title}</h4>
                            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed opacity-80">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentFeatures;
