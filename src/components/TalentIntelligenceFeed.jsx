import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowUpRight, ArrowDownRight, Zap, Target, BarChart3, TrendingUp, Cpu } from 'lucide-react';

const mockSignals = [
    { id: 1, type: 'BEARISH', asset: 'RELIANCE', signal: 'Liquidity Shock (Order Flow Imbalance)', strength: 'High', timestamp: '14:23:01', yield: '-2.4%' },
    { id: 2, type: 'BULLISH', asset: 'HDFCBANK', signal: 'Momentum Drift Shift (Brownian Drift Change)', strength: 'Medium', timestamp: '14:22:45', yield: '+1.2%' },
    { id: 3, type: 'NEUTRAL', asset: 'TCS', signal: 'Volatility Regime Shift (SABR Skew Expansion)', strength: 'Low', timestamp: '14:21:12', yield: '0.0%' },
    { id: 4, type: 'BULLISH', asset: 'INFY', signal: 'Volatility Compression (Variance Contraction)', strength: 'High', timestamp: '14:20:55', yield: '+0.8%' },
    { id: 5, type: 'BULLISH', asset: 'ICICIBANK', signal: 'Mean Reversion Trigger (Stat Arb Signal)', strength: 'Medium', timestamp: '14:19:30', yield: '+1.5%' }
];

const tickers = [
    { label: "S&P 500", val: "+0.85%" },
    { label: "NASDAQ 100", val: "+1.2%" },
    { label: "EUR/USD", val: "1.0842" },
    { label: "VIX INDEX", val: "14.2" },
    { label: "GOLD OUNCE", val: "$2,042" }
];

