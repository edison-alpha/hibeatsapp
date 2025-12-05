import React from 'react';
import logo from '../assets/Logo hibeats new.png';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent rounded-t-[3rem] pt-20 pb-10 px-4 md:px-10 text-dark mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
          {/* Logo */}
          <div>
            <a href="https://hibeats.xyz/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="HiBeats" className="h-10 w-auto brightness-0 cursor-pointer" />
            </a>
          </div>

          {/* Newsletter */}
          <div className="bg-[#eefcc7] rounded-3xl p-8 w-full md:w-[600px]">
            <h3 className="text-2xl font-medium mb-4">Stay in the loop</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Get the latest updates on new features, exclusive drops, and community events.
              </p>
              <Button className="!bg-black !text-white !px-8 before:!bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 text-sm font-medium">
          <div>
            <h4 className="font-medium mb-4 text-lg">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#ecosystem" className="hover:underline">Ecosystem</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#roadmap" className="hover:underline">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-lg">Community</h4>
            <ul className="space-y-2">
              <li><a href="#artists" className="hover:underline">Artists</a></li>
              <li><a href="#creators" className="hover:underline">Creators</a></li>
              <li><a href="#events" className="hover:underline">Events</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-lg">Developers</h4>
            <ul className="space-y-2">
              <li><a href="#docs" className="hover:underline">Documentation</a></li>
              <li><a href="#api" className="hover:underline">API</a></li>
              <li><a href="#sdk" className="hover:underline">SDK</a></li>
              <li><a href="#github" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-lg">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/hibeats" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
              <li><a href="https://discord.gg/hibeats" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a></li>
              <li><a href="https://t.me/hibeats" target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram</a></li>
              <li><a href="https://instagram.com/hibeats" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
