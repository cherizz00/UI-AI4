import React, { useState } from 'react';
import TalentBackground from './components/TalentBackground';
import TalentLanding from './components/TalentLanding';
import TalentAuth from './components/TalentAuth';
import TalentSmoothScroll from './components/TalentSmoothScroll';
import TalentFlowingBackground from './components/TalentFlowingBackground';
import { AnimatePresence, motion } from 'framer-motion';

import TalentWhoWeAre from './components/TalentWhoWeAre';

function App() {
    const [view, setView] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('page') || 'landing';
    });

    return (
        <TalentSmoothScroll>
            <TalentBackground>
                <TalentFlowingBackground />
                <AnimatePresence mode="wait">
                    {view === 'who-we-are' ? (
                        <motion.div
                            key="who-we-are"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TalentWhoWeAre setView={setView} />
                        </motion.div>
                    ) : view === 'landing' ? (
                        <motion.div
                            key="landing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TalentLanding setView={setView} />
                        </motion.div>
                    ) : view === 'auth' ? (
                        <motion.div
                            key="auth"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TalentAuth setView={setView} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="coming-soon"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-slate-900 leading-tight">
                                Platform <span className="text-fade">Expansion.</span>
                            </h2>
                            <p className="text-slate-600 font-medium mb-12 max-w-lg mx-auto">
                                This module is currently under high-fidelity development. We're bridging the gap between raw data and institutional alpha.
                            </p>
                            <button
                                onClick={() => setView('landing')}
                                className="bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-xs"
                            >
                                Back to Terminal
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </TalentBackground>
        </TalentSmoothScroll>
    );
}

export default App;
