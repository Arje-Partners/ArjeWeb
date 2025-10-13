"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturedInsights() {
  const featuredArticles = [
    {
      id: "ia-produccion-treasury",
      title: "La integración de IA en Treasury Management",
      excerpt: "El 87% de los proyectos de IA fracasan al intentar dar el salto de prueba a producción. Descubre por qué y cómo solucionarlo.",
      image: "/images/articles/ia-treasury-hologram.png",
      category: "Inteligencia Artificial",
      readTime: "8 min",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "doce-millones-razones-abandonar-excel-treasury",
      title: "€12M de razones para abandonar Excel en Treasury",
      excerpt: "El coste real que una empresa mid-market pierde cada año gestionando su tesorería en hojas de cálculo.",
      image: "/images/articles/excel-risk.png",
      category: "Treasury Management",
      readTime: "12 min",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "integraciones-erp-ventaja",
      title: "Las integraciones ERP: el nuevo diferenciador competitivo",
      excerpt: "El 80% de empresas consideran la capacidad de integración como factor crítico. Ya no compites por características, sino por conectividad.",
      image: "/images/articles/erp-integration-diagram.png",
      category: "Tecnología",
      readTime: "6 min",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-arje-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-4">
            Insights &{" "}
            <span className="gradient-text">Conocimiento</span>
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Análisis profundo sobre integración de sistemas, treasury management
            y transformación digital financiera
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center text-arje-blue hover:text-arje-blue-dark font-semibold transition-colors"
          >
            Ver todos los artículos
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/insights/${article.id}`}
              className="group block"
            >
              <article className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-arje-gray-200 dark:border-gray-700 hover:border-arje-blue hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Featured Image with Gradient Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${article.gradient}`}
                    ></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-arje-blue dark:text-blue-400 text-sm font-semibold rounded-lg backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arje-gray-900 dark:text-white mb-3 group-hover:text-arje-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-arje-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-arje-gray-500 dark:text-gray-400 pt-4 border-t border-arje-gray-100 dark:border-gray-700">
                    <span>{article.readTime} de lectura</span>
                    <span className="text-arje-blue group-hover:translate-x-1 transition-transform">
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-block px-8 py-4 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-2xl hover:scale-105"
          >
            Explorar todos los Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
