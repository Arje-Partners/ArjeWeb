// Fuente única de los sistemas y formatos que se citan en Inicio y en /rosetta-ia.
// Cualquier cambio en la lista se hace aquí para que ambas páginas digan lo mismo.

export const integrationCategories = [
  {
    category: "ERPs Estándar & Tier 1",
    systems: [
      "SAP S/4HANA & ECC",
      "Microsoft Dynamics 365 Business Central",
      "Navision (todas las versiones)",
      "Axapta / Dynamics AX",
      "Infor M3 & Movex",
      "IFS Applications",
      "JD Edwards EnterpriseOne",
      "Odoo Enterprise",
      "Sage 200",
    ],
    badge: "Conectores Nativos",
  },
  {
    category: "TMS & Soluciones de Tesorería",
    systems: [
      "Sage XRT Advanced (todas las versiones)",
      "Embat Treasury Platform",
      "Kyriba",
      "Cash Pooling & Netting",
      "Conectividad Bancaria Directa (SWIFT / SEPA / EBICS)",
      "Extractos Multibanco N43 & CAMT.053",
    ],
    badge: "Sincronización Total",
  },
  {
    category: "Sistemas Propios & Legacy",
    systems: [
      "Desarrollos in-house a medida",
      "ERPs corporativos propios (C++, Java, .NET)",
      "Sistemas host y AS400 / iSeries",
      "Archivos secuenciales y COBOL",
      "Bases de datos SQL Server, Oracle, DB2, PostgreSQL",
      "Cualquier stack tecnológico sin APIs nativas",
    ],
    badge: "Especialidad Arjé",
  },
];

export const integrationTechnologies = [
  { name: "REST API & JSON", icon: "🌐" },
  { name: "SOAP & WS-Security", icon: "🔒" },
  { name: "Direct Database (SQL/ODBC)", icon: "🗄️" },
  { name: "ISO 20022 XML (PAIN/CAMT)", icon: "🏦" },
  { name: "Cuaderno 43 / MT940", icon: "📄" },
  { name: "WebHooks en tiempo real", icon: "⚡" },
  { name: "SFTP & Managed File Transfer", icon: "📁" },
  { name: "Verifactu / SII AEAT", icon: "🏛️" },
];

// Circuito de la factura de proveedor: un color neón por sistema (la revisión humana usa ámbar)
export const CIRCUIT_NEON: Record<string, string> = {
  Correo: "#ff4fd8",
  "Almacenamiento de documentos": "#9d7bff",
  Invofox: "#3dffa0",
  ERP: "#2de2ff",
  Banco: "#ffe14d",
};

export const circuitSystems = Object.keys(CIRCUIT_NEON);
