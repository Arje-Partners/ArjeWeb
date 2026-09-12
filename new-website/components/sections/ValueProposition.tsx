"use client";

export default function ValueProposition() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Integración universal",
      description:
        "APIs REST, Web Services SOAP, conexión directa a bases de datos y archivos planos. Nos adaptamos a tu arquitectura técnica sin fricción.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Sistemas custom y legacy",
      description:
        "¿Desarrollo propio o ERP veterano? Más del 40% de nuestros clientes gestionan ERPs a medida o legacy de décadas que integramos con éxito.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Puesta en marcha en semanas",
      description:
        "Metodología ágil con procesos y plantillas probados en producción. Despliegues funcionales en 2 a 4 semanas sin proyectos interminables.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Preserva tu inversión IT",
      description:
        "Sin migraciones traumáticas ni licencias innecesarias. Maximizamos y extendemos la vida útil y el rendimiento de tus sistemas existentes.",
    },
  ];

  const stats = [
    { value: "400+", label: "Empresas optimizadas" },
    { value: "100%", label: "Éxito en integraciones" },
    { value: "-50%", label: "Reducción de tiempo de proyecto" },
    { value: "95%", label: "Retención y satisfacción de clientes" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Nuestros Pilares</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
            No importa qué sistema uses
            <br />
            <span className="gradient-text">Nosotros nos adaptamos a ti</span>
          </h2>
          <p className="text-lg sm:text-xl text-arje-gray-600 dark:text-gray-300">
            La solución de treasury management e integración de sistemas diseñada para funcionar con CUALQUIER entorno empresarial.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-arje-gray-50 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/80 dark:border-gray-700/60 hover:border-arje-blue/30"
            >
              <div className="w-14 h-14 rounded-xl bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-arje-blue group-hover:text-white transition-all duration-300 shadow-xs">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-arje-gray-50 via-white to-arje-gray-50 dark:from-gray-800/50 dark:via-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {stats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? "pt-6 md:pt-0" : ""}>
                <div className="text-4xl md:text-5xl font-extrabold font-heading text-arje-blue dark:text-arje-blue-light mb-2 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm font-medium text-arje-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}