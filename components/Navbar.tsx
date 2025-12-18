'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutEventHovered, setIsAboutEventHovered] = useState(false);
  const [isMobileAboutEventOpen, setIsMobileAboutEventOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileAboutEvent = () => {
    setIsMobileAboutEventOpen(!isMobileAboutEventOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsAboutEventHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutEventHovered(false);
    }, 200); // 200ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
            
            {/* About Event with dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/about-event" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800 transition-colors duration-200 flex items-center">
                About Event
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isAboutEventHovered ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Dropdown menu */}
              <div
                className={`absolute left-0 pt-3 z-50 transition-all duration-300 ease-in-out ${
                  isAboutEventHovered
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Arrow pointer */}
                <div className="absolute top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-200"></div>
                <div className="absolute top-2.5 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                
                <div className="mt-2 w-64 rounded-lg shadow-xl bg-white border border-gray-200 overflow-hidden">
                  <div className="py-2" role="menu">
                    <Link
                      href="/organizors"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Organizers
                    </Link>
                    <Link
                      href="/speakers"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Speakers
                    </Link>
                    <Link
                      href="/accomodation"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Accommodation
                    </Link>
                    <Link
                      href="/preconference"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Preconference Certification
                    </Link>
                    <Link
                      href="/awards"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Awards
                    </Link>
                    <Link
                      href="/gallery"
                      className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-l-4 border-transparent hover:border-blue-600"
                      role="menuitem"
                    >
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/registration" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Registration
            </Link>
            <Link href="/sponsorships" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Sponsorships
            </Link>
            <Link href="/publications" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-800">
              Publications
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
            
            {/* About Event with expandable submenu on mobile */}
            <div>
              <button
                onClick={toggleMobileAboutEvent}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800"
              >
                <span>About Event</span>
                <svg
                  className={`h-5 w-5 transition-transform ${isMobileAboutEventOpen ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileAboutEventOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 mt-1 space-y-1 pb-2">
                  <Link href="/organizors" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Organizers
                  </Link>
                  <Link href="/speakers" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Speakers
                  </Link>
                  <Link href="/accomodation" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Accommodation
                  </Link>
                  <Link href="/preconference-certification" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Preconference Certification
                  </Link>
                  <Link href="/awards" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Awards
                  </Link>
                  <Link href="/gallery" className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150">
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/registration" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Registration
            </Link>
            <Link href="/sponsorships" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Sponsorships
            </Link>
            <Link href="/publications" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-800">
              Publications
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