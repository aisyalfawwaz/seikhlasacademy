import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-800 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-yellow-600">Seikhlas Academy</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#services">Layanan</NavLink>
            <NavLink href="#testimonials">Testimoni</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/62881027818897?text=Halo,%20saya%20ingin%20memesan%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none transition duration-300"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="#services">Layanan</NavLink>
          <NavLink href="#testimonials">Testimoni</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <a
            href="https://wa.me/+62881027818897?text=Halo,%20saya%20ingin%20memesan%20layanan%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
