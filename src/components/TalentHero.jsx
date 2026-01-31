import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Reliance from "../assets/logos/reliance.svg";
import TCS from "../assets/logos/tcs.svg";
import HDFC from "../assets/logos/hdfc.svg";
import ICICI from "../assets/logos/icici.svg";
import Infosys from "../assets/logos/infosys.svg";
import SBI from "../assets/logos/sbi.svg";
import Kotak from "../assets/logos/kotak.svg";
import Axis from "../assets/logos/axis.svg";
import Bajaj from "../assets/logos/bajaj.svg";
import Airtel from "../assets/logos/airtel.svg";
import LT from "../assets/logos/lt.svg";
import ITC from "../assets/logos/itc.svg";
import HUL from "../assets/logos/hul.svg";
import Adani from "../assets/logos/adani.svg";
import Wipro from "../assets/logos/wipro.svg";


import { Calendar, Star, Zap, Globe2, Activity } from 'lucide-react';

const logos = [
    { ticker: "RELIANCE", logo: Reliance, color: "text-[#D32F2F]" },
    { ticker: "TCS", logo: TCS, color: "text-[#333399]" },
    { ticker: "HDFCBANK", logo: HDFC, color: "text-[#003366]" },
    { ticker: "ICICIBANK", logo: ICICI, color: "text-[#990000]" },
    { ticker: "INFY", logo: Infosys, color: "text-[#007CC3]" },
    { ticker: "SBIN", logo: SBI, color: "text-[#00B5EF]" },
    { ticker: "KOTAKBANK", logo: Kotak, color: "text-[#EE1C25]" },
    { ticker: "AXISBANK", logo: Axis, color: "text-[#971237]" },
    { ticker: "BAJFINANCE", logo: Bajaj, color: "text-[#0055A5]" },
    { ticker: "BHARTIARTL", logo: Airtel, color: "text-[#DE2020]" },
    { ticker: "LT", logo: LT, color: "text-[#FFD200]" },
    { ticker: "ITC", logo: ITC, color: "text-[#212E55]" },
    { ticker: "HINDUNILVR", logo: HUL, color: "text-[#004996]" },
    { ticker: "ADANIENT", logo: Adani, color: "text-[#ED1C24]" },
    { ticker: "WIPRO", logo: Wipro, color: "text-[#712D91]" }
];

const dataPoints = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    val: (Math.random() * 1000).toFixed(4),
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 10
}));

const TypingWord = () => {
    const words = ["Market", "Noise", "Algos", "Vols", "Sentiment"];
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);

    // typeWriter effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : 100, Math.random() * 150));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="relative inline-block min-w-[3ch] md:min-w-[4ch] text-brand-orange">
            {words[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[0.8em] bg-brand-orange ml-1 align-middle"
            />
        </span>
    );
};

const TalentHero = () => {
    return (
        <section className="relative min-h-[70vh] lg:min-h-[90vh] bg-transparent text-black pt-24 md:pt-36 lg:pt-44 pb-8 overflow-hidden flex flex-col items-center justify-start text-center section-py">

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
                {dataPoints.map(p => (
                    <div
                        key={p.id}
                        className="data-float text-black"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    >
                        0x{p.val}
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-100 mb-8 md:mb-10 shadow-premium"
                >
                    <Activity size={12} className="text-brand-orange" />
                    <span className="badge-institutional text-slate-500">Real-time Alpha Node Active</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1 }}
                    className="mb-6 md:mb-10"
                >
                    <h1 className="text-fluid-h1 max-w-4xl mx-auto italic">
                        Beat the <TypingWord />
                        <br />
                        <span className="not-italic bg-gradient-to-r from-slate-900 via-slate-800 to-brand-orange bg-clip-text text-transparent underline decoration-brand-orange/50 underline-offset-8">
                            Before the Bell.
                        </span>
                    </h1>
                </motion.div>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-fluid-p text-black mb-10 md:mb-12 max-w-2xl mx-auto font-semibold text-[11px] md:text-xl"
                >
                    Get the unfair advantage with <strong>AI4INVEST Daily</strong>.
                    <br className="hidden md:block" />
                    Institutional-grade pre-market intelligence reports delivered to your inbox every morning at 8:00 AM IST.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 md:mb-32 w-full max-w-md mx-auto"
                >
                    <form className="relative w-full flex items-center" onSubmit={(e) => e.preventDefault()}>
                        <div className="absolute left-4 text-slate-400">
                            <Calendar size={18} />
                        </div>
                        <input
                            type="email"
                            placeholder="user@fund.com"
                            className="w-full pl-10 pr-24 md:pl-12 md:pr-32 py-3 md:py-4 rounded-xl md:rounded-2xl glass-100 border border-white/20 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange/50 transition-all font-medium text-xs md:text-sm shadow-premium"
                        />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 md:px-6 rounded-lg md:rounded-xl bg-black text-white text-[10px] md:text-xs font-bold hover:bg-slate-900 active:scale-95 transition-all tracking-wide flex items-center gap-2">
                            SUBSCRIBE
                        </button>
                    </form>
                    <p className="mt-4 text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Next Brief: 08:00 AM IST
                    </p>
                </motion.div>



            </div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="container border-t border-black/5 pt-8 md:pt-10 pb-4 md:pb-6 relative px-0 md:px-12"
            >
                <div
                    className="w-full overflow-hidden flex items-center"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="animate-marquee flex items-center gap-2 md:gap-12 pr-2 md:pr-12">
                        {[...logos, ...logos].map((logo, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 md:gap-4 shrink-0 group/logo cursor-default px-2.5 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-white/40 border border-black/5 hover:bg-white transition-all duration-300 min-w-[100px] md:min-w-[180px] min-h-[40px] md:min-h-[70px] justify-center">
                                <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-black/5 flex items-center justify-center p-0.5 md:p-1.5 transition-transform duration-500">
                                    <img
                                        src={logo.logo}
                                        alt={logo.ticker}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[10px] md:text-[13px] font-bold tracking-tight text-slate-900 mono-data leading-none">
                                        {logo.ticker}
                                    </span>
                                    <span className="text-[7.5px] md:text-[10px] font-medium text-slate-500 transition-colors tracking-tighter uppercase leading-none mt-0.5">
                                        NSE EQUITY
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default TalentHero;
