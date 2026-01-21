// src/pages/Tema2.jsx
export default function Tema2() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M2</span>
          <h1>Características y sintaxis</h1>
          <p className="muted">
            Qué hace especial a JavaScript y cómo escribir código sin frustrarte: reglas, estilo y errores típicos.
          </p>
        </div>
      </header>

      {/* =========================
          ACORDEÓN PRINCIPAL (DETAILS)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Contenido del tema</h2>
          <span className="topic-section__meta">tema2</span>
        </div>

        <div className="topic-accordion">
          {/* 1) ¿POR QUÉ APRENDER JS? */}
          <details className="topic-details">
            <summary>
              <span className="summary-left">
                <span className="badge">1</span> ¿Por qué aprender JavaScript?
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p>
                JavaScript se usa junto con <strong>HTML</strong> y <strong>CSS</strong> para que la web sea{" "}
                <strong>dinámica</strong>: botones que responden, menús que se despliegan, formularios que validan,
                contenido que aparece sin recargar…
              </p>

              <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Una idea muy simple</p>
                <p className="muted">HTML “pone cosas”, CSS “las pinta”, y JavaScript “las hace reaccionar”.</p>
              </div>

              <h3 style={{ marginTop: "1rem" }}>🎯 ¿Por qué es tan importante?</h3>
              <p className="muted">
                Imagina una tienda: HTML es el edificio, CSS es el escaparate… y JavaScript es el personal que atiende,
                pregunta, calcula, responde y gestiona acciones.
              </p>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio de observación</p>
                <p className="muted">
                  Entra en una web que uses (YouTube, Instagram, Amazon…) y apunta 5 cosas que “pasan sin recargar la
                  página”.
                </p>
                <p className="muted small">
                  Pista: menús desplegables, filtros, “me gusta”, notificaciones, cargas de contenido…
                </p>
              </div>

              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <strong>Pregunta de repaso:</strong> ¿Qué aporta JavaScript que no aportan HTML y CSS?
                </li>
              </ul>
            </div>
          </details>

          {/* 2) VENTAJAS Y CONSIDERACIONES */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">2</span> Ventajas y consideraciones
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <h3>Ventajas clave</h3>
              <ul>
                <li>
                  <strong>Esencial en la web:</strong> todos los navegadores lo soportan.
                </li>
                <li>
                  <strong>Versátil:</strong> sirve para frontend y también backend (Node.js).
                </li>
                <li>
                  <strong>Aprendizaje progresivo:</strong> empiezas con lo básico y vas subiendo nivel.
                </li>
                <li>
                  <strong>Interactividad:</strong> puede manipular el DOM y responder a eventos.
                </li>
                <li>
                  <strong>Asincronía:</strong> Promises y <span className="inline-code">async/await</span> para red y
                  tareas.
                </li>
                <li>
                  <strong>Comunidad enorme:</strong> recursos, librerías, frameworks.
                </li>
              </ul>

              <div className="hr" style={{ margin: "1rem 0" }} />

              <h3>Consideraciones a tener en cuenta</h3>
              <ul>
                <li>
                  <strong>Rendimiento:</strong> no es la mejor opción para cálculos muy pesados.
                </li>
                <li>
                  <strong>Seguridad:</strong> en navegador hay que escribir con buenas prácticas.
                </li>
                <li>
                  <strong>Tipado dinámico:</strong> una variable puede cambiar de tipo → disciplina.
                </li>
                <li>
                  <strong>Flexibilidad:</strong> es potente, pero exige orden (nombres, estructura, consistencia).
                </li>
              </ul>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">Mensaje del profe</p>
                <p className="muted">
                  JavaScript te da libertad. Para que esa libertad no se convierta en caos, vamos a trabajar con reglas
                  claras de sintaxis y estilo.
                </p>
              </div>
            </div>
          </details>

          {/* 3) ¿COMPILADO O INTERPRETADO? */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">3</span> ¿JavaScript es compilado o interpretado?
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">
                Traducir un programa puede hacerse de dos maneras: <strong>compilar</strong> (crear un ejecutable
                antes) o <strong>interpretar</strong> (ejecutar “al vuelo”, instrucción a instrucción).
              </p>

              <div className="grid grid-2" style={{ marginTop: ".9rem" }}>
                <div className="callout callout--concept">
                  <p className="callout__title">Compilado (idea)</p>
                  <ul>
                    <li>Genera un ejecutable antes de ejecutar.</li>
                    <li>Va rápido al ejecutar.</li>
                    <li>Si cambias algo, recompilas.</li>
                  </ul>
                </div>

                <div className="callout callout--concept">
                  <p className="callout__title">Interpretado (idea)</p>
                  <ul>
                    <li>Se ejecuta “al momento”.</li>
                    <li>Ideal para aprender (feedback inmediato).</li>
                    <li>Puede ser más lento que un compilado puro.</li>
                  </ul>
                </div>
              </div>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">JavaScript en la práctica (respuesta corta)</p>
                <p className="muted">
                  Tradicionalmente se considera <strong>interpretado</strong>, pero hoy los motores modernos
                  (Chrome/Edge/Firefox) usan <strong>JIT</strong> (compilan “en caliente” partes del código para
                  optimizar). Tú, como principiante, quédate con esto:{" "}
                  <strong>lo escribes y se ejecuta al momento</strong>.
                </p>
              </div>

              <h3 style={{ marginTop: "1rem" }}>Mini ejemplo</h3>
              <p className="muted">Sin compilar nada, el navegador ejecuta esto al instante:</p>

              <pre>
                <code>{`<!-- En tu HTML -->
<div id="msg"></div>
<script>
  const ahora = new Date().toLocaleTimeString("es-ES");
  document.getElementById("msg").textContent =
    "Evaluado ahora mismo a las " + ahora;
</script>`}</code>
              </pre>

              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <strong>Pregunta de repaso:</strong> ¿Por qué para aprender es útil que se ejecute “al momento”?
                </li>
              </ul>
                <div className="divider" />
      <div className="video-block video-block--single">
  <div className="video-title">¿Interpretado o compilado?</div>
  <p className="video-meta muted">Tres conceptos claves</p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/M32Az-IRUQI"
      title="¿Interpretado o compilado?"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

            </div>
          </details>

          {/* 5) CARACTERÍSTICAS: “SUPERPODERES” */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">5</span> 5) Características de JavaScript (vamos allá)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <article className="card">
                <h2> Características de JavaScript (vamos allá)</h2>
                <p className="muted">
                  JavaScript es el idioma que habla tu navegador. Con él puedes hacer que la página reaccione, pida
                  datos a internet y cambie lo que ves sin recargar. Aquí van sus “superpoderes” con ejemplos cortos.
                </p>

                <details className="topic-details" style={{ marginTop: ".9rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">1</span> Se ejecuta en el navegador (y también en servidor)
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      JS funciona directamente en el navegador. También puedes usarlo en servidor con Node.js.
                    </p>
                    <pre>
                      <code>{`// En tu HTML
<script>
  console.log("¡Hola desde JS!");
</script>`}</code>
                    </pre>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">2</span> Dinámico y flexible (ojo con las conversiones)
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Una variable puede cambiar de tipo. Potente, sí. Pero exige disciplina: usa{" "}
                      <span className="inline-code">===</span> para comparar de forma fiable.
                    </p>
                    <pre>
                      <code>{`let x = 5;       // number
x = "cinco";     // ahora string
console.log(typeof x); // "string"

// Consejo: usa === en vez de == para evitar sorpresas`}</code>
                    </pre>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">3</span> Manipula el DOM y escucha eventos
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">Puedes crear, borrar o cambiar elementos y reaccionar a clics o teclas.</p>
                    <pre>
                      <code>{`<!-- HTML -->
<button id="saludoBtn">Salúdame</button>
<div id="msg"></div>

<script>
  const btn = document.getElementById("saludoBtn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", () => {
    msg.textContent = "¡Hola! 🎉";
  });
</script>`}</code>
                    </pre>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">4</span> Asíncrono por diseño (fetch + async/await)
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">Puede pedir datos a internet sin bloquear la página.</p>
                    <pre>
                      <code>{`async function cargarDato() {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await r.json();
    console.log("Título:", data.title);
  } catch (e) {
    console.error("Error de red:", e);
  }
}

cargarDato();`}</code>
                    </pre>
                  </div>
                </details>

                {/* 5) Multiparadigma (tu bloque original) */}
                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">5</span> Multiparadigma (distintas formas de pensar el código)
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>

                  <div className="topic-details__content">
                    <p className="muted">
                      Decir que JavaScript es <strong>multiparadigma</strong> significa que no te obliga a programar de
                      una sola forma. Puedes resolver un mismo problema usando <strong>distintas maneras de pensar</strong>.
                    </p>

                    <div className="callout callout--summary">
                      <p className="callout__title">Idea clave</p>
                      <p className="muted">
                        Un <strong>paradigma</strong> no es una regla del lenguaje, sino una forma de organizar tu mente
                        cuando escribes código.
                      </p>
                    </div>

                    <p className="muted">
                      En JavaScript verás principalmente tres paradigmas. No tienes que dominarlos todos desde el principio:
                      los irás usando poco a poco, casi sin darte cuenta.
                    </p>

                    <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">1) Imperativo (paso a paso)</p>
                      <pre>
                        <code>{`let total = 0;

for (let i = 1; i <= 4; i++) {
  total = total + i;
}

console.log(total); // 10`}</code>
                      </pre>
                      <p className="muted small">Le decimos al programa exactamente qué hacer y en qué orden.</p>
                    </div>

                    <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">2) Funcional (transformar datos)</p>
                      <pre>
                        <code>{`const nums = [1, 2, 3, 4];

const paresDobles = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 2);

console.log(paresDobles); // [4, 8]`}</code>
                      </pre>
                      <p className="muted small">“Filtra y transforma” en vez de describir el bucle.</p>
                    </div>

                    <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">3) Orientado a objetos (modelar la realidad)</p>
                      <pre>
                        <code>{`class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saluda() {
    return \`Hola, soy \${this.nombre}\`;
  }
}

const p = new Persona("Inma");
console.log(p.saluda());`}</code>
                      </pre>
                      <p className="muted small">
                        Útil cuando trabajas con entidades: usuarios, productos, alumnos, pedidos…
                      </p>
                    </div>

                    <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">Importante para principiantes</p>
                      <p className="muted">
                        No tienes que elegir uno y olvidar los demás. En JavaScript es normal <strong>mezclarlos</strong>.
                      </p>
                    </div>

                    <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">🛠️ Ejercicio de comprensión</p>
                      <ul>
                        <li>¿Cuál te parece más fácil de leer?</li>
                        <li>¿Cuál se parece más a una receta paso a paso?</li>
                        <li>¿En cuál ves más claro “qué hace” el programa?</li>
                      </ul>
                    </div>

                    <ul style={{ marginTop: "1rem" }}>
                      <li>
                        <strong>Pregunta de repaso:</strong> Explica con tus palabras qué significa que JavaScript sea
                        multiparadigma.
                      </li>
                    </ul>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">6</span> Ecosistema enorme
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Hay miles de librerías (npm) y funciona en todos los navegadores modernos. Ideal para aprender y
                      construir rápido.
                    </p>
                    <pre>
                      <code>{`// Plantillas de texto (más legibles que concatenar):
const nombre = "Alex";
console.log(\`Bienvenido, \${nombre}!\`);`}</code>
                    </pre>
                  </div>
                </details>
              </article>
            </div>
          </details>

          {/* 5) SINTAXIS BÁSICA (SUBDETAILS) */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">6</span> ⭐ Sintaxis básica (reglas que no se negocian)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <div className="callout callout--warning" style={{ marginTop: ".2rem" }}>
                <p className="callout__title">Regla 0 (la más importante)</p>
                <p className="muted">
                  La <strong>sintaxis</strong> son las normas de escritura del lenguaje. Si fallas aquí, el navegador no
                  “interpreta mal”… directamente <strong>NO entiende</strong> y te devuelve errores.
                </p>
              </div>

              <p className="muted" style={{ marginTop: ".8rem" }}>
                Si vienes de HTML/CSS: allí un fallo suele “verse feo”. En JavaScript, un fallo de sintaxis suele
                significar <strong>pantalla en blanco</strong> o consola llena de errores. Vamos paso a paso.
              </p>

              <div className="topic-accordion" style={{ marginTop: ".9rem" }}>
                <details className="topic-details">
                  <summary>
                    <span className="summary-left">
                      <span className="badge">1</span> ⭐ Mayúsculas importan (case sensitive)
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      JavaScript distingue mayúsculas/minúsculas. Esto NO es un detalle: es una fuente de errores
                      constante.
                    </p>

                    <div className="callout callout--summary">
                      <p className="callout__title">Ejemplo real</p>
                      <p className="muted">
                        <strong>Alumno</strong> no es lo mismo que <strong>alumno</strong> ni que <strong>ALUMNO</strong>.
                        Son <strong>tres nombres distintos</strong>.
                      </p>
                    </div>

                    <pre>
                      <code>{`const alumno = "Ana";

console.log(alumno); // ✅ "Ana"
// console.log(Alumno); // ❌ Error: no existe
// console.log(ALUMNO); // ❌ Error: no existe`}</code>
                    </pre>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">2</span> Identificadores (nombres de variables/funciones)
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Un <strong>identificador</strong> es el nombre que tú eliges: variables, funciones, etc. Aquí hay
                      reglas del lenguaje (obligatorias) y reglas de estilo (acuerdos de equipo).
                    </p>

                    <div className="grid grid-2" style={{ marginTop: ".9rem" }}>
                      <div className="callout callout--concept">
                        <p className="callout__title">Reglas obligatorias (del lenguaje)</p>
                        <ul>
                          <li>
                            Un identificador <strong>no puede empezar por un número</strong>.
                          </li>
                          <li>
                            Puede empezar por <strong>letra</strong>, <strong>_</strong> o <strong>$</strong>.
                          </li>
                          <li>
                            A partir del segundo carácter, puede incluir <strong>números</strong>.
                          </li>
                        </ul>

                        <pre>
                          <code>{`// ✅ Válidos:
const nombre = "Ana";
const _contador = 0;
const $btn = "boton";
const usuario1 = "inma";

// ❌ NO válido (empieza por número):
// const 1usuario = "x";`}</code>
                        </pre>
                      </div>

                      <div className="callout callout--warning">
                        <p className="callout__title">Unicode: sí, pero mejor no</p>
                        <p className="muted">
                          JavaScript permite letras Unicode (por ejemplo, <code>ñ</code> o acentos) en identificadores,
                          pero en proyectos reales <strong>se evita</strong> para no tener problemas en teclados,
                          búsquedas y herramientas.
                        </p>

                        <pre>
                          <code>{`// ✅ Permitido, pero NO recomendable:
const año = 2026;
const niño = "Pepe";

// ✅ Recomendado:
const anio = 2026;
const nino = "Pepe";`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                      <p className="callout__title">Reglas de estilo (acuerdo de equipo)</p>
                      <ul>
                        <li>
                          <strong>Variables y funciones:</strong> <code>camelCase</code> (lo más estándar en JS).
                        </li>
                        <li>
                          <strong>Clases y componentes:</strong> <code>PascalCase</code>.
                        </li>
                        <li>
                          <strong>Constantes:</strong> <code>MAYUSCULAS_CON_GUIONES_BAJOS</code>.
                        </li>
                        <li>
                          <strong>CSS (clases):</strong> habitual <code>kebab-case</code> (con guiones).
                        </li>
                      </ul>

                      <pre>
                        <code>{`const nombreCompleto = "Ana Ruiz";
function calcularTotal() {}
class UsuarioPremium {}

const IVA_GENERAL = 0.21;

// CSS:
.mi-clase-bonita {}`}</code>
                      </pre>

                      <p className="muted small">
                        Nota: el guion <code>-</code> NO sirve dentro de variables porque en JS significa “resta” (
                        <code>mi-variable</code> sería <code>mi - variable</code>).
                      </p>
                    </div>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">3</span> Palabras reservadas (no se pueden usar como nombres)
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Hay palabras que el lenguaje “se guarda”: <strong>if</strong>, <strong>for</strong>,{" "}
                      <strong>class</strong>, <strong>return</strong>, <strong>const</strong>… No las uses como nombres.
                    </p>

                    <div className="callout callout--warning">
                      <p className="callout__title">Ejemplo</p>
                      <pre>
                        <code>{`// ❌ Mal:
// const for = 3;
// let class = "A";

// ✅ Bien:
const veces = 3;
let tipoClase = "A";`}</code>
                      </pre>
                    </div>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">4</span> Sentencias y punto y coma <span className="inline-code">;</span>
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Una <strong>sentencia</strong> es una instrucción completa. En JS el <code>;</code> es “opcional”
                      por ASI, pero para empezar: <strong>una instrucción por línea + termina con ;</strong>.
                    </p>

                    <pre>
                      <code>{`const a = 1;
const b = 2;
console.log(a + b);`}</code>
                    </pre>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">5</span> Espacios, líneas en blanco y orden visual
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">JavaScript ignora muchos espacios, pero tú NO deberías: el formato hace el código legible.</p>

                    <div className="grid grid-2" style={{ marginTop: ".9rem" }}>
                      <div className="callout callout--warning">
                        <p className="callout__title">Difícil de leer</p>
                        <pre>
                          <code>{`const edad=20; if(edad>=18){console.log("ok");}else{console.log("no");}`}</code>
                        </pre>
                      </div>

                      <div className="callout callout--example">
                        <p className="callout__title">Fácil de leer</p>
                        <pre>
                          <code>{`const edad = 20;

if (edad >= 18) {
  console.log("ok");
} else {
  console.log("no");
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="topic-details" style={{ marginTop: ".75rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">6</span> Comillas y comentarios
                    </span>
                    <span className="chev" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="topic-details__content">
                    <p className="muted">
                      Puedes usar <code>' '</code> o <code>" "</code>. Y las backticks <code>{"`"}</code> sirven para
                      plantillas con variables.
                    </p>

                    <pre>
                      <code>{`const nombre = "Inma";

console.log('Hola');
console.log("Hola");
console.log(\`Hola, \${nombre}\`);`}</code>
                    </pre>

                    <pre>
                      <code>{`// Comentario de una línea

/*
  Comentario
  de varias líneas
*/`}</code>
                    </pre>
                  </div>
                </details>
              </div>
            </div>
          </details>

          {/* 6) NOMBRES ARCHIVOS/CARPETAS */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">7</span> 📂 Nombres de archivos y carpetas (reglas que evitan sustos)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">
                Esto no es JavaScript “puro”, pero <strong>afecta directamente a que tu código funcione o no</strong>,
                sobre todo cuando subes un proyecto a internet.
              </p>

              <div className="callout callout--warning">
                <p className="callout__title">Error típico de principiante</p>
                <p className="muted">
                  “En mi ordenador funciona, pero en el servidor no”. En el 90 % de los casos… es por el nombre de un
                  archivo.
                </p>
              </div>

              <h4 style={{ marginTop: ".9rem" }}>Reglas rápidas para proyectos web</h4>
              <ul>
                <li>Usa <strong>siempre minúsculas</strong> en archivos y carpetas.</li>
                <li>
                  <strong>Nunca</strong> uses espacios, tildes ni <code>ñ</code>.
                </li>
                <li>Separa palabras con <strong>guiones</strong>, no con espacios.</li>
                <li>El nombre debe <strong>describir el contenido</strong>.</li>
                <li>Mantén el mismo criterio en todo el proyecto.</li>
              </ul>

              <pre>
                <code>{`// ✅ Correcto
mi-archivo.html
ejercicio-bucles.js
modulo-sintaxis.jsx

// ❌ Evitar
Mi Archivo.html
ejercicioBucles.js
ejercicio_ñ.js
ScriptFinal2.js`}</code>
              </pre>

              <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">⚠️ Muy importante (servidores)</p>
                <p className="muted">En sistemas como <strong>Linux y Mac</strong> (la mayoría de servidores):</p>
                <pre>
                  <code>{`Index.html ≠ index.html`}</code>
                </pre>
                <p className="muted">
                  Para el servidor son <strong>dos archivos distintos</strong>. Si enlazas uno y el archivo se llama
                  distinto → error.
                </p>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio rápido</p>
                <p className="muted">Mira tu proyecto actual y responde:</p>
                <ul>
                  <li>¿Hay algún archivo con mayúsculas?</li>
                  <li>¿Algún nombre con espacios o tildes?</li>
                  <li>¿Los nombres describen realmente lo que contienen?</li>
                </ul>
              </div>

              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <strong>Pregunta de repaso:</strong> ¿Por qué un proyecto puede funcionar en tu PC pero fallar al
                  subirlo a un servidor solo por el nombre de un archivo?
                </li>
              </ul>
            </div>
          </details>

          {/* 7) ERRORES TÍPICOS */}
          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">8</span> Errores típicos de principiantes (y cómo evitarlos)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <div className="callout callout--warning">
                <p className="callout__title">Regla de oro</p>
                <p className="muted">
                  Cuando algo falla: <strong>mira la consola</strong>. El 80% de los errores se resuelven leyendo el
                  mensaje con calma.
                </p>
              </div>

              <div className="grid" style={{ marginTop: ".9rem" }}>
                <div className="callout callout--concept">
                  <p className="callout__title">1) Escribir mal un nombre</p>
                  <pre>
                    <code>{`const total = 10;
// console.log(Total); // Error (mayúsculas)`}</code>
                  </pre>
                </div>

                <div className="callout callout--concept">
                  <p className="callout__title">2) Confundir = con ===</p>
                  <pre>
                    <code>{`let x = 5;          // asignación
x === 5;             // comparación`}</code>
                  </pre>
                </div>

                <div className="callout callout--concept">
                  <p className="callout__title">3) Olvidar comillas en textos</p>
                  <pre>
                    <code>{`// console.log(Hola); // Error
console.log("Hola");`}</code>
                  </pre>
                </div>

                <div className="callout callout--concept">
                  <p className="callout__title">4) Ejecutar JS antes de que exista el HTML</p>
                  <p className="muted small">
                    Solución típica: colocar el <span className="inline-code">&lt;script&gt;</span> al final del body.
                  </p>
                </div>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: "1rem" }}>
                <p className="callout__title">🛠️ Mini reto</p>
                <p className="muted">
                  Provoca a propósito un error (por ejemplo, escribe un nombre mal) y aprende a leer el mensaje de la
                  consola. Luego corrígelo.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </article>
  );
}
