export default function CumplimientoRGPDPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-6">
            Cumplimiento RGPD
          </h1>
          <p className="text-lg text-arje-gray-600 dark:text-gray-300">
            Información sobre el tratamiento de datos en nuestros formularios web
          </p>
          <p className="text-lg text-arje-gray-600 dark:text-gray-300 mt-2">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <p className="lead">
              En <strong>ARJE PARTNERS SL</strong> nos tomamos muy en serio la protección de sus datos personales.
              A continuación, le informamos sobre cómo tratamos los datos que nos facilita a través de nuestros
              formularios web, en cumplimiento del Reglamento General de Protección de Datos (RGPD).
            </p>

            <h2>FORMULARIO DE CONTACTO GENERAL</h2>

            <h3>Información Básica sobre Protección de Datos</h3>
            <p>
              <strong>Responsable:</strong> ARJE PARTNERS SL.
            </p>
            <p>
              <strong>Finalidad:</strong> Responder a su solicitud y gestionar el envío de comunicaciones
              comerciales y publicitarias (si así lo autoriza).
            </p>
            <p>
              <strong>Legitimación:</strong> Consentimiento del interesado.
            </p>
            <p>
              <strong>Destinatarios:</strong> Sus datos no se facilitarán a terceros, salvo los servicios
              auxiliares necesarios para el normal funcionamiento de la página web (servicios de hosting,
              email marketing, etc.).
            </p>
            <p>
              <strong>Transferencias internacionales:</strong> Los datos recogidos mediante la página web
              serán facilitados a organizaciones de terceros países establecidos fuera del Espacio Económico
              Europeo y con un nivel de garantías adecuadas al Reglamento General de Protección de Datos (EU)
              2016/679. <strong>Países:</strong> Estados Unidos. Estas transferencias se realizan a
              proveedores de servicios tecnológicos que cumplen con el Marco de Privacidad de Datos UE-EE.UU.
              o que proporcionan garantías adecuadas mediante cláusulas contractuales tipo aprobadas por la
              Comisión Europea.
            </p>
            <p>
              <strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos,
              como se explica en la información adicional.
            </p>
            <p>
              <strong>Información adicional:</strong> Puede tener acceso a información adicional sobre cómo
              tratamos sus datos en nuestra{' '}
              <a href="/privacidad" className="text-arje-blue hover:underline">
                Política de Protección de Datos
              </a>, o escribiendo a{' '}
              <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                info@arjepartners.com
              </a>.
            </p>

            <div className="my-6 p-4 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm mb-2"><strong>Consentimientos requeridos:</strong></p>
              <ul className="text-sm space-y-2">
                <li>
                  ☑ <strong>HE SIDO INFORMADO, ENTIENDO Y AUTORIZO EL TRATAMIENTO DE DATOS PERSONALES</strong>
                  {' '}(Obligatorio)
                </li>
                <li>
                  ☐ <strong>ACEPTO Y CONSIENTO QUE MIS DATOS PERSONALES SEAN UTILIZADOS PARA EL ENVÍO DE
                  COMUNICACIONES COMERCIALES Y PUBLICITARIAS</strong> (Opcional)
                </li>
              </ul>
            </div>

            <h2>SOLICITUD DE PRESUPUESTO / DEMO</h2>

            <h3>Información sobre Protección de Datos</h3>
            <p>
              <strong>ARJE PARTNERS SL</strong>, como responsable del tratamiento, tratará sus datos con el
              fin de realizar el presupuesto solicitado o gestionar su solicitud de demostración de nuestros
              productos.
            </p>
            <p>
              Las bases legítimas son la <strong>ejecución de un contrato</strong> y el <strong>interés
              legítimo del responsable</strong>.
            </p>
            <p>
              Sus datos no serán facilitados a terceros salvo aceptación del presupuesto, en cuyo caso serán
              comunicados a encargados de tratamiento para la realización del servicio, la gestión contable,
              fiscal o administrativa de la empresa y/o debido a obligaciones legales aplicables.
            </p>
            <p>
              Sus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que
              fueron recabados.
            </p>
            <p>
              Se podrán presentar reclamaciones ante la{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                Agencia Española de Protección de Datos
              </a>.
            </p>

            <div className="my-6 p-4 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm mb-2"><strong>Consentimiento opcional:</strong></p>
              <ul className="text-sm">
                <li>
                  ☐ <strong>Autorizo el envío de comunicaciones comerciales sobre los productos y/o servicios
                  del Responsable</strong> (Opcional)
                </li>
              </ul>
            </div>

            <h2>NEWSLETTER / SUSCRIPCIÓN</h2>

            <h3>Consentimiento para Newsletter</h3>
            <p>
              <strong>Responsable:</strong> ARJE PARTNERS SL.
            </p>
            <p>
              <strong>Finalidad:</strong> Gestionar su suscripción a nuestra newsletter para proporcionarle
              información personalizada y exclusiva sobre nuestra empresa, así como enviarle comunicaciones
              comerciales.
            </p>
            <p>
              <strong>Legitimación:</strong> Consentimiento del interesado.
            </p>
            <p>
              <strong>Destinatarios:</strong> Sus datos no se facilitarán a terceros, salvo los servicios
              auxiliares necesarios para el normal funcionamiento de la página web (plataforma de email
              marketing, etc.).
            </p>
            <p>
              <strong>Transferencias internacionales:</strong> Los datos recogidos mediante la página web
              serán facilitados a organizaciones de terceros países establecidos fuera del Espacio Económico
              Europeo y con un nivel de garantías adecuadas al Reglamento General de Protección de Datos (EU)
              2016/679. <strong>Países:</strong> Estados Unidos.
            </p>
            <p>
              <strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos,
              como se explica en la información adicional.
            </p>
            <p>
              <strong>Información adicional:</strong> Puede tener acceso a información adicional sobre cómo
              tratamos sus datos en nuestra{' '}
              <a href="/privacidad" className="text-arje-blue hover:underline">
                Política de Protección de Datos
              </a>.
            </p>

            <div className="my-6 p-4 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm mb-2"><strong>Consentimiento requerido:</strong></p>
              <ul className="text-sm">
                <li>
                  ☑ <strong>HE SIDO INFORMADO, ENTIENDO Y AUTORIZO EL TRATAMIENTO DE DATOS PERSONALES</strong>
                  {' '}(Obligatorio)
                </li>
              </ul>
            </div>

            <h2>DESCARGA DE CONTENIDOS</h2>

            <h3>Whitepapers, eBooks y Recursos</h3>
            <p>
              <strong>Responsable:</strong> ARJE PARTNERS SL.
            </p>
            <p>
              <strong>Finalidad:</strong> Gestionar el envío del contenido solicitado y, si lo autoriza,
              enviarle información comercial sobre nuestros productos y servicios.
            </p>
            <p>
              <strong>Legitimación:</strong> Consentimiento del interesado y ejecución de un contrato.
            </p>
            <p>
              <strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.
            </p>
            <p>
              <strong>Derechos:</strong> Puede ejercer los derechos de acceso, rectificación, supresión,
              portabilidad, limitación y oposición escribiendo a{' '}
              <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                info@arjepartners.com
              </a>.
            </p>
            <p>
              <strong>Información adicional:</strong> Consulte la información adicional y detallada en nuestra{' '}
              <a href="/privacidad" className="text-arje-blue hover:underline">
                Política de Privacidad
              </a>.
            </p>

            <div className="my-6 p-4 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm mb-2"><strong>Consentimientos:</strong></p>
              <ul className="text-sm space-y-2">
                <li>☑ <strong>Acepto la Política de Privacidad</strong> (Obligatorio)</li>
                <li>☐ <strong>Deseo recibir comunicaciones comerciales de ARJE PARTNERS SL</strong> (Opcional)</li>
              </ul>
            </div>

            <h2>SUS DERECHOS</h2>
            <p>
              Como interesado, usted tiene derecho a:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y transferirlos a otro responsable</li>
              <li><strong>Retirar el consentimiento:</strong> Retirar en cualquier momento el consentimiento otorgado</li>
            </ul>

            <p>
              Para ejercer cualquiera de estos derechos, puede contactarnos en:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                  info@arjepartners.com
                </a>
              </li>
              <li><strong>Dirección postal:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)</li>
              <li>
                <strong>Teléfono:</strong>{' '}
                <a href="tel:+34915620800" className="text-arje-blue hover:underline">
                  915620800
                </a>
              </li>
            </ul>

            <p>
              En cualquier caso, tiene derecho a presentar una reclamación ante la{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                Agencia Española de Protección de Datos
              </a>.
            </p>

            <h2>MEDIDAS DE SEGURIDAD</h2>
            <p>
              ARJE PARTNERS SL ha adoptado las medidas de seguridad técnicas y organizativas necesarias para
              garantizar la seguridad de sus datos de carácter personal y evitar su alteración, pérdida,
              tratamiento y/o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza
              de los datos almacenados y los riesgos a que están expuestos.
            </p>

            <h2>CONSERVACIÓN DE DATOS</h2>
            <p>
              Conservaremos los datos durante el tiempo que sea necesario para atender la solicitud y cumplir
              con las obligaciones legales exigidas. Los plazos específicos varían según la finalidad del
              tratamiento:
            </p>
            <ul>
              <li><strong>Consultas generales:</strong> Hasta que se resuelva la consulta + plazo legal de prescripción</li>
              <li><strong>Presupuestos:</strong> Hasta la aceptación o rechazo + plazo legal aplicable</li>
              <li><strong>Newsletter:</strong> Hasta que retire su consentimiento</li>
              <li><strong>Relaciones contractuales:</strong> Durante la vigencia del contrato + plazos legales fiscales y contables</li>
            </ul>

            <h2>EXACTITUD DE LOS DATOS</h2>
            <p>
              El usuario es el único responsable de la veracidad y corrección de los datos que remita,
              exonerando a ARJE PARTNERS SL de cualquier responsabilidad al respecto.
            </p>
            <p>
              Los usuarios garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad
              de los datos personales facilitados, y se comprometen a mantenerlos debidamente actualizados.
            </p>

            <div className="mt-12 p-6 bg-arje-blue-50 dark:bg-gray-800 rounded-lg border-l-4 border-arje-blue">
              <h3 className="text-lg font-bold mb-4 text-arje-gray-900 dark:text-white">
                ¿Tienes Dudas sobre el Tratamiento de tus Datos?
              </h3>
              <p className="text-sm text-arje-gray-700 dark:text-gray-300 mb-4">
                Para cualquier duda o consulta sobre cómo tratamos sus datos personales, puede contactar con nosotros:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Responsable:</strong> ARJE PARTNERS SL
                </li>
                <li>
                  <strong>NIF:</strong> B84130590
                </li>
                <li>
                  <strong>Dirección:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                    info@arjepartners.com
                  </a>
                </li>
                <li>
                  <strong>Teléfono:</strong>{' '}
                  <a href="tel:+34915620800" className="text-arje-blue hover:underline">
                    915620800
                  </a>
                </li>
              </ul>
              <p className="text-sm text-arje-gray-700 dark:text-gray-300 mt-4">
                También puede consultar nuestra{' '}
                <a href="/privacidad" className="text-arje-blue hover:underline font-semibold">
                  Política de Protección de Datos
                </a>{' '}
                completa para más información.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
