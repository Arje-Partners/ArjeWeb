export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-arje-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-arje-gray-900 dark:text-white mb-6">
            Política de Cookies
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

            <h2>DEFINICIÓN Y FUNCIONES DE LAS COOKIES</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies
              permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación
              de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su
              equipo, pueden utilizarse para reconocer al usuario.
            </p>

            <h2>¿QUÉ TIPO DE COOKIES UTILIZA ESTA PÁGINA WEB?</h2>

            <h3>Cookies Técnicas</h3>
            <p>
              Permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las
              diferentes opciones o servicios que en ella existan, incluyendo la gestión y operativa de la página web y
              habilitar sus funciones y servicios, como, por ejemplo, identificar la sesión, acceder a partes de acceso
              restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, gestionar
              el pago, etc.
            </p>
            <p>
              <strong>La página web no puede funcionar adecuadamente sin estas cookies por lo que se consideran necesarias.</strong>
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                <thead className="bg-arje-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Gestión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Terceros</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_session</td>
                    <td className="px-4 py-3 text-sm">Propia</td>
                    <td className="px-4 py-3 text-sm">-</td>
                    <td className="px-4 py-3 text-sm">Durante la sesión</td>
                    <td className="px-4 py-3 text-sm">Identificación de sesión del usuario</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_csrf</td>
                    <td className="px-4 py-3 text-sm">Propia</td>
                    <td className="px-4 py-3 text-sm">-</td>
                    <td className="px-4 py-3 text-sm">Durante la sesión</td>
                    <td className="px-4 py-3 text-sm">Protección contra ataques CSRF</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Cookies de Personalización</h3>
            <p>
              Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función
              de una serie de criterios en el terminal del usuario como por ejemplo el idioma, el tipo de navegador a través
              del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                <thead className="bg-arje-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Gestión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Terceros</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_language</td>
                    <td className="px-4 py-3 text-sm">Propia</td>
                    <td className="px-4 py-3 text-sm">-</td>
                    <td className="px-4 py-3 text-sm">1 año</td>
                    <td className="px-4 py-3 text-sm">Recordar preferencia de idioma</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_region</td>
                    <td className="px-4 py-3 text-sm">Propia</td>
                    <td className="px-4 py-3 text-sm">-</td>
                    <td className="px-4 py-3 text-sm">1 año</td>
                    <td className="px-4 py-3 text-sm">Recordar región del usuario</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Cookies de Análisis</h3>
            <p>
              Permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.
              La información recogida se utiliza en la medición de la actividad de nuestra página web y para la elaboración de
              perfiles de navegación de los usuarios con el fin de introducir mejoras en función del análisis de los datos de
              uso que hacen los usuarios del servicio.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                <thead className="bg-arje-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Gestión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Terceros</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_ga</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google Analytics</td>
                    <td className="px-4 py-3 text-sm">2 años</td>
                    <td className="px-4 py-3 text-sm">Análisis estadístico del uso de la web</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_ga_[ID]</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google Analytics</td>
                    <td className="px-4 py-3 text-sm">2 años</td>
                    <td className="px-4 py-3 text-sm">Identificador único de sesión</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_gid</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google Analytics</td>
                    <td className="px-4 py-3 text-sm">24 horas</td>
                    <td className="px-4 py-3 text-sm">Análisis estadístico del uso de la web</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm">
              <strong>Más información sobre Google Analytics:</strong>{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                https://policies.google.com/privacy
              </a>
            </p>

            <h3>Cookies Publicitarias</h3>
            <p>
              Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se han incluido en nuestra
              página web en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                <thead className="bg-arje-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Gestión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Terceros</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_ads_preferences</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google Ads</td>
                    <td className="px-4 py-3 text-sm">1 año</td>
                    <td className="px-4 py-3 text-sm">Gestión de preferencias publicitarias</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">fr</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Facebook</td>
                    <td className="px-4 py-3 text-sm">3 meses</td>
                    <td className="px-4 py-3 text-sm">Mostrar anuncios relevantes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Cookies de Publicidad Comportamental</h3>
            <p>
              Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se han incluido en nuestra
              página web. Gracias a ellas, podemos conocer los hábitos de navegación en internet y mostrar publicidad relacionada
              con su perfil de navegación.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
                <thead className="bg-arje-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Gestión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Terceros</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_fbp</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Facebook Pixel</td>
                    <td className="px-4 py-3 text-sm">3 meses</td>
                    <td className="px-4 py-3 text-sm">Seguimiento de conversiones y remarketing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_gcl_au</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google Ads</td>
                    <td className="px-4 py-3 text-sm">3 meses</td>
                    <td className="px-4 py-3 text-sm">Seguimiento de conversiones</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">IDE</td>
                    <td className="px-4 py-3 text-sm">Terceros</td>
                    <td className="px-4 py-3 text-sm">Google DoubleClick</td>
                    <td className="px-4 py-3 text-sm">1 año</td>
                    <td className="px-4 py-3 text-sm">Publicidad comportamental</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>CONSENTIMIENTO</h2>
            <p>
              Al acceder a nuestra web por primera vez, verá una ventana informativa indicando que las cookies pueden ser de
              varios tipos:
            </p>
            <ul>
              <li><strong>Cookies técnicas</strong> son necesarias para la navegación y el buen funcionamiento de nuestra página
                web. No requieren consentimiento explícito.</li>
              <li><strong>Cookies de personalización, análisis, publicitarias y de publicidad comportamental</strong> requieren su
                consentimiento, que podrá otorgar al pulsar el botón "ACEPTAR COOKIES".</li>
            </ul>
            <p>
              También puede configurar sus cookies pulsando el botón "CONFIGURACIÓN", donde podrá seleccionar qué tipos de cookies
              acepta.
            </p>
            <p>
              Si pulsa "RECHAZAR COOKIES", solo se utilizarán las cookies técnicas necesarias para el funcionamiento del sitio web.
            </p>
            <p>
              Puede cambiar su configuración de cookies en cualquier momento accediendo al pie de página de nuestra web, en el
              apartado "Política de Cookies".
            </p>

            <h2>BLOQUEAR O ELIMINAR COOKIES</h2>
            <p>
              Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las
              opciones del navegador instalado en su ordenador:
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Google Chrome:</strong>{' '}
                <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en Chrome
                </a>
              </li>
              <li>
                <strong>Mozilla Firefox:</strong>{' '}
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en Firefox
                </a>
              </li>
              <li>
                <strong>Internet Explorer:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en IE
                </a>
              </li>
              <li>
                <strong>Safari (macOS):</strong>{' '}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en Safari
                </a>
              </li>
              <li>
                <strong>Safari (iOS):</strong>{' '}
                <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en iOS
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Gestionar cookies en Edge
                </a>
              </li>
            </ul>

            <h2>CONSECUENCIAS DE DESHABILITAR LAS COOKIES</h2>
            <p>
              Si bloquea o no acepta las cookies de esta web, algunas funcionalidades pueden no estar disponibles o el sitio
              web puede no funcionar de forma óptima.
            </p>

            <h2>ACTUALIZACIÓN DE LA POLÍTICA DE COOKIES</h2>
            <p>
              ARJE PARTNERS SL puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias,
              o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección
              de Datos.
            </p>
            <p>
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará a los usuarios mediante un
              aviso informativo en la web.
            </p>

            <h2>MÁS INFORMACIÓN</h2>
            <p>
              Para cualquier duda sobre el uso de cookies en nuestro sitio web, puede dirigirse a{' '}
              <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">
                info@arjepartners.com
              </a>
            </p>
            <p>
              Para más información sobre la protección de datos, consulte nuestra{' '}
              <a href="/privacidad" className="text-arje-blue hover:underline">Política de Privacidad</a>.
            </p>

            <div className="mt-12 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Datos de contacto</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Responsable:</strong> ARJE PARTNERS SL</li>
                <li><strong>NIF:</strong> B84130590</li>
                <li><strong>Dirección:</strong> C/ MASTELERO. 12 BAJO, 28033, MADRID (MADRID)</li>
                <li><strong>Email:</strong> <a href="mailto:info@arjepartners.com" className="text-arje-blue hover:underline">info@arjepartners.com</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34915620800" className="text-arje-blue hover:underline">915620800</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
