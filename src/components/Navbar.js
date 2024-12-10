import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-center items-center relative">
        {/* Mobile Menu Button - Positioned Absolutely */}
        <div className="absolute left-4 md:hidden">
          <button 
            onClick={toggleMenu} 
            className="outline-none mobile-menu-button"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white hover:text-green-500 transition duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-white hover:text-green-500 transition duration-300" />
            )}
          </button>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Full Height, Sliding from Left */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-50 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out 
          md:hidden
        `}
      >
        <div className="relative h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b">
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-green-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Centered Menu Items */}
          <div className="flex-grow flex flex-col justify-center items-center space-y-6">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className="text-2xl text-gray-700 hover:text-green-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
                {/* Divider (except for last item) */}
                {index < navItems.length - 1 && (
                  <div className="w-1/2 border-t border-gray-300 my-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;