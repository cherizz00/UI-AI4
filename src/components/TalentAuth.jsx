import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ChevronLeft } from 'lucide-react';

const InputField = ({ icon: Icon, type, placeholder }) => (
    <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-orange transition-colors duration-300" size={18} />
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all duration-300 shadow-inner"
        />
    </div>
);

const TalentAuth = ({ setView }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden p-6">

            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-periwinkle/20 rounded-full blur-[100px] pointer-events-none opacity-40" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >

                <button
                    onClick={() => setView('landing')}
                    className="absolute -top-16 left-0 flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </button>

                <div className="glass-card p-8 md:p-10 rounded-[32px] shadow-3xl border border-white/40">
                    <div className="text-center mb-8">
                        <motion.div
                            key={isLogin ? "login-header" : "signup-header"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-3xl font-serif text-slate-900 mb-2">
                                {isLogin ? "Welcome Back." : "Join the Elite."}
                            </h2>
                            <p className="text-slate-500 text-sm font-medium">
                                {isLogin ? "Access your proprietary strategies." : "Begin your journey to alpha generation."}
                            </p>
                        </motion.div>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <AnimatePresence mode="popLayout">
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <InputField icon={User} type="text" placeholder="Full Name" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <InputField icon={Mail} type="email" placeholder="Email Address" />
                        <InputField icon={Lock} type="password" placeholder="Password" />

                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer hover:text-slate-700">
                                <input type="checkbox" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
                                <span>Remember me</span>
                            </label>
                            {isLogin && (
                                <button className="hover:text-brand-orange transition-colors">Forgot Password?</button>
                            )}
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl mt-6 group">
                            {isLogin ? "Sign In" : "Create Account"}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/50" />
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-white/50 px-4 text-slate-400 font-bold backdrop-blur-sm">Or continue with</span></div>
                    </div>

                    <div className="w-full">
                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/20 transition-all font-semibold text-slate-700 text-sm">
                            <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Google
                        </button>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-slate-500 text-sm font-medium">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-brand-orange hover:text-brand-orange/80 font-bold transition-colors"
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TalentAuth;
