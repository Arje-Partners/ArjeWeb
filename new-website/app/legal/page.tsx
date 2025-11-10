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

            <p className="lead">
              ARJE PARTNERS SL (en adelante "la empresa"), con domicilio en C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID),
              y con NIF B84130590, INFORMA:
            </p>

            <p>
              La utilización del nombre de dominio www.arjepartners.com se encuentra debidamente registrado por la empresa,
              con todas las garantías, tal y como dispone en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico. No obstante, se pone de manifiesto la plena adecuación de los
              presentes Términos Legales a la normativa vigente en materia de Protección de Datos, Comercio Electrónico,
              Condiciones Contratación, Propiedad Intelectual y demás disposiciones subsidiarias.
            </p>

            <h2>1. ACEPTACIÓN DE LOS TÉRMINOS LEGALES</h2>
            <p>
              El acceso a este sitio web o su utilización en cualquier forma implica la aceptación de todas y cada una de
              los presentes Términos Legales, reservándose la empresa el derecho a modificarlos en cualquier momento. En
              consecuencia, será responsabilidad de todo visitante y/o Usuario, la atenta lectura de los Términos Legales
              de uso vigente en cada una de las ocasiones en que acceda a este sitio web, por lo que, si éste no está de
              acuerdo con cualquiera de los mismos aquí dispuestos, deberá abstenerse respecto al uso de la presente página web.
            </p>

            <h2>2. OBJETO</h2>
            <p>
              Por medio de la web www.arjepartners.com, se facilita a los Usuarios el acceso a diversos contenidos, servicios,
              información y datos (los "contenidos"), puestos a su disposición. La empresa se reserva el derecho de modificar
              en cualquier momento la presentación, configuración y localización de la página web, así como los contenidos,
              productos y servicios en él dispuestos.
            </p>

            <h2>3. CONDICIONES DE ACCESO</h2>
            <p>
              El acceso a la información de los distintos productos y servicios existentes en el sitio web, así como a su
              navegación será libre y gratuita no exigiéndose por tanto a los Usuarios el pertinente registro con la consecuente
              entrega de sus datos personales, ni la utilización de claves o contraseñas.
            </p>
            <p>
              Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal,
              los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa, dará a dichos datos el
              tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en
              la sección de Política de Protección de Datos.
            </p>

            <h2>4. CONDICIONES DE UTILIZACIÓN</h2>
            <p>
              El Usuario se compromete a hacer un uso adecuado y lícito del sitio web así como de los contenidos y servicios,
              de conformidad con la legislación aplicable en cada momento, los Términos Legales del sitio web, la moral y buenas
              costumbres generalmente aceptadas y el orden público.
            </p>
            <p>El Usuario deberá abstenerse de:</p>
            <ul>
              <li>Hacer un uso no autorizado o fraudulento del sitio web y/o de los contenidos con fines o efectos ilícitos,
                prohibidos en los presentes Términos Legales, lesivos de los derechos e intereses de terceros, o que de
                cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los
                servicios o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático</li>
              <li>Acceder o intentar acceder a recursos o áreas restringidas del sitio web, sin cumplir las condiciones
                exigidas para dicho acceso</li>
              <li>Provocar daños en los sistemas físicos o lógicos del sitio web, de sus proveedores o de terceros</li>
              <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean
                susceptibles de provocar daños en los sistemas físicos o lógicos de la empresa, de sus proveedores o de terceros</li>
              <li>Intentar acceder, utilizar y/o manipular los datos de la empresa, terceros proveedores y otros Usuarios</li>
              <li>Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación
                pública, transformar o modificar los contenidos, a menos que se cuente con la autorización expresa del titular
                de los correspondientes derechos o ello resulte legalmente permitido</li>
              <li>Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos
                identificativos de los derechos de la empresa o de terceros incorporados a los contenidos, así como los
                dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los contenidos</li>
              <li>Intentar obtener datos personales distintos a los que está autorizado a conocer, empleando para ello medios o
                procedimientos ilícitos, fraudulentos o que puedan causar cualquier tipo de daño</li>
            </ul>

            <h2>5. RESPONSABILIDADES</h2>
            <p>
              La empresa no garantiza el acceso continuado, ni la correcta visualización, descarga o utilidad de los elementos e
              informaciones contenidas en las páginas de la empresa, que pueden verse impedidos, dificultados o interrumpidos por
              factores o circunstancias que están fuera de su control.
            </p>
            <p>
              La empresa, podrá interrumpir el servicio o resolver de modo inmediato la relación con el Usuario si detecta un uso
              de su Portal o de cualquiera de los servicios ofertados en el mismo son contrarios a los presentes Términos Legales.
            </p>
            <p>
              La empresa, pone a disposición de los Usuarios una dirección de correo electrónico{' '}
              <a href="mailto:j.gimeno@arjepartners.com" className="text-arje-blue hover:underline">
                j.gimeno@arjepartners.com
              </a>{' '}
              para que cualquier contenido que pueda afectar a la actividad de otros usuarios sea puesto de manifiesto, con la
              voluntad de rectificar el mismo en caso de ser apropiado.
            </p>
            <p>
              La empresa excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse a
              la mala utilización de los servicios de libre disposición y uso por parte de los usuarios de la Web.
            </p>

            <h2>6. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>
              El Usuario reconoce y acepta que todas las marcas, nombres comerciales o signos distintivos, todos los derechos de
              propiedad industrial e intelectual, sobre los contenidos y/o cualesquiera otros elementos insertados en el página,
              son propiedad exclusiva de la empresa y/o de terceros, quienes tiene el derecho exclusivo de utilizarlos en el
              tráfico económico.
            </p>
            <p>
              Los contenidos, textos, fotografías, diseños, logotipos, imágenes, programas de ordenador, códigos fuente y, en
              general, cualquier creación intelectual existente en este sitio, así como el propio sitio en su conjunto, como obra
              artística multimedia, están protegidos como derechos de autor por la legislación en materia de propiedad intelectual.
            </p>

            <h2>7. PROTECCIÓN DE DATOS</h2>
            <p>
              Cuando sea necesario recabar datos de carácter personal, para la utilización de algún Servicio, se proporcionará la
              información previa sobre cómo se tratarán esos datos. Puede encontrar información adicional sobre cómo se tratan sus
              datos personales en la sección <a href="/privacidad" className="text-arje-blue hover:underline">"Política de Protección de Datos"</a>.
            </p>

            <h2>8. DURACIÓN Y TERMINACIÓN</h2>
            <p>
              La prestación del servicio del presente sitio Web y los demás servicios tienen en principio una duración indefinida.
              No obstante, la empresa, podrá dar por terminada o suspender cualquiera de los servicios del portal.
            </p>

            <h2>9. FUERZA MAYOR</h2>
            <p>
              La empresa, no será responsable en todo en caso de imposibilidad de prestar servicio, si ésta se debe a interrupciones
              prolongadas del suministro eléctrico, líneas de telecomunicaciones, conflictos sociales, huelgas, rebelión, explosiones,
              inundaciones, actos y omisiones del Gobierno, y en general todos los supuestos de fuerza mayor.
            </p>

            <h2>10. COOKIES UTILIZADAS EN ESTE SITIO WEB</h2>
            <p>
              Siguiendo las directrices de la Agencia Española de Protección de Datos podrá consultar nuestra política de cookies
              en la sección <a href="/cookies" className="text-arje-blue hover:underline">"Política de Cookies"</a>.
            </p>

            <h2>11. LEY APLICABLE Y JURISDICCIÓN</h2>
            <p>
              Los presentes Términos Legales se rigen por la Ley española. En la medida en que así lo permita la ley, las partes
              con renuncia expresa a cualquier otro fuero que pudiera corresponderles, acuerdan someterse a la jurisdicción de los
              Juzgados y Tribunales de Madrid.
            </p>

            <div className="mt-12 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Datos de contacto</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Responsable:</strong> ARJE PARTNERS SL</li>
                <li><strong>NIF:</strong> B84130590</li>
                <li><strong>Dirección:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)</li>
                <li><strong>Teléfono:</strong> <a href="tel:+34915620800" className="text-arje-blue hover:underline">915620800</a></li>
                <li><strong>Email:</strong> <a href="mailto:j.gimeno@arjepartners.com" className="text-arje-blue hover:underline">j.gimeno@arjepartners.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
