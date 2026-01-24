import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn, Calendar } from 'lucide-react';
import Magnetic from './Magnetic';

const TalentNavbar = () => {
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    layout
                    className={`ultra-glass navbar-lighting flex items-center justify-between gap-4 transition-all duration-700 relative group px-4 sm:px-8 py-2 md:py-3.5 rounded-[20px] md:rounded-full ${scrolled ? 'shadow-2xl border-white/10' : 'border-white/5'}`}
                >
                    {/* Lighting Glow - Subtle reactive border */}
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-periwinkle/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-lavender/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Logo Left - scaled and icon removed */}
                    <a href="/" className="flex items-center group shrink-0 relative z-10">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-white">
                            <span className="brand-highlight" style={{ letterSpacing: '-0.5px' }}>AI4</span>INVEST
                        </span>
                    </a>

                    {/* Fluid Navigation Links - Centered via flex-1 and justify-center to prevent overlap */}
                    <div className="hidden xl:flex flex-1 items-center justify-center gap-8 xl:gap-10 relative z-10 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold text-slate-400 hover:text-white transition-all tracking-[0.1em] uppercase opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Auth Actions Right */}
                    <div className="hidden sm:flex items-center gap-4 md:gap-6 shrink-0 relative z-10">
                        <button className="text-[11px] md:text-xs font-bold text-white hover:text-brand-lavender transition-all cursor-pointer flex items-center gap-1.5 hover:translate-y-[-1px] uppercase tracking-wider whitespace-nowrap">
                            <LogIn size={13} className="md:w-4 md:h-4" /> Sign In
                        </button>
                        <Magnetic>
                            <button className="bg-white text-black px-5 md:px-7 py-2 md:py-2.5 rounded-xl md:rounded-full font-bold hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-2 text-[11px] md:text-xs shadow-xl whitespace-nowrap">
                                <Calendar size={13} className="md:w-4 md:h-4" /> Book a Demo
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile/Tablet Menu Button - Shows on lg and below to protect the layout */}
                    <button className="xl:hidden text-white p-2 relative z-10" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[-1] xl:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className="xl:hidden absolute top-full left-4 right-4 mt-4"
                        >
                            <div className="ultra-glass p-8 rounded-3xl border border-white/10 space-y-6 bg-black/60 backdrop-blur-[40px] shadow-3xl">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-xl font-light text-white hover:text-brand-lavender transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-6 border-t border-white/5 space-y-4">
                                    <button className="w-full text-left py-4 text-white font-medium text-lg flex items-center justify-between">
                                        Sign In <LogIn size={20} />
                                    </button>
                                    <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl">
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
