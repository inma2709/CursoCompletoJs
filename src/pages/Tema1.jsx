// src/pages/Tema1.jsx
export default function Tema1() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M1</span>
          <h1>Primer contacto con JavaScript</h1>
          <p className="muted">
            Cómo se enlaza JS, cómo usar la consola y cómo escribir tu primer script sin miedo.
          </p>
        </div>
      </header>

      {/* =========================
          ACORDEÓN PRINCIPAL (DETAILS)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Contenido del tema</h2>
          <span className="topic-section__meta">tema1</span>
        </div>

        <div className="topic-accordion">
          {/* 1) OBJETIVO */}
          <details className="topic-details" >
            <summary>
              <span className="summary-left">
                <span className="badge">1</span> Qué vas a aprender aquí
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p>
                A partir de este módulo <strong>empezamos a programar</strong>. No buscamos memorizar, buscamos
                entender <strong>cómo se trabaja</strong> con JavaScript.
              </p>
              <ul>
                <li>Conectar JavaScript a una página (inline y archivo externo).</li>
                <li>Abrir y usar la consola para probar y detectar errores.</li>
                <li>
                  Escribir tu primer script con <code>console.log</code>.
                </li>
              </ul>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Regla de oro</p>
                <p className="muted">
                  Todo programador se equivoca. La diferencia es aprender a leer y a entender los errores.
                </p>
              </div>
            </div>
          </details>

      {/* 2) ENLAZAR JS (SUBDETAILS) */}
