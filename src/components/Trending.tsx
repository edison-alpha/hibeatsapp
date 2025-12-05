import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';
import moonlitRendezvous from '../assets/moonlitRendezvous.jpg';
import shatteredCurrents from '../assets/shatteredCurrents.jpg';
import shatteredGlow from '../assets/shatteredGlow.jpg';

const Trending: React.FC = () => {
    const albums = [
        {
            id: 1,
            image: moonlitRendezvous,
            title: "Moonlit Rendezvous",
            artist: "aplology",
            likes: "24.5k",
            genre: "Lo-Fi / Chill"
        },
        {
            id: 2,
            image: shatteredCurrents,
            title: "Shattered Currents",
            artist: "bayy",
            likes: "18.2k",
            genre: "Synthwave"
        },
        {
            id: 3,
            image: shatteredGlow,
            title: "Shattered Glow",
            artist: "hibeatslovers",
            likes: "32.1k",
            genre: "Ambient AI"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#D5FD4C]/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
                            Trending <span className="text-[#D5FD4C]">This Week</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-xl">
                            Discover the most popular AI-generated tracks and albums making waves in the community.
                        </p>
                    </div>
                    <button className="px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                        View All Charts
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {albums.map((album, index) => (
                        <motion.div
                            key={album.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Image Container */}
                            <div className="relative aspect-square rounded-[24px] overflow-hidden mb-4">
                                <img
                                    src={album.image}
                                    alt={album.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                    <button className="w-12 h-12 rounded-full bg-[#D5FD4C] text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-110">
                                        <Play className="w-5 h-5 fill-current ml-1" />
                                    </button>
                                </div>

                                {/* Top Tags */}
                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-wider font-medium text-white border border-white/10">
                                        {album.genre}
                                    </span>
                                </div>
                            </div>

                            {/* Card Info */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-white group-hover:text-[#D5FD4C] transition-colors">
                                            {album.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">{album.artist}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs bg-white/5 px-2 py-1 rounded-full">
                                        <Heart className="w-3 h-3 text-[#D5FD4C]" />
                                        <span>{album.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
