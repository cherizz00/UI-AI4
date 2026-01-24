import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowUpRight, ArrowDownRight, Zap, Target, BarChart3, TrendingUp, Cpu } from 'lucide-react';

const mockSignals = [
    { id: 1, type: 'BULLISH', asset: 'BTC/USD', signal: 'Volume Breakout', strength: 'High', timestamp: '14:23:01', yield: '+2.4%' },
    { id: 2, type: 'BEARISH', asset: 'NVDA', signal: 'MACD Crossover', strength: 'Medium', timestamp: '14:22:45', yield: '-1.2%' },
    { id: 3, type: 'NEUTRAL', asset: 'XAU/USD', signal: 'Consolidation', strength: 'Low', timestamp: '14:21:12', yield: '0.0%' },
    { id: 4, type: 'BULLISH', asset: 'AAPL', signal: 'RSI Divergence', strength: 'High', timestamp: '14:20:55', yield: '+0.8%' },
    { id: 5, type: 'BULLISH', asset: 'ETH/USD', signal: 'Support Bounce', strength: 'Medium', timestamp: '14:19:30', yield: '+1.5%' }
];

const tickers = [
    { label: "US Tech Alpha", val: "+14.2 bps" },
    { label: "Global Macro Edge", val: "0.982 Sharpe" },
    { label: "Crypto Distressed", val: "22% APR" },
    { label: "EM Mean Reversion", val: "+5.1 bps" },
    { label: "EU Factor Bias", val: "Lo-Vol" }
];

const TalentIntelligenceFeed = () => {
    const [signals, setSignals] = useState(mockSignals);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSignals = [...signals];
            const first = nextSignals.shift();
            nextSignals.push({ ...first, id: Math.random(), timestamp: new Date().toLocaleTimeString('en-GB') });
            setSignals(nextSignals);
        }, 4000);
        return () => clearInterval(interval);
    }, [signals]);

    return (
        <section id="intelligence" className="py-24 sm:py-32 bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-6">
                                <TrendingUp size={10} />
                                <span>Live Intelligence Feed</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-beautique tracking-tight mb-6 leading-tight text-left">
                                The Signal in <br />
                                <span className="brand-highlight underline decoration-white/5 underline-offset-8">The Noise.</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg font-light mb-10 max-w-lg opacity-70 text-left leading-relaxed">
                                Our decision engines operate at the frontier of high-fidelity data, identifying structural inefficiencies before they manifest in price.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/5 group hover:border-brand-periwinkle/30 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-brand-periwinkle/10 flex items-center justify-center text-brand-periwinkle mb-6">
                                        <Cpu size={18} />
                                    </div>
                                    <h4 className="text-white font-beautique text-lg mb-1 tracking-tight">Latency Zero</h4>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">Co-located in NY4 and LD4 for sub-millisecond reactions.</p>
                                </div>
                                <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/5 group hover:border-brand-lavender/30 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-brand-lavender/10 flex items-center justify-center text-brand-lavender mb-6">
                                        <Target size={18} />
                                    </div>
                                    <h4 className="text-white font-beautique text-lg mb-1 tracking-tight">Alpha Max</h4>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">ML-driven factor detection across 400+ venues.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <div className="ultra-glass rounded-[40px] border border-white/5 overflow-hidden relative shadow-3xl">
                            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mono-data">Alpha_Stream_Live</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-600">
                                    <span className="text-[9px] mono-data">BPS: 42k/s</span>
                                    <BarChart3 size={14} />
                                </div>
                            </div>

                            <div className="p-4 space-y-2 max-h-[500px] overflow-hidden">
                                <AnimatePresence mode="popLayout">
                                    {signals.slice(0, 6).map((signal) => (
                                        <motion.div
                                            key={signal.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-all hover:border-brand-periwinkle/20"
                                        >
                                            <div className="flex items-center gap-5 text-left">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${signal.type === 'BULLISH' ? 'bg-emerald-500/10 text-emerald-400' :
                                                        signal.type === 'BEARISH' ? 'bg-rose-500/10 text-rose-400' : 'bg-slate-500/10 text-slate-400'
                                                    }`}>
                                                    {signal.type === 'BULLISH' ? <ArrowUpRight size={18} /> :
                                                        signal.type === 'BEARISH' ? <ArrowDownRight size={18} /> :
                                                            <Activity size={18} />}
                                                </div>
                                                <div>
                                                    <h4 className="font-beautique text-base text-white tracking-tight group-hover:brand-highlight transition-all mono-data uppercase">{signal.asset}</h4>
                                                    <p className="text-[10px] text-slate-500 font-light mt-0.5 uppercase tracking-wide">{signal.signal}</p>
                                                </div>
                                            </div>
                                            <div className="text-right flex items-center gap-6">
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-[11px] font-bold mono-data ${signal.yield.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                        {signal.yield}
                                                    </span>
                                                    <span className="text-[8px] text-slate-600 font-bold mono-data">{signal.timestamp}</span>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${signal.strength === 'High' ? 'bg-brand-periwinkle/10 text-brand-periwinkle border border-brand-periwinkle/20' : 'bg-white/5 text-slate-500'
                                                        }`}>
                                                        {signal.strength}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Performance Ticker */}
                            <div className="border-t border-white/5 bg-black/40 backdrop-blur-md py-3 ticker-container">
                                <div className="ticker-content gap-12">
                                    {[...tickers, ...tickers].map((ticker, i) => (
                                        <div key={i} className="flex items-center gap-2 px-4 border-r border-white/5">
                                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mono-data">{ticker.label}:</span>
                                            <span className="text-[8px] font-bold text-emerald-400 mono-data">{ticker.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentIntelligenceFeed;
