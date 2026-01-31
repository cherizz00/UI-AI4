import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "How does the signal latency compare to direct exchange feeds?",
        a: "Our infrastructure is co-located in BKC (NSE) and GIFT City, ensuring sub-millisecond signal generation. While not a replacement for raw UDP feeds, our processed alpha signals arrive faster than any competing analytics platform."
    },
    {
        q: "Can I integrate these signals into my existing Python stack?",
        a: "Absolutely. We provide a comprehensive Python SDK and REST API. You can stream signals directly into your Pandas/Polars dataframes or backtesting engines with a single line of code."
    },
    {
        q: "What is the historical depth of the backtesting engine?",
        a: "Our Institutional plan offers 10 years of tick-level data for all F&O instruments. The Enterprise tier extends this to full market depth (L3) going back to 2015."
    },
    {
        q: "Is there a trial period for the Institutional algorithms?",
        a: "We offer a 14-day pilots for verified proprietary desks and family offices. Contact our sales team to provision a Sandbox environment."
    }
];

const TalentFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section-py bg-transparent relative overflow-hidden">
            <div className="container max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 md:mb-8 text-slate-900">
                            Clarifying the <span className="text-fade">Alpha.</span>
                        </h2>
                        <p className="text-slate-800 text-xs md:text-base font-semibold max-w-xl mx-auto leading-relaxed">
                            Common questions from our institutional partners.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card rounded-[16px] overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-white/80 shadow-glow-orange border-brand-orange/30' : 'hover:bg-white/50'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full flex items-center justify-between p-2.5 md:p-8 text-left cursor-pointer"
                            >
                                <span className={`font-serif text-[11px] md:text-2xl tracking-tight transition-colors leading-none ${openIndex === i ? 'text-brand-orange' : 'text-slate-900'}`}>
                                    {item.q}
                                </span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-brand-orange text-white rotate-180' : 'bg-black/5 text-slate-900'}`}>
                                    {openIndex === i ? <Minus size={10} /> : <Plus size={10} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-3 md:px-8 pb-3 md:pb-8 pt-0">
                                            <p className="text-slate-600 font-semibold leading-tight text-[9px] md:text-lg border-t border-black/5 pt-3">
                                                {item.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-brand-orange/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default TalentFAQ;
