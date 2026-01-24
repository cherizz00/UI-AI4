import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
    {
        title: "Platform",
        links: ["Engine", "Research", "Intelligence", "Security"]
    },
    {
        title: "Company",
        links: ["About", "Careers", "Laboratory", "Contact"]
    },
    {
        title: "Resources",
        links: ["Documentation", "Case Studies", "Papers", "Benchmarks"]
    }
];

const TalentFooter = () => {
    return (
        <footer className="pt-16 sm:pt-24 pb-8 md:pb-12 bg-transparent border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-brand-periwinkle shadow-[0_0_150px_40px_rgba(111,114,255,0.3)]" />

            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-16 mb-12 md:mb-16">
                    <div className="lg:col-span-2 text-left">
                        <a href="/" className="flex items-center mb-6 group">
                            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                                <span className="brand-highlight" style={{ letterSpacing: '-0.5px' }}>AI4</span>INVEST
                            </span>
                        </a>
                        <p className="text-slate-500 font-light text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8 max-w-sm">
                            The definitive platform for institutional qualitative intelligence. Building the engines that define the next era of alpha.
                        </p>
                        <div className="flex gap-3">
                            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                                <button key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-periwinkle transition-all border border-white/5 scale-90 md:scale-100">
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-left">
                        {footerLinks.map((section, i) => (
                            <div key={i}>
                                <h4 className="text-white font-beautique text-sm md:text-base mb-4 md:mb-6 tracking-wider">{section.title}</h4>
                                <ul className="space-y-2.5 md:space-y-3">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-slate-500 hover:text-brand-lavender transition-colors font-light text-[11px] md:text-xs">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-center md:text-left">
                        © 2026 AI4INVEST REVOLUTION. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6 md:gap-8">
                        <a href="#" className="text-[8px] md:text-[9px] font-bold text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
                        <a href="#" className="text-[8px] md:text-[9px] font-bold text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default TalentFooter;
