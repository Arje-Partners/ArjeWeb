/*
 * Team Images (Unsplash - Free for commercial use):
 * - consulting.jpg: Photo by LinkedIn Sales Navigator on Unsplash
 * - training.jpg: Photo by Annie Spratt on Unsplash
 * - implementation.jpg: Photo by Marvin Meyer on Unsplash
 * - support.jpg: Photo by Headway on Unsplash
 */

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 mb-6">
              Transformamos desafíos en{" "}
              <span className="gradient-text">Oportunidades</span>
            </h1>
            <p className="text-xl text-arje-gray-600">
              En Arjé Partners, impulsamos la innovación y optimizamos la gestión
              financiera con soluciones a medida. Desde la implantación
              tecnológica hasta la automatización de procesos, te ayudamos a tomar
              decisiones más inteligentes y eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-arje-gray-900 mb-6">
                Nuestra misión
              </h2>
              <p className="text-lg text-arje-gray-700 mb-4">
                Hacer que los datos corporativos dejen de ser silos aislados y sean
                accesibles para cualquier proceso de la empresa.
              </p>
              <p className="text-lg text-arje-gray-700">
                Creemos que ninguna empresa debería tener que reemplazar su ERP o
                sistema custom solo para tener una tesorería eficiente. Por eso
                construimos la solución de treasury management más flexible del
                mercado, capaz de integrarse con cualquier sistema existente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-arje-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-arje-blue mb-2">15+</div>
                <p className="text-arje-gray-700">Años de experiencia</p>
              </div>
              <div className="p-6 bg-arje-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-arje-blue mb-2">50+</div>
                <p className="text-arje-gray-700">Integraciones realizadas</p>
              </div>
              <div className="p-6 bg-arje-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-arje-blue mb-2">95%</div>
                <p className="text-arje-gray-700">Tasa de retención</p>
              </div>
              <div className="p-6 bg-arje-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-arje-blue mb-2">100%</div>
                <p className="text-arje-gray-700">Éxito en proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-arje-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arje-gray-900 mb-4">
              Nuestro equipo
            </h2>
            <p className="text-xl text-arje-gray-600">
              Expertos en tecnología y finanzas trabajando juntos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                role: "Consultoría tecnológica y financiera",
                image: "/images/team/consulting.jpg",
                description:
                  "Diseñamos estrategias que optimizan procesos y alinean tecnología con objetivos de negocio",
              },
              {
                role: "Capacitación y formación",
                image: "/images/team/training.jpg",
                description:
                  "Llevamos tu equipo al siguiente nivel con formación personalizada y práctica",
              },
              {
                role: "Implantación tecnológica",
                image: "/images/team/implementation.jpg",
                description:
                  "Soluciones adaptadas con integraciones fluidas y transición sin complicaciones",
              },
              {
                role: "Soporte continuo",
                image: "/images/team/support.jpg",
                description:
                  "Estamos contigo cuando más nos necesites, para que tu negocio nunca se detenga",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 rounded-lg overflow-hidden h-48 relative group">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-arje-gray-900 mb-3">
                  {item.role}
                </h3>
                <p className="text-arje-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
