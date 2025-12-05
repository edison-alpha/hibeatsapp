import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";

    // Detect if custom white/light background is used
    const hasWhiteBg = className?.includes('!bg-white');
    const hasBlackBg = className?.includes('!bg-black');

    const variants = {
        primary: "bg-accent text-dark shadow-[0_0_20px_rgba(196,255,13,0.3)] before:absolute before:inset-0 before:bg-accent-hover before:rounded-full before:translate-y-full before:transition-transform before:duration-500 before:ease-out hover:before:translate-y-0",
        secondary: "bg-white/10 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:translate-y-full before:transition-transform before:duration-500 before:ease-out hover:before:translate-y-0",
        outline: "border border-white/20 before:absolute before:inset-0 before:bg-accent before:rounded-full before:translate-y-full before:transition-transform before:duration-500 before:ease-out hover:before:translate-y-0 hover:border-accent",
    };

    // Determine text colors based on variant and custom classes
    let initialTextColor = 'text-white';
    let hoverTextColor = 'text-dark';

    if (variant === 'primary' && !hasWhiteBg && !hasBlackBg) {
        // Primary variant should have dark text initially
        initialTextColor = 'text-dark';
        hoverTextColor = 'text-dark';
    } else if (hasWhiteBg) {
        // White background button: black text initially, black text on hover (with accent bg)
        initialTextColor = 'text-black';
        hoverTextColor = 'text-black';
    } else if (hasBlackBg) {
        initialTextColor = 'text-white';
        hoverTextColor = 'text-white';
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className={`relative z-10 ${initialTextColor} group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-500`}>{children}</span>
            <span className={`absolute inset-0 z-10 flex items-center justify-center ${hoverTextColor} translate-y-full group-hover:translate-y-0 transition-transform duration-500`}>{children}</span>
        </button>
    );
};

export default Button;
