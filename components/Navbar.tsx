'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/fseam.png"
                  alt="Conference Logo"
                  className="h-15 w-15 rounded-full"
                  width={20}
                  height={20}
                />
                <span className="ml-3 mt-2 text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">FSEAM 2026</span>
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Home
            </Link>
            <Link href="/about-event" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              About Event
            </Link>
            <Link href="/registration" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Registration
            </Link>
            <Link href="/organizors" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Organizers
            </Link>
            <Link href="/sponsorships" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Sponsorships
            </Link>
            <Link href="/speakers" className="px-2 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Speakers
            </Link>
            <Link href="/awards" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Awards
            </Link>
            <Link href="/gallery" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Gallery
            </Link>
            <Link href="/contactUs" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Home
            </Link>
            <Link href="/about-event" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              About Event
            </Link>
            <Link href="/registration" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Registration
            </Link>
            <Link href="/speakers" className="block px-2 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Speakers
            </Link>
            <Link href="/organizors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Organizers
            </Link>
            <Link href="/sponsorships" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Sponsorships
            </Link>
            <Link href="/awards" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Awards
            </Link>
            <Link href="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Gallery
            </Link>
            <Link href="/contactUs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;