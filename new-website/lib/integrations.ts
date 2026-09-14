// Fuente única de los sistemas y formatos que se citan en Inicio y en /rosetta-ia.
// Cualquier cambio en la lista se hace aquí para que ambas páginas digan lo mismo.
// Pendiente de decisión: separar «integrado y en producción» de «integrable». No inventarlo aquí.

export const integrationCategories = [
  {
    category: "ERP de mercado",
    systems: [
      "SAP S/4HANA y ECC",
      "Microsoft Dynamics 365 Business Central",
      "Navision (todas las versiones)",
      "Axapta / Dynamics AX",
      "Infor M3 y Movex",
      "IFS Applications",
      "JD Edwards EnterpriseOne",
      "Odoo Enterprise",
      "Sage 200",
    ],
    badge: "Los ERP más habituales",
  },
  {
    category: "Tesorería y bancos",
    systems: [
      "Sage XRT Advanced (todas las versiones)",
      "Embat",
      "Kyriba",
      "Cash pooling y compensación entre sociedades",
      "Conexión directa con bancos (SWIFT, SEPA, EBICS)",
      "Extractos de todos tus bancos (Norma 43, CAMT.053)",
    ],
    badge: "Tu ERP y tu tesorería, al día",
  },
  {
    category: "Sistemas propios y heredados",
    systems: [
      "Desarrollos a medida",
      "ERP propios, en cualquier lenguaje",
      "AS/400 y otros sistemas centrales",
      "Ficheros planos y aplicaciones COBOL",
      "Bases de datos SQL Server, Oracle, DB2 y PostgreSQL",
      "Sistemas sin API",
    ],
    badge: "Nuestra especialidad",
  },
  {
    category: "Digitalización de documentos",
    systems: ["Invofox", "Buzones de correo", "Carpetas compartidas y gestores documentales"],
    badge: "Del papel al dato",
  },
];

export const integrationTechnologies = [
  { name: "API REST" },
  { name: "Servicios web SOAP" },
  { name: "Conexión directa a base de datos (SQL/ODBC)" },
  { name: "Ficheros bancarios ISO 20022 (pain, camt)" },
  { name: "Norma 43 y MT940" },
  { name: "Avisos en tiempo real (webhooks)" },
  { name: "Intercambio de ficheros por SFTP" },
  { name: "Veri*factu y SII" },
];
