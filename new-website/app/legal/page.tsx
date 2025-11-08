export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-6">
            Aviso Legal
          </h1>
          <p className="text-lg text-arje-gray-600 dark:text-gray-300">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2>1. Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y Comercio Electrónico, se informa a los usuarios del sitio web
              <strong> arjepartners.com</strong> de los datos identificativos de la empresa:
            </p>
            <ul>
              <li><strong>Denominación social:</strong> Arjé Partners S.L.</li>
              <li><strong>Domicilio social:</strong> C/ Mastelero 12 Bajo - 20033 Madrid</li>
              <li><strong>CIF:</strong> B84130590</li>
              <li><strong>Email:</strong> info@arjepartners.com</li>
              <li><strong>Teléfono:</strong> +34 915 62 08 00</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web <strong>arjepartners.com</strong> (en adelante,
              LA WEB), del que es titular Arjé Partners S.L.
            </p>
            <p>
              La navegación por LA WEB atribuye la condición de usuario de la misma e implica la aceptación
              plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal,
              que pueden sufrir modificaciones.
            </p>

            <h2>3. Uso del Sitio Web</h2>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Arjé Partners S.L.
              ofrece a través de LA WEB y con carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <ul>
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de Arjé Partners, de sus proveedores o de terceras personas.</li>
              <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
            </ul>

            <h2>4. Propiedad Intelectual e Industrial</h2>
            <p>
              Arjé Partners S.L. es titular de todos los derechos de propiedad intelectual e industrial de LA WEB,
              así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio,
              vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño,
              selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso
              y uso, etc.).
            </p>
            <p>
              Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo,
              de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución
              y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte
              de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier
              medio técnico, sin la autorización de Arjé Partners S.L.
            </p>

            <h2>5. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              Arjé Partners S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier
              naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos,
              falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en
              los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2>6. Modificaciones</h2>
            <p>
              Arjé Partners S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
              oportunas en LA WEB, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se
              presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
            </p>

            <h2>7. Enlaces</h2>
            <p>
              En el caso de que en LA WEB se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet,
              Arjé Partners S.L. no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso
              Arjé Partners S.L. asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un
              sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
              veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno
              de dichos hipervínculos u otros sitios de Internet.
            </p>

            <h2>8. Derecho de Exclusión</h2>
            <p>
              Arjé Partners S.L. se reserva el derecho a denegar o retirar el acceso a LA WEB y/o los servicios
              ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que
              incumplan las presentes Condiciones Generales de Uso.
            </p>

            <h2>9. Generalidades</h2>
            <p>
              Arjé Partners S.L. perseguirá el incumplimiento de las presentes condiciones así como cualquier
              utilización indebida de LA WEB ejerciendo todas las acciones civiles y penales que le puedan
              corresponder en derecho.
            </p>

            <h2>10. Legislación Aplicable y Jurisdicción</h2>
            <p>
              La relación entre Arjé Partners S.L. y el usuario se regirá por la normativa española vigente y
              cualquier controversia se someterá a los Juzgados y Tribunales de la ciudad de Madrid.
            </p>

            <div className="mt-12 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-arje-gray-600 dark:text-gray-400">
                <strong>Nota:</strong> Este aviso legal es un documento informativo. Para cualquier
                consulta específica sobre aspectos legales, por favor contacte con nosotros en{' '}
                <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                  info@arjepartners.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
