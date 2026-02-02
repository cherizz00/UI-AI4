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
                    ) : (
                        <motion.div
                            key="auth"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TalentAuth setView={setView} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </TalentBackground>
        </TalentSmoothScroll>
    );
}

export default App;
