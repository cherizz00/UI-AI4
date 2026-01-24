import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShieldCheck, Cpu, Globe2, Zap } from 'lucide-react';

const faqCategories = [
    {
        id: "security",
        name: "Security & Privacy",
        icon: ShieldCheck,
        questions: [
            {
                question: "How secure is my proprietary strategy code?",
                answer: "Your models are encrypted at rest and in transit. We use isolated TEE (Trusted Execution Environments) for strategy execution, ensuring that even our infrastructure cannot witness your logic."
            },
            {
                question: "Do you have access to my PnL or trade data?",
                answer: "No. All execution telemetry is strictly anonymized. We pride ourselves on 'Zero-Knowledge' infrastructure, meaning your alpha remains your exclusive property."
            }
        ]
    },
    {
        id: "technology",
        name: "Technology Stack",
        icon: Cpu,
        questions: [
            {
                question: "What exchanges are supported for execution?",
                answer: "We offer native low-latency gateways to 100+ global venues including NYSE, NASDAQ, CME, ICE, and major digital asset exchanges like Binance and Coinbase Institutional."
            },
            {
                question: "What is 'Institutional Latency' exactly?",
                answer: "Institutional latency refers to our co-located node infrastructure situated directly in major data centers (NY4, LD4, TY3), providing sub-10 microsecond internal routing."
            },
            {
                question: "How does the 'Machine Learning Alpha' engine work?",
                answer: "Our engines utilize transformer-based architectures trained on high-fidelity tick data to identify structural market inefficiencies. These signals are delivered via low-latency streams."
            }
        ]
    },
    {
        id: "integration",
        name: "Integration & API",
        icon: Globe2,
        questions: [
            {
                question: "Can I integrate my existing Python research stack?",
                answer: "Yes. AI4INVEST provides a robust Python SDK and REST API. You can train models locally and deploy them to our institutional nodes with a single command."
            },
            {
                question: "Is there support for C++ or Rust strategies?",
                answer: "Absolutely. For ultra-low latency requirements, we provide shared libraries (.so/.dll) for direct integration into our optimized C++ execution core."
            }
        ]
    }
];

const TalentFAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white/[0.03]' : ''}`}>
            <button
                onClick={toggle}
                className="w-full py-6 sm:py-7 px-6 sm:px-8 flex items-center justify-between text-left group"
            >
                <span className={`text-base sm:text-lg transition-all font-beautique tracking-tight pr-8 ${isOpen ? 'text-brand-lavender' : 'text-slate-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0 ${isOpen ? 'bg-brand-periwinkle border-brand-periwinkle text-white rotate-180' : 'border-white/10 text-slate-500 group-hover:border-white/20 group-hover:text-white'}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="pb-8 px-6 sm:px-8">
                            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TalentFAQ = () => {
    const [openId, setOpenId] = useState("technology-0");

    return (
        <section id="faqs" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-periwinkle/10 border border-brand-periwinkle/20 text-brand-periwinkle text-[10px] font-bold uppercase tracking-widest mb-6">
                            <Zap size={10} className="fill-brand-periwinkle" />
                            <span>Frontier Support</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-beautique tracking-tight mb-6">
                            Institutional <span className="brand-highlight">Intelligence.</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-light opacity-70 max-w-2xl mx-auto">
                            Comprehensive guidance on navigating the intersection of capital and artificial intelligence.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-12 sm:space-y-16">
                    {faqCategories.map((category, catIdx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-periwinkle">
                                    <category.icon size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-beautique text-white tracking-tight">{category.name}</h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            <div className="ultra-glass rounded-[32px] overflow-hidden border border-white/5 divide-y divide-white/5">
                                {category.questions.map((item, qIdx) => {
                                    const id = `${category.id}-${qIdx}`;
                                    return (
                                        <TalentFAQItem
                                            key={id}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openId === id}
                                            toggle={() => setOpenId(openId === id ? null : id)}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-periwinkle/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-lavender/5 blur-[110px] rounded-full pointer-events-none" />
        </section>
    );
};

export default TalentFAQ;
