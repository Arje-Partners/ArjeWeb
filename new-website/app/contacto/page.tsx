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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado! Te contactaremos en las próximas 24 horas.',
        });
        // Reset form
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          sistema: '',
          mensaje: '',
          aceptoPrivacidad: false,
          aceptoComunicaciones: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor, verifica tu conexión e inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-arje-gray-900 dark:text-white mb-6">
              Hablemos de tu <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-xl text-arje-gray-600 dark:text-gray-300">
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
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-xl border-2 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border-green-200 text-green-800'
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex items-start">
                    {submitStatus.type === 'success' ? (
                      <svg
                        className="w-6 h-6 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <p className="font-semibold">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
                      placeholder="+34 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                    ¿Qué sistema usas actualmente?
                  </label>
                  <select
                    name="sistema"
                    value={formData.sistema}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all"
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
                  <label className="block text-sm font-semibold text-arje-gray-900 dark:text-white mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-arje-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-arje-blue focus:ring-2 focus:ring-arje-blue/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y qué desafíos enfrentas..."
                  />
                </div>

                {/* RGPD Checkboxes */}
                <div className="space-y-4 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-xl border border-arje-gray-200 dark:border-gray-700">
                  {/* Información básica sobre protección de datos - Primera Capa */}
                  <div className="mb-4 pb-4 border-b border-arje-gray-300 dark:border-gray-600">
                    <p className="text-xs text-arje-gray-600 dark:text-gray-400 leading-relaxed">
                      <strong>Responsable:</strong> ARJE PARTNERS SL.{" "}
                      <strong>Finalidad:</strong> Responder a su solicitud y gestionar el envío de comunicaciones comerciales y publicitarias.{" "}
                      <strong>Legitimación:</strong> Consentimiento.{" "}
                      <strong>Destinatarios:</strong> Sus datos no se facilitarán a terceros, salvo los servicios auxiliares necesarios para el normal funcionamiento de la página web.{" "}
                      <strong>Transferencias internacionales:</strong> Los datos recogidos mediante la página web serán facilitados a organizaciones de terceros países establecidos fuera del Espacio Económico Europeo y con un nivel de garantías adecuadas al Reglamento General de Protección de Datos (EU) 2016/679. Países: Estados Unidos.{" "}
                      <strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.{" "}
                      <strong>Información adicional:</strong> Puede tener acceso a información adicional sobre cómo tratamos sus datos en la sección{" "}
                      <a
                        href="/privacidad"
                        className="text-arje-blue hover:underline"
                        target="_blank"
                      >
                        Política de Protección de Datos
                      </a>, o en el correo:{" "}
                      <a
                        href="mailto:info@arjepartners.com"
                        className="text-arje-blue hover:underline"
                      >
                        info@arjepartners.com
                      </a>.
                    </p>
                  </div>

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
                      className="ml-3 text-sm font-semibold text-arje-gray-900 dark:text-white"
                    >
                      HE SIDO INFORMADO, ENTIENDO Y AUTORIZO EL TRATAMIENTO DE DATOS PERSONALES *
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
                      className="ml-3 text-sm text-arje-gray-700 dark:text-gray-300"
                    >
                      ACEPTO Y CONSIENTO QUE MIS DATOS PERSONALES SEAN UTILIZADOS PARA EL ENVÍO DE COMUNICACIONES COMERCIALES Y PUBLICITARIAS
                    </label>
                  </div>

                  <div className="mt-4 pt-4 border-t border-arje-gray-300 dark:border-gray-600">
                    <p className="text-xs text-arje-gray-500 dark:text-gray-400 text-center">
                      Puede consultar información detallada en nuestra{" "}
                      <a
                        href="/cumplimiento-rgpd"
                        className="text-arje-blue hover:underline font-semibold"
                        target="_blank"
                      >
                        Página de Cumplimiento RGPD
                      </a>
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-arje-gray-400 cursor-not-allowed'
                      : 'bg-arje-blue text-white hover:bg-arje-blue-dark hover:shadow-2xl hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-arje-gray-900 dark:text-white mb-4">
                  Información de contacto
                </h2>
                <p className="text-arje-gray-600 dark:text-gray-300 mb-8">
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
                    <h3 className="font-semibold text-arje-gray-900 dark:text-white mb-1">
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
                    <h3 className="font-semibold text-arje-gray-900 dark:text-white mb-1">
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
                    <h3 className="font-semibold text-arje-gray-900 dark:text-white mb-1">
                      Oficina
                    </h3>
                    <p className="text-arje-gray-600 dark:text-gray-300">
                      Calle del Mastelero 12
                      <br />
                      28033 Madrid, España
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick response badge */}
              <div className="mt-8 p-6 bg-arje-blue/5 dark:bg-arje-blue/10 rounded-xl border-2 border-arje-blue/20 dark:border-arje-blue/30">
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
                  <span className="font-semibold text-arje-gray-900 dark:text-white">
                    Respuesta garantizada en 24h
                  </span>
                </div>
                <p className="text-sm text-arje-gray-600 dark:text-gray-300">
                  Nuestro equipo revisará tu consulta y te contactará con una
                  propuesta personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-arje-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
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