const SparklineGraph = React.memo(({ type }) => {
    const isBullish = type === 'BULLISH';
    const isBearish = type === 'BEARISH';
    const color = isBullish ? '#22c55e' : isBearish ? '#ef4444' : '#94a3b8';

    const pathData = isBullish
        ? "M2 22 L8 18 L14 20 L20 12 L26 15 L32 8 L38 10 L44 4 L50 2"
        : isBearish
            ? "M2 5 L8 8 L14 6 L20 15 L26 12 L32 20 L38 18 L44 24 L50 26"
            : "M2 14 L8 16 L14 13 L20 15 L26 14 L32 16 L38 13 L44 15 L50 14";

    return (
        <div className="w-8 md:w-16 h-4 md:h-8 flex items-center justify-center scale-75 md:scale-100 origin-right">
            <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
                <defs>
                    <linearGradient id={`grad-${type}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={pathData} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d={`${pathData} L 52 28 L 0 28 Z`} fill={`url(#grad-${type})`} stroke="none" />
            </svg>
        </div>
    );
});

const TalentIntelligenceFeed = () => {
    const [signals, setSignals] = useState(mockSignals);

    useEffect(() => {
        const interval = setInterval(() => {
            setSignals(prev => {
                const nextSignals = [...prev];
                const first = nextSignals.shift();

                const types = ['BULLISH', 'BEARISH', 'NEUTRAL'];
                const type = types[Math.floor(Math.random() * types.length)];

                nextSignals.push({
                    ...first,
                    id: Math.random(),
                    timestamp: new Date().toLocaleTimeString('en-GB'),
                    type: type,
                    yield: (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 3).toFixed(1) + "%"
                });
                return nextSignals;
            });
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="intelligence" className="section-py bg-transparent overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-[9px] md:text-[9px] font-bold uppercase tracking-widest mb-3 md:mb-6">
                                <TrendingUp size={10} />
                                <span>Pre-Market Signals</span>
                            </div>
                            <h2 className="text-fluid-h2 font-serif tracking-tight mb-2 md:mb-6 leading-tight text-left text-slate-900">
                                The Signal in <br />
                                <span className="text-fade underline decoration-brand-orange/50 underline-offset-4 md:underline-offset-8">The Noise.</span>
                            </h2>
                            <p className="text-slate-800 text-[12px] md:text-base font-semibold mb-4 md:mb-8 max-w-lg text-left leading-tight italic">
                                Identifying structural inefficiencies before they manifest in price.
                            </p>

                            <div className="grid grid-cols-2 gap-2 md:gap-6 text-left">
                                <div className="p-3 md:p-10 rounded-2xl md:rounded-[48px] glass-card min-h-[85px] md:min-h-[220px] flex flex-col justify-center">
                                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-2 md:mb-8 shrink-0">
                                        <Cpu size={14} md:size={22} />
                                    </div>
                                    <h4 className="text-slate-900 font-serif text-[10px] md:text-xl mb-1 tracking-tight leading-none">Latency Zero</h4>
                                    <p className="text-slate-600 text-[6px] md:text-xs font-medium leading-tight mt-auto">Co-located for sub-millisecond reactions.</p>
                                </div>
                                <div className="p-3 md:p-10 rounded-2xl md:rounded-[48px] glass-card min-h-[85px] md:min-h-[220px] flex flex-col justify-center">
                                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black/5 flex items-center justify-center text-black mb-2 md:mb-8 shrink-0">
                                        <Target size={14} md:size={22} />
                                    </div>
                                    <h4 className="text-slate-900 font-serif text-[10px] md:text-xl mb-1 tracking-tight leading-none">Alpha Max</h4>
                                    <p className="text-slate-600 text-[6px] md:text-xs font-medium leading-tight mt-auto">ML-driven factor detection across Global Markets.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <div className="glass-card rounded-[24px] md:rounded-[56px] overflow-hidden relative shadow-3xl border border-brand-orange/20">
                            <div className="p-3 md:p-8 border-b border-black/5 flex justify-between items-center bg-black/[0.01]">
                                <div className="flex items-center gap-2 md:gap-4">
                                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-black rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
                                    <span className="text-[7px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-transparent mono-data" style={{ WebkitTextStroke: '0.4px black' }}>Alpha_Stream_Live</span>
                                </div>
                                <div className="flex items-center gap-3 md:gap-6 text-slate-400">
                                    <span className="text-[6px] md:text-[10px] mono-data">BPS: 42k/s</span>
                                    <BarChart3 size={10} className="md:w-4 md:h-4" />
                                </div>
                            </div>

                            <div className="p-2 md:p-6 space-y-1.5 md:space-y-3 h-[380px] md:h-[520px] overflow-hidden relative" style={{ transform: 'translateZ(0)' }}>
                                <AnimatePresence mode="popLayout">
                                    {signals.slice(0, 5).map((signal) => (
                                        <motion.div
                                            key={signal.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                            className="p-2.5 md:p-5 rounded-xl md:rounded-3xl glass-100 flex items-center justify-between group hover:bg-black/[0.02] transition-all w-full"
                                        >
                                            <div className="flex items-center gap-3 md:gap-6 text-left">
                                                <div className={`w-7 h-7 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex items-center justify-center ${signal.type === 'BULLISH' ? 'bg-brand-orange/10 text-brand-orange' :
                                                    signal.type === 'BEARISH' ? 'bg-black/10 text-black' : 'bg-slate-500/10 text-slate-500'
                                                    }`}>
                                                    {signal.type === 'BULLISH' ? <ArrowUpRight size={12} className="md:w-5 md:h-5" /> :
                                                        signal.type === 'BEARISH' ? <ArrowDownRight size={12} className="md:w-5 md:h-5" /> :
                                                            <Activity size={12} className="md:w-5 md:h-5" />}
                                                </div>
                                                <div>
                                                    <h4 className="font-serif text-[9px] md:text-lg text-black tracking-tight group-hover:text-fade transition-all mono-data uppercase font-medium leading-none">{signal.asset}</h4>
                                                    <p className="text-[5.5px] md:text-[11px] text-slate-500 font-medium mt-0.5 uppercase tracking-wide leading-none">{signal.signal}</p>
                                                </div>
                                            </div>
                                            <div className="text-right flex items-center gap-3 md:gap-8">
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-[8px] md:text-[12px] font-bold mono-data leading-none ${signal.yield.startsWith('+') ? 'text-brand-orange' : 'text-black'}`}>
                                                        {signal.yield}
                                                    </span>
                                                    <span className="text-[5px] md:text-[9px] text-slate-500 font-bold mono-data leading-none mt-0.5">{signal.timestamp}</span>
                                                </div>
                                                <div className="flex">
                                                    <SparklineGraph type={signal.type} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>


                            <div className="border-t border-black/5 bg-white/60 backdrop-blur-md py-4 ticker-container">
                                <div className="ticker-content gap-16">
                                    {[...tickers, ...tickers].map((ticker, i) => (
                                        <div key={i} className="flex items-center gap-3 px-6 border-r border-black/5 min-w-[150px]">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mono-data">{ticker.label}:</span>
                                            <span className="text-[10px] font-bold text-brand-orange mono-data">{ticker.val}</span>
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
