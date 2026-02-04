import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Rocket, Heart, ArrowLeft, Mail, Linkedin, Globe, Shield, Zap } from 'lucide-react';
import TalentTestimonials from './TalentTestimonials';

const team = [
    {
        name: "CHNADRASEKHAR S.",
        role: "Founder & CEO",
        bio: "Visionary strategist bridging the gap between engineered intelligence and capital allocation. Former global macro director.",
        image: "/team/founder.png",
        education: "IIT & NIT Alumnus"
    },
    {
        name: "Dr. Aris V.",
        role: "Chief Economist",
        bio: "Specializing in macro-regime detection and sovereign risk modelling. Leading the collective in decoding global policy shifts.",
        image: "/team/economist.png"
    },
    {
        name: "Sarah Chen",
        role: "Head of Quantitative Research",
        bio: "Expert in microstructure dynamics and cross-asset correlation matrices. Driving statistical rigor across the modelling stack.",
        image: "/team/quant_research.png"
    },
    {
        name: "Marcus Thorne",
        role: "Lead Systems Architect",
        bio: "Low-latency inference expert focused on the implementation of the Mixture of Experts architecture.",
        image: "/team/systems_architect.png"
    },
    {
        name: "Elena Rossi",
        role: "Senior Backend Engineer",
        bio: "Architecting the distributed infrastructure for sovereign-scale data ingestion and processing.",
        image: "/team/backend_engineer.png"
    },
    {
        name: "Julian Wei",
        role: "Full-Stack Developer",
        bio: "Designing high-fidelity terminal interfaces for autonomous intelligence visualization.",
        image: "/team/developer.png"
    }
];

