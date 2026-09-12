"use client";

import Link from "next/link";

export default function RosettaShowcase() {
  // Aplicaciones en producción (§1.2); sin nombres internos ni Veri*factu destacado (§1.3, §2.1)
  const applications = [
    {
      title: "Conectividad bancaria",
      desc: "Los extractos de todos tus bancos entran solos, todos los días.",
    },
    {
      title: "Contabilización de extractos",
      desc: "Clasifica y contabiliza lo que está claro, y pone delante de una persona solo lo que requiere criterio.",
    },
    {
      title: "Facturas de proveedor",
      desc: "La factura llega por correo y aparece registrada en el ERP, sola o pasando antes por revisión.",
    },
    {
      title: "Pagos y conciliación de TPV",
      desc: "Ficheros de pago con importes calculados de forma determinista y cobros por datáfono cuadrados con el banco.",
    },
  ];

  // §1.2 bis · Resumen del circuito, en lenguaje de negocio (sustituye al diagrama de consola)
  const circuit = [
    { system: "Correo", step: "Llega la factura" },
    { system: "Invofox", step: "Se digitaliza" },
    { system: "ERP", step: "Se registra", review: "Revisión opcional" },
    { system: "Banco", step: "Entran los movimientos" },
    { system: "ERP", step: "Se cruza, se contabiliza y se compensa", review: "Lo que no cuadra, a revisión" },
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
              <span className="gradient-text">Rosetta IA</span>: aplicaciones que ya funcionan sobre tus sistemas
            </h2>

            <p className="text-lg text-arje-gray-600 dark:text-gray-300 leading-relaxed">
              Sobre el motor de integración, Rosetta IA incorpora aplicaciones listas para trabajar. Cada una resuelve un proceso completo de principio a fin y se contrata por separado: se empieza por la que más duele.
            </p>

            {/* Aplicaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-arje-blue font-bold text-base mb-1">{app.title}</div>
                  <p className="text-xs text-arje-gray-600 dark:text-gray-300">{app.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/rosetta-ia"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-arje-blue to-arje-blue-dark text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
              >
                Conoce Rosetta IA →
              </Link>
              <Link
                href="/contacto"
                className="w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-gray-800 text-arje-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:border-arje-blue transition-all text-center"
              >
                Solicita un diagnóstico
              </Link>
            </div>
          </div>

          {/* Right: Circuito de la factura */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800 border-2 border-arje-blue/30 dark:border-gray-700 shadow-2xl">
              <div className="pb-5 border-b border-gray-100 dark:border-gray-700 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-arje-blue">El circuito completo</span>
                <h3 className="text-lg font-bold font-heading text-arje-gray-900 dark:text-white mt-1">
                  Del correo del proveedor al documento compensado, sin teclear
                </h3>
              </div>

              <ol className="relative space-y-4">
                <div className="absolute top-2 bottom-2 left-4 w-0.5 bg-arje-blue/25" aria-hidden="true" />
                {circuit.map((c, idx) => (
                  <li key={idx} className="relative flex items-start gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-arje-blue text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-sm text-arje-gray-900 dark:text-white">{c.step}</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-arje-gray-600 dark:text-gray-300">
                          {c.system}
                        </span>
                      </div>
                      {c.review && (
                        <span className="inline-block mt-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          {c.review}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-xs text-arje-gray-500 dark:text-gray-400">
                Cinco sistemas que nunca fueron diseñados para hablar entre sí. Los importes se calculan con reglas deterministas; lo dudoso lo valida una persona.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
