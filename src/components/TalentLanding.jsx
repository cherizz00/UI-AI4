import React from 'react';
import TalentNavbar from './TalentNavbar';
import TalentHero from './TalentHero';
import TalentFeatures from './TalentFeatures';
import TalentBento from './TalentBento';
import TalentAgent from './TalentAgent';
import TalentIntelligenceFeed from './TalentIntelligenceFeed';
import TalentAbout from './TalentAbout';
import TalentSectionTalent from './TalentSectionTalent';
import TalentRoles from './TalentRoles';
import TalentPricing from './TalentPricing';
import TalentCTA from './TalentCTA';
import TalentFAQ from './TalentFAQ';
import TalentFooter from './TalentFooter';
import TalentWhatWeBuild from './TalentWhatWeBuild';
import SectionReveal from './SectionReveal';

const TalentLanding = ({ setView }) => {
    return (
        <div className="relative w-full">
            <TalentNavbar setView={setView} />

            <main className="overflow-hidden">
                <SectionReveal type="scale">
                    <TalentHero />
                </SectionReveal>

                <SectionReveal type="flip">
                    <TalentIntelligenceFeed />
                </SectionReveal>

                <SectionReveal type="slide-up">
                    <TalentWhatWeBuild />
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



                <SectionReveal type="slide-right">
                    <TalentRoles />
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
            </main>

            <TalentFooter setView={setView} />
        </div>
    );
};

export default TalentLanding;
