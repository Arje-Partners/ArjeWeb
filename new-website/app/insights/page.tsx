"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles as articlesData } from "@/lib/articles";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  const rawArticles = useMemo(() => {
    return Object.entries(articlesData).map(([slug, article]) => {
      // Clean excerpt by stripping markdown hashes
      const cleanContent = article.content
        .split("\n")
        .filter((line: string) => !line.startsWith("#") && line.trim().length > 0)
        .join(" ");

      return {
        id: slug,
        title: article.title,
        excerpt: cleanContent.substring(0, 180) + "...",
        date: article.date,
        category: article.category,
        readTime: article.readTime,
        image: article.image,
        tags: ["Integración", "Treasury", article.category],
      };
    });
  }, []);

  const categories = [
    "Todos",
    "Inteligencia Artificial",
    "Treasury Management",
    "Tecnología",
  ];

  const filteredArticles = useMemo(() => {
    return rawArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesQuery =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [rawArticles, selectedCategory, searchQuery]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Biblioteca de Conocimiento</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-6">
              Insights &{" "}
              <span className="gradient-text">Conocimiento</span>
            </h1>
            <p className="text-lg sm:text-xl text-arje-gray-600 dark:text-gray-300">
              Análisis técnicos, tendencias y casos prácticos sobre integración de sistemas, treasury management y automatización financiera.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por palabra clave, ERP, IA..."
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-arje-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 text-sm shadow-sm"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800 sticky top-20 md:top-24 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    active
                      ? "bg-arje-blue text-white shadow-sm shadow-arje-blue/30 scale-105"
                      : "bg-gray-100 dark:bg-gray-800 text-arje-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-arje-gray-600 dark:text-gray-400 mb-4">
                No se encontraron artículos para tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-arje-blue text-white rounded-lg text-sm font-semibold"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.id}`}
                  className="group block"
                >
                  <article className="h-full bg-white dark:bg-gray-800/90 rounded-3xl border border-gray-200 dark:border-gray-700/80 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                    <div>
                      {/* Featured Image */}
                      {article.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="p-6 pb-0">
                        <span className="inline-block px-3 py-1 bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-xs font-bold rounded-lg uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-3 group-hover:text-arje-blue transition-colors line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Meta Footer */}
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex items-center justify-between text-xs text-arje-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                        <span>{article.date}</span>
                        <span className="text-arje-blue font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Leer artículo →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-arje-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-arje-blue">Newsletter Especializada</span>
          <h2 className="text-3xl font-bold font-heading text-arje-gray-900 dark:text-white">
            ¿Quieres recibir nuestros análisis en tu correo?
          </h2>
          <p className="text-base text-arje-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Publicamos artículos técnicos y de estrategia sobre tesorería moderna, integración ERP y novedades en Rosetta IA. Sin spam.
          </p>

          {newsletterStatus === "success" ? (
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 font-medium text-sm">
              ¡Gracias por suscribirte! Te mantendremos al tanto de las novedades.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all shadow-md text-sm whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
