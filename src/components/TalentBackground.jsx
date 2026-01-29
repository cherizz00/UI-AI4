import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TalentBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden bg-grid">
            {/* Base Grain/Texture - Subtle Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-soft-light" />

            {/* Premium Mesh Gradients - High Blur Apple Style */}
            <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-100/30 blur-[180px] rounded-full pointer-events-none mix-blend-multiply animate-pulse-slow" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none mix-blend-multiply animate-pulse-slow-reverse" />
            <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-indigo-50/40 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

            {/* Content Overflow */}
            <div className="relative z-10 w-full min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default TalentBackground;
