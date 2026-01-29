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
            <div className="container max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 gap-2 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-2 md:mb-8 leading-tight text-left">
                            The Search for <br />
                            <span className="brand-highlight">Elite Alpha.</span>
                        </h2>
                        <p className="text-slate-800 text-[6px] md:text-base font-semibold mb-3 md:mb-10 max-w-xl text-left leading-tight px-1">
                            We partner with mathematical artisans who find signal where the world sees noise.
                        </p>

                        <div className="space-y-1 md:space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-1 md:gap-5 items-start group">
                                    <div className="w-5 h-5 md:w-11 md:h-11 rounded-md glass-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0">
                                        <step.icon size={8} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-black font-serif text-[7.5px] md:text-base mb-0 tracking-tight leading-none">{step.title}</h4>
                                        <p className="text-slate-500 text-[5px] md:text-xs font-light leading-none">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative w-full">
                        <div className="glass-card p-1 rounded-xl md:rounded-[48px] relative overflow-hidden group shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src={TalentNetwork}
                                alt="Global Quantitative Talent Network"
                                className="w-full h-auto rounded-lg md:rounded-[40px] shadow-inner border border-white/50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentHiring;
