import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import frame7 from '../assets/Frame 7.png';
import frame8 from '../assets/Frame 8.png';
import frame9 from '../assets/Frame 9.png';
import frame10 from '../assets/Frame 10.png';
import frame11 from '../assets/Frame 11.png';

const Ecosystem: React.FC = () => {
    const floatingIcons = [
        {
            src: frame7,
            alt: "Trending",
            title: "Trending",
            desc: "Discover what's hot",
            className: "top-[15%] left-[8%] md:left-[15%] w-20 md:w-32",
            delay: 0,
            tooltipSide: "right"
        },
        {
            src: frame8,
            alt: "Artists",
            title: "Artists",
            desc: "Connect with creators",
            className: "top-[20%] right-[8%] md:right-[15%] w-24 md:w-36",
            delay: 1,
            tooltipSide: "left"
        },
        {
            src: frame9,
            alt: "Social",
            title: "Social",
            desc: "Join the community",
            className: "bottom-[25%] left-[5%] md:left-[12%] w-16 md:w-24",
            delay: 2,
            tooltipSide: "right"
        },
        {
            src: frame10,
            alt: "Releases",
            title: "Releases",
            desc: "New drops daily",
            className: "bottom-[20%] right-[5%] md:right-[12%] w-20 md:w-32",
            delay: 1.5,
            tooltipSide: "left"
        },
        {
            src: frame11,
            alt: "Generate",
            title: "Generate",
            desc: "Create with AI",
            className: "bottom-[10%] left-1/2 -translate-x-1/2 w-20 md:w-32",
            delay: 0.5,
            tooltipSide: "top"
        },
    ];

    return (
        <section className="relative py-24 md:py-80 bg-black flex flex-col items-center justify-center min-h-screen">
            {/* Floating Icons Background */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${icon.className} pointer-events-auto group`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4 + index,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: icon.delay,
                            }}
                            className="relative"
                        >
                            {/* Icon */}
                            <div className="bg-[#1D1D1D] p-3 rounded-2xl border border-white/5 shadow-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                                <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain rounded-xl" />
                            </div>

                            {/* Tooltip Card */}
                            <div className={`
                                absolute z-50 w-48 bg-white rounded-xl p-4 shadow-xl 
                                opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100
                                ${icon.tooltipSide === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-4' : ''}
                                ${icon.tooltipSide === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-4' : ''}
                                ${icon.tooltipSide === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-4' : ''}
                            `}>
                                <h4 className="text-black font-medium text-lg leading-tight mb-1">{icon.title}</h4>
                                <p className="text-gray-500 text-sm font-medium">{icon.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Central Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-tight"
                >
                    Everything you need to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5FD4C] to-white">amplify your sound</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                    Generate AI music, trade assets, connect with fans, and earn rewards.
                    Discover the complete SocialFi music ecosystem built for creators like you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button className="!px-10 !py-5 !text-lg w-full sm:w-auto">
                        Start Creating
                    </Button>
                    <Button variant="outline" className="!px-10 !py-5 !text-lg w-full sm:w-auto !border-white/20">
                        Explore Ecosystem
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Ecosystem;
