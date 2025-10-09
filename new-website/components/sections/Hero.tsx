"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-arje-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements - inspired by OpenAI */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arje-blue/5 dark:bg-arje-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arje-blue-light/5 dark:bg-arje-blue-light/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center space-y-8">
          {/* Badge - inspired by Clay */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-sm font-medium transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="mr-2">✨</span>
            Integración universal de treasury management
          </div>

          {/* Main Heading - inspired by Cohere */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold text-arje-gray-900 dark:text-white leading-tight transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conectamos con
            <br />
            <span className="gradient-text">cualquier sistema</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No importa si tu ERP es{" "}
            <span className="text-arje-blue font-semibold">
              Navision, Microsoft Business Central, Movex
            </span>{" "}
            o un sistema{" "}
            <span className="text-arje-blue font-semibold">legacy de 1995</span>
            . Nuestra tesorería se integra con todo.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/contacto"
              className="px-8 py-4 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
            >
              Solicitar demo
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-arje-blue dark:text-arje-blue-light border-2 border-arje-blue dark:border-arje-blue-light rounded-xl font-semibold hover:bg-arje-gray-50 dark:hover:bg-gray-700 transition-all hover:shadow-xl hover:scale-105"
            >
              Ver capacidades
            </Link>
          </div>

          {/* Social Proof */}
          <div
            className={`pt-12 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-arje-gray-500 dark:text-gray-400 mb-4">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <span className="text-arje-gray-400 dark:text-gray-500 font-semibold">
                Vitaldent
              </span>
              <span className="text-arje-gray-400 dark:text-gray-500 font-semibold">Codorníu</span>
              <span className="text-arje-gray-400 dark:text-gray-500 font-semibold">
                Electrolux
              </span>
              <span className="text-arje-gray-400 dark:text-gray-500 font-semibold">Ruesma</span>
              <span className="text-arje-gray-400 dark:text-gray-500 font-semibold">Pavasal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-arje-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
