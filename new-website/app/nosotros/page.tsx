"use client";

import Link from "next/link";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Sobre Arjé Partners</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-6">
              El puente entre la tesorería estratégica y la{" "}
              <span className="gradient-text">Realidad Tecnológica</span>
            </h1>
            <p className="text-lg sm:text-xl text-arje-gray-600 dark:text-gray-300 leading-relaxed">
              En Arjé Partners aunamos más de 15 años de conocimiento profundo en finanzas corporativas con ingeniería de software avanzada. Ayudamos a empresas medianas y grandes a alcanzar una tesorería ágil, automatizada y en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Nuestra Misión</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white">
                Ninguna empresa debería verse obligada a reemplazar su ERP para modernizar su tesorería
              </h2>
              <p className="text-base sm:text-lg text-arje-gray-700 dark:text-gray-300 leading-relaxed">
                Durante años, los directores financieros se han enfrentado al mismo dilema: resignarse a procesos manuales en hojas de cálculo o asumir proyectos millonarios y traumáticos de sustitución de ERP.
              </p>
              <p className="text-base sm:text-lg text-arje-gray-700 dark:text-gray-300 leading-relaxed">
                Fundamos Arjé Partners y desarrollamos nuestra plataforma <strong className="text-arje-blue dark:text-arje-blue-light">Rosetta IA</strong> para romper ese paradigma. Demostramos que es posible conectar cualquier sistema existente —por complejo o legado que sea— con las mejores soluciones de tesorería y banca internacional en cuestión de semanas.
              </p>
              <div className="pt-2">
                <Link
                  href="/rosetta-ia"
                  className="inline-flex items-center text-sm font-bold text-arje-blue hover:text-arje-blue-dark transition-colors"
                >
                  Conoce cómo funciona nuestra plataforma Rosetta IA →
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-arje-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-arje-blue dark:text-arje-blue-light mb-2">15+</div>
                <p className="text-xs sm:text-sm font-medium text-arje-gray-700 dark:text-gray-300">Años de experiencia especializada</p>
              </div>
              <div className="p-8 bg-arje-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-arje-blue dark:text-arje-blue-light mb-2">50+</div>
                <p className="text-xs sm:text-sm font-medium text-arje-gray-700 dark:text-gray-300">Grandes integraciones completadas</p>
              </div>
              <div className="p-8 bg-arje-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-arje-blue dark:text-arje-blue-light mb-2">95%</div>
                <p className="text-xs sm:text-sm font-medium text-arje-gray-700 dark:text-gray-300">Tasa de retención y recurrencia</p>
              </div>
              <div className="p-8 bg-arje-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-arje-blue dark:text-arje-blue-light mb-2">100%</div>
                <p className="text-xs sm:text-sm font-medium text-arje-gray-700 dark:text-gray-300">Éxito en puesta en producción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars / Team Specialization */}
      <section className="py-24 bg-arje-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Especialización Interdisciplinar</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Nuestros Pilares de <span className="gradient-text">Excelencia</span>
            </h2>
            <p className="text-base sm:text-lg text-arje-gray-600 dark:text-gray-300">
              Unimos perfiles expertos en tesorería corporativa con arquitectos de integración de datos para garantizar el éxito de cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                role: "Consultoría de Tesorería & Finanzas",
                image: "/images/team/consulting.jpg",
                description:
                  "Diseñamos arquitecturas de cash management, cash pooling, reporting multibancario y optimización de flujos de trabajo financieros.",
              },
              {
                role: "Ingeniería de Integración",
                image: "/images/team/implementation.jpg",
                description:
                  "Especialistas en Rosetta IA, conectores nativos, APIs y bases de datos para enlazar ERPs estándar, legacy y plataformas bancarias.",
              },
              {
                role: "Inteligencia de Datos & Contabilización",
                image: "/images/team/training.jpg",
                description:
                  "Modelado de reglas de conciliación bancaria inteligente, triaje automático de asientos y analítica predictiva de tesorería.",
              },
              {
                role: "Soporte Operativo & Acompañamiento",
                image: "/images/team/support.jpg",
                description:
                  "Supervisión continua, SLAs garantizados y soporte proactivo para que tus operaciones financieras nunca sufran interrupciones.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 rounded-2xl overflow-hidden h-44 relative group">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-arje-gray-900 dark:text-white mb-3">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white">
            ¿Quieres transformar la gestión de tesorería de tu empresa?
          </h2>
          <p className="text-lg text-arje-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Contacta con nuestro equipo para analizar tu ecosistema ERP y valorar una propuesta de integración sin compromiso.
          </p>
          <div className="pt-2">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-arje-blue hover:bg-arje-blue-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-block"
            >
              Hablar con un consultor de Arjé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
