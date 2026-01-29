import React, { useState } from 'react';
import TalentBackground from './components/TalentBackground';
import TalentLanding from './components/TalentLanding';
import TalentAuth from './components/TalentAuth';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [view, setView] = useState('landing');

    return (
        <TalentBackground>
            <AnimatePresence mode="wait">
                {view === 'landing' ? (
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
    );
}

export default App;
