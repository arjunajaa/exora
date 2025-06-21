'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Footer Content */}
      <div className="bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/Exora logo.png"
                  alt="Exora Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>              <p className="text-white/80 font-medium leading-relaxed mb-6 max-w-md">
                EXORA is a global export brand connecting Indonesia&apos;s finest products with international markets. 
                We bring quality, service, and long-term partnership to every trade relationship.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Product Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Natural Ingredients
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Premium Frozen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Asian Grocery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                    Eco Living Supplies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 font-medium text-center md:text-left">
                © {currentYear} Exora. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200 font-medium">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200 font-medium">
                  Terms of Service
                </Link>
                <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200 font-medium">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
