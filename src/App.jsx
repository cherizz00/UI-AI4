import React from 'react';
import TalentBackground from './components/TalentBackground';
import TalentNavbar from './components/TalentNavbar';
import TalentHero from './components/TalentHero';
import TalentFeatures from './components/TalentFeatures';
import TalentBento from './components/TalentBento';
import TalentIntelligenceFeed from './components/TalentIntelligenceFeed';
import TalentAbout from './components/TalentAbout';
import TalentSectionCompanies from './components/TalentSectionCompanies';
import TalentSectionTalent from './components/TalentSectionTalent';
import TalentHiring from './components/TalentHiring';
import TalentRoles from './components/TalentRoles';
import TalentRecruiters from './components/TalentRecruiters';
import TalentTestimonials from './components/TalentTestimonials';
import TalentPricing from './components/TalentPricing';
import TalentFAQ from './components/TalentFAQ';
import TalentFooter from './components/TalentFooter';
import { motion } from 'framer-motion';

function App() {
    return (
        <TalentBackground>
            <TalentNavbar />

            <main className="overflow-hidden">
                <TalentHero />

                {/* Subtle Decorative Transition */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-periwinkle/20 to-transparent" />

                <TalentFeatures />

                <TalentBento />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-lavender/20 to-transparent" />

                <TalentIntelligenceFeed />
                <TalentAbout />

                <TalentSectionCompanies />
                <TalentSectionTalent />

                <TalentHiring />
                <TalentRoles />
                <TalentRecruiters />
                <TalentTestimonials />

                <TalentPricing />
                <TalentFAQ />

                {/* Final CTA Section */}
                <section className="py-32 md:py-48 lg:py-60 relative overflow-hidden">
                    <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-beautique tracking-tight mb-6 md:mb-8">
                                Ready to find <br />
                                <span className="brand-highlight text-4xl sm:text-5xl md:text-6xl">Your Edge?</span>
                            </h2>
                            <p className="text-slate-400 text-sm md:text-lg lg:text-xl font-light mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto opacity-70 leading-relaxed px-4">
                                Join the ranks of the world's most sophisticated quantitative mandates.
                            </p>
                            <button className="w-full sm:w-auto bg-white text-black px-10 md:px-14 py-4 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:bg-slate-200 transition-all shadow-2xl">
                                Get Started Now
                            </button>
                        </motion.div>
                    </div>

                    {/* Decorative Background for Final CTA */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-periwinkle/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
                </section>
            </main>

            <TalentFooter />
        </TalentBackground>
    );
}

export default App;
