import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn, Calendar } from 'lucide-react';
import Magnetic from './Magnetic';

const TalentNavbar = ({ setView }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQs', href: '#faqs' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-2' : 'py-4 md:py-6'}`}>
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    layout
                    className={`bg-white/0 backdrop-blur-2xl border border-white/100 flex items-center justify-between gap-4 transition-all duration-700 relative group px-4 md:px-8 py-2 md:py-2.5 rounded-full ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'shadow-lg'}`}
                >
                    <a href="/" className="flex items-center group shrink-0 relative z-10">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-slate-900">
                            <span className="text-fade" style={{ letterSpacing: '-0.5px' }}>AI4</span>INVEST
                        </span>
                    </a>


                    <div className="hidden xl:flex flex-1 items-center justify-center gap-2 md:gap-12 relative z-10 px-2 md:px-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[7px] md:text-[12px] font-bold text-slate-900 hover:text-brand-orange transition-all tracking-wider md:tracking-[0.15em] uppercase hover:scale-105 active:scale-95 whitespace-nowrap badge-institutional"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>


                    <div className="hidden sm:flex items-center gap-1.5 md:gap-8 shrink-0 relative z-10">
                        <button
                            onClick={() => setView('auth')}
                            className="text-[7px] md:text-xs font-bold text-black opacity-80 hover:opacity-100 transition-all cursor-pointer flex items-center gap-1 hover:translate-y-[-1px] uppercase tracking-wider whitespace-nowrap"
                        >
                            <LogIn size={10} className="md:w-4 md:h-4" /> Sign In
                        </button>
                        <Magnetic>
                            <button className="bg-black text-white px-2.5 py-1.5 md:px-8 md:py-3 rounded-md md:rounded-full font-bold hover:bg-slate-800 active:scale-95 transition-all cursor-pointer flex items-center gap-1 text-[7px] md:text-xs shadow-xl whitespace-nowrap shimmer">
                                <Calendar size={10} className="md:w-4 md:h-4" /> Book a Demo
                            </button>
                        </Magnetic>
                    </div>


                    <button className="xl:hidden text-black p-2 relative z-10" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
                    </button>
                </motion.div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-white/40 backdrop-blur-md z-[-1] xl:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className="xl:hidden absolute top-full left-3 right-3 mt-6 z-[60]"
                        >
                            <div className="glass-card p-6 md:p-10 rounded-3xl space-y-8 bg-white/60 backdrop-blur-[40px] shadow-3xl">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-xl font-light text-black hover:text-brand-orange transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-8 border-t border-black/5 space-y-4">
                                    <button
                                        onClick={() => setView('auth')}
                                        className="w-full text-left py-4 text-black font-medium text-lg flex items-center justify-between"
                                    >
                                        Sign In <LogIn size={20} />
                                    </button>
                                    <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl">
                                        <Calendar size={20} /> Book a Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default TalentNavbar;
