"use client";

import Link from "next/link";

export default function InsightsPage() {
  const articles = [
    {
      id: "ia-produccion-treasury",
      title:
        "La Integración de IA en Treasury Management: Superando los Desafíos de Implementación",
      excerpt:
        "El 80% de los proyectos de IA fracasan al pasar a producción. Descubre por qué y cómo evitarlo en treasury management.",
      date: "2025-10-03",
      category: "Inteligencia Artificial",
      readTime: "8 min",
      tags: ["IA", "Integración", "Treasury"],
    },
    {
      id: "integraciones-erp-ventaja",
      title:
        "Por qué las Integraciones ERP son el Nuevo Diferenciador Competitivo",
      excerpt:
        "El diferenciador ya no son los features, son las integraciones. Aprende cómo convertir tu capacidad de integración en ventaja competitiva.",
      date: "2025-10-03",
      category: "Tecnología",
      readTime: "6 min",
      tags: ["ERP", "Integración", "Competitividad"],
    },
    {
      id: "ia-treasury-alternativas",
      title:
        "IA en Treasury Management: ¿Necesitas una plataforma nueva o mejor integración?",
      excerpt:
        "Análisis comparativo entre adoptar nuevas plataformas vs mejorar integraciones. ROI y casos de uso reales.",
      date: "2025-10-03",
      category: "Estrategia",
      readTime: "7 min",
      tags: ["IA", "ROI", "Estrategia"],
    },
  ];

  const categories = [
    "Todos",
    "Inteligencia Artificial",
    "Tecnología",
    "Estrategia",
    "Casos de Éxito",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 mb-6">
              Insights &{" "}
              <span className="gradient-text">Conocimiento</span>
            </h1>
            <p className="text-xl text-arje-gray-600">
              Artículos técnicos sobre integración de sistemas, treasury
              management, y transformación digital financiera.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-arje-gray-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  index === 0
                    ? "bg-arje-blue text-white"
                    : "bg-arje-gray-100 text-arje-gray-700 hover:bg-arje-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/insights/${article.id}`}
                className="group block"
              >
                <article className="h-full bg-white rounded-2xl border border-arje-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <span className="inline-block px-3 py-1 bg-arje-blue/10 text-arje-blue text-sm font-semibold rounded-lg">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-arje-gray-900 mb-3 group-hover:text-arje-blue transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-arje-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-arje-gray-100 text-arje-gray-600 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-arje-gray-500 pt-4 border-t border-arje-gray-100">
                      <span>{article.date}</span>
                      <span>{article.readTime} lectura</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-arje-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-arje-gray-900 mb-4">
            ¿Quieres recibir nuestros insights?
          </h2>
          <p className="text-xl text-arje-gray-600 mb-8">
            Suscríbete y recibe artículos semanales sobre treasury management e
            integración de sistemas.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-arje-blue text-white rounded-lg font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-lg"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
