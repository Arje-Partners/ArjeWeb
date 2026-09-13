"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Inicio presenta a Arjé Partners por lo que hace con los datos; el detalle del producto vive en /rosetta-ia
  const offer = [
    {
      title: "Conectar sistemas",
      desc: "ERP, bancos, plataformas sectoriales y desarrollos propios o heredados, por API, base de datos o fichero.",
    },
    {
      title: "Transformar datos",
      desc: "Los traducimos a un modelo común y aplicamos reglas de calidad antes de que lleguen a ninguna parte.",
    },
    {
      title: "Cargar y almacenar",
      desc: "Alimentamos tu data warehouse o datalake con información limpia, histórica y trazable.",
    },
    {
      title: "Entregar y suministrar",
      desc: "Al ERP, al BI, al banco o al organismo, en el formato que espera y con confirmación de recepción.",
    },
  ];

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
            <span>Arjé Partners · Integración de sistemas y datos</span>
          </div>

          {/* Main Heading with Epilogue font */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-arje-gray-900 dark:text-white leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Tus datos,{" "}
            <br className="hidden sm:inline" />
            <span className="gradient-text">donde tienen que estar</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conectamos sistemas, transformamos sus datos y los entregamos listos para usar: en el ERP, en el banco, en tu BI o
            en tus aplicaciones propias. Más de 15 años haciéndolo, hoy con{" "}
            <strong className="text-arje-gray-900 dark:text-white font-bold whitespace-nowrap">Rosetta IA.</strong>
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
              Habla con un consultor
            </Link>
            <Link
              href="/rosetta-ia"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-arje-blue dark:text-arje-blue-light border-2 border-arje-blue dark:border-arje-blue/40 rounded-xl font-semibold hover:bg-arje-gray-50 dark:hover:bg-gray-700/60 transition-all hover:shadow-md hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <span>Conoce Rosetta IA</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-arje-blue text-white rounded-full">Nuevo</span>
            </Link>
          </div>

          {/* Qué hacemos: el recorrido del dato en cuatro verbos */}
          <div
            className={`pt-12 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
              {offer.map((item, idx) => (
                <li
                  key={item.title}
                  className="relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <span className="text-xs font-bold text-arje-blue dark:text-arje-blue-light">0{idx + 1}</span>
                  <h2 className="font-bold font-heading text-base text-arje-gray-900 dark:text-white mt-1 mb-1.5">
                    {item.title}
                  </h2>
                  <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  {idx < offer.length - 1 && (
                    <span
                      className="hidden lg:flex absolute top-1/2 -right-3.5 z-10 w-6 h-6 -translate-y-1/2 rounded-full bg-arje-blue text-white text-xs items-center justify-center"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <Link
              href="/servicios"
              className="inline-block mt-6 text-sm font-semibold text-arje-blue dark:text-arje-blue-light hover:underline"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
