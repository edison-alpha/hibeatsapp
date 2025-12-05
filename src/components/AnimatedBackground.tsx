import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bgImg from '../assets/background.png';

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Orbs configuration
        const orbs = [
            { x: Math.random() * width, y: Math.random() * height, r: 300, dx: 0.5, dy: 0.5, color: 'rgba(213, 253, 76, 0.15)' }, // Lime Green
            { x: Math.random() * width, y: Math.random() * height, r: 400, dx: -0.5, dy: 0.3, color: 'rgba(76, 29, 149, 0.1)' }, // Deep Purple
            { x: Math.random() * width, y: Math.random() * height, r: 350, dx: 0.3, dy: -0.5, color: 'rgba(255, 255, 255, 0.05)' }, // White
            { x: Math.random() * width, y: Math.random() * height, r: 250, dx: -0.3, dy: -0.3, color: 'rgba(213, 253, 76, 0.1)' }, // Lime Green
        ];

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw orbs
            orbs.forEach(orb => {
                // Move
                orb.x += orb.dx;
                orb.y += orb.dy;

                // Bounce
                if (orb.x < -orb.r || orb.x > width + orb.r) orb.dx *= -1;
                if (orb.y < -orb.r || orb.y > height + orb.r) orb.dy *= -1;

                // Draw
                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 -z-10">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                {/* Animated Background Image */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0.4 }}
                    animate={{
                        scale: [1.1, 1.2, 1.1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImg})` }}
                />

                {/* Dark Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Canvas for Orbs */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-screen"
                />
            </div>
        </div>
    );
};

export default AnimatedBackground;
