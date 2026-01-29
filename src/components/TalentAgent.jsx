import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, ChevronRight, Loader2, Sparkles, BrainCircuit } from 'lucide-react';

const agentTasks = [
    { text: "Scanning NIFTY 50 macro regime shifts...", type: "analysis", delay: 1000 },
    { text: "Correlating global crude prices with ONGC fundamental data...", type: "search", delay: 2000 },
    { text: "Identifying liquidity anomalies in BANK NIFTY...", type: "alert", delay: 3500 },
    { text: "Synthesizing earnings call transcripts for HDFCBANK...", type: "processing", delay: 5000 },
    { text: "Finalizing pre-market directional bias report...", type: "success", delay: 7000 }
];

const TypewriterLine = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeout;
        const startTyping = setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i > text.length) clearInterval(typingInterval);
            }, 30);
            return () => clearInterval(typingInterval);
        }, delay);
        return () => clearTimeout(startTyping);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

const AgentMessage = ({ task, isActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-start gap-3 mb-4 last:mb-0 ${isActive ? 'opacity-100' : 'opacity-70'}`}
        >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${task.type === 'search' ? 'bg-blue-500/20 text-blue-400' :
                task.type === 'alert' ? 'bg-amber-500/20 text-amber-400' :
                    task.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                        'bg-slate-700/50 text-slate-400'
                }`}>
                {task.type === 'search' && <Search size={10} />}
                {task.type === 'alert' && <Sparkles size={10} />}
                {task.type === 'success' && <ChevronRight size={10} />}
                {(task.type === 'analysis' || task.type === 'processing') && <Loader2 size={10} className="animate-spin" />}
            </div>
            <div className="flex-1 font-mono text-xs md:text-sm">
                <span className={isActive ? 'text-white' : 'text-slate-400'}>
                    <TypewriterLine text={task.text} delay={200} />
                </span>
                {isActive && (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-1.5 h-3 bg-brand-orange ml-1 align-middle"
                    />
                )}
                {task.type === 'processing' && isActive && (
                    <div className="w-full bg-slate-800 rounded-full h-0.5 mt-2 overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="h-full bg-brand-orange"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const TalentAgent = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let timeout;
        if (currentStep < agentTasks.length) {
            timeout = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, agentTasks[currentStep].delay);
        } else {

            timeout = setTimeout(() => {
                setCurrentStep(0);
            }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [currentStep]);

    return (
        <section className="section-py bg-transparent relative overflow-hidden">

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">


                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[9px] font-bold uppercase tracking-widest mb-6"
                        >
                            <BrainCircuit size={12} />
                            <span>Agentic AI Core</span>
                        </motion.div>

                        <h2 className="text-fluid-h2 font-serif tracking-tight mb-6 text-slate-900 leading-tight">
                            Autonomous <br />
                            <span className="text-fade underline decoration-brand-orange/50 underline-offset-8">Research Agents.</span>
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-semibold mb-8 max-w-lg leading-relaxed">
                            Our agents don't just process data; they understand it. From tracking macro regime shifts to synthesizing earnings calls, your AI assistant works 24/7.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Continuous Macro-Trend Tracking",
                                "Cross-Asset Correlation Analysis",
                                "Sentiment Scoring from Global News",
                                "Automated Pre-Market Report Generation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="relative order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0f172a] rounded-[32px] p-6 md:p-8 relative overflow-hidden shadow-2xl border border-slate-800"
                        >

                            <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                                </div>
                                <div className="flex-1 bg-slate-900 rounded-lg h-7 flex items-center px-3 gap-2 border border-slate-800">
                                    <Globe size={10} className="text-slate-500" />
                                    <span className="text-[10px] text-slate-400 mono-data">agent://macro-research-v4</span>
                                </div>
                            </div>


                            <div className="h-[320px] flex flex-col font-sans relative">

                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

                                <div className="flex-1 overflow-hidden relative z-10">
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />

                                    <div className="space-y-4">
                                        {agentTasks.slice(0, currentStep + 1).map((task, i) => (
                                            <AgentMessage key={i} task={task} isActive={i === currentStep} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentAgent;
