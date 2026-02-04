import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
    {
        title: "Platform",
        links: [
            { name: "Engine", view: "coming-soon" },
            { name: "Research", view: "coming-soon" },
            { name: "Intelligence", view: "coming-soon" },
            { name: "Security", view: "coming-soon" }
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About", view: "who-we-are" },
            { name: "Careers", view: "coming-soon" },
            { name: "Laboratory", view: "coming-soon" },
            { name: "Contact", view: "auth" }
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Documentation", view: "coming-soon" },
            { name: "Case Studies", view: "coming-soon" },
            { name: "Papers", view: "coming-soon" },
            { name: "Benchmarks", view: "coming-soon" }
        ]
    },
    {
        title: "Social",
        links: [
            { name: "Twitter", view: "coming-soon" },
            { name: "LinkedIn", view: "coming-soon" },
            { name: "GitHub", view: "coming-soon" },
            { name: "Discord", view: "coming-soon" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", view: "coming-soon" },
            { name: "Terms", view: "coming-soon" },
            { name: "Compliance", view: "coming-soon" },
            { name: "Security", view: "coming-soon" }
        ]
    }
];

const TalentFooter = ({ setView }) => {
    const handleLinkClick = (e, view) => {
        e.preventDefault();
        if (setView) {
            setView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="section-py bg-transparent border-t border-black/5 relative overflow-hidden">

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[0.5px] md:h-1 bg-brand-orange shadow-[0_0_80px_20px_rgba(255,159,67,0.2)]" />

            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16 mb-8 md:mb-16">
                    <div className="col-span-1 md:col-span-1 text-left">
                        <button
                            onClick={(e) => handleLinkClick(e, 'landing')}
                            className="flex items-center mb-4 group"
                        >
                            <span className="text-xl md:text-3xl font-bold tracking-tighter text-slate-900">
                                <span className="text-fade" style={{ letterSpacing: '-0.5px' }}>AI4</span>INVEST
                            </span>
                        </button>
                        <p className="text-slate-500 font-light text-[10px] md:text-sm leading-tight mb-4 max-w-sm">
                            The definitive platform for institutional qualitative intelligence.
                        </p>
                        <div className="flex gap-2">
                            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                                <button key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl glass-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-orange btn-premium transition-all">
                                    <Icon size={14} className="md:w-4 md:h-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 text-left px-2">
                        {footerLinks.map((section, i) => (
                            <div key={i}>
                                <h4 className="text-slate-900 font-serif text-sm md:text-xl mb-4 md:mb-6 tracking-wide leading-none uppercase">{section.title}</h4>
                                <ul className="space-y-3 md:space-y-4">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href="#"
                                                onClick={(e) => handleLinkClick(e, link.view)}
                                                className="text-slate-500 hover:text-brand-orange transition-colors font-semibold text-[9px] md:text-sm leading-none uppercase tracking-wider"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-center md:text-left">
                        © 2026 AI4INVEST REVOLUTION. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6 md:gap-8">
                        <a href="#" className="text-[8px] md:text-[9px] font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-widest">Privacy</a>
                        <a href="#" className="text-[8px] md:text-[9px] font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-widest">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default TalentFooter;
