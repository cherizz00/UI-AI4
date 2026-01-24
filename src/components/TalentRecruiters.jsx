import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Star, Shield, Zap } from 'lucide-react';

const recruiters = [
    {
        name: "Institutional Alpha Labs",
        type: "Hedge Fund",
        rating: 4.9,
        icon: Shield
    },
    {
        name: "Global Pattern Labs",
        type: "Prop Shop",
        rating: 4.8,
        icon: Zap
    }
];

const TalentRecruiters = () => {
    return (
        <section className="py-16 sm:py-24 bg-transparent">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6">
                            Elite <span className="brand-highlight text-3xl sm:text-4xl">Ecosystem.</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base font-light opacity-70">
                            Partner with the world's most aggressive capital managers.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {recruiters.map((rec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[40px] border border-white/5 hover:border-brand-periwinkle/30 transition-all group flex items-start gap-5 sm:gap-6 md:gap-8"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-brand-lavender group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500 shrink-0">
                                <rec.icon size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg md:text-xl font-beautique text-white mb-1.5 md:mb-2 tracking-tight">{rec.name}</h4>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{rec.type}</span>
                                    <div className="flex items-center gap-1 text-[#f59e0b]">
                                        <Star size={10} className="fill-current" />
                                        <span className="text-xs font-bold">{rec.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentRecruiters;
