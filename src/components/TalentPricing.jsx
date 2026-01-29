import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const pricingPans = [
    {
        name: "Daily Intelligence",
        price: "₹4,999",
        description: "The essential pre-market briefing used by India's top retail quants.",
        features: ["Daily 8:00 AM Execution Brief", "NIFTY & BANK NIFTY Levels", "Institutional Flow Decoding", "Volatility & Risk Alerts", "No Fluff, Just Alpha"],
        icon: Zap,
        highlight: true
    },
    {
        name: "Research Platform",
        price: "₹1,000",
        description: "Phase 2: Expanded equity & macro research.",
        features: ["Full Equity Coverage", "Long-term Company Analysis", "Agentic AI Browser", "Macro Trend Tracking", "Personalized Assistant"],
        icon: Crown,
        highlight: false
    },
    {
        name: "Institutional",
        price: "Custom",
        description: "Bespoke strategy layers and API access.",
        features: ["Raw Data Feeds", "Custom Model Training", "Dedicated Analyst Support", "White-label Reports", "API Integration"],
        icon: Shield,
        highlight: false
    }
];

const TalentPricing = () => {
    return (
        <section id="pricing" className="section-py bg-transparent relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 md:mb-8 text-slate-900">
                            Transparent <span className="text-fade">Pricing.</span>
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-semibold">
                            Simple, annual pricing for high-value intelligence. No hidden fees.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 md:gap-8">
                    {pricingPans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-1.5 md:p-10 rounded-lg md:rounded-[40px] flex flex-col items-start text-left relative group transition-all duration-500 hover:translate-y-[-4px] overflow-visible ${plan.highlight ? 'shadow-glow-orange' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-black to-brand-orange text-white text-[6px] md:text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                                    Recommended
                                </div>
                            )}

                            <div className={`w-7 h-7 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-8 ${plan.highlight ? 'bg-gradient-to-br from-black to-brand-orange text-white' : 'bg-black/5 text-brand-orange'}`}>
                                <plan.icon size={14} className="md:w-6 md:h-6" />
                            </div>

                            <h3 className="text-[9px] md:text-2xl font-serif text-slate-900 mb-0.5 md:mb-2 tracking-tight leading-none">{plan.name}</h3>
                            <div className="flex items-baseline gap-0.5 mb-1 md:mb-4">
                                <span className="text-sm md:text-4xl font-bold text-slate-900 tracking-tighter leading-none">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-slate-500 text-[6px] md:text-sm font-medium">/yr</span>}
                            </div>
                            <p className="text-slate-600 text-[7px] md:text-sm font-light mb-2 md:mb-8 leading-tight line-clamp-2 md:line-clamp-none">
                                {plan.description}
                            </p>

                            <div className="space-y-1 md:space-y-4 mb-2 md:mb-10 w-full">
                                {plan.features.slice(0, 4).map((feature, j) => (
                                    <div key={j} className="flex items-start gap-1 md:gap-3">
                                        <div className="w-2.5 h-2.5 md:w-5 md:h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={7} className="text-brand-orange md:w-3 md:h-3" />
                                        </div>
                                        <span className="text-slate-700 text-[7px] md:text-[13px] font-light leading-none truncate">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-1.5 md:py-4 rounded-lg md:rounded-2xl font-bold text-[8px] md:text-sm btn-premium mt-auto ${plan.highlight
                                ? 'bg-black text-white hover:bg-slate-800 btn-glow'
                                : 'glass-100 text-slate-900 hover:bg-black/5'
                                }`}>
                                {plan.price === "Custom" ? "Contact" : "Join"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[120%] h-full bg-brand-orange/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-[-1]" />
        </section>
    );
};

export default TalentPricing;