const networkNodes = [
    { id: 1, role: "Quant Dev", image: "/team/node_quant.png", angle: 0 },
    { id: 2, role: "Data Analyst", image: "/team/node_data.png", angle: 45 },
    { id: 3, role: "Macro Analyst", image: "/team/node_macro.png", angle: 90 },
    { id: 4, role: "HFT Engineer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop", angle: 135 },
    { id: 5, role: "Ops Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", angle: 180 },
    { id: 6, role: "ML Researcher", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop", angle: 225 },
    { id: 7, role: "Risk Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", angle: 270 },
    { id: 8, role: "Cloud Dev", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", angle: 315 },
];

const AlphaTree = () => {
    const [isHolding, setIsHolding] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const holdTimer = React.useRef(null);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const startHold = () => {
        holdTimer.current = setTimeout(() => setIsHolding(true), 200);
    };

    const endHold = () => {
        clearTimeout(holdTimer.current);
        setIsHolding(false);
    };

    return (
        <div className="relative pt-20 pb-48 md:pt-32 md:pb-96 overflow-visible flex flex-col items-center justify-center min-h-[700px] border-t border-slate-200">
            <div className="text-center mb-40 md:mb-80 relative z-20 transition-all duration-500">
                <p className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The Talent Network</p>
                <h3 className="text-4xl font-jakarta font-bold mb-8">Structural Intelligence Hub</h3>
                <motion.div
                    animate={{ opacity: isHolding ? 0 : 1, y: isHolding ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-2xl"
                >
                    <Zap size={12} className="text-brand-orange animate-pulse" />
                    Tap & Hold to Reveal Network
                </motion.div>
            </div>

            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Central Hub Node */}
                <motion.div
                    onPointerDown={startHold}
                    onPointerUp={endHold}
                    onPointerLeave={endHold}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-30 w-28 h-28 md:w-32 md:h-32 rounded-full border-4 ${isHolding ? 'border-brand-orange bg-white' : 'border-slate-200 bg-slate-50'} cursor-pointer flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.05)] transition-all duration-700 overflow-hidden touch-none`}
                >
                    <div className="text-center">
                        <span className="block text-[8px] md:text-[10px] font-bold uppercase tracking-tighter text-slate-400 mb-1">Alpha</span>
                        <span className="block text-xl md:text-2xl font-bold tracking-tighter text-slate-900 leading-none">HUB</span>
                    </div>
                </motion.div>

                {/* Animated Lines and Nodes */}
                {networkNodes.map((node, i) => {
                    // Responsive radius: 140px for mobile, 260px for desktop
                    // Increased desktop radius to ensure no overlap
                    const radius = isHolding ? (isMobile ? 140 : 260) : 0;
                    const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((node.angle * Math.PI) / 180) * radius;

                    return (
                        <div key={node.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Branching Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: isHolding ? radius : 0 }}
                                className="absolute h-[1.5px] bg-gradient-to-r from-brand-orange/40 via-slate-200 to-transparent opacity-50 transition-all duration-700"
                                style={{
                                    rotate: `${node.angle}deg`,
                                    transformOrigin: 'left center',
                                    left: '50%',
                                    transform: 'translate3d(0,0,0)'
                                }}
                            />

                            {/* Network Node */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: isHolding ? 1 : 0,
                                    scale: isHolding ? 1 : 0,
                                    x, y
                                }}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 150,
                                    delay: i * 0.04
                                }}
                                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white bg-white shadow-premium overflow-visible pointer-events-auto group z-40"
                                style={{ transform: 'translate3d(0,0,0)' }}
                            >
                                <div className="w-full h-full rounded-full overflow-hidden border border-slate-100">
                                    <img src={node.image} alt={node.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>

                                {/* Refined External Labels - Fixed Overlap */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-xl border border-white/10">
                                        {node.role}
                                    </div>
                                    <div className="w-2 h-2 bg-slate-900 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 border-l border-t border-white/10" />
                                </div>

                                {/* Minimal Indicator Label (shown when not hovered) */}
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:opacity-0 transition-opacity rounded-full" />
                            </motion.div>
                        </div>
                    );
                })}

                {/* Pulsating Ring */}
                {!isHolding && (
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-brand-orange/40"
                    />
                )}
            </div>
        </div>
    );
};

const TalentWhoWeAre = ({ setView }) => {
    return (
        <div className="min-h-[100dvh] bg-[#F8F9FA] text-slate-900 font-sans selection:bg-brand-orange/20">
            {/* Minimalist Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
                <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <button
                        onClick={() => setView('landing')}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-orange transition-colors"
                    >
                        <ArrowLeft size={14} /> Back to Terminal
                    </button>
                    <div className="text-xl font-bold tracking-tighter">
                        <span className="text-fade">AI4</span>INVEST
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24">
                <div className="container max-w-5xl mx-auto px-6">
                    {/* Identity Hero */}
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-fluid-h2 font-serif tracking-tight mb-8 leading-tight">
                                Who We Are <br />
                                <span className="text-fade italic opacity-60">(This is our identity)</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 font-serif italic leading-relaxed max-w-3xl border-l-4 border-brand-orange pl-8">
                                At AI4INVEST, complex finance meets engineered intelligence to power confident, data-driven decisions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Core Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            {
                                icon: <Users className="text-brand-orange" />,
                                text: "A decision-science collective of economists, quantitative researchers, engineers, and finance professionals working as a single intelligence unit."
                            },
                            {
                                icon: <Rocket className="text-brand-orange" />,
                                text: "Builders who combine macroeconomic reasoning, statistical rigor, and market intuition to decode how capital actually moves."
                            },
                            {
                                icon: <BookOpen className="text-brand-orange" />,
                                text: "Practitioners who believe markets are not random — they are structured systems shaped by incentives, policy, liquidity, and human behaviour."
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center">
                                    {pillar.icon}
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium capitalize">
                                    {pillar.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team Section */}
                    <div className="border-t border-slate-200 pt-24">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4">
                                <Shield size={10} className="text-brand-orange" />
                                <span className="text-[9px] font-bold text-brand-orange uppercase tracking-widest">The IIT-NIT Collective</span>
                            </div>
                            <h2 className="text-3xl font-jakarta font-bold mb-4">The Collective</h2>
                            <p className="text-slate-500 max-w-xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">Bridging the gap between raw data and sovereign alpha</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group bg-white rounded-[32px] p-8 border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    {member.education && (
                                        <div className="text-[7px] font-bold uppercase tracking-widest text-brand-orange mb-2">{member.education}</div>
                                    )}
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-4 border-t border-slate-50 pt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <Linkedin size={16} className="cursor-pointer hover:text-brand-orange" />
                                        <Mail size={16} className="cursor-pointer hover:text-brand-orange" />
                                        <Globe size={16} className="cursor-pointer hover:text-brand-orange" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Alpha Tree Section */}
                    <AlphaTree />

                    <TalentTestimonials />

                    {/* Institutional Note */}
                    <div className="mt-20 border-t border-slate-200 pt-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-3xl font-jakarta font-bold mb-8">Systemic Philosophy</h2>
                                <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        We operate on the conviction that markets are structured systems, not random walks. By applying engineering-level rigor to financial data, we identify the governing incentives and policy shifts that drive long-term capital displacement.
                                    </p>
                                    <p>
                                        Our architecture is designed for specialized financial inference — moving beyond simple predictive models toward a cohesive, autonomous modelling stack.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-900 rounded-[48px] p-12 text-white flex flex-col justify-center shadow-3xl">
                                <h4 className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-6">Our Mandate</h4>
                                <blockquote className="text-2xl font-serif italic leading-tight mb-8">
                                    "To bridge the divide between raw market noise and institutional-grade actionable intelligence through sovereign-scale modelling."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-brand-orange"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">The AI4INVEST Board</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-40 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white shadow-2xl">
                            <Heart size={14} className="text-brand-orange" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Engineering Alpha Since 2024</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TalentWhoWeAre;