<details className="topic-details" style={{ marginTop: ".75rem" }}>
  <summary>
    <span className="summary-left">
      <span className="badge">2</span> Cómo enlazar JavaScript
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p className="muted">
      JavaScript puede “estar” en una página de varias formas. En este curso nos interesa
      entender cuáles existen y cuál es la correcta para proyectos reales.
    </p>

    <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
      <p className="callout__title">¿Se puede poner JS dentro de una etiqueta HTML?</p>
      <p className="muted">
        Sí. Por ejemplo, con atributos de evento como <code>onclick</code>:
      </p>
      <pre>
        <code>{`<button onclick="alert('Hola')">Click</button>`}</code>
      </pre>
      <p className="muted small">
        Funciona, pero en proyectos reales se evita porque mezcla HTML y JavaScript.
        Lo correcto es añadir eventos desde JS con <code>addEventListener</code>.
      </p>
    </div>

    <p style={{ marginTop: ".9rem" }}>Para ejecutar JavaScript en una web, usaremos sobre todo:</p>
    <ul>
      <li>
        <strong>Dentro del HTML</strong> con <code>&lt;script&gt;</code> (útil para ejemplos y pruebas).
      </li>
      <li>
        <strong>Archivo externo</strong> con <code>src</code> (lo recomendado en proyectos reales).
      </li>
    </ul>

    <div className="topic-accordion" style={{ marginTop: ".8rem" }}>
      {/* ARCHIVO EXTERNO (HEAD + DEFER) */}
      <details className="topic-details" >
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> Archivo externo en el &lt;head&gt; con <code>defer</code> (recomendado)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p className="muted">
            Esta es la forma moderna. El navegador puede descargar el JS mientras lee el HTML,
            pero lo ejecuta cuando el DOM ya está listo.
          </p>

          <pre>
            <code>{`<!-- index.html -->
<head>
  ...
  <script defer src="app.js"></script>
</head>`}</code>
          </pre>

          <pre>
            <code>{`// app.js
console.log("JS cargado con defer");`}</code>
          </pre>

          <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">Ventajas de defer</p>
            <ul>
              <li>No bloquea la carga del HTML.</li>
              <li>Evita errores de “no encuentro el elemento” (porque el DOM ya existe).</li>
              <li>Ordena tu proyecto (scripts siempre en head).</li>
              <li>Si hay varios scripts con defer, se ejecutan en orden.</li>
            </ul>
          </div>

          <p className="muted small" style={{ marginTop: ".6rem" }}>
            Regla simple: si el script va en <code>&lt;head&gt;</code>, usa <code>defer</code>.
          </p>
        </div>
      </details>

      {/* ARCHIVO EXTERNO (FINAL DEL BODY) */}
      <details className="topic-details" style={{ marginTop: ".8rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> Archivo externo al final del &lt;body&gt; (clásico, también válido)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p className="muted">
            Esta es la forma clásica. Pones el <code>&lt;script&gt;</code> al final del <code>&lt;body&gt;</code>
            para asegurarte de que el HTML ya se ha cargado antes de ejecutar el JS.
          </p>

          <pre>
            <code>{`<!-- index.html -->
<body>
  ...
  <script src="app.js"></script>
</body>`}</code>
          </pre>

          <pre>
            <code>{`// app.js
console.log("JS cargado al final del body");`}</code>
          </pre>

          <p className="muted small">
            Funciona muy bien en ejercicios y páginas sencillas. En proyectos grandes se prefiere
            <code>defer</code> porque organiza mejor el código.
          </p>
        </div>
      </details>

      {/* JS DENTRO DEL HTML (INLINE SCRIPT) */}
      <details className="topic-details" style={{ marginTop: ".8rem" }}>
        <summary>
          <span className="summary-left">
            <span className="badge">+</span> JavaScript dentro del propio HTML (dónde ponerlo y por qué)
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p className="muted">
            Si escribes JavaScript dentro del HTML, lo más seguro  es colocarlo
            <strong> al final del body</strong>, justo antes de <code>&lt;/body&gt;</code>.
            Así te aseguras de que los elementos ya existen cuando los buscas con{" "}
            <code>document.getElementById</code>.
          </p>

          <pre>
            <code>{`<!doctype html>
<html lang="es">
  <body>
    <button id="btn">Click</button>

    <script>
      document.getElementById("btn").addEventListener("click", () => {
        console.log("¡Funciona!");
      });
    </script>
  </body>
</html>`}</code>
          </pre>
        </div>
      </details>
    </div>

    <p className="muted" style={{ marginTop: ".9rem" }}>
      <strong>Pregunta de repaso:</strong> Si pongo el script en el <code>&lt;head&gt;</code>, ¿qué atributo debería usar y por qué?
    </p>
  </div>
</details>

       {/* 3) CONSOLA */}
<details className="topic-details" style={{ marginTop: ".75rem" }}>
  <summary>
    <span className="summary-left">
      <span className="badge">3</span> La consola: tu herramienta nº1 (F12)
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p className="muted">
      <strong>Idea clave:</strong> <code>console.log()</code> escribe en la consola del{" "}
      <strong>entorno donde se ejecuta JavaScript</strong>. En este curso, muchas veces el
      entorno será el <strong>navegador</strong> (porque tu JS está en un HTML). Más adelante,
      también verás JS ejecutándose en <strong>Node.js</strong> (terminal).
    </p>

    <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
      <p className="callout__title">¿Dónde se ejecuta JavaScript?</p>
      <ul>
        <li>
          ✅ Si tu código está en un <strong>HTML</strong> (dentro de <code>&lt;script&gt;</code> o con un{" "}
          <code>src</code>): lo ejecuta el <strong>navegador</strong>.
        </li>
        <li>
          ✅ Si ejecutas un archivo <strong>.js</strong> con <code>node</code>: lo ejecuta{" "}
          <strong>Node.js</strong> y lo verás en el <strong>terminal</strong>.
        </li>
      </ul>
    </div>

    <div className="grid grid-2" style={{ marginTop: ".9rem" }}>
      {/* CONSOLA DEL NAVEGADOR */}
      <div className="callout callout--example">
        <p className="callout__title">Ver logs en el navegador (DevTools)</p>
        <p className="muted small">
          Abre tu página en Chrome/Edge y sigue estos pasos:
        </p>
        <ol className="muted small" style={{ marginTop: ".4rem" }}>
          <li>
            Pulsa <strong>F12</strong> (o <strong>Ctrl + Shift + I</strong>).
          </li>
          <li>
            En el panel que se abre, entra en la pestaña <strong>Console</strong> /{" "}
            <strong>Consola</strong>.
          </li>
          <li>
            Recarga la página (<strong>F5</strong>) si quieres ver los logs desde el inicio.
          </li>
        </ol>

        <pre style={{ marginTop: ".65rem" }}>
          <code>{`// En un HTML
<script>
  console.log("Hola desde el navegador");
</script>`}</code>
        </pre>

        <p className="muted small">
          Importante: esto <strong>no</strong> sale en la página, sale en la pestaña{" "}
          <strong>Consola</strong> del navegador.
        </p>
      </div>

      {/* TERMINAL DE VS CODE (NODE) */}
      <div className="callout callout--concept">
        <p className="callout__title">Ver logs en el terminal (VS Code + Node)</p>
        <p className="muted small">
          Para que un <code>console.log</code> aparezca en el terminal, necesitas ejecutar JS con{" "}
          <strong>Node.js</strong> (no dentro de un HTML).
        </p>

        <p className="muted small" style={{ marginTop: ".5rem" }}>
          Pasos:
        </p>
        <ol className="muted small" style={{ marginTop: ".4rem" }}>
          <li>
            Crea un archivo llamado <code>prueba.js</code>
          </li>
          <li>
            Escribe dentro un <code>console.log</code>
          </li>
          <li>
            Abre el terminal en VS Code y ejecuta: <code>node prueba.js</code>
          </li>
        </ol>

        <pre style={{ marginTop: ".65rem" }}>
          <code>{`// prueba.js
console.log("Hola desde Node (terminal)");`}</code>
        </pre>

        <pre style={{ marginTop: ".65rem" }}>
          <code>{`# Terminal (VS Code)
node prueba.js`}</code>
        </pre>

        <p className="muted small">
          Si estás trabajando con <strong>Live Server</strong>, el JS del HTML lo ejecuta el{" "}
          navegador, por eso no aparece en el terminal.
        </p>
      </div>
    </div>

    <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
      <p className="callout__title">Regla de oro</p>
      <ul>
        <li>
          Si tu JS está en un HTML → <strong>mira la consola del navegador</strong>.
        </li>
        <li>
          Si ejecutas con Node (<code>node archivo.js</code>) → <strong>mira el terminal</strong>.
        </li>
      </ul>
    </div>

    <div className="grid grid-2" style={{ marginTop: ".9rem" }}>
      <div className="callout callout--concept">
        <p className="callout__title">Mensajes</p>
        <pre>
          <code>{`console.log("Hola");
console.warn("Aviso");
console.error("Error");`}</code>
        </pre>
      </div>

      <div className="callout callout--example">
        <p className="callout__title">Tablas (muy útil)</p>
        <pre>
          <code>{`console.table([
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
]);`}</code>
        </pre>
      </div>
    </div>

    <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
      <p className="callout__title">🛠️ Ejercicio</p>
      <ol className="muted">
        <li>
          En un HTML, escribe un <code>console.log("Hola navegador")</code>, abre la consola con{" "}
          <strong>F12</strong> y comprueba que aparece.
        </li>
        <li>
          Crea un archivo <code>prueba.js</code> con <code>console.log("Hola terminal")</code> y ejecútalo con{" "}
          <code>node prueba.js</code>.
        </li>
      </ol>
      <p className="muted small" style={{ marginTop: ".6rem" }}>
        Consejo: si no te sale nada en un sitio, probablemente estás mirando en el lugar equivocado 😉
      </p>
    </div>
  </div>
</details>


          {/* 4) PRIMER SCRIPT (SUBDETAILS) */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">4</span> Tu primer script 
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p>
                Vamos a lo mínimo: guardar un dato y mostrarlo. No intentes entenderlo todo aún. Solo queremos que veas
                que <strong>puedes hacerlo</strong>. ¿Dónde vamos a ver este mensaje? 
              </p>

              <pre>
                <code>{`const nombre = "Inma";
console.log("Bienvenida, " + nombre);`}</code>
              </pre>

              <div className="topic-accordion" style={{ marginTop: ".8rem" }}>
                <details className="topic-details">
                  <summary>
                    <span className="summary-left">
                      <span className="badge">+</span> Versión moderna (template strings)
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <pre>
                      <code>{`const nombre = "Inma";
console.log(\`Bienvenida, \${nombre}\`);`}</code>
                    </pre>
                  </div>
                </details>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio</p>
                <p className="muted">
                  Crea dos constantes: <code>nombre</code> y <code>ciudad</code>. <br />
                  Muestra en consola: “Hola, soy X y vivo en Y”.
                </p>
              </div>
            </div>
          </details>

          {/* 5) ERRORES */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">5</span> Errores típicos (y cómo no frustrarte)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p>
                Si vienes de HTML/CSS, aquí empieza lo normal: equivocarte. Estos son los errores más comunes al
                empezar:
              </p>

              <div className="grid" style={{ gap: ".8rem", marginTop: ".9rem" }}>
                <div className="callout callout--warning">
                  <p className="callout__title">1) Olvidar comillas</p>
                  <pre>
                    <code>{`console.log(Hola); // ❌ Hola no está entre comillas`}</code>
                  </pre>
                  <p className="muted">
                    Solución: <code>"Hola"</code> o <code>'Hola'</code>.
                  </p>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">2) Confundir mayúsculas/minúsculas</p>
                  <pre>
                    <code>{`console.Log("Hola"); // ❌ Log con L mayúscula no existe`}</code>
                  </pre>
                  <p className="muted">JS es sensible a mayúsculas.</p>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">3) Mensajes rojos ≠ “soy malo”</p>
                  <p className="muted">
                    Rojo significa: “hay un error y te digo dónde”. <br />
                    Aprender JS es aprender a leer esos mensajes.
                  </p>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">4) Copiar/pegar sin entender</p>
                  <p className="muted">
                    Copiar ayuda, pero siempre intenta cambiar algo (un texto, un número, un nombre). Si lo modificas y
                    no se rompe, estás aprendiendo.
                  </p>
                </div>
              </div>
            </div>
          </details>

          {/* 6) VÍDEOS (SUBDETAILS) */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">6</span> 🎥 Vídeos recomendados
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">Explicaciones guiadas para reforzar lo visto en este módulo</p>

              <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".9rem" }}>
                <article className="card">
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: ".8rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/c1IHTKDIbI0?start=1"
                      title="Introducción a JavaScript desde cero"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <p className="small">
                      <strong>Introducción a JavaScript (desde cero)</strong>
                    </p>
                    <p className="muted small">Qué es JavaScript, cómo se ejecuta y por qué es esencial en la web.</p>
                  </div>
                </article>

                <article className="card">
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: ".8rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/BUmR1bUnUpQ?start=1"
                      title="Curso de Kiko Palomares - JavaScript para principiantes"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <p className="small">
                      <strong>Curso de Kiko Palomares - JavaScript para principiantes (playlist)</strong>
                    </p>
                    <p className="muted small">Nombres de variables, llaves, punto y coma y uso de la consola.</p>
                  </div>
                </article>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: "1rem" }}>
                <p className="callout__title">🛠️ Mini tarea con los vídeos</p>
                <p className="muted">Elige 1 vídeo, apunta 3 ideas clave y una duda. La resolvemos en clase.</p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </article>
  );
}
