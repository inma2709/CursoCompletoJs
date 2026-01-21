// src/pages/Intro.jsx
// Lección 1: Intro a JavaScript (onboarding) — sin teoría repetida con Tema 1 y Tema 2

export default function Intro() {
  return (
    <section className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">Lección 1 · Introducción</span>
        <h1 style={{ marginTop: ".55rem" }}>Bienvenida: empezamos JavaScript desde cero</h1>
        <p className="muted">
          Si ya vienes de <strong>HTML</strong> y <strong>CSS</strong>, JavaScript te aporta lo que faltaba:
          <strong> comportamiento</strong>, <strong>interacción</strong> y <strong>lógica</strong>.
          Hoy no venimos a memorizar: venimos a <strong>orientarnos</strong> y a empezar con buen pie.
        </p>
      </header>

      {/* =========================
          PRIMER CONTACTO
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> Primer contacto (vídeo)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          {/* VIDEO */}
          <article className="card" style={{ marginTop: "1rem" }}>
            <h2>Primer contacto (vídeo)</h2>
            <p className="muted">Te sirve para situarte. Luego, en el Tema 1, lo ponemos en práctica paso a paso.</p>

            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(34,48,69,.85)",
                background: "rgba(7,10,16,.65)",
                marginTop: ".8rem",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/riZbwRFMFuw?start=2"
                title="Aprendiendo JavaScript"
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </article>
        </div>
      </details>

      {/* =========================
          QUÉ ES JS (VERSIÓN BREVE)
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> ¿Qué es JavaScript? (en 30 segundos)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          {/* 1) QUÉ ES JS (VERSIÓN BREVE) */}
          <article className="card">
            <h2>¿Qué es JavaScript? (en 30 segundos)</h2>

            <div className="callout callout--summary" style={{ marginTop: ".8rem" }}>
              <p className="callout__title">Idea clave</p>
              <p className="muted">
                JavaScript es el lenguaje que hace que una web <strong>reaccione</strong>: escucha lo que hace el usuario
                (clics, teclado, formularios) y responde cambiando lo que ves.
              </p>
            </div>

            <table className="table" style={{ marginTop: ".9rem" }}>
              <thead>
                <tr>
                  <th>Parte</th>
                  <th>¿Qué hace?</th>
                  <th>Ejemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>HTML</strong>
                  </td>
                  <td>Estructura</td>
                  <td>Títulos, párrafos, botones</td>
                </tr>
                <tr>
                  <td>
                    <strong>CSS</strong>
                  </td>
                  <td>Estilo</td>
                  <td>Colores, tipografías, layout</td>
                </tr>
                <tr>
                  <td>
                    <strong>JavaScript</strong>
                  </td>
                  <td>Comportamiento</td>
                  <td>Validaciones, menús, interacción</td>
                </tr>
              </tbody>
            </table>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">Lo importante hoy</p>
              <p className="muted">
                En este manual no vas a “aprender por memoria”. Vas a aprender a <strong>probar</strong>,{" "}
                <strong>observar</strong> y <strong>corregir</strong>.
              </p>
            </div>
          </article>
        </div>
      </details>

      {/* =========================
          PREPARACIÓN: CARPETAS Y ARCHIVOS
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> 0) Preparación: carpetas y archivos (orden desde el día 1)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <div className="grid" style={{ marginTop: "1rem" }}>
            {/* 0) CARPETAS Y ARCHIVOS */}
            <article className="card">
              <h2>0) Preparación: carpetas y archivos (orden desde el día 1)</h2>

              <p className="muted">
                Antes de programar, necesitamos una idea clave: <strong>un proyecto ordenado te ahorra errores</strong>.
                En este curso trabajaremos creando carpetas y archivos con nombres claros y consistentes.
              </p>

              <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Reglas de nombres (muy importantes)</p>
                <ul>
                  <li>
                    Usa <strong>minúsculas</strong> y <strong>sin espacios</strong>.
                  </li>
                  <li>
                    Evita tildes y caracteres raros: mejor <span className="inline-code">introduccion</span> que{" "}
                    <span className="inline-code">introducción</span>.
                  </li>
                  <li>
                    Para carpetas y archivos, usa <strong>kebab-case</strong>:{" "}
                    <span className="inline-code">mi-primer-proyecto</span>,{" "}
                    <span className="inline-code">ejercicios-operadores</span>.
                  </li>
                  <li>
                    Mantén nombres <strong>descriptivos</strong>:{" "}
                    <span className="inline-code">operadores.html</span> es mejor que{" "}
                    <span className="inline-code">prueba2.html</span>.
                  </li>
                </ul>
              </div>

              <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">📁 Estructura recomendada (JavaScript básico con HTML)</p>
                <pre>
                  <code>{`mi-curso-js/
  01-intro/
    index.html
    app.js
    style.css
  02-variables/
    variables.html
    variables.js
  03-operadores/
    operadores.html
    operadores.js`}</code>
                </pre>
                <p className="muted small">
                  Ojo: aquí separas el JavaScript en un archivo <span className="inline-code">.js</span>. Es más limpio
                  que escribir todo dentro de <span className="inline-code">&lt;script&gt;</span>.
                </p>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Mini-ejercicio (para empezar bien)</p>
                <ol>
                  <li>
                    Crea una carpeta llamada <span className="inline-code">01-intro</span>.
                  </li>
                  <li>
                    Dentro crea <span className="inline-code">index.html</span> y{" "}
                    <span className="inline-code">app.js</span>.
                  </li>
                  <li>
                    Enlaza el JS desde el HTML con{" "}
                    <span className="inline-code">{`<script src="app.js"></script>`}</span> (al final del{" "}
                    <span className="inline-code">&lt;body&gt;</span>).
                  </li>
                </ol>
              </div>

              <p className="muted" style={{ marginTop: ".9rem" }}>
                <strong>Pregunta de repaso:</strong> ¿Por qué evitamos espacios, tildes y nombres tipo “prueba1”?
              </p>
            </article>
          </div>
        </div>
      </details>

      {/* =========================
          QUÉ ES JS: ANALOGÍA
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> ¿Qué es JavaScript? La analogía de la casa
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <div className="grid" style={{ marginTop: "1rem" }}>
            {/* 1) QUÉ ES JS: ANALOGÍA */}
            <article className="card">
              <h2>1) ¿Qué es JavaScript? La analogía de la casa</h2>
              <p>Imagina que tu web es una casa:</p>

              <ul>
                <li>
                  <strong>HTML</strong> es el <strong>esqueleto</strong>: paredes, techo, puertas. En la web, HTML crea
                  elementos (títulos, párrafos, botones…).
                </li>
                <li>
                  <strong>CSS</strong> es la <strong>decoración</strong>: colores, estilos, distribución. Hace que la
                  casa sea bonita y cómoda.
                </li>
                <li>
                  <strong>JavaScript</strong> es la <strong>magia y movimiento</strong>: luces que se encienden, timbre,
                  persianas automáticas. Hace que la página <strong>reaccione</strong> y cobre vida.
                </li>
              </ul>

              <p className="muted">
                En otras palabras: JavaScript es el lenguaje que permite que tu web “escuche” lo que hace el usuario
                (clic, teclado, scroll, formulario) y responda con cambios en la interfaz, validaciones, animaciones o
                peticiones a internet. Sin JavaScript, la web sería como una casa sin electricidad.
              </p>

              <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">💡 En términos sencillos</p>
                <p className="muted">
                  Todo lo que va más allá de “leer una página” (botones que cambian cosas, menús desplegables,
                  formularios que te avisan, contenido que aparece sin recargar) es JavaScript trabajando.
                </p>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio rápido</p>
                <p className="muted">Enumera 3 cosas que podrías hacer interactivas con JavaScript.</p>
                <ul>
                  <li>Mostrar un mensaje personalizado al hacer clic.</li>
                  <li>Cambiar el color de fondo según la hora del día.</li>
                  <li>Validar un email antes de enviar un formulario.</li>
                </ul>
              </div>

              <p className="muted" style={{ marginTop: ".9rem" }}>
                <strong>Pregunta de repaso:</strong> ¿Para qué sirve JavaScript en una página web?
              </p>
            </article>
          </div>
        </div>
      </details>

      {/* =========================
          HISTORIA (TODO JUNTO)
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> Historia y evolución: del navegador a ECMAScript
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          {/* JS EN NAVEGADOR Y EN SERVIDOR */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">+</span> JavaScript: del navegador al servidor
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              {/* INTRO FUNDACIONAL */}
              <p className="muted">
                JavaScript nació como <strong>el lenguaje del navegador</strong>. Apareció a mediados de los años 90 de
                la mano de <strong>Netscape</strong>, una de las empresas pioneras de la web. En aquel momento, las
                páginas eran casi completamente <strong>estáticas</strong>: el usuario solo podía leer información y
                hacer clic en enlaces.
              </p>

              <p className="muted">
                Netscape necesitaba una forma de añadir <strong>interacción</strong> a la web: botones que reaccionaran,
                formularios que validaran datos y páginas que cambiaran sin recargarse. Para resolver este problema, se
                creó un lenguaje ligero que pudiera ejecutarse directamente en el navegador del usuario.
              </p>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Así nació JavaScript</p>
                <p className="muted">
                  Un lenguaje diseñado para <strong>dar vida a las páginas web</strong>, ejecutándose en el navegador y
                  convirtiéndose con el tiempo en el <strong>lenguaje nativo de la web</strong>.
                </p>
              </div>

              {/* TARJETAS: NAVEGADOR vs SERVIDOR */}
              <div className="grid grid-2" style={{ marginTop: "1rem" }}>
                <div className="card">
                  <h3>JavaScript en el navegador</h3>
                  <p className="muted">
                    Es el uso original de JavaScript y el punto de partida en este curso. El código se ejecuta en el{" "}
                    <strong>navegador del usuario</strong>.
                  </p>

                  <ul className="muted">
                    <li>
                      Puede acceder al <strong>DOM</strong> (<code>document</code>).
                    </li>
                    <li>Responde a eventos del usuario (clics, teclado, formularios).</li>
                    <li>Cambia el contenido de la página sin recargar.</li>
                  </ul>

                  <pre style={{ marginTop: ".6rem" }}>
                    <code>{`// JavaScript en el navegador
document.getElementById("msg").textContent =
  "Hola desde el navegador";`}</code>
                  </pre>
                </div>

                <div className="card">
                  <h3>JavaScript fuera del navegador (Node.js)</h3>
                  <p className="muted">
                    Con <strong>Node.js</strong>, JavaScript puede ejecutarse en el<strong> servidor</strong> o en el
                    ordenador, sin HTML ni navegador.
                  </p>

                  <ul className="muted">
                    <li>
                      Se ejecuta desde el <strong>terminal</strong>.
                    </li>
                    <li>
                      No existe <code>document</code> ni DOM.
                    </li>
                    <li>Permite crear servidores, APIs y trabajar con datos.</li>
                  </ul>

                  <pre style={{ marginTop: ".6rem" }}>
                    <code>{`// JavaScript con Node.js
console.log("Hola desde el servidor");`}</code>
                  </pre>
                </div>
              </div>

              {/* TABLA COMPARATIVA */}
              <div className="card" style={{ marginTop: "1rem" }}>
                <h3>JavaScript según el entorno</h3>

                <table className="table">
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>Navegador</th>
                      <th>Node.js (servidor)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>¿Dónde se ejecuta?</td>
                      <td>En el navegador del usuario</td>
                      <td>En el servidor / ordenador</td>
                    </tr>
                    <tr>
                      <td>Acceso al DOM</td>
                      <td>
                        Sí (<code>document</code>)
                      </td>
                      <td>No existe</td>
                    </tr>
                    <tr>
                      <td>
                        Salida de <code>console.log</code>
                      </td>
                      <td>Consola del navegador (F12)</td>
                      <td>Terminal</td>
                    </tr>
                    <tr>
                      <td>Uso principal</td>
                      <td>Interfaz e interacción</td>
                      <td>Lógica, servidores, APIs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* IDEA CLAVE */}
              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">La idea clave para empezar</p>
                <ul>
                  <li>
                    <strong>El lenguaje es el mismo</strong>: JavaScript.
                  </li>
                  <li>
                    <strong>El entorno cambia</strong>: navegador o servidor.
                  </li>
                  <li>Lo que JavaScript puede hacer depende de dónde se ejecute.</li>
                </ul>
              </div>

              {/* AVISO PEDAGÓGICO */}
              <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Importante para este curso</p>
                <p className="muted">
                  Empezaremos trabajando con JavaScript en el <strong>navegador</strong>. Más adelante, cuando estudies{" "}
                  <strong>Node.js</strong>, usarás el mismo lenguaje para crear servidores y aplicaciones completas.
                </p>
              </div>

              <p className="muted" style={{ marginTop: ".9rem" }}>
                <strong>Pregunta de repaso:</strong> ¿Por qué decimos que JavaScript es el mismo lenguaje pero no hace lo
                mismo en el navegador que en Node.js?
              </p>
            </div>
          </details>

          {/* 3) HISTORIA Y ECMASCRIPT */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">+</span> 3) Un poco de historia: JavaScript y ECMAScript
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <article className="card">
                <h2>3) Un poco de historia: JavaScript y ECMAScript</h2>

                <p className="muted">
                  “JavaScript” es el lenguaje que usamos. “<strong>ECMAScript</strong>” (ES) es el{" "}
                  <strong>estándar</strong>{" "}
                  que define cómo debe comportarse el lenguaje.
                </p>

                <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
                  <p className="callout__title">📌 ES6 no es lo último</p>
                  <p className="muted">
                    ES6 (ES2015) fue un gran salto, pero desde entonces el estándar se actualiza casi cada año. Por eso
                    verás mucho “ES6+”: significa “ES2015 y todo lo que vino después”.
                  </p>
                </div>

                <details className="topic-details" style={{ marginTop: ".9rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">+</span> ¿Qué trajo ES6 (lo imprescindible)?
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <ul>
                      <li>
                        <span className="inline-code">let</span> / <span className="inline-code">const</span> (mejor que{" "}
                        <span className="inline-code">var</span>)
                      </li>
                      <li>
                        Arrow functions: <span className="inline-code">() =&gt; {"{}"}</span>
                      </li>
                      <li>
                        Template literals: <span className="inline-code">{'`Hola ${nombre}`'}</span>
                      </li>
                      <li>Clases, módulos y Promises</li>
                    </ul>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">+</span> Novedades modernas que usarás muchísimo (post ES6)
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <ul>
                      <li>
                        <strong>async/await</strong> (ES2017): asincronía clara y legible.
                      </li>
                      <li>
                        <strong>optional chaining</strong> <span className="inline-code">?.</span> y{" "}
                        <strong>nullish coalescing</strong> <span className="inline-code">??</span> (ES2020).
                      </li>
                      <li>
                        Métodos modernos de arrays/strings (por ejemplo, <span className="inline-code">includes</span>,{" "}
                        <span className="inline-code">replaceAll</span>, <span className="inline-code">at</span>).
                      </li>
                    </ul>
                  </div>
                </details>
              </article>
            </div>
          </details>
        </div>
      </details>

      {/* =========================
          CIERRE
      ========================= */}
      <details className="topic-details" style={{ marginTop: ".75rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> Cierre de la lección
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <div className="callout callout--summary" style={{ marginTop: "1rem" }}>
            <p className="callout__title">Cierre de la lección</p>
            <ul>
              <li>HTML define la estructura, CSS el estilo, JavaScript el comportamiento.</li>
              <li>ES6 fue un salto enorme, pero hoy trabajamos con “ES6+” (lo moderno).</li>
              <li>Proyecto ordenado: nombres claros, sin espacios ni tildes, y carpetas por temas.</li>
              <li>La clave para aprender: practicar, observar, equivocarte y corregir.</li>
            </ul>
          </div>
        </div>
      </details>
    </section>
  );
}
