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
            <div className="container max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 gap-2 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-2 md:mb-8 leading-tight text-slate-900 text-left">
                            We Are <br />
                            <span className="text-fade">AI Investors.</span>
                        </h2>
                        <p className="text-slate-800 text-[6.5px] md:text-base font-semibold mb-4 md:mb-10 max-w-xl leading-tight text-left italic px-1">
                            We compute the market. Institutional-grade ML reports, now available for you.
                        </p>

                        <div className="grid grid-cols-2 gap-1.5 md:gap-4 text-left">
                            {features.map((feature, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className={`w-5 h-5 md:w-14 md:h-14 rounded-md bg-black/5 flex items-center justify-center ${feature.color} mb-1.5 md:mb-6 border border-black/5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500`}>
                                        <feature.icon size={10} />
                                    </div>
                                    <h4 className="text-slate-900 font-serif text-[7px] md:text-xl mb-0.5 md:mb-2 tracking-tight leading-none">{feature.title}</h4>
                                    <p className="text-slate-800 text-[5px] md:text-sm font-semibold leading-none">{feature.desc}</p>
                                </div>
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
