import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arje-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-arje.png"
                alt="Arjé Partners"
                width={48}
                height={48}
                className="drop-shadow-lg"
              />
              <span className="font-bold text-xl">Arjé Partners</span>
            </div>
            <p className="text-arje-gray-200 dark:text-gray-300 mb-4 max-w-md">
              Con RosettaAI, integramos sistemas de tesorería de forma universal. Conectamos TMS con ERPs, sistemas legacy y desarrollos a medida mediante nuestra plataforma especializada.
            </p>
            <p className="text-arje-gray-300 dark:text-gray-400 text-sm italic">
              Expertos en arquitecturas de integración para tesorería corporativa
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/arje-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arje-gray-200 dark:text-gray-300 hover:text-arje-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-arje-gray-200 dark:text-gray-300 hover:text-arje-blue transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-arje-gray-200 dark:text-gray-300 hover:text-arje-blue transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-arje-gray-200 dark:text-gray-300 hover:text-arje-blue transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-arje-gray-200 dark:text-gray-300">
              <li>
                <a
                  href="mailto:info@arjepartners.com"
                  className="hover:text-arje-blue transition-colors"
                >
                  info@arjepartners.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34915620800"
                  className="hover:text-arje-blue transition-colors"
                >
                  +34 915 62 08 00
                </a>
              </li>
              <li className="text-sm">
                Calle del Mastelero 12
                <br />
                28033 Madrid
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-arje-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="text-center text-arje-gray-200 dark:text-gray-300 text-sm space-y-2">
            <p>© {currentYear} Arjé Partners. Todos los derechos reservados.</p>
            <p className="text-xs text-arje-gray-400 dark:text-gray-500">
              <Link href="/privacidad" className="hover:text-arje-blue transition-colors">
                Política de Privacidad
              </Link>
              {" · "}
              <Link href="/cookies" className="hover:text-arje-blue transition-colors">
                Política de Cookies
              </Link>
              {" · "}
              <Link href="/legal" className="hover:text-arje-blue transition-colors">
                Aviso Legal
              </Link>
              {" · "}
              <Link href="/cumplimiento-rgpd" className="hover:text-arje-blue transition-colors">
                Cumplimiento RGPD
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}