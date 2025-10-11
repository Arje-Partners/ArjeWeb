"use client";

import Link from "next/link";
import Image from "next/image";
import { articles as articlesData } from "@/lib/articles";

export default function InsightsPage() {
  const articles = Object.entries(articlesData).map(([slug, article]) => ({
    id: slug,
    title: article.title,
    excerpt: article.content.split('\n\n')[1] || article.content.substring(0, 200) + '...',
    date: article.date,
    category: article.category,
    readTime: article.readTime,
    image: article.image,
    tags: ["IA", "Integración", "Treasury"], // Podrías añadir tags al articles.ts si quieres
  }));

  const categories = [
    "Todos",
    "Inteligencia Artificial",
    "Tecnología",
    "Estrategia",
    "Casos de Éxito",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 dark:text-white mb-6">
              Insights &{" "}
              <span className="gradient-text">Conocimiento</span>
            </h1>
            <p className="text-xl text-arje-gray-600 dark:text-gray-300">
              Artículos técnicos sobre integración de sistemas, treasury
              management, y transformación digital financiera.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-arje-gray-200 dark:border-gray-700 sticky top-16 bg-white dark:bg-gray-900 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  index === 0
                    ? "bg-arje-blue text-white"
                    : "bg-arje-gray-100 dark:bg-gray-800 text-arje-gray-700 dark:text-gray-300 hover:bg-arje-gray-200 dark:hover:bg-gray-700"
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
                <article className="h-full bg-white dark:bg-gray-800 rounded-2xl border border-arje-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Featured Image */}
                  {article.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <span className="inline-block px-3 py-1 bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-blue-400 text-sm font-semibold rounded-lg">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-arje-gray-900 dark:text-white mb-3 group-hover:text-arje-blue transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-arje-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-arje-gray-100 dark:bg-gray-700 text-arje-gray-600 dark:text-gray-300 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-arje-gray-500 dark:text-gray-400 pt-4 border-t border-arje-gray-100 dark:border-gray-700">
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
      <section className="py-16 bg-arje-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-arje-gray-900 dark:text-white mb-4">
            ¿Quieres recibir nuestros insights?
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300 mb-8">
            Suscríbete y recibe artículos semanales sobre treasury management e
            integración de sistemas.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-arje-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none"
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
