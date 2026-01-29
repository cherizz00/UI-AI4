import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, Target } from 'lucide-react';
import AlgoStrategy from '../assets/algo-strategy.png';

const items = [
    { title: "Direct Partnership", desc: "Engage with funds looking for high-capacity strategies.", icon: UserCheck },
    { title: "Capital Injection", desc: "Scale from proof-of-concept to institutional mandate.", icon: Zap }
];

const TalentSectionTalent = () => {
    return (
        <section className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 md:mb-8 leading-tight text-left text-slate-900">
                                For <br />
                                <span className="text-fade">Quant Artisans.</span>
                            </h2>
                            <p className="text-slate-800 text-sm md:text-base font-semibold mb-8 md:mb-10 text-left leading-relaxed">
                                Stop fighting for scraps at retail platforms. Connect with the infrastructure that empowers your models to operate at institutional scale.
                            </p>

                            <div className="space-y-6">
                                {items.map((item, i) => (
                                    <div key={i} className="flex gap-4 md:gap-5 items-start group text-left">
                                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl glass-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-slate-900 font-serif text-sm md:text-base mb-1 tracking-tight group-hover:text-brand-orange transition-colors">{item.title}</h4>
                                            <p className="text-slate-600 text-[11px] md:text-xs font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative hidden sm:block">
                        <div className="glass-card p-3 rounded-[32px] md:rounded-[48px] relative overflow-hidden group shadow-2xl skew-y-[-3deg] transform lg:-translate-x-12 transition-all duration-700 hover:skew-y-0 hover:translate-x-0">
                            <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src={AlgoStrategy}
                                alt="Algorithmic Strategy Builder"
                                className="w-full h-auto rounded-[24px] md:rounded-[40px] shadow-inner border border-white/50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentSectionTalent;
