import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const pricingPans = [
    {
        name: "Free",
        price: "$0",
        description: "Core backtesting for individual researchers.",
        features: ["Standard Signal Feed", "Basic Backtesting (1yr)", "Public Community Access", "Standard Latency"],
        icon: Zap,
        highlight: false
    },
    {
        name: "Institutional",
        price: "$499",
        description: "Advanced ML models for high-capacity mandates.",
        features: ["Premium Signal Feed", "Deep Backtesting (10yr+)", "Private Node Infrastructure", "Institutional Latency", "API Strategy Layer", "24/7 Priority Support"],
        icon: Shield,
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Bespoke strategy layers and dedicated hardware.",
        features: ["All Institutional Features", "Dedicated GPU Clusters", "Custom Model Training", "On-Prem Deployment", "White-glove Integration"],
        icon: Crown,
        highlight: false
    }
];

const TalentPricing = () => {
    return (
        <section id="pricing" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-beautique tracking-tight mb-6">
                            Institutional <span className="brand-highlight">Mandates.</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-light opacity-70">
                            Scale your edge with infrastructure designed for the world's most aggressive capital.
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
                            className={`ultra-glass p-8 md:p-10 rounded-[40px] border flex flex-col items-start text-left relative group transition-all duration-500 ${plan.highlight ? 'border-brand-periwinkle/50 shadow-glow bg-white/[0.02]' : 'border-white/5 hover:border-white/10'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-periwinkle text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${plan.highlight ? 'bg-brand-periwinkle text-white' : 'bg-white/5 text-brand-lavender'}`}>
                                <plan.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-beautique text-white mb-2 tracking-tight">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-slate-500 text-sm font-medium">/mo</span>}
                            </div>
                            <p className="text-slate-400 text-sm font-light mb-8 opacity-70 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-10 w-full">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-periwinkle/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} className="text-brand-periwinkle" />
                                        </div>
                                        <span className="text-slate-300 text-[13px] font-light">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all mt-auto ${plan.highlight
                                    ? 'bg-white text-black hover:bg-slate-200'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                }`}>
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Glows for Pricing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-periwinkle/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
        </section>
    );
};

export default TalentPricing;
