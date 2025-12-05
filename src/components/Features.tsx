import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import yourvibePage from '../assets/yourvibe page.png';

const Features: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Track window resize for responsive calculations
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track scroll progress of this section for the spread animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "center center"]
    });

    const cards = [
        {
            id: 1,
            bg: 'bg-[#6B9E86]', // Green
            wave: 'bg-[#8FC1A9]',
            text: 'Generate studio-quality music with AI assistance'
        },
        {
            id: 2,
            bg: 'bg-[#D8E5C9]', // Pale Green
            wave: 'bg-[#9CA3AF]', // Greyish
            text: 'Own your creations and trade them as digital assets'
        },
        {
            id: 3,
            bg: 'bg-[#B08C68]', // Brown
            wave: 'bg-[#4A3728]', // Dark Brown
            text: 'Engage with your fans and earn rewards directly'
        },
        {
            id: 4,
            bg: 'bg-[#EAD96C]', // Yellow
            wave: 'bg-[#C4B040]', // Darker Yellow
            text: 'Collaborate with other artists in real-time'
        },
        {
            id: 5,
            bg: 'bg-[#3E5F4E]', // Dark Green
            wave: 'bg-[#1F2E25]', // Darker / Blackish
            text: 'Find your song by location, mood, genre, and cloud'
        },
    ];

    // Calculate layout values based on screen width
    const isMobile = windowWidth < 768;
    const padding = isMobile ? 24 : 64; // px-6 (24px) vs px-16 (64px)
    const cardWidth = isMobile ? 260 : 380;
    const cardSpacing = isMobile ? 280 : 420;
    const totalWidth = padding + (cards.length * cardSpacing) + padding;

    const scrollLeft = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: -cardSpacing, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: cardSpacing, behavior: 'smooth' });
        }
    };

    // Header visibility based on scroll progress
    const headerOpacity = useTransform(
        scrollYProgress,
        [0.65, 0.75],
        [0, 1]
    );

    const headerY = useTransform(
        scrollYProgress,
        [0.65, 0.75],
        [-20, 0]
    );

    return (
        <section className="py-20 relative overflow-hidden min-h-screen flex flex-col justify-center bg-black" ref={containerRef}>
            {/* Header with Featured text and navigation buttons - only visible when cards are in final position */}
            <div className="w-full z-10" style={{ paddingLeft: padding, paddingRight: padding }}>
                <motion.div
                    className="flex justify-between items-center mb-8"
                    style={{
                        opacity: headerOpacity,
                        y: headerY
                    }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-white">Featured</h2>
                    <div className="flex gap-3">
                        <button
                            onClick={scrollLeft}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scrollable Container */}
            <div
                className="overflow-x-auto hide-scrollbar w-full"
                ref={cardsContainerRef}
            >
                {/* Inner Container with explicit width to allow scrolling and centering */}
                <div
                    className="relative h-[600px] mx-auto"
                    style={{ width: totalWidth }}
                >
                    {cards.map((card, index) => {
                        // Calculate target position for Left Alignment
                        const cardLeft = padding + (index * cardSpacing);
                        const cardCenter = cardLeft + (cardWidth / 2);
                        const centerScreen = windowWidth / 2;

                        // Start: Center of screen (relative to card's final position)
                        // End: 0 (Natural position)
                        const startX = centerScreen - cardCenter;

                        // Transform values based on scroll progress
                        const x = useTransform(
                            scrollYProgress,
                            [0.2, 0.7],
                            [startX, 0]
                        );

                        const rotate = useTransform(
                            scrollYProgress,
                            [0.2, 0.7],
                            [0, 0]
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [0.2, 0.7],
                            [0.95, 1]
                        );

                        const opacity = useTransform(
                            scrollYProgress,
                            [0, 0.3, 1],
                            [0, 1, 1]
                        );

                        return (
                            <motion.div
                                key={card.id}
                                className={`${card.bg} w-[260px] md:w-[380px] h-[450px] md:h-[550px] rounded-[30px] md:rounded-[40px] absolute overflow-hidden flex flex-col shadow-2xl`}
                                style={{
                                    left: cardLeft,
                                    x,
                                    rotate,
                                    scale,
                                    opacity,
                                    zIndex: index,
                                }}
                            >
                                {/* Content */}
                                <div className="p-6 md:p-8 relative z-10">
                                    <h3 className="text-[26px] md:text-3xl font-medium text-black leading-tight max-w-[280px]">
                                        {card.text}
                                    </h3>
                                </div>

                                {/* Wave Shape */}
                                <div className={`absolute bottom-0 left-0 right-0 h-[35%] ${card.wave} rounded-tr-[100%] z-0`}></div>

                                {/* Phone Image */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[80%]">
                                    <img
                                        src={yourvibePage}
                                        alt="App Interface"
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
