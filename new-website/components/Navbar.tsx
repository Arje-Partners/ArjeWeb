"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/insights", label: "Insights" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
              <Image
                src="/images/logo-arje.png"
                alt="Arjé Partners"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <span className="font-bold text-lg md:text-xl text-arje-gray-900 dark:text-white">
              Arjé Partners
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-arje-gray-800 dark:text-gray-200 hover:text-arje-blue dark:hover:text-arje-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contacto"
              className="px-6 py-2.5 bg-arje-blue text-white rounded-lg hover:bg-arje-blue-dark transition-all hover:shadow-lg hover:scale-105"
            >
              Hablemos
            </Link>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-arje-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6 text-arje-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-arje-gray-800 dark:text-gray-200 hover:text-arje-blue dark:hover:text-arje-blue transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block px-6 py-3 bg-arje-blue text-white rounded-lg hover:bg-arje-blue-dark transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
