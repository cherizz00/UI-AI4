import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, Target } from 'lucide-react';

const items = [
    { title: "Direct Partnership", desc: "Engage with funds looking for high-capacity strategies.", icon: UserCheck },
    { title: "Capital Injection", desc: "Scale from proof-of-concept to institutional mandate.", icon: Zap }
];

const TalentSectionTalent = () => {
    return (
        <section className="py-16 sm:py-24 bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6 leading-tight">
                                For <br />
                                <span className="brand-highlight text-3xl sm:text-4xl">Quant Artisans.</span>
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base font-light mb-8 md:mb-10 opacity-70 leading-relaxed">
                                Stop fighting for scraps at retail platforms. Connect with the infrastructure that empowers your models to operate at institutional scale.
                            </p>

                            <div className="space-y-6">
                                {items.map((item, i) => (
                                    <div key={i} className="flex gap-4 md:gap-5 items-start group text-left">
                                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center text-brand-lavender border border-white/5 group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500 shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-white font-beautique text-sm md:text-base mb-1 tracking-tight group-hover:text-brand-periwinkle transition-colors">{item.title}</h4>
                                            <p className="text-slate-500 text-[11px] md:text-xs font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative hidden sm:block">
                        <div className="glass p-12 md:p-16 rounded-[32px] md:rounded-[48px] border border-white/10 relative overflow-hidden group">
                            <div className="relative z-10 w-full aspect-square border border-white/10 rounded-full flex items-center justify-center">
                                <div className="w-3/4 h-3/4 border border-brand-lavender/20 rounded-full flex items-center justify-center animate-spin-slow-reverse">
                                    <div className="w-1/2 h-1/2 bg-brand-lavender/10 blur-[40px] md:blur-[50px] rounded-full" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Target size={80} className="md:w-[100px] md:h-[100px] text-brand-periwinkle opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentSectionTalent;
