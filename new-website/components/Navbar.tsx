"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { href: "/rosetta-ia", label: "Rosetta IA", isNew: true },
    { href: "/insights", label: "Insights" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-white dark:bg-gray-900 border-b border-arje-gray-100 dark:border-gray-800 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/images/logo-arje.png"
                alt="Arjé Partners"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl font-heading text-arje-gray-900 dark:text-white tracking-tight">
                Arjé Partners
              </span>
              <span className="text-[10px] font-medium text-arje-blue uppercase tracking-widest hidden sm:inline-block">
                Integración de sistemas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-all ${
                    active
                      ? "text-arje-blue dark:text-arje-blue-light font-semibold bg-arje-blue/5 dark:bg-arje-blue/10"
                      : "text-arje-gray-700 dark:text-gray-200 hover:text-arje-blue dark:hover:text-arje-blue hover:bg-gray-50 dark:hover:bg-gray-800/60"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.isNew && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-arje-blue to-teal-500 text-white rounded-full shadow-xs">
                        IA
                      </span>
                    )}
                  </span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-arje-blue rounded-full" />
                  )}
                </Link>
              );
            })}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2" />
            <ThemeToggle />
            <Link
              href="/contacto"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-arje-blue to-arje-blue-dark text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-arje-blue/25 hover:scale-105 transition-all"
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
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium transition-colors ${
                    active
                      ? "text-arje-blue bg-arje-blue/10 dark:bg-arje-blue/20 font-semibold"
                      : "text-arje-gray-800 dark:text-gray-200 hover:text-arje-blue dark:hover:text-arje-blue"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.isNew && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-arje-blue to-teal-500 text-white rounded-full">
                      IA
                    </span>
                  )}
                </Link>
              );
            })}
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
