"use client";

import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Vitaldent", logo: "logo-vitaldent-1206x678.png" },
    { name: "Codorníu", logo: "logo-codorniu-1206x678.png" },
    { name: "Electrolux", logo: "logo-electrolux-1206x678.png" },
    { name: "UGround", logo: "logo-uground-1206x678.png" },
  ];

  const testimonials = [
    {
      quote:
        "Integraron nuestro ERP custom de 15 años en menos de 3 semanas. Increíble.",
      author: "CFO, Empresa Industrial",
      company: "60M€ facturación",
    },
    {
      quote:
        "No tuvimos que cambiar nuestro sistema. Arjé se adaptó a nosotros, no al revés.",
      author: "CIO, Grupo Empresarial",
      company: "Múltiples ERPs",
    },
    {
      quote:
        "La única solución que nos permitió mantener nuestros desarrollos internos.",
      author: "Director IT",
      company: "Retail",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-arje-gray-900 mb-4">
            Confían en <span className="gradient-text">nosotros</span>
          </h2>
          <p className="text-xl text-arje-gray-600">
            Empresas líderes que han transformado su tesorería
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20 mb-20 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-full h-24 md:h-28">
                <Image
                  src={`/images/clients/${client.logo}`}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-arje-gray-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-arje-blue/20"
            >
              <div className="text-arje-blue text-4xl mb-4">"</div>
              <p className="text-arje-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-arje-gray-200 pt-4">
                <p className="font-semibold text-arje-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-arje-gray-500">
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