"use client";

export default function Integration() {
  const integrationTypes = [
    {
      category: "ERPs estándar",
      systems: ["Navision", "Axapta", "Infor M3", "Microsoft Business Central", "IFS", "JD Edwards"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      category: "Sistemas custom",
      systems: [
        "Desarrollo interno",
        "ERP propio",
        "Aplicación a medida",
        "Cualquier stack",
      ],
      color: "bg-arje-blue/10 border-arje-blue/30",
    },
    {
      category: "Legacy Systems",
      systems: ["AS/400", "Mainframe", "COBOL", "Sistemas antiguos"],
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const technologies = [
    "REST API",
    "SOAP/XML",
    "Direct Database",
    "File-Based",
    "WebHooks",
    "Custom Protocols",
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-4">
            Integración con{" "}
            <span className="gradient-text">cualquier tecnología</span>
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desde ERPs modernos hasta sistemas legacy de hace décadas. Si tiene
            datos, lo conectamos.
          </p>
        </div>

        {/* Integration Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {integrationTypes.map((type, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 ${type.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-xl font-bold text-arje-gray-900 dark:text-white mb-4">
                {type.category}
              </h3>
              <ul className="space-y-2">
                {type.systems.map((system, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-arje-gray-700 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-arje-blue flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {system}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-arje-gray-900 dark:text-white mb-6 text-center">
            Tecnologías de integración soportadas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-arje-gray-100 dark:bg-gray-700 text-arje-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-arje-blue hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-arje-blue to-arje-blue-light rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Tu sistema no está en la lista?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            No hay problema. Llevamos 0 sistemas que no hayamos podido integrar.
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-white text-arje-blue rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            Cuéntanos tu caso
          </a>
        </div>
      </div>
    </section>
  );
}