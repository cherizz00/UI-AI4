import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Cpu, ShieldCheck } from 'lucide-react';

const roles = [
    {
        title: "Quantitative Researcher",
        team: "Alpha Generation",
        location: "Global / Remote",
        icon: LineChart
    },
    {
        title: "Systems Engineer",
        team: "High Frequency",
        location: "NYC / London",
        icon: Cpu
    },
    {
        title: "Risk Strategist",
        team: "Portfolio Analytics",
        location: "Singapore",
        icon: ShieldCheck
    },
    {
        title: "Machine Learning Lead",
        team: "Pattern Labs",
        location: "Remote",
        icon: Code2
    }
];

const TalentRoles = () => {
    return (
        <section id="roles" className="py-16 sm:py-24 bg-transparent">
            <div className="container max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6">
                        The Next Era of <br />
                        <span className="brand-highlight text-3xl sm:text-4xl">Quantitative Engineering.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-light opacity-70 leading-relaxed">
                        Join an elite squad of mathematical architects building the engines of 21st-century finance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 md:p-7 rounded-2xl md:rounded-[24px] border border-white/5 hover:border-brand-periwinkle/50 transition-all group flex flex-col items-center text-center cursor-pointer"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-periwinkle mb-5 md:mb-6 group-hover:bg-brand-periwinkle group-hover:text-white transition-all duration-500">
                                <role.icon size={20} />
                            </div>
                            <h4 className="text-white font-beautique text-base md:text-lg mb-1 md:mb-1.5 tracking-tight line-clamp-1 group-hover:brand-highlight transition-all">{role.title}</h4>
                            <p className="text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 md:mb-7">{role.team}</p>

                            <div className="mt-auto pt-4 md:pt-5 border-t border-white/5 w-full">
                                <span className="text-brand-periwinkle text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                    Apply Now
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentRoles;
