"use client";

/*
 * Image Sources (Unsplash - Free for commercial use):
 * - treasury-management.jpg: Photo by Carlos Muza on Unsplash (Analytics dashboard)
 * - erp-integration.jpg: Photo by JJ Ying on Unsplash (Network/Technology)
 * - financial-consulting.jpg: Photo by Isaac Smith on Unsplash (Business analytics)
 * - training-support.jpg: Photo by You X Ventures on Unsplash (Team collaboration)
 * - etl-pipelines.jpg: Photo by JJ Ying on Unsplash (Data infrastructure)
 * - data-quality.jpg: Photo by Lukas Blazek on Unsplash (Data quality metrics)
 * - ai-analytics.jpg: Photo by Possessed Photography on Unsplash (AI/ML technology)
 */

export default function ServiciosPage() {
  const services = [
    {
      title: "Treasury Management System",
      image: "/images/services/treasury-management.jpg",
      description:
        "Solución completa de tesorería con capacidades de integración universal.",
      features: [
        "Gestión de cash pooling",
        "Previsiones de tesorería",
        "Conciliación bancaria automática",
        "Reporting en tiempo real",
        "Multi-banco y multi-divisa",
      ],
    },
    {
      title: "Integración con ERPs",
      image: "/images/services/erp-integration.jpg",
      description:
        "Conectamos con cualquier sistema: estándar, custom o legacy.",
      features: [
        "Navision, Axapta, Microsoft Business Central",
        "Infor M3, IFS, JD Edwards",
        "Sistemas custom y desarrollos propios",
        "APIs REST, SOAP, direct DB",
        "Implementación en unas semanas",
      ],
    },
    {
      title: "Consultoría Financiera",
      image: "/images/services/financial-consulting.jpg",
      description: "Análisis y optimización de procesos de tesorería.",
      features: [
        "Auditoría de procesos actuales",
        "Diseño de workflows óptimos",
        "KPIs y dashboards personalizados",
        "Mejores prácticas del sector",
        "ROI y business case",
      ],
    },
    {
      title: "Formación y Soporte",
      image: "/images/services/training-support.jpg",
      description: "Capacitación continua y soporte técnico especializado.",
      features: [
        "Onboarding personalizado",
        "Formación continua del equipo",
        "Documentación completa",
        "Updates y mejoras constantes",
      ],
    },
  ];

  const dataServices = [
    {
      title: "ETL & Data Pipelines",
      image: "/images/services/etl-pipelines.jpg",
      description: "Extracción, transformación y carga de datos desde cualquier fuente a tu data warehouse o datalake",
      features: [
        "Integración multi-fuente en tiempo real",
        "Transformaciones complejas automatizadas",
        "Orquestación y scheduling avanzado",
      ],
      gradient: "from-blue-50 to-white",
      border: "border-blue-200",
    },
    {
      title: "Calidad de Datos",
      image: "/images/services/data-quality.jpg",
      description: "Garantizamos la integridad, precisión y consistencia de tus datos corporativos",
      features: [
        "Validación y limpieza automática",
        "Detección de duplicados y anomalías",
        "Monitoreo continuo de métricas DQ",
      ],
      gradient: "from-purple-50 to-white",
      border: "border-purple-200",
    },
    {
      title: "IA & Analytics",
      image: "/images/services/ai-analytics.jpg",
      description: "Inteligencia artificial para previsiones, detección de patrones y toma de decisiones",
      features: [
        "Modelos predictivos de cash flow",
        "Detección de fraudes y anomalías",
        "Dashboards inteligentes y alertas",
      ],
      gradient: "from-green-50 to-white",
      border: "border-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 dark:text-white mb-6">
              Servicios de{" "}
              <span className="gradient-text">Treasury Management</span>
            </h1>
            <p className="text-xl text-arje-gray-600 dark:text-gray-300">
              Desde implantación hasta soporte continuo. Todo lo que necesitas
              para modernizar tu tesorería sin cambiar tu ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-arje-gray-200 dark:border-gray-700 hover:border-arje-blue hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 rounded-xl overflow-hidden h-48 relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h2 className="text-2xl font-bold text-arje-gray-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-arje-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-arje-blue mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-arje-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-arje-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arje-gray-900 dark:text-white mb-4">
              Proceso de implementación
            </h2>
            <p className="text-xl text-arje-gray-600 dark:text-gray-300">
              De la consulta inicial a la puesta en producción en semanas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Análisis",
                description: "Evaluamos tu stack tecnológico y necesidades",
              },
              {
                step: "2",
                title: "Diseño",
                description: "Diseñamos la arquitectura de integración óptima",
              },
              {
                step: "3",
                title: "Implementación",
                description: "Configuramos e integramos en unas semanas",
              },
              {
                step: "4",
                title: "Go-Live",
                description: "Formación, puesta en marcha y soporte",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-arje-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-arje-gray-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-arje-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & AI Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arje-gray-900 dark:text-white mb-4">
              Gestión inteligente de <span className="gradient-text">datos corporativos</span>
            </h2>
            <p className="text-xl text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transformamos silos de datos en información accionable con tecnologías ETL, datalakes y análisis inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dataServices.map((dataService, index) => (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${dataService.gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 ${dataService.border} dark:border-gray-600 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="mb-4 rounded-lg overflow-hidden h-40 relative group">
                  <img
                    src={dataService.image}
                    alt={dataService.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-arje-gray-900 dark:text-white mb-4">
                  {dataService.title}
                </h3>
                <p className="text-arje-gray-600 dark:text-gray-300 mb-6">
                  {dataService.description}
                </p>
                <ul className="space-y-2 text-sm text-arje-gray-700 dark:text-gray-300">
                  {dataService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-arje-blue mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-arje-blue/10 to-arje-blue-light/10 dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-arje-blue/20 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-arje-gray-900 dark:text-white mb-4 text-center">
              Datalakes & Data Warehouses
            </h3>
            <p className="text-arje-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Implementamos arquitecturas modernas de datos que unifican información de múltiples fuentes,
              permitiendo análisis avanzados y democratización del acceso a la información en toda la organización.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-arje-gray-900 dark:text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300 mb-8">
            Agenda una demo personalizada y descubre cómo podemos ayudarte
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-2xl hover:scale-105"
          >
            Solicitar demo
          </a>
        </div>
      </section>
    </div>
  );
}
