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

            <h2>1. ¿Qué Son las Cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web.
              Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre
              los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que
              contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
            <p>
              Las cookies son esenciales para el funcionamiento de internet, aportando innumerables ventajas
              en la prestación de servicios interactivos, facilitándole la navegación y usabilidad de nuestra
              web.
            </p>

            <h2>2. Tipos de Cookies</h2>

            <h3>Según la entidad que las gestione:</h3>
            <ul>
              <li><strong>Cookies propias:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor</li>
              <li><strong>Cookies de terceros:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor</li>
            </ul>

            <h3>Según el plazo de tiempo que permanecen activadas:</h3>
            <ul>
              <li><strong>Cookies de sesión:</strong> Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web</li>
              <li><strong>Cookies persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos durante un período definido</li>
            </ul>

            <h3>Según su finalidad:</h3>
            <ul>
              <li><strong>Cookies técnicas:</strong> Permiten al usuario la navegación a través de la página web y la utilización de diferentes opciones o servicios</li>
              <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características predefinidas</li>
              <li><strong>Cookies de análisis:</strong> Permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web</li>
              <li><strong>Cookies publicitarias:</strong> Permiten la gestión de los espacios publicitarios en base a criterios como el contenido o la frecuencia</li>
            </ul>

            <h2>3. Cookies Utilizadas en Este Sitio Web</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Cookie</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Tipo</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Duración</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-3 text-sm">_ga</td>
                    <td className="px-4 py-3 text-sm">Terceros (Google Analytics)</td>
                    <td className="px-4 py-3 text-sm">2 años</td>
                    <td className="px-4 py-3 text-sm">Análisis de uso de la web</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">_ga_XXXXXXXXXX</td>
                    <td className="px-4 py-3 text-sm">Terceros (Google Analytics)</td>
                    <td className="px-4 py-3 text-sm">2 años</td>
                    <td className="px-4 py-3 text-sm">Análisis de uso de la web</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">theme</td>
                    <td className="px-4 py-3 text-sm">Propia</td>
                    <td className="px-4 py-3 text-sm">Persistente</td>
                    <td className="px-4 py-3 text-sm">Recordar preferencia de modo oscuro/claro</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. Google Analytics</h2>
            <p>
              Este sitio web utiliza Google Analytics, un servicio de análisis web prestado por Google, Inc.,
              una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View
              (California), CA 94043, Estados Unidos ("Google").
            </p>
            <p>
              Google Analytics utiliza "cookies" para ayudar al website a analizar el uso que hacen los
              usuarios del sitio web. La información que genera la cookie acerca de su uso del website
              (incluyendo su dirección IP) será directamente transmitida y archivada por Google en los
              servidores de Estados Unidos.
            </p>
            <p>
              Puede encontrar más información sobre las cookies de Google Analytics en:{' '}
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arje-blue hover:underline"
              >
                https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
              </a>
            </p>

            <h2>5. Cómo Gestionar las Cookies</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración
              de las opciones del navegador instalado en su ordenador:
            </p>
            <ul>
              <li>
                <strong>Chrome:</strong>{' '}
                <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Configuración → Privacidad y seguridad → Cookies
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{' '}
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Opciones → Privacidad y seguridad → Cookies
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{' '}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Preferencias → Privacidad → Cookies
                </a>
              </li>
              <li>
                <strong>Edge:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-arje-blue hover:underline">
                  Configuración → Privacidad → Cookies
                </a>
              </li>
            </ul>

            <h2>6. Desactivación de Google Analytics</h2>
            <p>
              Si desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, de forma
              que no se envíe información suya a Google Analytics, puede descargar un complemento que realiza
              esta función desde este enlace:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arje-blue hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>

            <h2>7. Actualización de la Política de Cookies</h2>
            <p>
              Arjé Partners S.L. puede modificar esta Política de Cookies en función de exigencias legislativas,
              reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por
              la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten
              periódicamente.
            </p>

            <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-500 mb-2">
                Importante
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                La desactivación de cookies puede afectar al correcto funcionamiento de algunas secciones
                de la web. Al continuar navegando por este sitio web sin deshabilitar las cookies en su
                navegador, está consintiendo la instalación de las mismas.
              </p>
            </div>

            <div className="mt-8 p-6 bg-arje-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-arje-gray-600 dark:text-gray-400">
                <strong>Contacto:</strong> Si tiene dudas sobre esta Política de Cookies, puede contactar
                con nosotros en{' '}
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
