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
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-8 md:p-10 rounded-[40px] flex flex-col items-start text-left relative group transition-all duration-500 hover:translate-y-[-4px] ${plan.highlight ? 'shadow-glow-orange' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-black to-brand-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${plan.highlight ? 'bg-gradient-to-br from-black to-brand-orange text-white' : 'bg-black/5 text-brand-orange'}`}>
                                <plan.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-serif text-slate-900 mb-2 tracking-tight">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-slate-900 tracking-tighter">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-slate-500 text-sm font-medium">/yr</span>}
                            </div>
                            <p className="text-slate-600 text-sm font-light mb-8 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-10 w-full">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} className="text-brand-orange" />
                                        </div>
                                        <span className="text-slate-700 text-[13px] font-light">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold text-sm btn-premium mt-auto ${plan.highlight
                                ? 'bg-black text-white hover:bg-slate-800 btn-glow'
                                : 'glass-100 text-slate-900 hover:bg-black/5'
                                }`}>
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
        </section>
    );
};

export default TalentPricing;
