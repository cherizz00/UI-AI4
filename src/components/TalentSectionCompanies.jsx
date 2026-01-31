import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import RiskDashboard from '../assets/risk-dashboard.png';

const items = [
    { title: "Institutional Nodes", desc: "Access the world's most aggressive liquidity pools.", icon: Globe2 },
    { title: "Risk Safeguards", desc: "Enterprise-grade hedging and exposure monitoring.", icon: ShieldCheck }
];

const TalentSectionCompanies = () => {
    return (
        <section className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-row gap-2 md:gap-24 items-center">
                    <div className="w-1/2 lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-fluid-h2 font-serif tracking-tight mb-2 md:mb-8 leading-tight text-left text-slate-900">
                                For <br />
                                <span className="brand-highlight">Giants.</span>
                            </h2>
                            <p className="text-slate-800 text-[6.5px] md:text-base font-semibold mb-3 md:mb-10 text-left leading-tight italic px-1">
                                Deploy bespoke AI strategy layers that integrate directly into your existing stack.
                            </p>

                            <div className="space-y-1.5 md:space-y-6">
                                {items.map((item, i) => (
                                    <div key={i} className="flex gap-1.5 md:gap-5 items-start group">
                                        <div className="w-5 h-5 md:w-11 md:h-11 rounded-lg glass-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0">
                                            <item.icon size={10} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-black font-serif text-[7.5px] md:text-base mb-0 tracking-tight leading-none">{item.title}</h4>
                                            <p className="text-slate-500 text-[5px] md:text-xs font-light leading-none">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-1/2 relative">
                        <div className="glass-card p-1.5 rounded-xl md:rounded-[48px] relative overflow-hidden group shadow-2xl skew-y-3 transform lg:translate-x-12 transition-all duration-700 hover:skew-y-0 hover:translate-x-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src={RiskDashboard}
                                alt="Risk Management Interface"
                                className="w-full h-auto rounded-lg md:rounded-[40px] shadow-inner border border-white/50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentSectionCompanies;
