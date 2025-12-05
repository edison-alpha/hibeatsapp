import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import phoneImg from '../assets/phone.png';
import eclipseImg from '../assets/hibetas eclips.png';
import somniaImg from '../assets/somnia.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FallingPattern } from './ui/falling-pattern';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Fade out text as we scroll - Starts later when phone reaches "powered by somnia"
    const fadeRange = isMobile ? [0, 0.5] : [0.25, 0.55];
    const textOpacity = useTransform(scrollYProgress, fadeRange, [1, 0]);
    const textScale = useTransform(scrollYProgress, fadeRange, [1, 0.9]);

    return (
        <section ref={containerRef} className="relative">
            {/* Background Elements - Animated */}
            {/* <AnimatedBackground /> */}
            <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none -z-20" />

            {/* Scroll Container */}
            <div className="relative h-[150vh] md:h-[300vh]">

                {/* Sticky Text Section */}
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-0 px-4">
                    {/* Falling Pattern Background */}
                    {/* Falling Pattern Background */}
                    <div className="absolute inset-0 z-0">
                        <FallingPattern blurIntensity="4px" className="h-screen [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" />
                    </div>

                    {/* Content */}
                    <motion.div
                        style={{ opacity: textOpacity, scale: textScale }}
                        className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center h-full"
                    >
                        <p className="text-gray-400 mb-3 text-sm md:text-base">Music engagement that takes you places</p>

                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 tracking-tight">
                            The First <span className="inline-block align-middle mx-2"><img src={eclipseImg} alt="icon" className="h-10 w-10 md:h-20 md:w-20 animate-spin-slow" /></span> Socialfi
                            <br />
                            for AI <span className="text-white">Music Creation</span>
                        </h1>

                        <p className="text-white mb-10 flex items-center justify-center gap-2 text-lg">
                            powered by <img src={somniaImg} alt="somnia" className="h-6 inline-block" />
                        </p>

                        <div className="flex justify-center">
                            <a href="https://app.hibeats.xyz/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="!px-10 !py-4 !text-lg !rounded-full !border-white/50 hover:!border-accent hover:!bg-accent/5 shadow-[0_10px_30px_-10px_rgba(213,253,76,0.2)] transition-all duration-300 hover:scale-105">
                                    Join Beta !
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Phone Section - Scrolls over the text */}
                <div className="sticky top-32 md:relative md:top-auto z-10 flex flex-col items-center justify-end w-full pointer-events-none -mt-[20vh] md:mt-0">
                    {/* Spacer to push phone down initially */}
                    <div className="h-0 md:h-[100vh]"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full pointer-events-auto relative"
                    >
                        {/* Background Curtain removed as requested */}


                        {/* Phone Image */}
                        <div className="max-w-[220px] md:max-w-[320px] mx-auto perspective-1000">
                            <div className="relative transform transition-transform duration-700 hover:scale-105">
                                <img
                                    src={phoneImg}
                                    alt="App Interface"
                                    className="w-full h-auto drop-shadow-[0_0_50px_rgba(196,255,13,0.2)]"
                                />
                                {/* Floating Elements/Glow behind phone */}
                                <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 rounded-full opacity-50" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Text - Next Section - Positioned closer to phone */}
            <div className="relative z-10 bg-dark pt-8 md:pt-20 pb-20 text-center">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="text-3xl md:text-7xl font-medium leading-tight"
                >
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">Create,</motion.span>{" "}
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block align-middle mx-1">
                        <img src={eclipseImg} alt="icon" className="h-10 w-10 md:h-16 md:w-16" />
                    </motion.span>{" "}
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">Own song,</motion.span>{" "}
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">Trade,</motion.span>
                    <br />
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">Share and Earn</motion.span>
                </motion.h2>
            </div>
        </section>
    );
};

export default Hero;
