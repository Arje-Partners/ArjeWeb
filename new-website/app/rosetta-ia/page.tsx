"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { faqs } from "./faqs";
import { integrationCategories } from "@/lib/integrations";
import AnimatedPiece from "@/components/rosetta/AnimatedPiece";

// Sistema visual (maqueta «Rosetta IA · Página de producto»):
// - Tres niveles de sección que se alternan: nivel 1 navy (hero, circuito, llamada final),
//   nivel 2 blanco y nivel 3 gris claro. Dos secciones seguidas nunca comparten fondo.
// - Azul de marca y azul claro para todo lo normal y para el recorrido del dato.
// - Ámbar solo para la intervención humana: bandeja de revisión, salidas a revisión y pasos donde interviene una persona.

// Una sola familia de iconos: trazo 1,6 sobre rejilla de 24, extremos redondeados
const Icon = ({ d, className = "w-5 h-5" }: { d: ReactNode; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const icons = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  folder: <path d="M3 7h6l2 2h10v10H3z" />,
  doc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  erp: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /></>,
  bank: <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />,
  ledger: <><path d="M4 6h16M4 12h10M4 18h7" /><circle cx="18" cy="17" r="3.5" /></>,
  payment: <path d="M12 3v18M8 7h6.5a2.5 2.5 0 010 5h-5a2.5 2.5 0 000 5H17" />,
  card: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M6 15h4" /></>,
  swap: <><path d="M4 7h10M4 7l3-3M4 7l3 3" /><path d="M20 17H10m10 0l-3-3m3 3l-3 3" /></>,
  tray: <><path d="M3 13h5l2 3h4l2-3h5" /><path d="M5 5h14l2 8v6H3v-6z" /></>,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  cross: <path d="M6 6l12 12M18 6L6 18" />,
  isolate: <><rect x="3" y="4" width="8" height="16" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /></>,
  lock: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /></>,
  key: <><circle cx="9" cy="12" r="4" /><path d="M13 12h8m-3 0v3" /></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="2.5" /></>,
  log: <><path d="M6 3h12v18l-6-4-6 4z" /><path d="M9 8h6M9 12h4" /></>,
};

const Eyebrow = ({ children, onNavy = false, className = "" }: { children: ReactNode; onNavy?: boolean; className?: string }) => (
  <span
    className={`block text-[13px] font-semibold uppercase tracking-[0.14em] ${onNavy ? "text-ros-light" : "text-ros-brand dark:text-ros-light"} ${className}`}
  >
    {children}
  </span>
);

export default function RosettaIAPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // Primera abierta por defecto segun §1.4

  // Confluencia del circuito: las dos líneas salen del centro real de cada corriente y se unen a media altura
  const streamsRef = useRef<HTMLDivElement>(null);
  const invoiceBandRef = useRef<HTMLDivElement>(null);
  const bankBandRef = useRef<HTMLDivElement>(null);
  const [confluence, setConfluence] = useState({ h: 100, a: 25, b: 75 });

  useEffect(() => {
    const wrap = streamsRef.current;
    const bandA = invoiceBandRef.current;
    const bandB = bankBandRef.current;
    if (!wrap || !bandA || !bandB) return;
    const measure = () =>
      setConfluence({
        h: wrap.offsetHeight,
        a: bandA.offsetTop + bandA.offsetHeight / 2,
        b: bandB.offsetTop + bandB.offsetHeight / 2,
      });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // Figura del hero: un sistema ↔ cualquier otro sistema, con Rosetta IA en medio
  const heroSides = [
    { label: "Un sistema", items: ["ERP", "Bancos", "Correo y documentos", "Sistemas propios"] },
    { label: "Cualquier otro", items: ["Tesorería", "ERP", "BI y almacenes", "Organismos y bancos"] },
  ];

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
      icon: icons.bank,
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
      icon: icons.ledger,
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
      icon: icons.payment,
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
      icon: icons.card,
    },
  ];

  // La aplicación protagonista: ocupa dos columnas y va en oscuro
  const invoiceApp = {
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
    flow: [
      { label: "Correo", icon: icons.mail },
      { label: "Carpeta", icon: icons.folder },
      { label: "Invofox", icon: icons.doc },
      { label: "ERP", icon: icons.erp },
    ],
  };

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

  // El circuito: dos corrientes independientes que solo se encuentran en el cruce (paso 6)
  const invoiceStream = [
    { step: "01", system: "Correo", title: "Llega la factura", detail: "El proveedor la envía por correo y el documento cae en la carpeta de siempre." },
    { step: "02", system: "Carpeta", title: "Rosetta IA la recoge", detail: "Vigila la carpeta y toma los documentos nuevos." },
    { step: "03", system: "Invofox", title: "Se digitaliza", detail: "El documento pasa por Invofox, que extrae su contenido." },
    {
      step: "04",
      system: "ERP",
      title: "Se traduce y se registra",
      detail: "Rosetta IA lo traduce a los maestros del cliente y lo registra en el ERP, directamente o pasando antes por revisión.",
      review: "Revisión previa, si la configuras",
    },
  ];
  const bankStep = {
    step: "05",
    system: "Banco · NUEK",
    title: "Se descarga el extracto",
    detail: "Rosetta IA con NUEK, por agregación bancaria o ficheros Norma 43, todos los días. No espera a ninguna factura, ni la factura le espera a él.",
  };
  const matchStep = {
    step: "06",
    system: "Rosetta IA",
    title: "Se cruzan movimiento y factura",
    detail: "Cada movimiento del extracto busca la factura a la que corresponde.",
  };
  const settleStep = {
    step: "07",
    system: "ERP",
    title: "Se contabiliza y se compensa",
    detail: "El cobro o el pago se contabiliza y el documento queda saldado en el ERP. Lo que no encuentra pareja no se fuerza.",
    review: "Sin pareja: a revisión con su motivo",
  };

  const aiRows = [
    ["Entender la estructura de un sistema nuevo", "Calcular importes"],
    ["Proponer equivalencias entre campos", "Decidir signos, redondeos o divisas"],
    ["Interpretar documentación y nomenclaturas", "Generar el fichero que va al banco"],
    ["Señalar lo que no encaja", "Validar el cumplimiento normativo"],
  ];

  // Arquitectura: un solo relato del recorrido de un dato (sustituye a «Qué es» y «Cómo funciona»)
  const dataJourney = [
    { title: "Se lee del origen", desc: "Por API, servicio web, base de datos o fichero. Si tu política de seguridad no admite accesos entrantes, es tu sistema el que envía y Rosetta IA recibe." },
    { title: "Se traduce al modelo común", desc: "Las equivalencias se definen una vez, quedan documentadas y versionadas, y se reutilizan en cada ejecución." },
    { title: "Se valida antes de salir", desc: "Lo que no cumple no se envía: se aparta, se registra con el motivo y queda a la vista para revisarlo.", review: true },
    { title: "Se entrega al destino y se confirma", desc: "Rosetta IA comprueba que el destino lo ha aceptado de verdad, no solo que la comunicación no ha fallado." },
  ];

  const securityItems = [
    {
      title: "Aislamiento por cliente",
      desc: "Cada cliente opera en su propio espacio lógico, con separación garantizada en el propio acceso a los datos.",
      icon: icons.isolate,
    },
    {
      title: "Cifrado en reposo y en tránsito",
      desc: "Los datos se almacenan cifrados en infraestructura gestionada dentro de la Unión Europea y viajan siempre por canales cifrados.",
      icon: icons.lock,
    },
    {
      title: "Credenciales fuera del sistema",
      desc: "Las credenciales de acceso a tus sistemas y bancos se custodian en un gestor de secretos dedicado. Se resuelven en el momento y no se guardan en claro en ninguna parte de la plataforma.",
      icon: icons.key,
    },
    {
      title: "La IA no ve tus datos sensibles",
      desc: "Los modelos de lenguaje trabajan sobre nombres de campos y estructuras —los metadatos de tus sistemas—, no sobre IBAN, importes o datos de contacto reales.",
      icon: icons.eye,
    },
    {
      title: "Todo queda registrado",
      desc: "Cada ejecución, cada transformación y cada decisión humana deja rastro consultable.",
      icon: icons.log,
    },
  ];

  const launchSteps = [
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
  ];

  // Caso 1 · grupo con dieciséis sociedades: las seis integraciones entre el ERP y la tesorería
  const caseLanes = [
    {
      group: "Maestros · lo que tiene que estar antes",
      lanes: [
        { name: "Cuentas", desc: "El plan contable del grupo, sociedad a sociedad" },
        { name: "Atributos", desc: "La clasificación analítica con la que la tesorería lee cada dato" },
        { name: "Clientes y proveedores", desc: "Los terceros, con sus cuentas bancarias y sus condiciones de pago" },
      ],
    },
    {
      group: "Documentos y contabilidad · lo que se mueve cada día",
      lanes: [
        { name: "Operaciones", desc: "Facturas y abonos de clientes y proveedores: lo que se va a cobrar y a pagar" },
        { name: "Asientos", desc: "El mayor de bancos, que es contra lo que se concilia" },
      ],
    },
  ];
  const caseResults = [
    { value: "33.760", label: "cuentas sincronizadas en la primera integración" },
    { value: "15 de 16", label: "sociedades en producción; la que falta la rechaza el propio ERP, y está señalada" },
    { value: "1 núcleo", label: "para las seis: la sexta costó una fracción de la primera" },
  ];

  const arrowRight = (
    <svg className="w-5 h-2 text-ros-line flex-shrink-0" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
      <path d="M0 4h15m0 0l-4-3m4 3l-4 3" />
    </svg>
  );

  const reviewTag = (label: string, optional: boolean) => (
    <span
      className={`inline-block mt-2.5 text-xs text-ros-amber border ${optional ? "border-dashed" : "border-solid"} border-ros-amber/50 rounded px-2 py-1`}
    >
      ↓ {label}
    </span>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-ros-ink dark:text-gray-100 transition-colors">
      {/* 1 · Hero (nivel 1): texto a la izquierda, figura del producto a la derecha */}
      <section className="relative overflow-hidden bg-ros-navy pt-36 pb-20 md:pt-40 md:pb-24">
        <div
          className="absolute -top-36 -right-32 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(51,184,232,0.16),rgba(51,184,232,0)_68%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_460px] gap-16 items-center">
          <div>
            <Eyebrow onNavy className="mb-5">Rosetta IA · Plataforma de integración</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold font-heading leading-[1.04] text-white">
              Todos tus sistemas,
              <br className="hidden sm:block" /> hablando <span className="text-ros-light">el mismo idioma</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-ros-on-navy max-w-2xl">
              Rosetta IA traduce entre aplicaciones que no fueron pensadas para entenderse. ERP, banco, tesorería, sistema propio, plataforma sectorial o fichero heredado: si tiene datos, tiene camino. Sin tocar el código de ninguno de los dos extremos.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded bg-ros-light text-[#06202C] font-semibold hover:bg-[#7ED3F3] transition-colors"
              >
                Solicita un diagnóstico
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded border border-[#3C6A7E] text-[#D6E6ED] font-semibold hover:border-ros-light transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>
            <p className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ros-soft">
              <span>Sin modificar tus sistemas</span>
              <span className="text-[#4A6F80]" aria-hidden="true">·</span>
              <span>Cálculos deterministas</span>
              <span className="text-[#4A6F80]" aria-hidden="true">·</span>
              <span>Validación humana donde importa</span>
            </p>
          </div>

          {/* Figura: un sistema ↔ cualquier otro sistema */}
          <div className="hidden xl:flex items-center gap-4" aria-label="Rosetta IA conecta un sistema con cualquier otro">
            {heroSides.map((side, idx) => (
              <div key={side.label} className={`w-[158px] flex flex-col gap-2 ${idx === 1 ? "order-3" : ""}`}>
                <div className="text-[11px] uppercase tracking-[0.12em] text-[#6E93A3] mb-1">{side.label}</div>
                {side.items.map((item) => (
                  <div key={item} className="bg-[#12303F] border border-[#234B5E] rounded px-3 py-2.5 text-[13px] text-[#D6E6ED]">
                    {item}
                  </div>
                ))}
              </div>
            ))}
            <div className="order-2 flex-grow flex flex-col items-center gap-2.5">
              <div className="w-px h-6 bg-[#2A5063]" />
              <div className="w-[108px] h-[108px] rounded-full bg-ros-brand border-[6px] border-[#10394C] flex flex-col items-center justify-center text-white">
                <Icon d={icons.swap} className="w-6 h-6" />
                <span className="font-heading text-sm font-semibold mt-1.5">Rosetta IA</span>
              </div>
              <div className="w-px h-6 bg-[#2A5063]" />
              <div className="text-[11px] text-center leading-snug text-[#6E93A3]">
                lee · traduce
                <br />
                valida · entrega
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · El problema (nivel 3), compacto y justo detrás del hero */}
      <section className="bg-ros-bg dark:bg-gray-950 border-b border-[#E4EDF1] dark:border-gray-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[330px_minmax(0,1fr)] gap-10 lg:gap-14">
          <h2 className="text-2xl md:text-[27px] font-bold font-heading leading-tight">
            Mover datos a mano tiene un coste que nadie apunta en ninguna parte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Trabajo repetido", desc: "Alguien descarga un extracto, lo cuadra en Excel y copia códigos de un sistema a otro. Trabajo cualificado dedicado a copiar y pegar." },
              { title: "Errores que aparecen tarde", desc: "Un código mal traducido, un importe con el signo cambiado. El error se ve semanas después, cuando ya llegó al banco o al cierre." },
              { title: "Cada caso, un proyecto", desc: "Una sociedad más, un banco más, un formato que cambia: análisis, desarrollo a medida y dependencia de quien lo montó." },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-ros-brand pt-4">
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-ros-muted dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Aplicaciones (nivel 2): la de facturas destaca en oscuro y a doble ancho; alturas desiguales */}
      <section id="aplicaciones" className="bg-white dark:bg-gray-900 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[620px_minmax(0,1fr)] gap-6 xl:gap-14 items-end mb-11">
            <div>
              <Eyebrow className="mb-3.5">Aplicaciones</Eyebrow>
              <h2 className="text-3xl md:text-[44px] font-bold font-heading leading-[1.08]">Aplicaciones que tu equipo usa cada día</h2>
            </div>
            <p className="text-lg leading-relaxed text-ros-muted dark:text-gray-400">
              Sobre el motor de integración, Rosetta IA incorpora aplicaciones listas para trabajar. Cada una resuelve un proceso completo de principio a fin y se contrata por separado: se empieza por la que más duele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {/* Facturas de proveedor: protagonista */}
            <article className="md:col-span-2 bg-ros-navy rounded-md p-7 md:p-10 flex flex-col sm:flex-row gap-8">
              <div className="flex-grow">
                <Eyebrow onNavy className="mb-3.5">Facturas de proveedor</Eyebrow>
                <h3 className="text-2xl md:text-[28px] font-bold font-heading leading-tight text-white">{invoiceApp.headline}</h3>
                <p className="mt-4 text-base leading-relaxed text-ros-on-navy">{invoiceApp.description}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ros-on-navy">
                  {invoiceApp.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <Icon d={icons.check} className="w-4 h-4 mt-0.5 flex-shrink-0 text-ros-light" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 bg-[#123243] border-l-[3px] border-ros-amber rounded-r px-4 py-3 text-sm leading-relaxed text-[#F0DCBE]">
                  {invoiceApp.highlight}
                </p>
              </div>
              <ol className="sm:w-40 flex-shrink-0 flex sm:flex-col gap-2 sm:gap-0 flex-wrap sm:pt-2" aria-label="Recorrido de la factura">
                {invoiceApp.flow.map((f, idx) => (
                  <li key={f.label} className="flex sm:flex-col">
                    <span className="flex items-center gap-2.5 text-[13px] text-[#C8DAE2]">
                      <Icon d={f.icon} className="w-[18px] h-[18px] text-ros-light" />
                      {f.label}
                    </span>
                    {idx < invoiceApp.flow.length - 1 && <span className="hidden sm:block w-px h-3 bg-[#2A5063] ml-2 my-1.5" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </article>

            {applications.map((app) => (
              <article key={app.id} className="bg-white dark:bg-gray-900 border border-ros-border dark:border-gray-700 rounded-md p-7">
                <div className="w-10 h-10 rounded-md bg-ros-icon-bg dark:bg-gray-800 text-ros-brand dark:text-ros-light flex items-center justify-center mb-5">
                  <Icon d={app.icon} />
                </div>
                <Eyebrow className="mb-2.5 !text-xs">{app.title}</Eyebrow>
                <h3 className="text-xl font-bold font-heading leading-snug mb-3">{app.headline}</h3>
                <p className="text-[15px] leading-relaxed text-ros-muted dark:text-gray-400">{app.description}</p>
                <ul className="mt-4 pt-4 border-t border-ros-border dark:border-gray-700 space-y-2 text-sm leading-relaxed text-[#3C4F59] dark:text-gray-300">
                  {app.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <Icon d={icons.check} className="w-4 h-4 mt-0.5 flex-shrink-0 text-ros-brand dark:text-ros-light" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* También resuelve */}
          <div className="mt-8 bg-ros-bg dark:bg-gray-950 rounded-md px-6 py-5 grid grid-cols-1 md:grid-cols-[130px_1fr_1fr] gap-4 md:gap-7 items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6C818C] dark:text-gray-400 md:pt-0.5">También resuelve</span>
            {alsoSolves.map((item) => (
              <p key={item.title} className="text-[15px] leading-relaxed text-[#3C4F59] dark:text-gray-300">
                <strong className="font-heading text-ros-ink dark:text-white">{item.title}.</strong> {item.desc}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Sistemas (nivel 3): la única prueba de la página, justo después de las aplicaciones */}
      <section id="sistemas" className="bg-ros-bg dark:bg-gray-950 border-y border-[#E4EDF1] dark:border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)_210px] gap-6 lg:gap-8 items-start">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] leading-snug text-[#6C818C] dark:text-gray-400">
              Sistemas con los que trabaja
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ros-brand dark:text-ros-light mb-2.5">{cat.category}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {cat.systems.map((sys) => (
                      <li
                        key={sys}
                        className="border border-ros-border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-sm px-3 py-1.5 text-[13px] text-[#3C4F59] dark:text-gray-300"
                      >
                        {sys}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px] leading-relaxed text-ros-muted dark:text-gray-400">
              La lista no es un límite: Rosetta IA se conecta por API, por servicio web, por base de datos o por fichero, con lo que tu sistema sepa ofrecer.
            </p>
          </div>
        </div>
      </section>

      {/* 5 · El circuito completo (nivel 1): dos corrientes independientes que se juntan en el cruce */}
      <section id="circuito" className="relative overflow-hidden bg-ros-navy py-20 md:py-24">
        <div
          className="absolute -bottom-52 -left-24 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(31,111,139,0.22),rgba(31,111,139,0)_70%)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[690px_minmax(0,1fr)] gap-6 xl:gap-14 items-end mb-12">
            <div>
              <Eyebrow onNavy className="mb-3.5">El circuito completo</Eyebrow>
              <h2 className="text-3xl md:text-[46px] font-bold font-heading leading-[1.08] text-white">
                Del correo del proveedor al documento compensado, <span className="text-ros-light">sin teclear</span>
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-ros-on-navy">
              La factura entra por correo y termina registrada en el ERP. El extracto se descarga del banco cada día, por su cuenta. Cuando los dos llegan, cada movimiento busca su factura y el documento queda compensado.
            </p>
          </div>

          {/* Escritorio y tableta: la animación del circuito; el diagrama estático es la reserva (movimiento reducido) */}
          <div className="hidden md:block">
            <AnimatedPiece
              src="/animaciones/RosettaIA_anim_circuito.html"
              title="Animación del circuito de facturas"
              fallback={
                <div className="hidden md:grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_40px_190px_28px_minmax(0,280px)] gap-y-4 xl:items-center">
                  {/* Las dos corrientes */}
                  <div ref={streamsRef} className="relative flex flex-col gap-4">
                    <div ref={invoiceBandRef} className="bg-ros-panel border border-ros-line rounded-lg px-5 pt-4 pb-5">
                      <Eyebrow onNavy className="!text-[11px] mb-4">La factura · cuando llega</Eyebrow>
                      <ol className="flex items-start gap-2">
                        {invoiceStream.map((s, idx) => (
                          <li key={s.step} className="flex items-start gap-2 flex-1 min-w-0">
                            <div className="flex-1 min-w-0">
                              <div className={`font-heading text-[11px] font-semibold mb-1.5 ${s.review ? "text-ros-amber" : "text-ros-light"}`}>
                                {s.step} · {s.system}
                              </div>
                              <h3 className="font-heading text-sm font-semibold text-white mb-1">{s.title}</h3>
                              <p className="text-xs leading-relaxed text-ros-soft">{s.detail}</p>
                              {s.review && reviewTag(s.review, true)}
                            </div>
                            {idx < invoiceStream.length - 1 && <span className="pt-7">{arrowRight}</span>}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div ref={bankBandRef} className="bg-ros-panel border border-ros-line rounded-lg px-5 pt-4 pb-5">
                      <Eyebrow onNavy className="!text-[11px] mb-4">El banco · a diario, por su cuenta</Eyebrow>
                      <div className="flex items-start gap-5">
                        <div className="w-44 flex-shrink-0">
                          <div className="font-heading text-[11px] font-semibold mb-1.5 text-ros-light">
                            {bankStep.step} · {bankStep.system}
                          </div>
                          <h3 className="font-heading text-sm font-semibold text-white">{bankStep.title}</h3>
                        </div>
                        <p className="text-[13px] leading-relaxed text-ros-soft">{bankStep.detail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Confluencia: dos líneas que se unen (horizontal en pantallas anchas, vertical en tableta) */}
                  <svg
                    className="hidden xl:block w-10 self-stretch text-ros-light"
                    viewBox={`0 0 40 ${confluence.h}`}
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d={`M0 ${confluence.a}H20V${confluence.h / 2}H40M0 ${confluence.b}H20V${confluence.h / 2}`}
                      stroke="currentColor"
                      strokeWidth={1.8}
                    />
                  </svg>
                  <div className="xl:hidden flex flex-col items-center text-ros-light" aria-hidden="true">
                    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M2 2h40q18 0 18 18v8M118 2H78q-18 0-18 18v8" />
                    </svg>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ros-soft mt-1">Se juntan</span>
                  </div>

                  {/* Un solo camino: 06 → 07 */}
                  <div className="grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] items-center xl:contents">
                    <div className="bg-ros-panel border border-ros-light rounded-lg p-5">
                      <div className="font-heading text-[11px] font-semibold mb-2 text-ros-light">
                        {matchStep.step} · {matchStep.system}
                      </div>
                      <h3 className="font-heading text-base font-semibold text-white mb-1.5">{matchStep.title}</h3>
                      <p className="text-[13px] leading-relaxed text-ros-soft">{matchStep.detail}</p>
                    </div>
                    <span className="flex justify-center text-ros-light" aria-hidden="true">
                      <svg className="w-5 h-2" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth={1.6}>
                        <path d="M0 4h15m0 0l-4-3m4 3l-4 3" />
                      </svg>
                    </span>
                    <div className="bg-ros-panel border border-ros-amber-line rounded-lg p-5">
                      <div className="font-heading text-[11px] font-semibold mb-2 text-ros-amber">
                        {settleStep.step} · {settleStep.system}
                      </div>
                      <h3 className="font-heading text-base font-semibold text-white mb-1.5">{settleStep.title}</h3>
                      <p className="text-[13px] leading-relaxed text-ros-soft">{settleStep.detail}</p>
                      {reviewTag(settleStep.review, false)}
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Móvil: la factura, un separador y el banco, y luego donde se juntan */}
          <ol className="md:hidden">
            {([...invoiceStream, bankStep, matchStep, settleStep] as { step: string; system: string; title: string; detail: string; review?: string }[]).map((s) => {
              const amber = Boolean(s.review);
              return (
                <li key={s.step}>
                  {s.step === "05" && (
                    <div className="mt-2 mb-4 pt-4 border-t border-dashed border-ros-line">
                      <Eyebrow onNavy className="!text-[11px]">Por otro lado · el banco, a diario</Eyebrow>
                    </div>
                  )}
                  {s.step === "06" && (
                    <div className="mt-2 mb-4 pt-4 border-t border-dashed border-ros-line">
                      <Eyebrow onNavy className="!text-[11px]">Donde se juntan</Eyebrow>
                    </div>
                  )}
                  <div className="flex gap-3.5">
                    <div className="flex flex-col items-center w-[34px] flex-shrink-0">
                      <span
                        className={`w-[34px] h-[34px] rounded-full flex items-center justify-center font-heading text-[13px] font-semibold border ${
                          amber ? "bg-[#2A2418] border-[#6E5526] text-ros-amber" : "bg-ros-panel border-[#2A5C73] text-ros-light"
                        }`}
                      >
                        {Number(s.step)}
                      </span>
                      {!["04", "05", "07"].includes(s.step) && <span className="w-px flex-grow min-h-[24px] bg-[#23556B]" aria-hidden="true" />}
                    </div>
                    <div className="pt-1 pb-5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-ros-soft">{s.system}</div>
                      <h3 className="font-heading text-base font-semibold text-white">{s.title}</h3>
                      <p className="text-[13.5px] leading-relaxed text-ros-soft mt-1">{s.detail}</p>
                      {s.review && reviewTag(s.review, s.step === "04")}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Bandeja de revisión humana, debajo y con su propio espacio */}
          <div className="mt-6 md:mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#17313A] border border-[#5E4A29] rounded-lg px-5 py-5 md:px-6">
            <span className="w-10 h-10 rounded-lg bg-[#2A2418] text-ros-amber flex items-center justify-center flex-shrink-0">
              <Icon d={icons.tray} />
            </span>
            <h3 className="font-heading text-base font-semibold text-[#F0DCBE] sm:w-56 flex-shrink-0">Bandeja de revisión humana</h3>
            <p className="text-sm leading-relaxed text-[#C4B79E]">
              Una persona valida lo dudoso con la pregunta concreta: en el paso 4 si así lo configuras, en el paso 7 siempre que algo no encuentra pareja. Nada se fuerza y nada se inventa.
            </p>
          </div>

          <p className="mt-9 text-center text-base leading-relaxed text-ros-on-navy max-w-3xl mx-auto">
            En todo el recorrido hay cinco sistemas distintos —correo, almacenamiento de documentos, Invofox, ERP y banco— que nunca fueron diseñados para hablar entre sí.{" "}
            <strong className="text-white font-semibold">Eso es exactamente lo que hace Rosetta IA.</strong>
          </p>
        </div>
      </section>

      {/* 6 · Casos de éxito (nivel 3): sin nombres de cliente, sin logotipos y sin testimonios */}
      <section id="casos" className="bg-ros-bg dark:bg-gray-950 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Eyebrow className="mb-3.5">Casos de éxito</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold font-heading leading-[1.1]">Lo que ya hemos puesto en marcha</h2>
          </div>

          {/* Caso 1 · grupo con dieciséis sociedades, con su diagrama de las seis integraciones */}
          <article className="bg-ros-navy rounded-lg p-6 md:p-10">
            <Eyebrow onNavy className="!text-xs mb-3">Grupo con dieciséis sociedades</Eyebrow>
            <h3 className="text-2xl md:text-[34px] font-bold font-heading leading-tight text-white">
              Seis integraciones entre el ERP y la tesorería, sobre <span className="text-ros-light">la misma tubería</span>
            </h3>
            <p className="mt-3.5 text-base leading-relaxed text-ros-on-navy max-w-4xl">
              Cinco procesos llevan el ERP a la tesorería y uno trae de vuelta lo que ocurre con el dinero. Comparten el mismo núcleo: lo único que cambia en cada uno es qué se lee y qué reglas lo validan.
            </p>

            {/* Las seis integraciones encendiéndose una a una; el diagrama estático es la reserva */}
            <div className="mt-8">
              <AnimatedPiece
                src="/animaciones/RosettaIA_anim_integracion.html"
                title="Animación de las seis integraciones entre el ERP y la tesorería"
                fallback={
                  <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)_200px] gap-5 lg:gap-7 items-stretch">
                    {[
                      { role: "El ERP", name: "Infor M3", note: "16 sociedades · 3 países · 3 divisas", icon: icons.erp, order: "" },
                      { role: "La tesorería", name: "Embat", note: "Posición, previsión, cobros y pagos", icon: icons.bank, order: "lg:order-3" },
                    ].map((end) => (
                      <div key={end.role} className={`bg-[#12303F] border border-[#2A5C73] rounded-lg p-5 text-center flex flex-col justify-center ${end.order}`}>
                        <span className="w-12 h-12 mx-auto mb-3 rounded-lg bg-ros-navy border border-[#2A5C73] text-ros-light flex items-center justify-center">
                          <Icon d={end.icon} className="w-6 h-6" />
                        </span>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#6E93A3] mb-1">{end.role}</div>
                        <div className="font-heading text-xl font-semibold text-white">{end.name}</div>
                        <div className="text-[13px] leading-relaxed text-ros-soft mt-2">{end.note}</div>
                      </div>
                    ))}

                    <div className="lg:order-2 space-y-5">
                      {caseLanes.map((g) => (
                        <div key={g.group}>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#6E93A3] mb-2.5">{g.group}</div>
                          <ul className="space-y-2">
                            {g.lanes.map((lane) => (
                              <li key={lane.name} className="flex items-center gap-4 bg-ros-panel border border-[#23556B] rounded-lg px-4 py-3">
                                <span className="font-heading text-[15px] font-semibold text-white w-40 flex-shrink-0">{lane.name}</span>
                                <span className="flex-grow text-[13px] leading-snug text-ros-soft">{lane.desc}</span>
                                <svg className="hidden sm:block w-8 h-2.5 text-ros-light flex-shrink-0" viewBox="0 0 34 10" fill="none" stroke="currentColor" strokeWidth={1.7} aria-label="Del ERP a la tesorería">
                                  <path d="M0 5h26m0 0l-5-4m5 4l-5 4" />
                                </svg>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ros-light mb-2.5">El flujo de vuelta · lo que pasa con el dinero</div>
                        <div className="flex items-center gap-4 bg-[#12384A] border border-ros-light rounded-lg px-4 py-3">
                          <svg className="hidden sm:block w-8 h-2.5 text-ros-light flex-shrink-0 -scale-x-100" viewBox="0 0 34 10" fill="none" stroke="currentColor" strokeWidth={1.7} aria-label="De la tesorería al ERP">
                            <path d="M0 5h26m0 0l-5-4m5 4l-5 4" />
                          </svg>
                          <span className="font-heading text-[15px] font-semibold text-white w-36 flex-shrink-0">Cobros y pagos</span>
                          <span className="flex-grow text-[13px] leading-snug text-ros-soft">
                            Lo que la tesorería ha cobrado y pagado vuelve al ERP, uno a uno, y cada documento queda saldado
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {caseResults.map((r) => (
                <li key={r.value} className="bg-ros-panel border border-ros-line rounded-lg px-5 py-4">
                  <div className="font-heading text-2xl font-semibold text-white">{r.value}</div>
                  <div className="text-[13px] leading-snug text-ros-soft mt-1">{r.label}</div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 7 · Por qué es diferente (nivel 2): la frontera determinista y su tabla */}
      <section className="bg-white dark:bg-gray-900 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow className="mb-3.5">Por qué es diferente</Eyebrow>
            <h2 className="text-3xl md:text-[44px] font-bold font-heading leading-[1.1]">
              Inteligencia artificial donde ayuda.
              <br className="hidden md:block" /> Reglas donde no se puede fallar.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ros-muted dark:text-gray-400 max-w-3xl mx-auto">
              Muchas herramientas prometen resolver las integraciones con inteligencia artificial. El problema aparece cuando esa misma inteligencia artificial calcula el importe de un pago. Rosetta IA traza una línea explícita y la respeta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_110px_1fr] rounded-md overflow-hidden">
            <div className="bg-[#F2F8FB] dark:bg-gray-800 p-8 md:p-9">
              <Eyebrow className="mb-4">La IA se encarga de</Eyebrow>
              <ul className="space-y-3">
                {aiRows.map(([does]) => (
                  <li key={does} className="flex gap-3 text-base text-[#1B3540] dark:text-gray-200">
                    <Icon d={icons.check} className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-ros-brand dark:text-ros-light" />
                    <span>{does}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] uppercase tracking-[0.08em] text-[#62808C] dark:text-gray-400">Entender · mapear · señalar</p>
            </div>

            <div className="bg-ros-navy flex md:flex-col items-center justify-center gap-3 px-6 py-3 md:py-0" aria-hidden="true">
              <span className="h-px w-full md:w-px md:h-auto md:flex-grow bg-[#2A5063]" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.1em] text-ros-light md:[writing-mode:vertical-rl] whitespace-nowrap md:py-4">
                La frontera
              </span>
              <span className="h-px w-full md:w-px md:h-auto md:flex-grow bg-[#2A5063]" />
            </div>

            <div className="bg-[#1B3540] p-8 md:p-9">
              <span className="block text-[13px] font-semibold uppercase tracking-[0.14em] text-ros-light mb-4">Nunca se encarga de</span>
              <ul className="space-y-3">
                {aiRows.map(([, never]) => (
                  <li key={never} className="flex gap-3 text-base text-[#E4EEF2]">
                    <Icon d={icons.cross} className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-ros-soft" />
                    <span>{never}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] uppercase tracking-[0.08em] text-ros-soft">Calcular · validar · generar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
            {[
              {
                title: "Lo dudoso se pregunta, no se inventa",
                desc: "Cuando una equivalencia no está clara o un dato no tiene destino, Rosetta IA no elige la opción más probable: lo marca, lo aparta y lo pone delante de una persona con la pregunta concreta. Es más lento el primer día y mucho más barato el resto del año.",
              },
              {
                title: "La integración es tuya y es portable",
                desc: "La configuración de una integración —conexiones, equivalencias, reglas, tablas de códigos— es un objeto con versión que se puede empaquetar, mover entre entornos y auditar. No queda encerrada en la cabeza de quien la montó.",
              },
              {
                title: "Se adapta a tu política de seguridad, no al revés",
                desc: "Si tu organización no admite que un proveedor entre en su red, Rosetta IA trabaja en modo de recepción: es tu sistema el que abre la conexión y envía los datos. El resto del proceso es idéntico.",
              },
            ].map((b) => (
              <div key={b.title} className="border-l-2 border-ros-brand pl-5">
                <h3 className="font-heading text-[17px] font-semibold mb-2">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-ros-muted dark:text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Arquitectura (nivel 3): «Qué es» y «Cómo funciona» fundidos en una sola sección */}
      <section id="como-funciona" className="bg-ros-bg dark:bg-gray-950 border-y border-[#E4EDF1] dark:border-gray-800 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[520px_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow className="mb-3.5">Cómo funciona</Eyebrow>
            <h2 className="text-3xl md:text-[38px] font-bold font-heading leading-[1.1]">Una capa de traducción entre tus sistemas</h2>
            <p className="mt-5 text-lg leading-relaxed text-ros-muted dark:text-gray-400">
              Rosetta IA se sitúa entre tus sistemas, del tipo que sean. Lee de un lado, lo convierte a un modelo de datos común y lo entrega al otro con el formato que espera. Tus sistemas no se tocan: siguen siendo los tuyos y siguen siendo la fuente de la verdad.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-[15px] font-semibold mb-1.5">Un modelo común</h3>
                <p className="text-sm leading-relaxed text-ros-muted dark:text-gray-400">
                  Construido sobre estándares financieros del sector. Conectar el sistema número diez cuesta una fracción de lo que costó el primero.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[15px] font-semibold mb-1.5">Todo queda trazado</h3>
                <p className="text-sm leading-relaxed text-ros-muted dark:text-gray-400">
                  Qué se leyó, cuándo, qué se transformó, qué se envió y qué respondió el destino. Cada importe tiene una respuesta exacta.
                </p>
              </div>
            </div>
          </div>

          <ol className="space-y-3.5">
            {dataJourney.map((step, idx) => (
              <li
                key={step.title}
                className={`flex gap-4 bg-white dark:bg-gray-900 border rounded-md px-6 py-5 ${
                  step.review ? "border-[#C9A96A]" : "border-ros-border dark:border-gray-700"
                }`}
              >
                <span className={`font-heading text-[22px] font-semibold w-7 flex-shrink-0 ${step.review ? "text-[#D9B476]" : "text-[#B8CDD6] dark:text-gray-600"}`}>
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-heading text-[17px] font-semibold mb-1">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ros-muted dark:text-gray-400">{step.desc}</p>
                  {step.review && (
                    <span className="inline-block mt-2.5 text-xs text-[#97711F] dark:text-ros-amber bg-[#FBF3E4] dark:bg-[#2A2418] rounded-sm px-2.5 py-1">
                      → Bandeja de revisión, con el motivo de cada caso
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9 · Seguridad y cumplimiento (nivel 2) */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-9">
            <Eyebrow>Seguridad y cumplimiento</Eyebrow>
            <h2 className="text-2xl md:text-[30px] font-bold font-heading">Cómo se custodian tus datos</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
            {securityItems.map((sec) => (
              <li key={sec.title}>
                <span className="text-ros-brand dark:text-ros-light">
                  <Icon d={sec.icon} className="w-[22px] h-[22px]" />
                </span>
                <h3 className="font-heading text-[15px] font-semibold mt-3 mb-1.5">{sec.title}</h3>
                <p className="text-sm leading-relaxed text-ros-muted dark:text-gray-400">{sec.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-9 bg-ros-bg dark:bg-gray-800 rounded-md px-6 py-5 text-[15px] leading-relaxed text-[#3C4F59] dark:text-gray-300 max-w-5xl">
            <strong className="font-heading text-ros-ink dark:text-white">Cumplimiento normativo.</strong> Rosetta IA genera y valida los formatos que exige la normativa —SEPA/ISO 20022, Norma 43, cuadernos bancarios, Veri*factu, SII y formatos sectoriales— con validación estructural real contra el esquema oficial y cálculo determinista de importes y totales de control. Se contrata como módulo cuando el cliente lo necesita.
          </p>
        </div>
      </section>

      {/* 10 · Puesta en marcha (nivel 3) */}
      <section className="bg-ros-bg dark:bg-gray-950 border-t border-[#E4EDF1] dark:border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11">
            <Eyebrow className="mb-3.5">Puesta en marcha</Eyebrow>
            <h2 className="text-3xl md:text-[36px] font-bold font-heading leading-tight">
              De la primera conversación a la primera integración en producción
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {launchSteps.map((step, idx) => (
              <li key={step.title} className="bg-white dark:bg-gray-900 border border-ros-border dark:border-gray-700 rounded-md p-8">
                <span className="font-heading text-[46px] font-semibold leading-none text-[#D3E2E9] dark:text-gray-700">{idx + 1}</span>
                <h3 className="font-heading text-xl font-semibold mt-3.5 mb-2.5">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-ros-muted dark:text-gray-400">{step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-base leading-relaxed text-ros-muted dark:text-gray-400 max-w-3xl mx-auto">
            Rosetta IA se contrata como servicio, con la implantación y el acompañamiento de los consultores de Arjé Partners. No te dejamos una plataforma y una documentación: te dejamos una integración funcionando.
          </p>
        </div>
      </section>

      {/* 11 · Preguntas frecuentes (nivel 2) */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-8 lg:gap-16 items-start">
          <div>
            <Eyebrow className="mb-3.5">FAQ</Eyebrow>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading leading-tight">Preguntas frecuentes</h2>
          </div>
          <div className="border-b border-ros-border dark:border-gray-700">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={faq.q} className="border-t border-ros-border dark:border-gray-700">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 text-left flex justify-between items-center gap-4"
                  >
                    <span className="font-heading text-lg font-semibold">{faq.q}</span>
                    <svg
                      className={`w-[18px] h-[18px] flex-shrink-0 text-[#9DB3BD] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && <p className="pb-5 text-base leading-relaxed text-ros-muted dark:text-gray-400">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12 · Llamada final (nivel 1) */}
      <section id="diagnostico" className="bg-ros-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          <div className="flex-grow">
            <h2 className="text-3xl md:text-[40px] font-bold font-heading leading-tight text-white">Cuéntanos qué sistemas tienes</h2>
            <p className="mt-3.5 text-lg leading-relaxed text-[#D3E9F2] max-w-2xl">
              En una sesión de una hora revisamos tu escenario y te decimos qué es integrable, por dónde empezar y qué esperar. Sin compromiso y sin presentación comercial.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center h-[58px] px-8 rounded bg-white text-ros-ink font-semibold text-[17px] hover:bg-ros-bg transition-colors flex-shrink-0"
          >
            Solicita un diagnóstico
          </Link>
        </div>
      </section>
    </div>
  );
}
