import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, BarChart3 } from 'lucide-react';
import DashboardMockup from '../assets/dashboard-mockup.png';

const features = [
    {
        title: "Model Integrity",
        desc: "Rigorous backtesting and validation across all market regimes.",
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
        title: "Precision Alpha",
        desc: "Identifying structural inefficiencies with machine learning.",
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
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 md:mb-8 leading-tight text-slate-900 text-left">
                            We Are <br />
                            <span className="text-fade">AI Investors.</span>
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-semibold mb-8 md:mb-10 max-w-xl leading-relaxed text-left">
                            We don't just analyse the market; we compute it. AI4INVEST uses institutional-grade machine learning to generate the same reports that hedge funds use, now available for you.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                            {features.map((feature, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black/5 flex items-center justify-center ${feature.color} mb-5 md:mb-6 border border-black/5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500`}>
                                        <feature.icon size={22} />
                                    </div>
                                    <h4 className="text-slate-900 font-serif text-lg md:text-xl mb-1.5 md:mb-2 tracking-tight group-hover:text-fade transition-all duration-300">{feature.title}</h4>
                                    <p className="text-slate-800 text-[12px] md:text-sm font-semibold leading-relaxed">{feature.desc}</p>
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
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent blur-[50px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                            <img
                                src={DashboardMockup}
                                alt="AI4INVEST Platform Interface"
                                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TalentAbout;
