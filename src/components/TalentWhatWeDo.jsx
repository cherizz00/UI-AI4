import React from 'react';
import { motion } from 'framer-motion';

const TalentWhatWeDo = () => {
    return (
        <section className="bg-[#F4F4F4] py-24 md:py-32 flex flex-col items-center text-center px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-fluid-h2 mb-10 text-black">
                    What We Do
                </h2>
                <p className="font-serif text-[1.25rem] md:text-[1.75rem] leading-[1.4] text-black/80 mb-12 max-w-3xl mx-auto">
                    Stop trading on noise. <strong>AI4INVEST</strong> processes 50,000+ global data points overnight to distill
                    <span className="text-brand-orange"> clear, actionable insights</span> into a concise 5-minute morning brief.
                </p>
                <button className="badge-institutional text-black flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    <span className="text-brand-orange text-lg">+</span> READ MORE
                </button>
            </div>
        </section>
    );
};

export default TalentWhatWeDo;
