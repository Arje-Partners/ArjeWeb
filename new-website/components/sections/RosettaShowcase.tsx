"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { CIRCUIT_NEON, circuitSystems } from "@/lib/integrations";

// Avance de Rosetta IA en Inicio: solo nombra y enlaza; el desarrollo completo está en /rosetta-ia
export default function RosettaShowcase() {
  const applications = [
    "Conectividad bancaria",
    "Contabilización de extractos",
    "Facturas de proveedor",
    "Pagos y conciliación de TPV",
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-arje-gray-50/70 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-arje-blue/10 dark:bg-arje-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-xs font-bold uppercase tracking-wider border border-arje-blue/20">
              <span>Nuestro producto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-arje-gray-900 dark:text-white leading-tight">
              <span className="gradient-text">Rosetta IA</span>, la plataforma con la que trabajamos
            </h2>

            <p className="text-lg text-arje-gray-600 dark:text-gray-300 leading-relaxed">
              Todo lo que hemos aprendido integrando sistemas lo hemos convertido en producto. Rosetta IA es la base de cada
              proyecto que ponemos en marcha e incluye aplicaciones listas para el día a día, empezando por el área financiera:
            </p>

            {/* Aplicaciones: solo los nombres; el detalle está en /rosetta-ia#aplicaciones */}
            <ul className="flex flex-wrap gap-2.5 pt-1">
              {applications.map((app) => (
                <li
                  key={app}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-arje-gray-800 dark:text-gray-200"
                >
                  {app}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/rosetta-ia"
                className="inline-block w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-arje-blue to-arje-blue-dark text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
              >
                Conoce Rosetta IA →
              </Link>
            </div>
          </div>

          {/* Right: avance neón del circuito; el completo está en /rosetta-ia#circuito */}
          <div className="lg:col-span-6">
            <Link
              href="/rosetta-ia#circuito"
              className="group relative block p-6 md:p-8 rounded-3xl bg-[#05070a] border border-gray-800 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 mesh-grid opacity-60 pointer-events-none" aria-hidden="true" />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wider text-arje-blue-light">Un ejemplo en marcha</span>
                <h3 className="text-lg md:text-xl font-bold font-heading text-white mt-1 mb-6">
                  Una factura de proveedor atraviesa cinco sistemas y nadie la teclea
                </h3>

                <ol className="relative space-y-3">
                  {/* Línea y láser que la recorre en bucle, por detrás de los nodos */}
                  <div className="absolute top-5 bottom-5 left-5 w-px bg-white/25" aria-hidden="true">
                    <span
                      className="neon-run-y"
                      style={{ "--neon": CIRCUIT_NEON.ERP, "--run": "4s", "--loops": "infinite" } as CSSProperties}
                    />
                  </div>

                  {circuitSystems.map((sys, idx) => (
                    <li
                      key={sys}
                      style={{ "--neon": CIRCUIT_NEON[sys] } as CSSProperties}
                      className="relative flex items-center gap-4"
                    >
                      <span
                        data-active="true"
                        className="neon-node relative z-10 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                      >
                        {idx + 1}
                      </span>
                      <span className="neon-node flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-200 flex items-center gap-2">
                        <span className="neon-dot w-1.5 h-1.5 rounded-full" aria-hidden="true" />
                        {sys}
                      </span>
                    </li>
                  ))}
                </ol>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2de2ff] group-hover:gap-2.5 transition-all">
                  Ver el circuito completo <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
