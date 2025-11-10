export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-6">
            Política de Protección de Datos
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

            <h2>1. RESPONSABLE</h2>

            <h3>A. Datos de identificación y contacto del Responsable</h3>
            <p>
              El responsable de los datos recabados mediante esta web es <strong>ARJE PARTNERS SL</strong>.
            </p>
            <p>Usted podrá contactar con el responsable mediante:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">info@arjepartners.com</a></li>
              <li><strong>Teléfono:</strong> <a href="tel:+34915620800" className="text-arje-blue hover:underline">915620800</a></li>
              <li><strong>Dirección:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)</li>
              <li><strong>NIF:</strong> B84130590</li>
            </ul>

            <h3>B. Datos de contacto del Delegado de Protección de Datos</h3>
            <p>Esta empresa no cuenta con Delegado de Protección de Datos.</p>

            <h2>2. FINALIDAD</h2>

            <h3>A. Descripción ampliada de los fines del tratamiento</h3>
            <ul>
              <li>Publicidad y prospección comercial</li>
              <li>Gestión de solicitudes</li>
              <li>Responder a las consultas planteadas a través de los formularios de contacto</li>
              <li>Prestación de servicios de consultoría en gestión de tesorería</li>
              <li>Envío de comunicaciones comerciales sobre nuestros productos y servicios</li>
            </ul>

            <h3>B. Plazos o criterios de conservación de los datos</h3>
            <p>
              Conservaremos los datos durante el tiempo que sea necesario para atender la solicitud y cumplir con las
              obligaciones legales exigidas.
            </p>
            <p>
              Los datos que usted nos ha facilitado serán conservados mientras sean necesarios para las finalidades
              indicadas en el punto 2.A., o también serán almacenadas por el tiempo exigido por distintas legislaciones
              aplicables.
            </p>

            <h3>C. Decisiones automatizadas, perfiles y lógica aplicada</h3>
            <p>Los datos recogidos mediante la página web no serán utilizados para tomar decisiones automatizadas.</p>

            <h2>3. LEGITIMACIÓN</h2>

            <h3>A. Legislación aplicable</h3>
            <ul>
              <li>Reglamento General de Protección de Datos 2016/679 de 27 de abril de 2016</li>
              <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales</li>
              <li>Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico</li>
            </ul>

            <h3>B. Detalles de la base jurídica del tratamiento</h3>
            <p>
              <strong>Art. 6, apartado 1 letra a:</strong> el interesado dio su consentimiento para el tratamiento de sus
              datos personales.
            </p>
            <p>
              <strong>Art. 6, apartado 1 letra b:</strong> el tratamiento es necesario para la ejecución de un contrato en
              el que el interesado es parte.
            </p>
            <p>
              <strong>Art. 6, apartado 1 letra f:</strong> el tratamiento es necesario para la satisfacción de intereses
              legítimos perseguidos por el responsable del tratamiento.
            </p>

            <h3>C. Obligación o no de facilitar datos y consecuencias de no hacerlo</h3>
            <p>
              No está obligado a facilitarnos los datos, sin embargo, será necesario para poder gestionar las sugerencias
              o peticiones que necesite hacernos mediante la página web, así como para prestar los servicios que nos solicite.
            </p>

            <h2>4. DESTINATARIOS</h2>

            <h3>A. Destinatarios</h3>
            <p>
              En ocasiones será necesario facilitar sus datos personales a terceros para cumplir con las finalidades
              descritas en la presente política de protección de datos:
            </p>
            <ul>
              <li>Empresas dedicadas a servicios de la información</li>
              <li>Proveedores de servicios tecnológicos (hosting, email marketing, CRM)</li>
              <li>Asesores fiscales y contables</li>
            </ul>
            <p>
              Estos destinarios solo tendrán acceso a información necesaria para cumplir con la prestación del servicio.
              Asimismo, sus datos podrán ser facilitados a la Administración Pública para abordar cualquier posible
              responsabilidad legal derivada de este tratamiento, así como para cumplir con obligaciones legales.
            </p>

            <h3>B. Transferencias internacionales</h3>
            <p>
              Los datos recogidos mediante la página web serán facilitados a organizaciones de terceros países establecidos
              fuera del Espacio Económico Europeo y con un nivel de garantías adecuadas al Reglamento General de Protección
              de Datos (EU) 2016/679.
            </p>
            <p><strong>Países:</strong> Estados Unidos.</p>
            <p>
              Estas transferencias se realizan a proveedores de servicios tecnológicos que cumplen con el Marco de Privacidad
              de Datos UE-EE.UU. (EU-U.S. Data Privacy Framework) o que proporcionan garantías adecuadas mediante cláusulas
              contractuales tipo aprobadas por la Comisión Europea.
            </p>

            <h2>5. DERECHOS</h2>
            <p>
              El interesado podrá ejercer los derechos de acceso, rectificación, supresión y portabilidad de sus datos, y la
              limitación u oposición a su tratamiento, así como de no ser objeto de decisiones automatizadas, o de retirar su
              consentimiento, sin que dicha retirada afecte a la licitud del tratamiento basada en el consentimiento previo.
            </p>

            <h3>Cómo ejercer los derechos de acceso, rectificación, supresión y portabilidad de sus datos</h3>
            <p>
              El interesado podrá conocer, modificar, o eliminar los datos que la empresa posea acerca de su persona mediante
              correo electrónico o bien por correo postal.
            </p>
            <p>
              El interesado podrá transferir sus datos o bien limitar los ya existentes que la empresa posea acerca de su
              persona mediante correo electrónico o bien por correo postal. Para poder ejercer estos derechos es posible que
              en algún caso se le solicite más información para poder verificar su identidad.
            </p>
            <p>
              Para ejercer sus derechos puede enviar un escrito dirigido al responsable del tratamiento a la dirección de
              correo electrónico{' '}
              <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                info@arjepartners.com
              </a>.
              Es posible que en algún caso se le solicite más información para poder verificar su identidad.
            </p>

            <h3>Derecho a retirar el Consentimiento prestado</h3>
            <p>
              El interesado podrá retirar los datos que la empresa posee acerca de su persona mediante correo electrónico o
              bien por correo postal. Para poder retirar su consentimiento es posible que en algún caso se le solicite más
              información para poder verificar su identidad.
            </p>

            <h3>Derecho a reclamar ante la Autoridad de Control</h3>
            <p>
              Asimismo, informamos que podrá presentar una reclamación sobre cualquier incidencia ante la Agencia Española de
              Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">www.aepd.es</a>).
            </p>
            <p>
              El interesado podrá reclamar ante la Agencia Española de Protección de Datos de todos los problemas o necesidades
              que puedan surgirle.
            </p>

            <h2>6. PROCEDENCIA</h2>

            <h3>A. Información detallada del origen de los datos</h3>
            <p>Facilitados por el propio interesado a través de:</p>
            <ul>
              <li>Formularios de contacto en la web</li>
              <li>Correo electrónico</li>
              <li>Llamadas telefónicas</li>
              <li>Reuniones comerciales</li>
              <li>Eventos y ferias del sector</li>
            </ul>

            <h3>B. Categorías de datos que se tratan</h3>
            <ul>
              <li>Nombre y Apellidos</li>
              <li>Email</li>
              <li>Teléfono</li>
              <li>Empresa</li>
              <li>Cargo</li>
              <li>Datos de navegación web (cuando aplique)</li>
            </ul>

            <h2>INFORMACIÓN ADICIONAL</h2>

            <h3>Medidas de seguridad</h3>
            <p>
              ARJE PARTNERS SL ha adoptado las medidas de seguridad técnicas y organizativas necesarias para garantizar la
              seguridad de sus datos de carácter personal y evitar su alteración, pérdida, tratamiento y/o acceso no autorizado,
              habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>

            <h3>Exactitud y veracidad de los datos</h3>
            <p>
              El usuario es el único responsable de la veracidad y corrección de los datos que remita, exonerando a ARJE PARTNERS
              SL de cualquier responsabilidad al respecto.
            </p>
            <p>
              Los usuarios garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad de los datos
              personales facilitados, y se comprometen a mantenerlos debidamente actualizados.
            </p>

            <div className="mt-12 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-4">¿Tienes Dudas?</h3>
              <p className="text-sm text-arje-gray-700 dark:text-gray-300 mb-4">
                Para cualquier duda o consulta sobre esta Política de Protección de Datos, puede contactar con nosotros:
              </p>
              <ul className="space-y-2 text-sm">
                <li><strong>Email:</strong> <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">info@arjepartners.com</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34915620800" className="text-arje-blue hover:underline">915620800</a></li>
                <li><strong>Dirección:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
