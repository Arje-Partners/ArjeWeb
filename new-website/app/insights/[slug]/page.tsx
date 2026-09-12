import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";

// Helper function to parse basic markdown with bold and italic
function parseMarkdown(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let key = 0;

  // Process bold (**text**)
  const boldRegex = /\*\*(.+?)\*\*/g;
  let match;
  let lastIndex = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`bold-${key++}`} className="font-bold text-arje-gray-900 dark:text-white">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // Process italic (*text*)
  const finalParts: (string | JSX.Element)[] = [];
  parts.forEach((part) => {
    if (typeof part === "string") {
      const italicRegex = /\*(.+?)\*/g;
      let italicMatch;
      let italicLastIndex = 0;

      while ((italicMatch = italicRegex.exec(part)) !== null) {
        if (italicMatch.index > italicLastIndex) {
          finalParts.push(part.slice(italicLastIndex, italicMatch.index));
        }
        finalParts.push(
          <em key={`italic-${key++}`} className="italic text-arje-gray-800 dark:text-gray-200">
            {italicMatch[1]}
          </em>
        );
        italicLastIndex = italicMatch.index + italicMatch[0].length;
      }

      if (italicLastIndex < part.length) {
        finalParts.push(part.slice(italicLastIndex));
      }
    } else {
      finalParts.push(part);
    }
  });

  return finalParts.length > 0 ? finalParts : [text];
}

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
    readTime: "5 min",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-arje-gray-900 dark:text-gray-100 transition-colors">
      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center text-sm font-semibold text-arje-blue hover:text-arje-blue-dark dark:text-arje-blue-light mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
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
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-xs font-bold rounded-lg uppercase tracking-wider mb-4">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-arje-gray-500 dark:text-gray-400 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {article.author}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.date}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime} de lectura
            </div>
          </div>

          {/* Featured Image */}
          {article.image && (
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 relative h-[350px] sm:h-[450px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Body Content */}
          <div className="space-y-6 leading-relaxed">
            {article.content.split("\n\n").map((block: string, idx: number) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl sm:text-3xl font-bold font-heading text-arje-gray-900 dark:text-white mt-12 mb-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl sm:text-2xl font-bold font-heading text-arje-gray-800 dark:text-gray-100 mt-8 mb-3"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              // Unordered list
              if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- ") || l.startsWith("* "));
                return (
                  <ul key={idx} className="space-y-2.5 my-4 pl-5 list-disc text-arje-gray-700 dark:text-gray-300 text-base sm:text-lg">
                    {items.map((item, i) => (
                      <li key={i}>{parseMarkdown(item.replace(/^[-*]\s+/, ""))}</li>
                    ))}
                  </ul>
                );
              }

              // Standard paragraph
              return (
                <p key={idx} className="text-base sm:text-lg text-arje-gray-700 dark:text-gray-300 leading-relaxed">
                  {parseMarkdown(trimmed)}
                </p>
              );
            })}
          </div>

          {/* Post Article Rosetta IA Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-arje-blue/10 via-teal-500/10 to-arje-blue-light/10 dark:from-gray-800 dark:to-gray-800/80 border-2 border-arje-blue/30 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-arje-blue">Plataforma de Integración</span>
              <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mt-1">
                Acelera la integración de tu tesorería con Rosetta IA
              </h3>
              <p className="text-sm text-arje-gray-600 dark:text-gray-300 mt-1 max-w-xl">
                Conecta tu ERP con Sage XRT, Embat o banca internacional sin desarrollos a medida.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/rosetta-ia"
                className="px-6 py-3 bg-arje-blue hover:bg-arje-blue-dark text-white rounded-xl text-sm font-semibold transition-all whitespace-nowrap shadow-md text-center"
              >
                Conocer Rosetta IA
              </Link>
              <Link
                href="/contacto"
                className="px-6 py-3 bg-white dark:bg-gray-700 text-arje-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-semibold transition-all whitespace-nowrap text-center"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
