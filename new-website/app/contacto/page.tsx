"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    sistema: "",
    mensaje: "",
    aceptoPrivacidad: false,
    aceptoComunicaciones: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías el envío del formulario
    console.log("Form submitted:", formData);
    alert("Mensaje enviado. Te contactaremos pronto!");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 mb-6">
              Hablemos de tu <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-xl text-arje-gray-600">
              Cuéntanos tu situación y te mostraremos cómo integrarnos con tu
              sistema actual
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                      placeholder="+34 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                    ¿Qué sistema usas actualmente?
                  </label>
                  <select
                    name="sistema"
                    value={formData.sistema}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="sap">SAP</option>
                    <option value="oracle">Oracle</option>
                    <option value="infor">Infor M3</option>
                    <option value="ifs">IFS</option>
                    <option value="custom">Sistema Custom/Propio</option>
                    <option value="legacy">Sistema Legacy</option>
                    <option value="excel">Excel / Manual</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y qué desafíos enfrentas..."
                  />
                </div>

                {/* RGPD Checkboxes */}
                <div className="space-y-4 p-6 bg-arje-gray-50 rounded-xl border border-arje-gray-200">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="aceptoPrivacidad"
                      id="aceptoPrivacidad"
                      required
                      checked={formData.aceptoPrivacidad}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-arje-blue border-gray-300 rounded focus:ring-arje-blue"
                    />
                    <label
                      htmlFor="aceptoPrivacidad"
                      className="ml-3 text-sm text-arje-gray-700"
                    >
                      Acepto el{" "}
                      <a
                        href="/legal"
                        className="text-arje-blue hover:underline font-semibold"
                        target="_blank"
                      >
                        aviso legal
                      </a>{" "}
                      de esta web y su{" "}
                      <a
                        href="/privacidad"
                        className="text-arje-blue hover:underline font-semibold"
                        target="_blank"
                      >
                        política de privacidad
                      </a>{" "}
                      *
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="aceptoComunicaciones"
                      id="aceptoComunicaciones"
                      checked={formData.aceptoComunicaciones}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-arje-blue border-gray-300 rounded focus:ring-arje-blue"
                    />
                    <label
                      htmlFor="aceptoComunicaciones"
                      className="ml-3 text-sm text-arje-gray-700"
                    >
                      Deseo recibir comunicaciones comerciales de productos y
                      servicios de Arjé Partners, S.L., por cualquier medio,
                      incluido el electrónico, hasta la revocación del
                      consentimiento por mi parte.
                    </label>
                  </div>

                  <div className="mt-4 pt-4 border-t border-arje-gray-300">
                    <p className="text-xs text-arje-gray-600 leading-relaxed">
                      En <strong>Arjé Partners, S.L.</strong> tratamos la
                      información que nos facilita con el fin de dar respuesta
                      a su solicitud y en relación con los servicios que
                      prestamos y los productos que suministramos. Los datos
                      proporcionados se conservarán mientras se mantenga el
                      contacto siendo eliminados una vez finalizado salvo en
                      los casos en que exista una obligación legal. Usted tiene
                      derecho a obtener confirmación sobre si en Arjé Partners,
                      S.L. estamos tratando sus datos personales, por tanto,
                      tiene derecho a acceder a sus datos personales, rectificar
                      los datos inexactos o solicitar su supresión cuando los
                      datos ya no sean necesarios. Asimismo, podrá oponerse al
                      tratamiento y la portabilidad de sus datos. Si considera
                      que sus datos personales no han sido tratados conforme a
                      la normativa, puede contactar con el RGPD en{" "}
                      <a
                        href="http://www.aepd.es"
                        className="text-arje-blue hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.aepd.es
                      </a>
                      . Asimismo podrá presentar una reclamación ante la Agencia
                      Española de Protección de Datos, especialmente cuando no
                      haya obtenido la satisfacción en el ejercicio de sus
                      derechos.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-arje-blue text-white rounded-xl font-semibold hover:bg-arje-blue-dark transition-all hover:shadow-2xl hover:scale-[1.02]"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-arje-gray-900 mb-4">
                  Información de contacto
                </h2>
                <p className="text-arje-gray-600 mb-8">
                  Respondemos en menos de 24 horas. También puedes contactarnos
                  directamente:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-arje-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-arje-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-arje-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@arjepartners.com"
                      className="text-arje-blue hover:underline"
                    >
                      info@arjepartners.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-arje-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-arje-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-arje-gray-900 mb-1">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+34915620800"
                      className="text-arje-blue hover:underline"
                    >
                      +34 915 62 08 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-arje-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-arje-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-arje-gray-900 mb-1">
                      Oficina
                    </h3>
                    <p className="text-arje-gray-600">
                      Calle del Mastelero 12
                      <br />
                      28033 Madrid, España
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick response badge */}
              <div className="mt-8 p-6 bg-arje-blue/5 rounded-xl border-2 border-arje-blue/20">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-6 h-6 text-arje-blue mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-arje-gray-900">
                    Respuesta garantizada en 24h
                  </span>
                </div>
                <p className="text-sm text-arje-gray-600">
                  Nuestro equipo revisará tu consulta y te contactará con una
                  propuesta personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-arje-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6070.165648802285!2d-3.6624035245140627!3d40.47343265218715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ecaf7fc439b%3A0x2fc7027a0c9418f4!2sC.%20del%20Mastelero%2C%2012%2C%20Hortaleza%2C%2028033%20Madrid!5e0!3m2!1ses!2ses!4v1740332834360!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
