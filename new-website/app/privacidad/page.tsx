export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-6">
            Política de Privacidad
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

            <h2>1. Información al Usuario</h2>
            <p>
              Arjé Partners S.L., como Responsable del Tratamiento, le informa que, según lo dispuesto en el
              Reglamento (UE) 2016/679, de 27 de abril (RGPD), y en la L.O. 3/2018, de 5 de diciembre (LOPDGDD),
              trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
            </p>

            <h2>2. Responsable del Tratamiento</h2>
            <ul>
              <li><strong>Identidad:</strong> Arjé Partners S.L.</li>
              <li><strong>Dirección postal:</strong> C/ Mastelero 12 Bajo - 20033 Madrid</li>
              <li><strong>Teléfono:</strong> +34 915 62 08 00</li>
              <li><strong>Email:</strong> info@arjepartners.com</li>
            </ul>

            <h2>3. ¿Qué Datos Recopilamos?</h2>
            <p>
              Para las finalidades descritas en esta Política de Privacidad, trataremos las siguientes
              categorías de datos:
            </p>
            <ul>
              <li><strong>Datos de identificación:</strong> Nombre, apellidos, email</li>
              <li><strong>Datos de contacto:</strong> Teléfono, empresa</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, cookies, datos de navegación</li>
              <li><strong>Datos comerciales:</strong> Información sobre el sistema ERP/tesorería que utiliza, mensajes enviados a través del formulario de contacto</li>
            </ul>

            <h2>4. ¿Con Qué Finalidad Tratamos Sus Datos?</h2>
            <p>
              En Arjé Partners S.L. tratamos la información que nos facilitan las personas interesadas con los
              siguientes fines:
            </p>
            <ul>
              <li><strong>Formulario de contacto:</strong> Gestionar las solicitudes de información y/o consultas efectuadas a través del formulario de contacto</li>
              <li><strong>Envío de comunicaciones comerciales:</strong> Con su consentimiento previo, para el envío de información comercial sobre nuestros productos y servicios</li>
              <li><strong>Análisis y mejora:</strong> Analizar el uso de nuestra web para mejorar la experiencia del usuario</li>
            </ul>

            <h2>5. Legitimación</h2>
            <p>
              El tratamiento de sus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:
            </p>
            <ul>
              <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales y uso de cookies analíticas</li>
              <li><strong>Interés legítimo:</strong> Para el análisis de uso de la web y mejora de nuestros servicios</li>
              <li><strong>Ejecución de un contrato:</strong> Para la gestión de consultas y prestación de servicios solicitados</li>
            </ul>

            <h2>6. ¿Durante Cuánto Tiempo Conservaremos Sus Datos?</h2>
            <p>
              Los datos personales proporcionados se conservarán:
            </p>
            <ul>
              <li><strong>Consultas formulario de contacto:</strong> Mientras dure la relación comercial o durante los años necesarios para cumplir con las obligaciones legales</li>
              <li><strong>Comunicaciones comerciales:</strong> Hasta que solicite su baja o retire el consentimiento</li>
              <li><strong>Cookies y datos de navegación:</strong> El tiempo establecido en nuestra Política de Cookies</li>
            </ul>

            <h2>7. ¿A Qué Destinatarios Se Comunicarán Sus Datos?</h2>
            <p>
              Sus datos no serán compartidos con terceros, salvo obligación legal. Los datos podrán ser
              cedidos a:
            </p>
            <ul>
              <li>Proveedores de servicios tecnológicos necesarios para la prestación de nuestros servicios (alojamiento web, plataforma de email)</li>
              <li>Organismos públicos cuando exista una obligación legal</li>
            </ul>
            <p>
              Todos nuestros proveedores de servicios están obligados a mantener el mismo nivel de protección
              de datos que nosotros aplicamos.
            </p>

            <h2>8. ¿Cuáles Son Sus Derechos?</h2>
            <p>
              Los derechos de protección de datos de los usuarios son:
            </p>
            <ul>
              <li><strong>Derecho de acceso:</strong> Conocer qué datos estamos tratando sobre usted</li>
              <li><strong>Derecho de rectificación:</strong> Modificar los datos inexactos o incompletos</li>
              <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
              <li><strong>Derecho a la limitación del tratamiento:</strong> Solicitar que no se traten sus datos</li>
              <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
              <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos</li>
              <li><strong>Derecho a no ser objeto de decisiones automatizadas:</strong> No ser objeto de decisiones basadas únicamente en el tratamiento automatizado</li>
            </ul>
            <p>
              Puede ejercer sus derechos enviando un email a <strong>info@arjepartners.com</strong>, adjuntando
              copia de su DNI o documento identificativo equivalente.
            </p>
            <p>
              Asimismo, le informamos que puede presentar una reclamación ante la Agencia Española de Protección
              de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
            </p>

            <h2>9. Medidas de Seguridad</h2>
            <p>
              Arjé Partners S.L. tratará los datos del usuario en todo momento de forma absolutamente confidencial
              y guardando el preceptivo deber de secreto respecto de los mismos, de conformidad con lo previsto
              en la normativa de aplicación, adoptando al efecto las medidas de índole técnica y organizativas
              necesarias que garanticen la seguridad de sus datos y eviten su alteración, pérdida, tratamiento
              o acceso no autorizado.
            </p>

            <h2>10. Enlaces a Sitios Web de Terceros</h2>
            <p>
              LA WEB puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros
              distintos de Arjé Partners S.L. Los titulares de dichos sitios web dispondrán de sus propias
              políticas de privacidad, siendo ellos mismos, en cada caso, responsables de sus propios ficheros
              y de sus propias prácticas de privacidad.
            </p>

            <h2>11. Actualización de la Política de Privacidad</h2>
            <p>
              Arjé Partners S.L. se reserva el derecho a modificar la presente Política de Privacidad para adaptarla
              a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos
              supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta
              en práctica.
            </p>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-arje-blue">
              <h3 className="text-lg font-semibold text-arje-blue mb-2">¿Tienes Dudas?</h3>
              <p className="text-sm text-arje-gray-700 dark:text-gray-300">
                Si tiene cualquier duda sobre esta Política de Privacidad o quiere ejercer sus derechos,
                puede contactarnos en:
              </p>
              <ul className="mt-2 text-sm text-arje-gray-700 dark:text-gray-300">
                <li>Email: <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">info@arjepartners.com</a></li>
                <li>Teléfono: <a href="tel:+34915620800" className="text-arje-blue hover:underline">+34 915 62 08 00</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
