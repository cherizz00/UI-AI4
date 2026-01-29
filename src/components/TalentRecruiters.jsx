import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Star, Shield, Zap, Target } from 'lucide-react';

const recruiters = [
    {
        name: "Institutional Alpha Labs",
        type: "Hedge Fund",
        icon: Target,
        color: "text-slate-900"
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
        <section className="section-py bg-transparent">
            <div className="container max-w-7xl mx-auto px-4 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-4 md:mb-8 text-slate-900">
                            Elite <span className="text-fade">Ecosystem.</span>
                        </h2>
                        <p className="text-slate-800 text-xs md:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
                            Partner with the world's most aggressive capital managers.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 md:gap-6 max-w-4xl mx-auto">
                    {recruiters.map((rec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-1 md:p-10 rounded-lg sm:rounded-[40px] transition-all group flex items-start gap-1.5 md:gap-8"
                        >
                            <div className="w-7 h-7 md:w-16 md:h-16 rounded-md md:rounded-2xl glass-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shrink-0">
                                <rec.icon size={12} className="md:w-8 md:h-8" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-[9px] md:text-xl font-serif text-slate-900 mb-0.5 md:mb-2 tracking-tight leading-none">{rec.name}</h4>
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <span className="text-slate-500 text-[6px] md:text-[10px] font-bold uppercase tracking-widest leading-none">{rec.type}</span>
                                    <div className="flex items-center gap-0.5 text-brand-orange">
                                        <Star size={7} className="fill-current" />
                                        <span className="text-[7.5px] font-bold leading-none">{rec.rating}</span>
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
