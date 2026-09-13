"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { faqs } from "./faqs";
import { CIRCUIT_NEON, circuitSystems, integrationCategories } from "@/lib/integrations";

const REVIEW_NEON = "#ffa53d";
const CIRCUIT_STEP_MS = 1800;

const neonVars = (system: string): CSSProperties => {
  const [first, second = first] = system.split(" + ");
  return { "--neon": CIRCUIT_NEON[first], "--neon2": CIRCUIT_NEON[second] } as CSSProperties;
};

export default function RosettaIAPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // Primera abierta por defecto segun §1.4

  // El documento recorre el circuito paso a paso; al pasar el ratón por un paso queda fijado
  const circuitRef = useRef<HTMLElement>(null);
  const [circuitStep, setCircuitStep] = useState(1);
  const [pinnedStep, setPinnedStep] = useState<number | null>(null);
  const [circuitRunning, setCircuitRunning] = useState(false);
  const [circuitStatic, setCircuitStatic] = useState(false); // Movimiento reducido: todo encendido y quieto

  useEffect(() => {
    const section = circuitRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCircuitStatic(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setCircuitRunning(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!circuitRunning || pinnedStep !== null) return;
    const timer = setInterval(() => setCircuitStep((s) => (s % 7) + 1), CIRCUIT_STEP_MS);
    return () => clearInterval(timer);
  }, [circuitRunning, pinnedStep]);

  const activeCircuitStep = pinnedStep ?? circuitStep;
  const isStepLit = (step: number) => circuitStatic || step === activeCircuitStep;
  const laserVars = (system: string): CSSProperties =>
    ({ ...neonVars(system), "--run": `${CIRCUIT_STEP_MS}ms`, "--loops": pinnedStep !== null ? "infinite" : 1 }) as CSSProperties;

  const applications = [
    {
      id: "bancos",
      title: "Conectividad bancaria",
      headline: "Los extractos entran solos, todos los días",
      description: "Rosetta IA se conecta a tus bancos y trae los movimientos sin que nadie entre a descargarlos.",
      bullets: [
        "Conexión automática con el banco mediante agregación bancaria regulada, o descarga programada de ficheros Norma 43.",
        "Las conexiones se renuevan, se vigilan y avisan antes de caducar. Un error de credenciales pausa la conexión, no entra en bucle.",
        "Un extracto único y normalizado de todos tus bancos, consultable y exportable.",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      id: "contabilizacion",
      title: "Contabilización de extractos",
      headline: "Del movimiento bancario al asiento, con criterio",
      description: "Cada movimiento se clasifica, se propone su asiento y se cuadra contra lo que ya está en el ERP.",
      bullets: [
        "Triaje automático por nivel de confianza: lo claro se contabiliza, lo dudoso pasa a una lista de revisión con la pregunta concreta.",
        "Reglas de negocio propias de cada cliente, que se ajustan sin tocar programación.",
        "Multi-sociedad y multidivisa, con trazabilidad de quién decidió qué y marcha atrás.",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "facturas",
      title: "Digitalización y registro de facturas de proveedor",
      headline: "La factura llega por correo y aparece registrada en el ERP",
      description: "Rosetta IA recoge las facturas de la carpeta donde caen, las pasa por el servicio de digitalización, recupera el contenido extraído y registra el documento en el ERP.",
      bullets: [
        "Del buzón de correo a la carpeta, y de la carpeta al ERP, sin que nadie abra el PDF ni teclee una línea.",
        "La extracción del documento la realiza Invofox; Rosetta IA orquesta todo el circuito y traduce lo extraído a los maestros del cliente: proveedor, cuenta contable, dimensiones y centros de coste.",
        "Registro directo en Microsoft Dynamics 365 Business Central, y en cualquier otro ERP conectado por el mismo camino.",
      ],
      highlight:
        "Tú decides si el documento se registra solo o pasa antes por revisión. Se configura por cliente, por tipo de documento o por proveedor: automático donde hay confianza, revisado donde conviene mirarlo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "pagos",
      title: "Pagos",
      headline: "Las órdenes salen del ERP y llegan al banco en el formato correcto",
      description: "Generación y validación de ficheros de pago, con los importes y los totales de control calculados de forma determinista.",
      bullets: [
        "Formatos SEPA/ISO 20022 y cuadernos bancarios de uso habitual.",
        "La aprobación y el envío al banco se quedan en tu circuito de tesorería.",
        "Confirmación real de la aceptación en destino, no solo de que la comunicación no falló.",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "tpv",
      title: "Conciliación de TPV",
      headline: "Cuadrar lo que cobras por datáfono con lo que te ingresa el banco",
      description: "Lo que registra el terminal de venta y lo que aparece en cuenta nunca coinciden línea a línea. Rosetta IA lee los ficheros que envían los bancos, los cruza con las operaciones del TPV y explica la diferencia.",
      bullets: [
        "Comisiones, retenciones y liquidaciones netas identificadas por separado.",
        "Varios establecimientos y varios bancos sobre el mismo proceso.",
        "Lo que no cuadra aparece como excepción con su motivo, no como un descuadre sin explicación.",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const circuitSteps = [
    {
      step: 1,
      title: "Llega la factura",
      detail: "El proveedor la envía por correo y el documento se deposita en la carpeta de siempre.",
      system: "Correo",
    },
    {
      step: 2,
      title: "Rosetta IA la recoge",
      detail: "Vigila la carpeta y toma los documentos nuevos.",
      system: "Almacenamiento de documentos",
    },
    {
      step: 3,
      title: "Se digitaliza",
      detail: "El documento pasa por Invofox, que extrae su contenido.",
      system: "Invofox",
    },
    {
      step: 4,
      title: "Se traduce y se registra",
      detail: "Rosetta IA recupera lo extraído, lo traduce a los maestros del cliente y registra el documento en el ERP, directamente o pasando antes por revisión.",
      system: "ERP",
      review: { label: "Revisión opcional", optional: true },
    },
    {
      step: 5,
      title: "Entran los movimientos del banco",
      detail: "Los extractos se descargan solos, todos los días.",
      system: "Banco",
    },
    {
      step: 6,
      title: "Se cruzan movimiento y factura",
      detail: "Cada apunte bancario se enfrenta a los documentos pendientes hasta encontrar su pareja.",
      system: "Banco + ERP",
    },
    {
      step: 7,
      title: "Se contabiliza y se compensa",
      detail: "El pago o el cobro se contabiliza y el documento queda saldado en el ERP. Lo que no encuentra pareja no se fuerza.",
      system: "ERP",
      review: { label: "Sin pareja: a revisión con su motivo", optional: false },
    },
  ];

  // §1.1 · Figura simétrica: cualquier sistema a cada lado; ERP y tesorería son ejemplos, no la definición
  const architectureSides = [
    {
      label: "Un sistema",
      examples: [
        { name: "ERP", detail: "SAP, Business Central, M3, JD Edwards, Sage, Odoo" },
        { name: "Bancos", detail: "Agregación bancaria, Norma 43, ficheros de liquidación" },
        { name: "Plataformas sectoriales", detail: "Seguros, retail, hostelería" },
        { name: "Gestores documentales y digitalización", detail: "Buzones de correo, carpetas, extracción de documentos" },
        { name: "Aplicaciones propias sin API", detail: "Desarrollos a medida y sistemas heredados" },
      ],
      footnote: "Se lee por API, servicio web, base de datos o fichero.",
    },
    {
      label: "Cualquier otro sistema",
      examples: [
        { name: "Tesorería", detail: "Sage XRT Advanced, Embat" },
        { name: "ERP", detail: "Registro de documentos, asientos y compensaciones" },
        { name: "BI y almacenes de datos", detail: "Informes, cuadros de mando, históricos" },
        { name: "Ficheros y bases de datos heredadas", detail: "AS/400, SQL, ficheros planos" },
        { name: "Organismos y bancos", detail: "Ficheros de pago, Veri*factu, SII, formatos sectoriales" },
      ],
      footnote: "Se entrega en el formato que espera y se confirma la aceptación.",
    },
  ];

  const renderSide = (side: (typeof architectureSides)[number]) => (
    <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/80 border-2 border-gray-200 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold font-heading text-arje-gray-900 dark:text-white mb-2">{side.label}</h3>
        <p className="text-sm text-arje-gray-600 dark:text-gray-300 mb-6">Del tipo que sea. Por ejemplo:</p>
        <div className="space-y-2.5 text-xs sm:text-sm text-arje-gray-700 dark:text-gray-300">
          {side.examples.map((ex) => (
            <div key={ex.name} className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <strong>{ex.name}:</strong> {ex.detail}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-arje-gray-500 dark:text-gray-400">
        {side.footnote}
      </div>
    </div>
  );

  const bidirectionalArrow = (
    <div className="flex items-center justify-center text-arje-blue text-2xl font-bold" aria-hidden="true">
      <span className="hidden lg:inline">⇄</span>
      <span className="lg:hidden">⇅</span>
    </div>
  );

  const aiRows = [
    ["Entender la estructura de un sistema nuevo", "Calcular importes"],
    ["Proponer equivalencias entre campos", "Decidir signos, redondeos o divisas"],
    ["Interpretar documentación y nomenclaturas", "Generar el fichero que va al banco"],
    ["Señalar lo que no encaja", "Validar el cumplimiento normativo"],
  ];

  // S6 · Casos de v1.0 que no quedan cubiertos por ninguna tarjeta de aplicación
  const alsoSolves = [
    {
      title: "Maestros siempre alineados",
      desc: "Cuentas contables, clientes, proveedores, cuentas bancarias y atributos se mantienen sincronizados entre el ERP y la plataforma de tesorería. Se actualiza solo lo que ha cambiado realmente.",
    },
    {
      title: "Multi-sociedad y multi-divisa",
      desc: "Grupos con varias sociedades, países y divisas, cada una con su configuración, operando sobre la misma integración. Añadir una sociedad es configuración, no un proyecto nuevo.",
    },
  ];

  // S4 · Los tres pilares
  const pillars = [
    {
      title: "Un modelo de datos común",
      desc: "Cuentas, terceros, operaciones, cobros y pagos se traducen a un modelo canónico único, construido sobre estándares financieros del sector. Conectar el sistema número diez cuesta una fracción de lo que costó el primero, porque el núcleo ya está resuelto.",
    },
    {
      title: "Inteligencia artificial donde aporta",
      desc: "La IA se usa para lo que hace bien: entender la estructura de un sistema desconocido, proponer equivalencias entre campos, interpretar documentación ambigua y detectar lo que no encaja. Trabaja sobre la estructura de los datos, no sobre tus importes.",
    },
    {
      title: "Control determinista del dinero",
      desc: "Los importes, los ficheros SEPA, los extractos bancarios y las validaciones regulatorias se calculan con reglas fijas y auditables. El mismo dato de entrada produce siempre el mismo resultado, y ese resultado se puede verificar línea a línea.",
    },
  ];

  // S5 · El recorrido de un dato (asset A: rama de excepciones en el paso de validación)
  const dataJourney = [
    {
      title: "Se lee del origen",
      desc: "Rosetta IA extrae la información del sistema de origen por el camino que ese sistema permita: API, servicio web, consulta a base de datos o fichero. Si tu política de seguridad no admite accesos entrantes, el flujo se invierte y es tu sistema el que envía la información a Rosetta IA.",
    },
    {
      title: "Se traduce al modelo común",
      desc: "Los campos del sistema de origen se convierten al modelo canónico. Las equivalencias se definen una vez, quedan documentadas y versionadas, y se reutilizan en cada ejecución.",
    },
    {
      title: "Se valida antes de salir",
      desc: "Ningún dato sale sin pasar por la puerta de validación: estructura, importes, divisas, identificadores y reglas de negocio. Lo que no cumple no se envía; se aparta, se registra con el motivo y queda a la vista para revisarlo.",
      exceptions: true,
    },
    {
      title: "Se entrega al destino y se confirma",
      desc: "El dato se entrega en el formato que espera el sistema de destino, y Rosetta IA comprueba que realmente se ha aceptado, no solo que la comunicación no ha fallado. Si el destino rechaza algo, se reintenta de forma controlada y queda registrado.",
    },
  ];

  const securityItems = [
    {
      title: "Aislamiento por cliente",
      desc: "Cada cliente opera en su propio espacio lógico, con separación garantizada en el propio acceso a los datos.",
    },
    {
      title: "Cifrado en reposo y en tránsito",
      desc: "Los datos se almacenan cifrados en infraestructura gestionada dentro de la Unión Europea y viajan siempre por canales cifrados.",
    },
    {
      title: "Credenciales fuera del sistema",
      desc: "Las credenciales de acceso a tus sistemas y bancos se custodian en un gestor de secretos dedicado. Se resuelven en el momento y no se guardan en claro en ninguna parte de la plataforma.",
    },
    {
      title: "La IA no ve tus datos sensibles",
      desc: "Los modelos de lenguaje trabajan sobre nombres de campos y estructuras —los metadatos de tus sistemas—, no sobre IBAN, importes o datos de contacto reales.",
    },
    {
      title: "Todo queda registrado",
      desc: "Cada ejecución, cada transformación y cada decisión humana deja rastro consultable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-arje-gray-900 dark:text-gray-100 transition-colors">
      {/* S1 · Hero (§1.1 Reposicionado) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-arje-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-arje-blue/15 via-teal-500/10 to-arje-blue-light/15 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light text-xs font-bold tracking-wider uppercase border border-arje-blue/20">
              <span>Rosetta IA · Plataforma de Integración</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-arje-gray-900 dark:text-white">
              Conecta cualquier sistema con <span className="gradient-text">cualquier sistema</span>
            </h1>

            <p className="text-xl md:text-2xl text-arje-gray-600 dark:text-gray-300 font-normal max-w-3xl mx-auto leading-relaxed">
              Rosetta IA traduce entre aplicaciones que no fueron pensadas para entenderse. ERP, banco, tesorería, sistema propio, plataforma sectorial o fichero heredado: si tiene datos, tiene camino. Sin tocar el código de ninguno de los dos extremos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contacto"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-arje-blue to-arje-blue-dark text-white rounded-xl font-semibold shadow-lg shadow-arje-blue/20 hover:shadow-xl hover:shadow-arje-blue/30 hover:scale-105 transition-all text-center"
              >
                Solicita un diagnóstico
              </Link>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-arje-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-arje-blue dark:hover:border-arje-blue hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all text-center"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Distintivos bajo el titular (§1.1) */}
            <div className="pt-6 border-t border-gray-200/60 dark:border-gray-800/80 max-w-4xl mx-auto">
              <p className="text-xs sm:text-sm text-arje-gray-500 dark:text-gray-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span>✓ Cualquier origen, cualquier destino</span>
                <span>✓ Sin modificar tus sistemas</span>
                <span>✓ Cálculos deterministas</span>
                <span>✓ Validación humana en los puntos críticos</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §1.2 · Aplicaciones: inmediatamente después del hero y antes de la arquitectura */}
      <section id="aplicaciones" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Aplicaciones</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Aplicaciones que tu equipo usa cada día
            </h2>
            <p className="text-lg text-arje-gray-600 dark:text-gray-300">
              Sobre el motor de integración, Rosetta IA incorpora aplicaciones listas para trabajar. Cada una resuelve un proceso completo de principio a fin y se contrata por separado: se empieza por la que más duele.
            </p>
          </div>

          {/* Rejilla de tarjetas visibles (3 columnas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div
                key={app.id}
                className="p-8 rounded-3xl bg-arje-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700/80 hover:shadow-xl hover:border-arje-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-arje-blue/10 dark:bg-arje-blue/20 text-arje-blue dark:text-arje-blue-light flex items-center justify-center mb-5">
                    {app.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-arje-blue">
                    {app.title}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mt-1 mb-3">
                    {app.headline}
                  </h3>
                  <p className="text-sm text-arje-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  <ul className="space-y-2.5 border-t border-gray-200/80 dark:border-gray-700/60 pt-4">
                    {app.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-arje-gray-700 dark:text-gray-300">
                        <span className="text-arje-blue mr-2 font-bold flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {app.highlight && (
                    <p className="mt-4 p-3 rounded-xl bg-arje-blue/5 dark:bg-arje-blue/10 border border-arje-blue/20 text-xs sm:text-sm text-arje-gray-800 dark:text-gray-200 font-semibold leading-relaxed">
                      {app.highlight}
                    </p>
                  )}
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60 dark:border-gray-700/40">
                  <span className="text-xs font-semibold text-arje-gray-400 dark:text-gray-500 cursor-not-allowed">
                    Ver la aplicación →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* S6 · Casos que no están en ninguna tarjeta */}
          <div className="mt-10">
            <span className="block text-center text-xs font-bold uppercase tracking-wider text-arje-gray-400 dark:text-gray-500 mb-4">
              También resuelve
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alsoSolves.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-bold font-heading text-base text-arje-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §1.2 bis · El circuito completo: horizontal en escritorio, vertical en móvil */}
      {/* Estilo infografía neón: fondo negro fijo en ambos temas, nodos que brillan y láseres entre pasos */}
      <section
        id="circuito"
        ref={circuitRef}
        className="relative overflow-hidden py-24 bg-[#05070a] border-t border-b border-gray-800"
      >
        <div className="absolute inset-0 mesh-grid opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-40 left-1/4 w-[32rem] h-[32rem] rounded-full bg-arje-blue/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue-light">El circuito completo</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2 mb-4">
              Del correo del proveedor al documento compensado,{" "}
              <span className="text-[#2de2ff] [text-shadow:0_0_18px_rgb(45_226_255/0.55)]">sin teclear</span>
            </h2>
            <p className="text-lg text-gray-400">
              Cada una de las aplicaciones resuelve su tramo. Juntas resuelven el ciclo entero, y ese es el punto: no es una herramienta que automatiza un paso, es un circuito que va de punta a punta.
            </p>
          </div>

          {/* Los cinco sistemas, mismo peso visual; se encienden cuando el documento pasa por ellos */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {circuitSystems.map((sys) => (
              <span
                key={sys}
                style={neonVars(sys)}
                data-active={circuitSteps.some((s) => isStepLit(s.step) && s.system.split(" + ").includes(sys))}
                className="neon-node inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-200"
              >
                <span className="neon-dot w-1.5 h-1.5 rounded-full" aria-hidden="true" />
                {sys}
              </span>
            ))}
          </div>

          {/* Pasos */}
          <ol
            className="relative grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-3"
            onMouseLeave={() => {
              if (pinnedStep !== null) setCircuitStep(pinnedStep);
              setPinnedStep(null);
            }}
          >
            {/* Línea conectora en escritorio */}
            <div className="hidden lg:block absolute top-5 left-[7%] right-[7%] h-px bg-white/25" aria-hidden="true" />
            {/* Línea conectora en móvil */}
            <div className="lg:hidden absolute top-5 bottom-5 left-5 w-px bg-white/25" aria-hidden="true" />

            {circuitSteps.map((s) => {
              const lit = isStepLit(s.step);
              const running = !circuitStatic && s.step === activeCircuitStep;
              return (
                <li
                  key={s.step}
                  style={neonVars(s.system)}
                  onMouseEnter={() => setPinnedStep(s.step)}
                  className="relative flex lg:flex-col items-start lg:items-stretch gap-4 lg:gap-3"
                >
                  {/* Láser hacia el siguiente paso: nace y muere detrás de los nodos */}
                  {running && s.step < circuitSteps.length && (
                    <>
                      <span
                        className="hidden lg:block absolute top-5 left-1/2 w-[calc(100%+0.75rem)] h-px pointer-events-none"
                        aria-hidden="true"
                      >
                        <span className="neon-run-x" style={laserVars(s.system)} />
                      </span>
                      <span
                        className="lg:hidden absolute top-5 left-5 h-[calc(100%+1rem)] w-px pointer-events-none"
                        aria-hidden="true"
                      >
                        <span className="neon-run-y" style={laserVars(s.system)} />
                      </span>
                    </>
                  )}

                  <div
                    data-active={lit}
                    className="neon-node relative z-10 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 lg:mx-auto"
                  >
                    {s.step}
                  </div>
                  <div
                    data-active={lit}
                    className="neon-node flex-1 p-4 rounded-2xl flex flex-col"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--neon)] mb-1">
                      {s.system}
                    </span>
                    <h3 className="font-bold font-heading text-white text-sm leading-snug mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {s.detail}
                    </p>
                    {s.review && (
                      <div className="mt-auto pt-3" style={{ "--neon": REVIEW_NEON } as CSSProperties}>
                        <div className="flex lg:flex-col items-center gap-1.5 text-[11px] font-semibold text-[color:var(--neon)]">
                          <span
                            className={`relative hidden lg:block w-0 h-5 border-l ${s.review.optional ? "border-dashed" : "border-solid"} border-[color:var(--neon)]`}
                            aria-hidden="true"
                          >
                            {running && (
                              <span className="neon-run-y" style={{ ...laserVars(s.system), "--neon": REVIEW_NEON } as CSSProperties} />
                            )}
                          </span>
                          <span
                            data-active={lit}
                            className={`neon-node px-2.5 py-1 rounded-full border-[color:var(--neon)] ${s.review.optional ? "border-dashed" : "border-solid"} text-center`}
                          >
                            ↓ {s.review.label}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Bandeja de revisión humana: se enciende cuando el documento llega a un punto de revisión */}
          <div
            style={{ "--neon": REVIEW_NEON } as CSSProperties}
            data-active={circuitStatic || circuitSteps.some((s) => s.review && s.step === activeCircuitStep)}
            className="neon-node mt-8 p-4 rounded-2xl border-dashed flex flex-col sm:flex-row items-center justify-center gap-2 text-center"
          >
            <span className="text-sm font-bold text-[color:var(--neon)]">Bandeja de revisión humana</span>
            <span className="text-xs sm:text-sm text-gray-300">
              Una persona valida lo dudoso con la pregunta concreta: en el paso 4 si así lo configuras, en el paso 7 siempre que algo no encuentra pareja.
            </span>
          </div>

          <div
            style={{ "--neon": CIRCUIT_NEON.ERP } as CSSProperties}
            data-active="true"
            className="neon-node mt-10 text-center max-w-2xl mx-auto p-6 rounded-2xl"
          >
            <p className="text-sm text-gray-300 leading-relaxed">
              En todo el recorrido hay cinco sistemas distintos —correo, almacenamiento de documentos, Invofox, ERP y banco— que nunca fueron diseñados para hablar entre sí. <strong className="text-white">Eso es exactamente lo que hace Rosetta IA.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* §1.5 · La frontera determinista (entre las aplicaciones y el resto del argumento) */}
      <section className="py-24 bg-gradient-to-br from-arje-blue/5 via-teal-500/5 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Por qué es diferente</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Inteligencia artificial donde ayuda.{" "}
              <span className="gradient-text">Reglas donde no se puede fallar.</span>
            </h2>
            <p className="text-lg text-arje-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Muchas herramientas prometen resolver las integraciones con inteligencia artificial. El problema aparece cuando esa misma inteligencia artificial calcula el importe de un pago. Rosetta IA traza una línea explícita y la respeta.
            </p>
          </div>

          {/* Asset B · Dos zonas y la línea entre ellas como elemento dominante */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 mb-10">
            <div className="p-8 bg-blue-50/70 dark:bg-blue-950/20">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                IA
              </span>
              <h3 className="font-bold font-heading text-lg text-arje-gray-900 dark:text-white mb-4">
                La IA se encarga de
              </h3>
              <ul className="space-y-3 text-sm text-arje-gray-700 dark:text-gray-300">
                {aiRows.map(([does]) => (
                  <li key={does} className="flex items-start gap-2.5">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>{does}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-700/70 dark:text-blue-300/70">
                Entender · mapear · señalar
              </p>
            </div>

            <div className="relative h-2 md:h-auto md:w-2 bg-arje-gray-900 dark:bg-white" aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 whitespace-nowrap px-4 py-1.5 rounded-full bg-arje-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-bold uppercase tracking-widest">
                La frontera
              </span>
            </div>

            <div className="p-8 bg-teal-50/70 dark:bg-teal-950/20">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                Reglas deterministas
              </span>
              <h3 className="font-bold font-heading text-lg text-arje-gray-900 dark:text-white mb-4">
                Nunca se encarga de
              </h3>
              <ul className="space-y-3 text-sm text-arje-gray-700 dark:text-gray-300">
                {aiRows.map(([, never]) => (
                  <li key={never} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{never}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-teal-700/70 dark:text-teal-300/70">
                Calcular · validar · generar
              </p>
            </div>
          </div>

          {/* Bloques de refuerzo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold font-heading text-base text-arje-gray-900 dark:text-white mb-2">
                Lo dudoso se pregunta, no se inventa
              </h4>
              <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                Cuando una equivalencia no está clara o un dato no tiene destino, Rosetta IA no elige la opción más probable: lo marca, lo aparta y lo pone delante de una persona con la pregunta concreta. Es más lento el primer día y mucho más barato el resto del año.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold font-heading text-base text-arje-gray-900 dark:text-white mb-2">
                La integración es tuya y es portable
              </h4>
              <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                La configuración de una integración —conexiones, equivalencias, reglas, tablas de códigos— es un objeto con versión que se puede empaquetar, mover entre entornos y auditar. No queda encerrada en la cabeza de quien la montó.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold font-heading text-base text-arje-gray-900 dark:text-white mb-2">
                Se adapta a tu política de seguridad, no al revés
              </h4>
              <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                Si tu organización no admite que un proveedor entre en su red, Rosetta IA trabaja en modo de recepción: es tu sistema el que abre la conexión y envía los datos. El resto del proceso es idéntico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S3 · El problema */}
      <section className="py-20 bg-arje-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white">
              Mover datos a mano tiene un coste que nadie apunta en ninguna parte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-3">
                Trabajo repetido
              </h3>
              <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                Cada mañana alguien descarga un extracto, lo cuadra en Excel, copia códigos de un sistema a otro y vuelve a subirlo. Es trabajo cualificado dedicado a tareas de copiar y pegar.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-3">
                Errores que aparecen tarde
              </h3>
              <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                Un código mal traducido, un importe con el signo cambiado, un IBAN que no cuadra. El error no se ve el día que ocurre, se ve semanas después, cuando ya ha llegado al banco o al cierre.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-3">
                Cada nuevo caso, un proyecto
              </h3>
              <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">
                Una sociedad más, un banco más, un formato que cambia. Todo vuelve a empezar: análisis, desarrollo a medida, pruebas y dependencia de quien lo montó.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4 · Qué es Rosetta IA: figura simétrica (§1.1) + tres pilares */}
      <section id="que-es" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Qué es Rosetta IA</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Una capa de traducción <span className="gradient-text">entre tus sistemas</span>
            </h2>
            <p className="text-lg text-arje-gray-600 dark:text-gray-300">
              Rosetta IA es una plataforma que se sitúa entre tus sistemas, del tipo que sean. Lee de un lado, lo convierte a un modelo de datos común y lo entrega al otro con el formato que espera. Tus sistemas no se tocan: siguen siendo los tuyos y siguen siendo la fuente de la verdad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
            {renderSide(architectureSides[0])}
            {bidirectionalArrow}

            {/* Núcleo */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-arje-blue/10 via-teal-500/5 to-white dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800 border-2 border-arje-blue/50 shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-arje-blue text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Rosetta IA
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold font-heading text-arje-gray-900 dark:text-white mb-4">
                  Lee, traduce, valida y entrega
                </h3>
                <ol className="space-y-2.5 text-xs sm:text-sm text-arje-gray-700 dark:text-gray-300">
                  {dataJourney.map((step, idx) => (
                    <li
                      key={step.title}
                      className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-arje-blue/20 flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-arje-blue text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      {step.title}
                    </li>
                  ))}
                </ol>
              </div>
              <a
                href="#como-funciona"
                className="mt-6 pt-4 border-t border-arje-blue/20 text-xs text-arje-blue font-semibold text-center hover:underline"
              >
                Ver el recorrido paso a paso ↓
              </a>
            </div>

            {bidirectionalArrow}
            {renderSide(architectureSides[1])}
          </div>

          {/* Tres pilares */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-arje-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-arje-blue">Pilar {idx + 1}</span>
                <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mt-1 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 · Cómo funciona: el recorrido de un dato (asset A) */}
      <section id="como-funciona" className="py-24 bg-arje-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Cómo funciona</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2">
              El recorrido de un dato, de principio a fin
            </h2>
          </div>

          <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-arje-blue/30" aria-hidden="true" />
            <div className="md:hidden absolute top-2 bottom-2 left-5 w-0.5 bg-arje-blue/30" aria-hidden="true" />

            {dataJourney.map((step, idx) => (
              <li key={step.title} className="relative flex md:flex-col items-start md:items-stretch gap-4 md:gap-3">
                <div className="relative z-10 w-10 h-10 rounded-full bg-arje-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0 md:mx-auto ring-4 ring-arje-gray-50 dark:ring-gray-950">
                  {idx + 1}
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold font-heading text-arje-gray-900 dark:text-white text-base mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                  {step.exceptions && (
                    <span className="md:hidden inline-block mt-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-400 dark:border-amber-700">
                      ↓ Bandeja de excepciones, revisada por una persona
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Rama descendente desde "Validación" hacia la bandeja de excepciones (escritorio) */}
          <div className="hidden md:grid grid-cols-4 gap-4" aria-hidden="true">
            <div className="col-start-3 flex flex-col items-center">
              <span className="h-8 border-l-2 border-amber-500" />
              <div className="w-full p-3 rounded-xl border-2 border-amber-400 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-center">
                <span className="block text-sm font-bold text-amber-800 dark:text-amber-300">Bandeja de excepciones</span>
                <span className="block text-xs text-arje-gray-600 dark:text-gray-300">Revisada por una persona, con el motivo de cada caso</span>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center max-w-3xl mx-auto text-base text-arje-gray-700 dark:text-gray-300 leading-relaxed">
            Todo el recorrido queda trazado: qué se leyó, cuándo, qué se transformó, qué se envió y qué respondió el destino. Cuando alguien pregunta &ldquo;¿de dónde sale este importe?&rdquo;, hay una respuesta exacta.
          </p>

          {/* S2 · Sistemas con los que trabaja (misma lista que Inicio, en cápsulas de texto, sin logotipos) */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-arje-gray-400 dark:text-gray-500">
                Sistemas con los que trabaja
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {integrationCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-arje-blue mb-3 text-center md:text-left">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {cat.systems.map((sys) => (
                      <span
                        key={sys}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 text-arje-gray-800 dark:text-gray-200 font-medium text-xs border border-gray-200 dark:border-gray-700 cursor-default"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs sm:text-sm text-arje-gray-500 dark:text-gray-400 mt-8 max-w-3xl mx-auto">
              La lista no es un límite: Rosetta IA se conecta por API, por servicio web, por base de datos o por fichero, con lo que tu sistema sepa ofrecer.
            </p>
          </div>
        </div>
      </section>

      {/* S8 · Seguridad y cumplimiento (§2.3 bloque propio · §1.3 Veri*factu como un formato más) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Seguridad y cumplimiento</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Cómo se custodian tus datos
            </h2>
          </div>

          <div className="space-y-4">
            {securityItems.map((sec) => (
              <div
                key={sec.title}
                className="p-5 rounded-2xl bg-arje-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-arje-gray-900 dark:text-white text-base">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-arje-gray-600 dark:text-gray-300 mt-1">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-arje-gray-50 dark:bg-gray-800/60 border-l-4 border-arje-blue border-y border-r border-y-gray-200 border-r-gray-200 dark:border-y-gray-700 dark:border-r-gray-700">
            <p className="text-sm text-arje-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-arje-gray-900 dark:text-white">Cumplimiento normativo.</strong> Rosetta IA genera y valida los formatos que exige la normativa —SEPA/ISO 20022, Norma 43, cuadernos bancarios, Veri*factu, SII y formatos sectoriales— con validación estructural real contra el esquema oficial y cálculo determinista de importes y totales de control. Se contrata como módulo cuando el cliente lo necesita.
            </p>
          </div>
        </div>
      </section>

      {/* S9 · Cómo se pone en marcha */}
      <section className="py-20 bg-arje-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">Puesta en marcha</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              De la primera conversación a la primera integración en producción
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Diagnóstico",
                desc: "Revisamos tus sistemas, tus procesos y tus formatos, y te decimos con concreción qué se puede integrar, con qué esfuerzo y en qué orden. Sin compromiso.",
              },
              {
                title: "Primera integración",
                desc: "Se pone en marcha un proceso completo, de principio a fin, con datos reales y volumen real. Es el que demuestra que funciona en tu casa, no en una demo.",
              },
              {
                title: "Extensión",
                desc: "A partir de ahí, cada proceso y cada sociedad nuevos reutilizan lo ya construido. El coste de la segunda integración no se parece al de la primera.",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-arje-blue text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold font-heading text-arje-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-arje-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-sm text-arje-gray-700 dark:text-gray-300">
            Rosetta IA se contrata como servicio, con la implantación y el acompañamiento de los consultores de Arjé Partners. No te dejamos una plataforma y una documentación: te dejamos una integración funcionando.
          </div>
        </div>
      </section>

      {/* S10 · Preguntas frecuentes (Primera abierta por defecto) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-arje-blue">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-arje-gray-900 dark:text-white mt-2 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-arje-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-arje-gray-900 dark:text-white">
                      {faq.q}
                    </span>
                    <span className={`text-arje-blue font-bold text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-arje-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed border-t border-gray-200/60 dark:border-gray-700/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S11 · CTA final */}
      <section id="diagnostico" className="py-24 bg-gradient-to-br from-arje-blue via-arje-blue-light to-arje-blue-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading">
            Cuéntanos qué sistemas tienes
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            En una sesión de una hora revisamos tu escenario y te decimos qué es integrable, por dónde empezar y qué esperar. Sin compromiso y sin presentación comercial.
          </p>

          <div className="pt-4 max-w-xl mx-auto">
            <Link
              href="/contacto"
              className="inline-block w-full sm:w-auto px-10 py-4 bg-white text-arje-blue font-bold rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all text-center text-base"
            >
              Solicita un diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
