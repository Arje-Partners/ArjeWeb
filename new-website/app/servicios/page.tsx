export default function ServiciosPage() {
  const services = [
    {
      title: "Treasury Management System",
      icon: "💰",
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
      icon: "🔗",
      description:
        "Conectamos con cualquier sistema: estándar, custom o legacy.",
      features: [
        "Navision, Axapta, Microsoft Business Central",
        "Infor M3, IFS, JD Edwards",
        "Sistemas custom y desarrollos propios",
        "Legacy systems (AS/400, COBOL)",
        "APIs REST, SOAP, direct DB",
        "Implementación en unas semanas",
      ],
    },
    {
      title: "Consultoría Financiera",
      icon: "📊",
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
      icon: "🎯",
      description: "Capacitación continua y soporte técnico especializado.",
      features: [
        "Onboarding personalizado",
        "Formación continua del equipo",
        "Soporte técnico 24/7",
        "Documentación completa",
        "Updates y mejoras constantes",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 mb-6">
              Servicios de{" "}
              <span className="gradient-text">Treasury Management</span>
            </h1>
            <p className="text-xl text-arje-gray-600">
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
                className="p-8 bg-white rounded-2xl border-2 border-arje-gray-200 hover:border-arje-blue hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-arje-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-arje-gray-600 mb-6">{service.description}</p>
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
                      <span className="text-arje-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-arje-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arje-gray-900 mb-4">
              Proceso de implementación
            </h2>
            <p className="text-xl text-arje-gray-600">
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
                <h3 className="text-xl font-bold text-arje-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-arje-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & AI Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arje-gray-900 mb-4">
              Gestión inteligente de <span className="gradient-text">datos corporativos</span>
            </h2>
            <p className="text-xl text-arje-gray-600 max-w-3xl mx-auto">
              Transformamos silos de datos en información accionable con tecnologías ETL, datalakes y análisis inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-arje-gray-900 mb-4">
                ETL & Data Pipelines
              </h3>
              <p className="text-arje-gray-600 mb-6">
                Extracción, transformación y carga de datos desde cualquier fuente a tu data warehouse o datalake
              </p>
              <ul className="space-y-2 text-sm text-arje-gray-700">
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Integración multi-fuente en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Transformaciones complejas automatizadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Orquestación y scheduling avanzado</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-arje-gray-900 mb-4">
                Calidad de Datos
              </h3>
              <p className="text-arje-gray-600 mb-6">
                Garantizamos la integridad, precisión y consistencia de tus datos corporativos
              </p>
              <ul className="space-y-2 text-sm text-arje-gray-700">
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Validación y limpieza automática</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Detección de duplicados y anomalías</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Monitoreo continuo de métricas DQ</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-arje-gray-900 mb-4">
                IA & Analytics
              </h3>
              <p className="text-arje-gray-600 mb-6">
                Inteligencia artificial para previsiones, detección de patrones y toma de decisiones
              </p>
              <ul className="space-y-2 text-sm text-arje-gray-700">
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Modelos predictivos de cash flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Detección de fraudes y anomalías</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arje-blue mr-2">✓</span>
                  <span>Dashboards inteligentes y alertas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-arje-blue/10 to-arje-blue-light/10 rounded-2xl border-2 border-arje-blue/20">
            <h3 className="text-2xl font-bold text-arje-gray-900 mb-4 text-center">
              Datalakes & Data Warehouses
            </h3>
            <p className="text-arje-gray-700 text-center max-w-3xl mx-auto">
              Implementamos arquitecturas modernas de datos que unifican información de múltiples fuentes,
              permitiendo análisis avanzados y democratización del acceso a la información en toda la organización.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-arje-gray-900 mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-arje-gray-600 mb-8">
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
