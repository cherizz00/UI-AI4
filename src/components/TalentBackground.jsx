import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TalentBackground = ({ children }) => {
    return (
        <div className="relative min-h-[100dvh] bg-white overflow-hidden bg-grid">

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />


            <div className="absolute -top-[5%] -right-[5%] w-[40%] md:w-[60%] h-[30%] md:h-[60%] bg-blue-100/20 blur-[60px] md:blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
            <div className="absolute -bottom-[5%] -left-[5%] w-[40%] md:w-[60%] h-[30%] md:h-[60%] bg-brand-orange/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
            <div className="absolute top-[30%] left-[20%] w-[30%] md:w-[50%] h-[20%] md:h-[50%] bg-indigo-50/30 blur-[40px] md:blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />


            <div className="relative z-10 w-full min-h-[100dvh]">
                {children}
            </div>
        </div>
    );
};

export default TalentBackground;
