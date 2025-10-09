"use client";

export default function ValueProposition() {
  const features = [
    {
      icon: "🔌",
      title: "Integración universal",
      description:
        "APIs REST, Web Services, conexión directa a BD, archivos. Nos adaptamos a tu arquitectura.",
    },
    {
      icon: "🏗️",
      title: "Sistemas custom",
      description:
        "¿Desarrollo propio? Perfecto. El 40% de nuestros clientes tienen ERPs custom o legacy.",
    },
    {
      icon: "⚡",
      title: "Implementación rápida",
      description:
        "Unas semanas de integración. Sin tocar tu sistema actual. Sin riesgos.",
    },
    {
      icon: "🛡️",
      title: "Sin reemplazar",
      description:
        "Preserva tu inversión IT. Extendemos la vida útil de tus sistemas existentes.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 mb-4">
            No importa qué sistema uses
            <br />
            <span className="gradient-text">Nosotros nos integramos</span>
          </h2>
          <p className="text-xl text-arje-gray-600 max-w-2xl mx-auto">
            La única solución de tesorería diseñada para funcionar con CUALQUIER
            sistema empresarial
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-arje-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-arje-blue/20"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-arje-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-arje-gray-600 leading-relaxed">
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
            <p className="text-arje-gray-600">empresas</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              100%
            </div>
            <p className="text-arje-gray-600">Éxito en integraciones</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              Unas
            </div>
            <p className="text-arje-gray-600">semanas de implementación</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-arje-blue mb-2">
              95%
            </div>
            <p className="text-arje-gray-600">Retención clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}