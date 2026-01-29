import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Briefcase, Zap } from 'lucide-react';
import TalentNetwork from '../assets/talent-network.png';

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
        <section className="section-py bg-transparent relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 md:mb-8 leading-tight text-left">
                            The Search for <br />
                            <span className="brand-highlight">Extraordinary Alpha.</span>
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-semibold mb-10 max-w-xl text-left leading-relaxed">
                            We don't just hire quants; we partner with mathematical artisans who can find signal where the world sees noise.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 md:gap-5 items-start group">
                                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl glass-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0">
                                        <step.icon size={18} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-black font-serif text-sm md:text-base mb-1 tracking-tight group-hover:text-brand-orange transition-colors">{step.title}</h4>
                                        <p className="text-slate-500 text-[11px] md:text-xs font-light">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative w-full">
                        <div className="glass-card p-3 rounded-[32px] md:rounded-[48px] relative overflow-hidden group shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src={TalentNetwork}
                                alt="Global Quantitative Talent Network"
                                className="w-full h-auto rounded-[24px] md:rounded-[40px] shadow-inner border border-white/50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentHiring;
