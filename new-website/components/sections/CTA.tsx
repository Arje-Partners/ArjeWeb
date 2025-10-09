"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-arje-blue via-arje-blue-light to-arje-blue-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para modernizar tu tesorería sin cambiar tu ERP?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agenda una demo personalizada y descubre cómo integrarnos con tu
          sistema actual en semanas, no meses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="px-8 py-4 bg-white text-arje-blue rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-block"
          >
            Hablemos
          </Link>
          <Link
            href="/insights"
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all inline-block"
          >
            Ver casos de éxito
          </Link>
        </div>
      </div>
    </section>
  );
}
