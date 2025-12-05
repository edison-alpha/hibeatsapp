import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/Logo hibeats new.png';
import frame7 from '../assets/Frame 7.png';
import frame8 from '../assets/Frame 8.png';
import frame9 from '../assets/Frame 9.png';
import frame10 from '../assets/Frame 10.png';
import frame11 from '../assets/Frame 11.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      name: 'Featured',
      href: '#featured',
      dropdown: [
        {
          name: 'Trending Tracks',
          href: '#tracks',
          image: frame7,
          description: 'Discover the hottest AI-generated music tracks.',
        },
        {
          name: 'Top Artists',
          href: '#artists',
          image: frame8,
          description: 'Explore creators making waves in AI music.',
        },
        {
          name: 'Social',
          href: '#social',
          image: frame9,
          description: 'Connect, share, and earn in the music community.',
        },
        {
          name: 'New Releases',
          href: '#new',
          image: frame10,
          description: 'Fresh AI music drops from the community.',
        },
        {
          name: 'Generate Song with AI',
          href: '#generate',
          image: frame11,
          description: 'Create your own unique AI-generated music.',
        },
      ]
    },
    {
      name: 'Ecosystem',
      href: '#ecosystem',
      dropdown: [
        { name: 'Overview', href: '#overview' },
        { name: 'Partners', href: '#partners' },
        { name: 'Community', href: '#community' },
      ]
    },
    {
      name: 'Developer',
      href: '#developer',
      dropdown: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'SDK', href: '#sdk' },
        { name: 'GitHub', href: '#github' },
      ]
    },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-16">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Left side: Logo + Navigation Links */}
        <div className="flex items-center gap-8 bg-transparent md:bg-[#1D1D1D] rounded-full px-0 md:px-8 py-0 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://hibeats.xyz/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="HiBeats Logo" className="h-8 w-auto cursor-pointer" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-base text-white hover:text-[#D5FD4C] transition-colors font-medium flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className={`absolute top-full left-0 mt-2 bg-[#1D1D1D] rounded-2xl shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200 ${link.name === 'Featured' ? 'w-[1000px] p-3' : 'w-48 py-2'
                    }`}>
                    {link.name === 'Featured' ? (
                      <div className="grid grid-cols-5 gap-3">
                        {link.dropdown.map((item: any) => {
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group relative overflow-hidden bg-[#2A2A2A] hover:bg-[#333333] rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col"
                            >
                              {/* Image Container */}
                              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#1D1D1D] flex items-center justify-center">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>

                              {/* Title */}
                              <h3 className="text-white font-medium text-sm mb-2 group-hover:text-[#D5FD4C] transition-colors">
                                {item.name}
                              </h3>

                              {/* Description */}
                              <p className="text-white/50 text-xs leading-relaxed">
                                {item.description}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    ) : (
                      link.dropdown.map((item: any) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-white hover:text-[#D5FD4C] hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Join Beta Button */}
        <div className="hidden md:flex items-center bg-[#1D1D1D] rounded-full px-3 py-3">
          <a href="https://app.hibeats.xyz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <span className="relative overflow-hidden bg-black text-white font-medium px-5 py-2 rounded-full transition-all">
              <span className="absolute inset-0 bg-gradient-to-r from-[#D5FD4C] to-[#D5FD4C] rounded-full -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Join Beta!</span>
            </span>
            <div className="bg-black group-hover:bg-[#D5FD4C] rounded-full p-2 flex items-center justify-center transition-all duration-500">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" strokeWidth={3} />
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white bg-[#1D1D1D] rounded-full p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="text-lg text-white hover:text-[#D5FD4C] flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </a>
              {link.dropdown && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/70 hover:text-[#D5FD4C]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="https://app.hibeats.xyz/" target="_blank" rel="noopener noreferrer" className="w-full bg-[#D5FD4C] hover:bg-[#C5E03C] text-black font-medium px-5 py-3 rounded-full flex items-center justify-center gap-2">
            Join Beta!
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
