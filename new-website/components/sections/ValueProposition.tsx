"use client";

export default function ValueProposition() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Integración universal",
      description:
        "APIs REST, Web Services, conexión directa a BD, archivos. Nos adaptamos a tu arquitectura.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Sistemas custom",
      description:
        "¿Desarrollo propio? Perfecto. El 40% de nuestros clientes tienen ERPs custom o legacy.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Implementación rápida",
      description:
        "Unas semanas de integración. Sin tocar tu sistema actual. Sin riesgos.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Sin reemplazar",
      description:
        "Preserva tu inversión IT. Extendemos la vida útil de tus sistemas existentes.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-4">
            No importa qué sistema uses
            <br />
            <span className="gradient-text">Nosotros nos integramos</span>
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            La única solución de tesorería diseñada para funcionar con CUALQUIER
            sistema empresarial
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-arje-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-arje-blue/20"
            >
              <div className="text-arje-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-arje-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - inspired by Cohere */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              400+
            </div>
            <p className="text-arje-gray-600 dark:text-gray-300">empresas</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              100%
            </div>
            <p className="text-arje-gray-600 dark:text-gray-300">Éxito en integraciones</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              -50%
            </div>
            <p className="text-arje-gray-600 dark:text-gray-300">Reducción de tiempo de integración</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              95%
            </div>
            <p className="text-arje-gray-600 dark:text-gray-300">Retención clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}