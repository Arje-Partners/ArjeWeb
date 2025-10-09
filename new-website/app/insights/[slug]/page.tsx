import Link from "next/link";
import { articles } from "@/lib/articles";

// Generar las rutas estáticas
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const article = articles[slug] || {
    title: "Artículo no encontrado",
    content: "Este artículo aún no está disponible.",
    category: "General",
    author: "Arjé Partners",
    date: "2025-10-04",
    readTime: "5 min"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center text-arje-blue hover:text-arje-blue-dark mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a Insights
          </Link>

          {/* Category badge */}
          <span className="inline-block px-4 py-2 bg-arje-blue/10 text-arje-blue text-sm font-semibold rounded-lg mb-6">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-arje-gray-600 mb-12 pb-8 border-b border-arje-gray-200">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {article.author}
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {article.date}
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {article.readTime} lectura
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-arje-gray-900 prose-p:text-arje-gray-700 prose-a:text-arje-blue prose-strong:text-arje-gray-900 prose-ul:text-arje-gray-700 prose-ol:text-arje-gray-700">
            {article.content.split("\n").map((paragraph: string, idx: number) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-3xl font-bold mt-12 mb-6 text-arje-gray-900"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-2xl font-bold mt-8 mb-4 text-arje-gray-900"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              } else if (paragraph.startsWith("- ")) {
                return (
                  <li key={idx} className="text-arje-gray-700 mb-2 ml-6">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={idx} className="text-arje-gray-700 mb-2 ml-6">
                    {paragraph.replace(/^\d+\.\s/, "")}
                  </li>
                );
              } else if (paragraph.trim() && !paragraph.startsWith("---")) {
                return (
                  <p key={idx} className="text-lg text-arje-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-arje-gray-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-arje-gray-900 mb-4">
              ¿Interesado en implementar estas soluciones?
            </h3>
            <p className="text-arje-gray-600 mb-6">
              Agenda una consulta gratuita con nuestros expertos
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-lg hover:scale-105"
            >
              Solicitar Consulta
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
