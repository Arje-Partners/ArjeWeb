"use client";

import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Vitaldent", logo: "logo-vitaldent-1206x678.png", scale: 1 },
    { name: "Codorníu", logo: "logo-codorniu-1206x678.png", scale: 1 },
    { name: "Electrolux", logo: "logo-electrolux-1206x678.png", scale: 1 },
    { name: "UGround", logo: "logo-uground-1206x678.png", scale: 1.5 },
    { name: "Adlantia", logo: "logo-adlantia-1206x678.png", scale: 1.5 },
    { name: "MaaS", logoLight: "logo-maas-light.jpg", logoDark: "logo-maas-dark.jpg", scale: 1 },
    { name: "Pavasal", logo: "logo-pavasal-1206x678.png", scale: 1 },
    { name: "Ruesma", logo: "logo-ruesma-1206x678.png", scale: 1 },
  ];

  const testimonials = [
    {
      quote:
        "Integraron nuestro ERP custom de más de 15 años con el sistema de tesorería en menos de 3 semanas. Cero interrupciones operativas.",
      author: "Director Financiero (CFO)",
      company: "Grupo Industrial Nacional · 60M€ facturación",
      tag: "⚡ 3 semanas de implantación",
    },
    {
      quote:
        "Teníamos 3 ERPs distintos y filiales internacionales. Arjé se adaptó a nuestra arquitectura sin obligarnos a costosos desarrollos a medida.",
      author: "Director de Sistemas (CIO)",
      company: "Grupo Empresarial Multisectorial",
      tag: "🔗 3 ERPs integrados",
    },
    {
      quote:
        "La conciliación bancaria que antes nos tomaba 2 días enteros ahora se ejecuta de forma desatendida cada mañana con precisión absoluta.",
      author: "Responsable de Tesorería",
      company: "Compañía Líder del Sector Retail",
      tag: "⏱️ -80% tiempo de conciliación",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-4">
            Confían en <span className="gradient-text">nosotros</span>
          </h2>
          <p className="text-xl text-arje-gray-600 dark:text-gray-300">
            Empresas líderes que han transformado su tesorería
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden mb-20">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

          {/* Carousel container */}
          <div className="flex animate-scroll hover:pause">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 w-64"
              >
                <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-arje-gray-200 dark:border-gray-700 h-32">
                  <div
                    className="relative w-full h-20"
                    style={{ transform: `scale(${client.scale || 1})` }}
                  >
                    {/* Light mode logo */}
                    {client.logoLight && (
                      <Image
                        src={`/images/clients/${client.logoLight}`}
                        alt={client.name}
                        fill
                        className="object-contain dark:hidden"
                      />
                    )}
                    {/* Dark mode logo */}
                    {client.logoDark && (
                      <Image
                        src={`/images/clients/${client.logoDark}`}
                        alt={client.name}
                        fill
                        className="object-contain hidden dark:block"
                      />
                    )}
                    {/* Single logo for both modes */}
                    {client.logo && (
                      <Image
                        src={`/images/clients/${client.logo}`}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 w-64"
              >
                <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-arje-gray-200 dark:border-gray-700 h-32">
                  <div
                    className="relative w-full h-20"
                    style={{ transform: `scale(${client.scale || 1})` }}
                  >
                    {/* Light mode logo */}
                    {client.logoLight && (
                      <Image
                        src={`/images/clients/${client.logoLight}`}
                        alt={client.name}
                        fill
                        className="object-contain dark:hidden"
                      />
                    )}
                    {/* Dark mode logo */}
                    {client.logoDark && (
                      <Image
                        src={`/images/clients/${client.logoDark}`}
                        alt={client.name}
                        fill
                        className="object-contain hidden dark:block"
                      />
                    )}
                    {/* Single logo for both modes */}
                    {client.logo && (
                      <Image
                        src={`/images/clients/${client.logo}`}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-arje-gray-50 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-gray-200/80 dark:border-gray-700 hover:border-arje-blue/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {"★".repeat(5)}
                  </div>
                  {testimonial.tag && (
                    <span className="text-[11px] font-bold text-arje-blue bg-arje-blue/10 dark:bg-arje-blue/20 px-2.5 py-1 rounded-full">
                      {testimonial.tag}
                    </span>
                  )}
                </div>
                <p className="text-arje-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-arje-gray-200 dark:border-gray-700 pt-4">
                <p className="font-bold font-heading text-arje-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-arje-gray-500 dark:text-gray-400 mt-0.5">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}