import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TalentCTA = () => {
    return (
        <section className="section-py relative overflow-hidden bg-transparent">
            <div className="container max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 rounded-[40px] md:rounded-[56px] relative overflow-hidden group shadow-2xl"
                >

                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 via-white/50 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                    <h2 className="text-fluid-h2 font-serif tracking-tight mb-8 md:mb-12 text-slate-900 relative z-10">
                        Ready to find <br />
                        <span className="text-fade">Your Edge?</span>
                    </h2>
                    <p className="text-slate-800 text-sm md:text-base font-semibold mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed relative z-10">
                        Join the ranks of the world's most sophisticated quantitative mandates. Deploy your first node today.
                    </p>

                    <div className="relative z-10 flex justify-center">
                        <button className="btn-glow bg-black text-white px-12 md:px-16 py-5 md:py-7 rounded-2xl font-bold text-base md:text-xl transition-all shadow-2xl flex items-center gap-3 group/btn cursor-pointer">
                            Get Started Now
                            <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>


                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </motion.div>
            </div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-orange/5 blur-[100px] md:blur-[140px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default TalentCTA;
