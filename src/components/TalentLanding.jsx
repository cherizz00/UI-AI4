import React, { Suspense, lazy } from 'react';
import TalentNavbar from './TalentNavbar';
import TalentHero from './TalentHero';
import SectionReveal from './SectionReveal';

// Lazy load below-the-fold components
const TalentFeatures = lazy(() => import('./TalentFeatures'));
const TalentBento = lazy(() => import('./TalentBento'));
const TalentAgent = lazy(() => import('./TalentAgent'));
const TalentIntelligenceFeed = lazy(() => import('./TalentIntelligenceFeed'));
const TalentAbout = lazy(() => import('./TalentAbout'));
const TalentSectionTalent = lazy(() => import('./TalentSectionTalent'));
const TalentHiring = lazy(() => import('./TalentHiring'));
const TalentRoles = lazy(() => import('./TalentRoles'));
const TalentTestimonials = lazy(() => import('./TalentTestimonials'));
const TalentPricing = lazy(() => import('./TalentPricing'));
const TalentCTA = lazy(() => import('./TalentCTA'));
const TalentFAQ = lazy(() => import('./TalentFAQ'));
const TalentFooter = lazy(() => import('./TalentFooter'));
const TalentWhatWeDo = lazy(() => import('./TalentWhatWeDo'));

const LoadingFallback = () => <div className="w-full h-0" />;

const TalentLanding = ({ setView }) => {
    return (
        <div className="relative w-full">
            <TalentNavbar setView={setView} />

            <main className="overflow-hidden">
                <SectionReveal type="scale">
                    <TalentHero />
                </SectionReveal>

                <Suspense fallback={<LoadingFallback />}>
                    <SectionReveal type="flip">
                        <TalentIntelligenceFeed />
                    </SectionReveal>

                    <SectionReveal type="slide-up">
                        <TalentWhatWeDo />
                    </SectionReveal>


                    <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

                    <SectionReveal type="slide-left">
                        <TalentFeatures />
                    </SectionReveal>

                    <SectionReveal type="slide-left">
                        <TalentAbout />
                    </SectionReveal>

                    <SectionReveal type="slide-up">
                        <TalentAgent />
                    </SectionReveal>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

                    <SectionReveal type="slide-right">
                        <TalentBento />
                    </SectionReveal>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

                    <SectionReveal type="flip">
                        <TalentSectionTalent />
                    </SectionReveal>

                    <SectionReveal type="slide-left">
                        <TalentHiring />
                    </SectionReveal>

                    <SectionReveal type="slide-right">
                        <TalentRoles />
                    </SectionReveal>

                    <SectionReveal type="slide-left">
                        <TalentTestimonials />
                    </SectionReveal>

                    <SectionReveal type="slide-right">
                        <TalentPricing />
                    </SectionReveal>

                    <SectionReveal type="flip">
                        <TalentFAQ />
                    </SectionReveal>

                    <SectionReveal type="slide-up">
                        <TalentCTA />
                    </SectionReveal>
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <TalentFooter />
            </Suspense>
        </div>
    );
};

export default TalentLanding;
