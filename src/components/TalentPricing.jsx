import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const pricingPans = [
    {
        name: "Daily Intelligence",
        price: "₹999",
        description: "The essential pre-market briefing used by India's top retail quants.",
        features: ["Daily 8:00 AM Execution Brief", "NIFTY & BANK NIFTY Levels", "Institutional Flow Decoding", "Volatility & Risk Alerts", "No Fluff, Just Alpha"],
        icon: Zap,
        highlight: true
    },
    {
        name: "Research Platform",
        price: "₹3,999",
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
            <div className="container max-w-7xl mx-auto">
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

                <div className="grid grid-cols-3 gap-1 md:gap-10">
                    {pricingPans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-2 md:p-10 rounded-xl md:rounded-[48px] flex flex-col items-start text-left relative group transition-all duration-500 hover:translate-y-[-4px] overflow-visible min-h-[220px] md:min-h-[640px] ${plan.highlight ? 'shadow-glow-orange border-brand-orange/20' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 md:px-4 py-0.5 bg-brand-orange text-white text-[6px] md:text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                                    Highly Recommended
                                </div>
                            )}

                            <div className={`w-7 h-7 md:w-14 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-6 ${plan.highlight ? 'bg-black text-white' : 'bg-black/5 text-brand-orange'}`}>
                                <plan.icon size={14} className="md:w-6 md:h-6" />
                            </div>

                            <h3 className="text-[10px] md:text-2xl font-serif text-slate-900 mb-0.5 md:mb-3 tracking-tight leading-none uppercase">{plan.name}</h3>
                            <div className="flex items-baseline gap-0.5 mb-1 md:mb-4">
                                <span className="text-sm md:text-4xl font-bold text-slate-900 tracking-tighter leading-none">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-slate-500 text-[6px] md:text-sm font-bold uppercase tracking-widest ml-1">/ yr</span>}
                            </div>
                            <p className="text-slate-600 text-[8px] md:text-sm font-medium mb-3 md:mb-6 leading-tight opacity-80">
                                {plan.description}
                            </p>

                            <div className="space-y-1 md:space-y-4 mb-4 md:mb-8 w-full">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-1 md:gap-3">
                                        <div className="w-2.5 h-2.5 md:w-5 md:h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={8} className="text-brand-orange md:w-3 md:h-3" />
                                        </div>
                                        <span className="text-slate-700 text-[8px] md:text-sm font-medium leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-1 md:py-4 rounded-md md:rounded-2xl font-bold text-[7px] md:text-sm btn-premium mt-auto ${plan.highlight
                                ? 'bg-brand-orange text-white hover:bg-brand-orange/90 btn-glow'
                                : 'glass-100 text-slate-900 hover:bg-black/5'
                                }`}>
                                {plan.price === "Custom" ? "Contact Advisory" : "Secure Access"}
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
