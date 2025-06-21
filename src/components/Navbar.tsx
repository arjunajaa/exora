'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Prevent scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>      {/* Desktop Navbar */}
      <nav 
        className={`hidden md:fixed md:block top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/25 backdrop-blur-xl border border-white/30 shadow-xl' 
            : 'bg-white/15 backdrop-blur-lg border border-white/20 shadow-lg'
        } rounded-full px-12 py-4 w-[700px] max-w-[95vw]`}
      >
        <div className="flex items-center justify-between">          {/* Logo */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <Image
              src="/Exora logo.png"
              alt="Exora Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>          {/* Navigation Links */}
          <div className="flex items-center gap-16">
            <Link 
              href="/" 
              className="text-base font-semibold text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-base font-semibold text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
            >
              About
            </Link>
            <Link 
              href="/product" 
              className="text-base font-semibold text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Product
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-semibold text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className={`transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/25 backdrop-blur-xl border border-white/30 shadow-xl' 
            : 'bg-white/15 backdrop-blur-lg border border-white/20 shadow-lg'
        } rounded-full px-6 py-4`}>
          <div className="flex items-center justify-between">            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Exora logo.png"
                alt="Exora Logo"
                width={105}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/25 backdrop-blur-xl border-l border-white/30 shadow-2xl transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}>          <div className="p-8 pt-24">
            <div className="space-y-6">
              <Link 
                href="/" 
                onClick={toggleMobileMenu}
                className="block text-lg font-semibold text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={toggleMobileMenu}
                className="block text-lg font-semibold text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
              >
                About
              </Link>
              <Link 
                href="/product" 
                onClick={toggleMobileMenu}
                className="block text-lg font-semibold text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Product
              </Link>
              <Link 
                href="/contact" 
                onClick={toggleMobileMenu}
                className="block text-lg font-semibold text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
