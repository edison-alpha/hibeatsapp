import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import handMockup from '../assets/hand_mockup.png';
import { Check } from 'lucide-react';

const Waitlist: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
            }, 3000);
        }, 1000);
    };

    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side: Hand Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="relative w-full max-w-[350px] md:max-w-[500px]">
                        {/* Glow effect behind the phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[80px] rounded-full -z-10"></div>
                        <img
                            src={handMockup}
                            alt="HiBeats App Mockup"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-tight">
                        Get on <br />
                        the waitlist
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md mx-auto md:mx-0">
                        The new experience is coming to all music creators soon. Be the first to access the future of SocialFi music.
                    </p>

                    <form className="flex flex-col gap-4 max-w-md mx-auto md:mx-0" onSubmit={handleSubmit}>
                        <div className="relative">
                            <motion.input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitted}
                                className="w-full px-6 py-4 rounded-full bg-[#1D1D1D] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-lg disabled:opacity-50"
                                animate={isSubmitted ? { scale: [1, 1.02, 1] } : {}}
                                transition={{ duration: 0.3 }}
                            />
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent rounded-full p-2"
                                    >
                                        <Check className="w-5 h-5 text-black" strokeWidth={3} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.div
                            animate={isLoading ? { scale: [1, 0.98, 1] } : {}}
                            transition={{ duration: 0.5, repeat: isLoading ? Infinity : 0 }}
                        >
                            <Button
                                type="submit"
                                disabled={isSubmitted || isLoading}
                                className="w-full !py-4 !text-lg !bg-white before:!bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Sending...' : isSubmitted ? 'Successfully Added!' : 'Get early access'}
                            </Button>
                        </motion.div>

                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-accent text-sm font-medium text-center"
                                >
                                    ✨ Thank you! Check your email for confirmation.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>

                    <p className="mt-6 text-xs text-gray-600 max-w-sm mx-auto md:mx-0">
                        Sign up to receive product updates. Learn how we collect your information by visiting our Privacy Policy.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Waitlist;
