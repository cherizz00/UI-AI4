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
    // Assuming dashboardMockup is imported or defined elsewhere if it's a real image source.
    // For this change, we'll assume it's a placeholder for the image source.
    const dashboardMockup = "https://via.placeholder.com/400x200?text=Dashboard+Mockup";

    return (
        <section className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10">
                    {featureList.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-1.5 md:p-14 glass-card rounded-lg md:rounded-[48px] group relative overflow-hidden min-h-[100px] md:min-h-[400px] flex flex-col"
                        >
                            {/* The image is added here as per the instruction */}
                            <img
                                src={dashboardMockup}
                                alt="AI Intelligence Dashboard"
                                className="w-full h-auto rounded-xl md:rounded-3xl shadow-2xl border border-black/5 mb-4"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className={`w-7 h-7 md:w-16 md:h-16 rounded-lg bg-black/[0.03] flex items-center justify-center ${f.color} mb-1.5 md:mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0`}>
                                <f.icon size={12} className="md:w-7 md:h-7" />
                            </div>
                            <h4 className="text-slate-900 font-serif text-lg md:text-3xl mb-1 md:mb-4 tracking-tight transition-all duration-500 line-clamp-1 h-[1.2em]">{f.title}</h4>
                            <p className="text-slate-600 text-xs md:text-base font-medium leading-tight opacity-80 line-clamp-3 mt-auto">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentFeatures;
