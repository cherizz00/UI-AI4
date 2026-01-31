import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, BarChart3 } from 'lucide-react';
import DashboardMockup from '../assets/dashboard-mockup.png';

const features = [
    {
        title: "Models Trained",
        desc: "15,000+ proprietary neural networks optimized for NSE dynamics.",
        icon: Shield,
        color: "text-brand-orange"
    },
    {
        title: "Execution Edge",
        desc: "Proprietary execution algorithms minimizing market impact.",
        icon: Zap,
        color: "text-slate-900"
    },
    {
        title: "Parameters Trained",
        desc: "2.4 Billion parameters synthesized across global macro data.",
        icon: Target,
        color: "text-brand-orange"
    },
    {
        title: "Risk Control",
        desc: "Dynamic, real-time risk management and factor exposure hedging.",
        icon: BarChart3,
        color: "text-slate-900"
    }
];

const TalentAbout = () => {
    return (
        <section id="about" className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-2 md:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-black/5 text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-12 self-start">
                            <Shield size={12} className="text-brand-orange" />
                            <span>Institutional Foundations</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 text-left">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-default p-4 md:p-10 glass-card rounded-2xl md:rounded-[40px] flex flex-col min-h-[140px] md:min-h-[280px]"
                                >
                                    <div className={`w-10 h-10 md:w-20 md:h-20 rounded-xl bg-black/5 flex items-center justify-center ${feature.color} mb-3 md:mb-8 border border-black/5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0`}>
                                        <feature.icon size={20} className="md:w-10 md:h-10" />
                                    </div>
                                    <h4 className="text-slate-900 font-serif text-sm md:text-2xl mb-1.5 md:mb-4 tracking-tight leading-none italic">{feature.title}</h4>
                                    <p className="text-slate-800 font-serif text-[10px] md:text-lg font-medium leading-[1.3] mt-auto opacity-90">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent blur-[30px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                            <img
                                src={DashboardMockup}
                                alt="AI4INVEST Platform Interface"
                                className="relative z-10 w-full h-auto rounded-xl md:rounded-3xl shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TalentAbout;
