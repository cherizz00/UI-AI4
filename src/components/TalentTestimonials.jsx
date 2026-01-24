import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "The engine's ability to find liquidity in distressed regimes is truly institutional grade. A significant leap over legacy quant stacks.",
        author: "Chief Investment Officer",
        firm: "Tier 1 Sovereign Fund"
    },
    {
        quote: "AI4INVEST doesn't just provide data; it provides structural context. The signal-to-noise ratio is unlike anything we've deployed.",
        author: "Head of Alpha Generation",
        firm: "Global Asset Manager"
    }
];

const TalentTestimonials = () => {
    return (
        <section className="py-16 sm:py-24 bg-transparent">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-beautique tracking-tight mb-4 md:mb-6">
                            Voice of the <span className="brand-highlight text-3xl sm:text-4xl">Frontier.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {testimonials.map((test, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 md:p-10 rounded-2xl md:rounded-[40px] border border-white/5 relative overflow-hidden group hover:border-brand-periwinkle/30 transition-all"
                        >
                            <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-brand-periwinkle/10 group-hover:text-brand-periwinkle/30 transition-colors" size={40} />

                            <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 mb-8 md:mb-10 relative z-10 leading-snug italic tracking-tight">
                                "{test.quote}"
                            </p>

                            <div className="relative z-10 text-left">
                                <h4 className="text-white font-beautique text-base md:text-lg mb-0.5 md:mb-1 tracking-tight">{test.author}</h4>
                                <p className="text-brand-lavender text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">{test.firm}</p>
                            </div>

                            <div className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-36 h-36 md:w-48 md:h-48 bg-brand-periwinkle/5 blur-[50px] md:blur-[60px] rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentTestimonials;
