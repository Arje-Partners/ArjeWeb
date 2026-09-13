"use client";

import Link from "next/link";
import { integrationCategories, integrationTechnologies as technologies } from "@/lib/integrations";

const categoryColors = [
  "bg-blue-50/70 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
  "bg-teal-50/70 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800",
  "bg-indigo-50/70 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800",
];

export default function Integration() {
  const integrationTypes = integrationCategories.map((c, i) => ({ ...c, color: categoryColors[i] }));

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-arje-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Con qué conectamos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
            Trabajamos con los sistemas <span className="gradient-text">que ya tienes</span>
          </h2>
          <p className="text-lg text-arje-gray-600 dark:text-gray-300">
            Desde el ERP más reciente en la nube hasta el sistema propio que lleva décadas funcionando. Si guarda datos financieros, se puede conectar.
          </p>
        </div>

        {/* Integration Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {integrationTypes.map((type, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl border-2 ${type.color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-arje-blue px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-arje-blue/20">
                    {type.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-5">
                  {type.category}
                </h3>
                <ul className="space-y-2.5">
                  {type.systems.map((system, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-arje-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2.5 text-arje-blue flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{system}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Supported Bar */}
        <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-arje-gray-900 dark:text-white mb-2 text-center">
            Formatos y canales que manejamos
          </h3>
          <p className="text-sm text-arje-gray-500 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Rosetta IA los gestiona dejando rastro de cada envío, validando el formato y reintentando de forma controlada si algo falla.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-700/60 text-arje-gray-800 dark:text-gray-200 rounded-xl text-xs sm:text-sm font-medium border border-gray-200/80 dark:border-gray-600 hover:border-arje-blue hover:text-arje-blue dark:hover:text-arje-blue-light transition-all cursor-default"
              >
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-arje-blue to-arje-blue-dark rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
            ¿Tu ERP o software propio no aparece en la lista?
          </h3>
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Ningún problema. En más de 15 años de trayectoria nunca nos hemos encontrado con un sistema que no hayamos podido conectar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="px-8 py-3.5 bg-white text-arje-blue font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
            >
              Consultar viabilidad técnica de mi sistema
            </Link>
            <Link
              href="/rosetta-ia"
              className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
            >
              Ver arquitectura de Rosetta IA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}