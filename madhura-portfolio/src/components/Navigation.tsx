'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-golden-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-golden-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MS</span>
            </div>
            <span className="font-serif text-xl font-bold text-secondary">
              Madhura Shanthini
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-secondary hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="#work" className="text-secondary hover:text-primary transition-colors duration-300">
              Experience
            </Link>
            <Link href="#skills" className="text-secondary hover:text-primary transition-colors duration-300">
              Skills
            </Link>
            <Link href="#volunteering" className="text-secondary hover:text-primary transition-colors duration-300">
              Volunteering
            </Link>
            <Link href="#contact" className="text-secondary hover:text-primary transition-colors duration-300">
              Contact
            </Link>
            <Link href="/admin" className="btn-secondary">
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-golden-50 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-secondary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-secondary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-secondary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <Link href="#hero" className="block text-secondary hover:text-primary transition-colors duration-300 py-2">
              Home
            </Link>
            <Link href="#work" className="block text-secondary hover:text-primary transition-colors duration-300 py-2">
              Experience
            </Link>
            <Link href="#skills" className="block text-secondary hover:text-primary transition-colors duration-300 py-2">
              Skills
            </Link>
            <Link href="#volunteering" className="block text-secondary hover:text-primary transition-colors duration-300 py-2">
              Volunteering
            </Link>
            <Link href="#contact" className="block text-secondary hover:text-primary transition-colors duration-300 py-2">
              Contact
            </Link>
            <Link href="/admin" className="block btn-secondary inline-block">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}