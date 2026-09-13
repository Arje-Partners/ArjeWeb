"use client";

import Link from "next/link";

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

          {/* Right: avance del circuito. Dos corrientes que se juntan: la factura nunca pasa por el banco */}
          <div className="lg:col-span-6">
            <Link
              href="/rosetta-ia#circuito"
              className="group block p-6 md:p-8 rounded-lg bg-ros-navy border border-ros-line shadow-2xl"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-ros-light">Un ejemplo en marcha</span>
              <h3 className="text-lg md:text-xl font-bold font-heading text-white mt-1 mb-6">
                Dos corrientes que se juntan: la factura y el extracto
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-md bg-ros-panel border border-ros-line">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ros-light mb-3">La factura · cuando llega</div>
                  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-white">
                    {["Correo", "Carpeta", "Invofox", "ERP"].map((sys, idx) => (
                      <li key={sys} className="flex items-center gap-2">
                        {idx > 0 && <span className="text-ros-soft" aria-hidden="true">→</span>}
                        {sys}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="p-4 rounded-md bg-ros-panel border border-ros-line">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ros-light mb-3">El banco · a diario, por su cuenta</div>
                  <p className="text-sm text-white">Se descarga el extracto de todos tus bancos</p>
                </div>
                <div className="flex justify-center text-ros-light" aria-hidden="true">
                  <svg width="64" height="22" viewBox="0 0 64 22" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 2h14q16 0 16 16v2M62 2H48q-16 0-16 16v2" />
                  </svg>
                </div>
                <div className="p-4 rounded-md bg-ros-panel border border-ros-light">
                  <p className="text-sm text-white">
                    Cada movimiento encuentra su factura y el documento queda compensado en el ERP.
                  </p>
                </div>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ros-light group-hover:gap-2.5 transition-all">
                Ver el circuito completo <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
