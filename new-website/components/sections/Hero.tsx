"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Figura simétrica, igual que en /rosetta-ia: la tesorería es un ejemplo, no el límite
  const sideA = ["ERP", "Bancos", "Plataformas sectoriales", "Sistemas propios"];
  const sideB = ["Tesorería", "ERP", "Gestores documentales", "BI y datos"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-arje-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 pt-28 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-arje-blue/10 dark:bg-arje-blue/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-sm font-semibold border border-arje-blue/20 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-arje-blue animate-ping" />
            <span>Rosetta IA · Plataforma de integración</span>
          </div>

          {/* Main Heading with Epilogue font */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-arje-gray-900 dark:text-white leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conectamos cualquier sistema{" "}
            <br className="hidden sm:inline" />
            con <span className="gradient-text">cualquier sistema</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            ERP, banco, tesorería, sistema propio, plataforma sectorial o fichero heredado: si tiene datos, tiene camino.
            Con <strong className="text-arje-gray-900 dark:text-white font-bold">Rosetta IA</strong> lo conectamos sin tocar tus sistemas. La tesorería corporativa es donde más lejos hemos llegado.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-arje-blue to-arje-blue-dark text-white rounded-xl font-semibold shadow-lg shadow-arje-blue/20 hover:shadow-xl hover:shadow-arje-blue/30 hover:scale-105 transition-all text-center"
            >
              Solicita un diagnóstico
            </Link>
            <Link
              href="/rosetta-ia"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-arje-blue dark:text-arje-blue-light border-2 border-arje-blue dark:border-arje-blue/40 rounded-xl font-semibold hover:bg-arje-gray-50 dark:hover:bg-gray-700/60 transition-all hover:shadow-md hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <span>Conoce Rosetta IA</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-arje-blue text-white rounded-full">Nuevo</span>
            </Link>
          </div>

          {/* Live Architecture Connectivity Strip */}
          <div
            className={`pt-12 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl max-w-4xl mx-auto">
              <div className="text-xs font-semibold uppercase tracking-wider text-arje-gray-500 dark:text-gray-400 mb-4">
                Cualquier origen, cualquier destino
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center">
                {/* Un sistema */}
                <div className="md:col-span-3 space-y-1.5 text-left">
                  <div className="text-[11px] font-bold text-arje-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Un sistema
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sideA.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-arje-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rosetta IA en medio */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
                  <span className="text-arje-blue text-lg font-bold" aria-hidden="true">⇄</span>
                  <span className="text-[11px] font-bold text-arje-blue dark:text-arje-blue-light whitespace-nowrap">Rosetta IA</span>
                </div>

                {/* Cualquier otro sistema */}
                <div className="md:col-span-3 space-y-1.5 text-left md:text-right">
                  <div className="text-[11px] font-bold text-arje-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Cualquier otro sistema
                  </div>
                  <div className="flex flex-wrap md:justify-end gap-1.5">
                    {sideB.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-arje-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
