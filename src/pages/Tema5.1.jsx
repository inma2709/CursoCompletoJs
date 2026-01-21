// src/pages/Condicionales.jsx
// Lección · Condicionales en JavaScript (IF / ELSE / ELSE IF / Ternario / SWITCH)
// Estilo: tu manual (wrap, hero, card, topic-section, topic-details, callouts, code-example, etc.)

import { useMemo } from "react";

export default function Condicionales() {
  const toc = useMemo(
    () => [
      { id: "video", label: "📺 Video introductorio" },
      { id: "que-son", label: "¿Qué son los condicionales?" },
      { id: "if", label: "1) IF" },
      { id: "if-else", label: "2) IF...ELSE" },
      { id: "else-if", label: "3) ELSE IF" },
      { id: "ternario", label: "4) Operador ternario" },
      { id: "switch", label: "5) SWITCH" },
      { id: "templates", label: "5.1) Template literals" },
      { id: "ejercicios", label: "6) Ejercicios prácticos" },
      { id: "resumen", label: "7) Resumen" },
      { id: "proximos", label: "🚀 Próximos pasos" }
    ],
    []
  );

  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">Fundamentos · Condicionales</span>
          <h1 style={{ marginTop: ".55rem" }}>Condicionales en JavaScript</h1>
          <p className="muted">
            Aprende a tomar decisiones en tu código: <strong>if</strong>, <strong>else</strong>,{" "}
            <strong>else if</strong>, <strong>switch</strong> y el operador <strong>ternario</strong>.
            Esta lección está pensada para que entiendas <strong>por qué</strong> existen y <strong>cuándo</strong>{" "}
            usar cada uno, con ejemplos y ejercicios del mundo real.
          </p>

          <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
            <p style={{ margin: 0 }}>
              💡 Meta de hoy: que puedas leer una condición y decir sin dudar:
              <strong> “esto se ejecuta solo si…”</strong>
            </p>
          </div>
        </div>
      </header>

      {/* MINI ÍNDICE */}
      <section className="card" style={{ marginTop: "1rem" }}>
        <div className="card-body">
          <div className="topic-section__title" style={{ marginBottom: ".5rem" }}>
            <h2 style={{ margin: 0 }}>🧭 Índice rápido</h2>
            <span className="topic-section__meta">navegación</span>
          </div>

          <div
            className="content-details"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: ".5rem"
            }}
          >
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="btn"
                style={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="muted" style={{ marginTop: ".85rem" }}>
            Consejo: abre los <strong>details</strong> poco a poco. No intentes memorizar,{" "}
            intenta <strong>comprender</strong>.
          </p>
        </div>
      </section>

      {/* =========================
          VIDEO INTRODUCTORIO
      ========================= */}
      <section id="video" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>📺 Video introductorio</h2>
          <span className="topic-section__meta">video</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="video-block">
              <div className="video-title">Condicionales en JavaScript</div>
              <p className="video-meta muted">Qué son, tipos y ejemplos paso a paso</p>

              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/oqTpGpy4WDo?rel=0&modestbranding=1"
                  title="Condicionales en JavaScript - Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="callout callout--info" style={{ marginTop: "1rem" }}>
              <p style={{ marginTop: 0 }}>
                <strong>💡 En este video aprenderás:</strong>
              </p>
              <ul style={{ marginBottom: 0 }}>
                <li>Qué son los condicionales y para qué sirven</li>
                <li>Diferentes tipos de estructuras condicionales</li>
                <li>Ejemplos prácticos paso a paso</li>
                <li>Errores comunes y cómo evitarlos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ¿QUÉ SON?
      ========================= */}
      <section id="que-son" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>¿Qué son los condicionales?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--info">
              <p style={{ marginTop: 0 }}>
                <strong>Imagina que estás en casa decidiendo qué ponerte:</strong>
              </p>
              <p style={{ margin: ".35rem 0" }}>🌧️ <em>"Si llueve, me pongo el abrigo"</em></p>
              <p style={{ margin: ".35rem 0" }}>☀️ <em>"Si hace sol, me pongo una camiseta"</em></p>
              <p style={{ margin: ".35rem 0" }}>❄️ <em>"Si hace frío, me pongo un jersey"</em></p>
            </div>

            <p>
              Los <strong>condicionales</strong> en programación funcionan igual: son estructuras
              que permiten que el programa tome decisiones según una situación.
            </p>

            <p className="muted" style={{ marginBottom: ".75rem" }}>
              En JavaScript, una condición es algo que se evalúa como <strong>true</strong> (verdadero)
              o <strong>false</strong> (falso).
            </p>

            <details className="topic-details" open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧠</span> Formas de crear condicionales en JavaScript
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <ul>
                  <li>
                    <code>if</code> → ejecuta un bloque si la condición se cumple
                  </li>
                  <li>
                    <code>else</code> → define qué hacer si NO se cumple
                  </li>
                  <li>
                    <code>else if</code> → prueba otra condición diferente
                  </li>
                  <li>
                    <code>switch</code> → varias opciones exactas (menú de casos)
                  </li>
                  <li>
                    Operador ternario <code>? :</code> → forma abreviada (si es simple)
                  </li>
                </ul>

                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Truco mental: <strong>condición</strong> = pregunta. <br />
                    Si la respuesta es <strong>sí</strong> → entra. Si es <strong>no</strong> → salta.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          1) IF
      ========================= */}
      <section id="if" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>1. Condicional IF — “Si ocurre esto…”</h2>
          <span className="topic-section__meta">if</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <p>
              El <code>if</code> es la estructura más básica. Ejecuta un bloque <strong>solo si</strong>{" "}
              la condición es verdadera.
            </p>

            <details className="topic-details" open>
              <summary>
                <span className="summary-left">
                  <span className="badge">📌</span> Estructura básica del IF
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`if (condición) {
  // Código que se ejecuta si la condición es verdadera
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    ✅ Si la condición es <strong>true</strong> → entra.
                    <br />
                    ❌ Si la condición es <strong>false</strong> → no entra y sigue.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Ejemplo práctico: verificando la edad
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let edad = 28;

if (edad == 28) {
  console.log("Tu edad es 28");
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--ok" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>¿Qué pasa aquí?</strong>
                  </p>
                  <ol style={{ marginBottom: 0 }}>
                    <li>Declaramos una variable <code>edad</code> con valor 28</li>
                    <li>Preguntamos: “¿La edad es igual a 28?”</li>
                    <li>Como es verdad, se ejecuta el <code>console.log</code></li>
                    <li>Si la edad fuera diferente, no pasaría nada</li>
                    
                  </ol>
                   <p>
          Si la condición es falsa, el bloque de código simplemente
          <strong>no se ejecuta</strong> pasa a la siguiente sentencia. 
        </p>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">⚠️</span> Nota importante: == vs === (comparación estricta)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  En JS existen dos comparaciones comunes:
                  <code>==</code> (compara con conversión) y <code>===</code> (compara valor y tipo).
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`console.log(5 == "5");   // true  (convierte "5" a número)
console.log(5 === "5");  // false (número vs string)`}</code>
                  </pre>
                </div>
                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Recomendación general:usa <strong>===</strong> por defecto así evitas la conversión implicita que puede dar lugar 
                    a errores díficiles de localizar.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          2) IF ELSE
      ========================= */}
      <section id="if-else" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>2. IF...ELSE — “Si no, entonces…”</h2>
          <span className="topic-section__meta">if-else</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <p>
              Con <code>else</code> definimos qué hacer cuando la condición del <code>if</code> NO se cumple.
            </p>

            <details className="topic-details" open>
              <summary>
                <span className="summary-left">
                  <span className="badge">📌</span> IF con ELSE
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let edad = 22;

if (edad == 22) {
  console.log("Tu edad es 22");
} else {
  console.log("Tu edad no es 22");
}`}</code>
                  </pre>
                </div>

                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: ".75rem",
                    marginTop: ".75rem"
                  }}
                >
                  <div className="callout callout--ok">
                    <p style={{ marginTop: 0 }}>
                      <strong>Si edad = 22:</strong>
                    </p>
                    <p style={{ margin: ".25rem 0" }}>✅ Se ejecuta el <code>if</code></p>
                    <p style={{ margin: ".25rem 0" }}>Resultado: “Tu edad es 22”</p>
                  </div>

                  <div className="callout callout--warning">
                    <p style={{ marginTop: 0 }}>
                      <strong>Si edad = otro valor:</strong>
                    </p>
                    <p style={{ margin: ".25rem 0" }}>❌ Se ejecuta el <code>else</code></p>
                    <p style={{ margin: ".25rem 0" }}>Resultado: “Tu edad no es 22”</p>
                  </div>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧠</span> Idea clave: IF...ELSE siempre elige 1 camino
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Cuando hay <code>else</code>, el programa siempre ejecuta:
                </p>
                <ul>
                  <li>o el bloque del <code>if</code>,</li>
                  <li>o el bloque del <code>else</code>.</li>
                </ul>
                <div className="callout callout--tip">
                  <p style={{ margin: 0 }}>
                    Piensa en una bifurcación: <strong>izquierda o derecha</strong>. No hay tercera opción.
                  </p>
                   <div className="callout callout--warning">
          <strong>Error común:</strong> pensar que el <code>else</code> es obligatorio.
          Solo se usa cuando queremos contemplar el caso contrario.Si no nos interesa, podemos usar solo <code>if</code>.
        </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          3) ELSE IF
      ========================= */}
      <section id="else-if" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>3. ELSE IF — “Si no… ¿y si…?”</h2>
          <span className="topic-section__meta">else-if</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <p>
              Cuando necesitamos evaluar múltiples condiciones, usamos <code>else if</code>.
            </p>

            <details className="topic-details" open>
              <summary>
                <span className="summary-left">
                  <span className="badge">📌</span> Múltiples condiciones
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let edad = 22;

if (edad == 22) {
  console.log("Tu edad es 22");
} else if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad > 34) {
  console.log("Tienes más de 34 años");
} else {
  console.log("Hasta luego");
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--warning" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>⚡ Muy importante:</strong> JavaScript evalúa en <strong>orden</strong>.
                    En cuanto encuentra una condición verdadera, ejecuta ese bloque y{" "}
                    <strong>se salta el resto</strong>.
                  </p>
                  <ol style={{ marginBottom: 0 }}>
                    <li>¿edad == 22? → ✅ SÍ → ejecuta y termina</li>
                    <li>No evalúa las siguientes condiciones</li>
                  </ol>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧠</span> Orden correcto: de más específico a más general
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Un error típico es poner una condición “grande” antes que una “pequeña”.
                  Ejemplo: si pones <code>edad &gt; 0</code> arriba, casi siempre se cumple y bloquea lo demás.
                </p>

                <div className="callout callout--tip">
                  <p style={{ margin: 0 }}>
                    Regla práctica: empieza por lo más raro/específico y termina con lo más común/general.
                  </p>
                </div>
                  <div className="divider" />
    <div className="callout callout--tip">Hemos dicho que JS es permisivo con la sintaxis. De hecho aunque la forma correcta de escribir un condicional es con llaves
      y así te lo he mostrado en los ejemplos, si el bloque de código a ejecutar es una sola línea, puedes omitir las llaves y escribirlo todo en una línea:
      <pre>
        <code>{`if (condición) // código a ejecutar si es true`}</code>
      </pre>
      Aunque es mejor usar siempre las llaves para evitar errores y mejorar la legibilidad del código.También puedes omitir las llaves en else y else if si el bloque de código es una sola línea.
      <pre>
        <code>{`if (condición) // código a ejecutar si es true
else // código a ejecutar si es false`}</code>
      </pre>
    </div>
        <p>Ejemplo sin llaves:</p>

        <pre>
          <code>{`let hora = 10;
if (hora < 12) console.log("Buenos días");
else console.log("Buenas tardes");`}
</code>
        </pre>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          4) TERNARIO
      ========================= */}
      <section id="ternario" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>4. Operador ternario — “La forma rápida”</h2>
          <span className="topic-section__meta">ternario</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <p>
              El operador ternario es una forma abreviada de escribir <code>if...else</code> cuando la
              decisión es simple.
            </p>
 <div className="topic-details__content">
      <p>
        El <strong>operador ternario</strong> es una forma abreviada de escribir un
        <code>if / else</code> cuando solo hay <strong>dos opciones posibles</strong>.
      </p>

      <p>
        Permite tomar una decisión y obtener un valor en
        <strong>una sola línea de código</strong>.
      </p>

      <div className="callout callout--concept">
        <p className="callout__title">Idea clave</p>
        <p>
          El operador ternario no sustituye al <code>if</code>, lo complementa.
          Se usa solo cuando la lógica es sencilla.
        </p>
      </div>
    </div>
            <details className="topic-details" open>
              <summary>
                <span className="summary-left">
                  <span className="badge">📌</span> Sintaxis del operador ternario
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`condición ? valorSiVerdadero : valorSiFalso`}</code>
                  </pre>
                </div>
                <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Léelo así: <strong>“si condición, entonces esto; si no, esto otro”</strong>.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Ejemplos prácticos
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let age = 37;

// Directamente en console.log con template literals
console.log(age == 37 ? \`Tu edad es \${age}\` : \`Tu edad \${age} no es 37\`);

// Asignando a una variable
let mensaje = age == 37 ? \`La edad es \${age}\` : \`La edad \${age} no es 37\`;
console.log(mensaje);`}</code>
                  </pre>
                </div>

                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: ".75rem",
                    marginTop: ".75rem"
                  }}
                >
                  <div className="callout callout--info">
                    <p style={{ marginTop: 0 }}>
                      <strong>Con IF tradicional:</strong>
                    </p>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let mensaje;
if (age == 37) {
  mensaje = \`Tu edad es \${age}\`;
} else {
  mensaje = \`Tu edad \${age} no es 37\`;
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--ok">
                    <p style={{ marginTop: 0 }}>
                      <strong>Con operador ternario:</strong>
                    </p>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let mensaje = age == 37
  ? \`Tu edad es \${age}\`
  : \`Tu edad \${age} no es 37\`;`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🎯</span> Cuándo usar ternario y cuándo NO
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <ul>
                  <li>
                    ✅ Úsalo cuando sea una decisión simple (1 condición, 2 opciones).
                  </li>
                  <li>
                    ❌ Evítalo si empiezas a encadenar ternarios o si se vuelve difícil de leer.
                  </li>
                </ul>
                <div className="callout callout--warning">
                  <p style={{ margin: 0 }}>
                    Si un ternario necesita “tres líneas de explicación”, probablemente es mejor un <code>if...else</code>.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          5) SWITCH
      ========================= */}
      <section id="switch" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>5. SWITCH — “Para muchas opciones”</h2>
          <span className="topic-section__meta">switch</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <p>
              Cuando comparamos una variable con muchos valores exactos, <code>switch</code> suele ser más
              claro que una cadena larga de <code>if...else if</code>.
            </p>

            <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
              <p style={{ marginTop: 0 }}>
                <strong>Piensa en switch como un menú de restaurante:</strong>
              </p>
              <p style={{ margin: ".35rem 0" }}>🍕 “Si eliges 1, pizza”</p>
              <p style={{ margin: ".35rem 0" }}>🍔 “Si eliges 2, hamburguesa”</p>
              <p style={{ margin: ".35rem 0" }}>🥗 “Si eliges 3, ensalada”</p>
              <p style={{ margin: ".35rem 0" }}>❓ “Si eliges otra cosa, no entendemos”</p>
            </div>

            <details className="topic-details" open style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📌</span> Ejemplo completo de SWITCH
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let day = 0; // 0 será lunes

switch(day) {
  case 0:
    console.log("Hoy es Lunes");
    break;
  case 1:
    console.log("Hoy es Martes");
    break;
  case 2:
    console.log("Hoy es Miércoles");
    break;
  case 3:
    console.log("Hoy es Jueves");
    break;
  case 4:
    console.log("Hoy es Viernes");
    break;
  case 5:
    console.log("Hoy es Sábado");
    break;
  case 6:
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("Día no reconocido");
}`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧩</span> Elementos importantes del SWITCH
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: ".75rem"
                  }}
                >
                  <div className="callout callout--info">
                    <h3 style={{ marginTop: 0 }}>CASE</h3>
                    <p style={{ margin: ".35rem 0" }}>Cada opción posible</p>
                    <code>case 0:</code>
                  </div>

                  <div className="callout callout--warning">
                    <h3 style={{ marginTop: 0 }}>BREAK</h3>
                    <p style={{ margin: ".35rem 0" }}>Para no seguir ejecutando</p>
                    <code>break;</code>
                  </div>

                 <div className="callout callout--tip">
          <strong>Default</strong> se ejecuta si ningún caso coincide con el valor de la expresión.Es acosejable también incluirlo para manejar casos inesperados.
          Así garantizamos una buena experiencia de usuario(UX).
        </div>
                </div>

                <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>⚠️ Cuidado con el BREAK:</strong> si lo olvidas, JavaScript continuará ejecutando
                    los siguientes casos aunque no coincidan. Esto se llama <strong>fall-through</strong>.
                  </p>

                  <details className="topic-details" style={{ marginTop: ".6rem" }}>
                    <summary>
                      <span className="summary-left">
                        <span className="badge">👀</span> Ver ejemplo de qué pasa sin break
                      </span>
                      <span className="chev" aria-hidden="true">
                        ⌄
                      </span>
                    </summary>

                    <div className="topic-details__content">
                      <div className="code-example">
                        <pre>
                          <code>{`let day = 1;

switch(day) {
  case 1:
    console.log("Martes");
    // ¡Sin break!
  case 2:
    console.log("Miércoles");
    break;
}

// Resultado:
// "Martes"
// "Miércoles"  ← También se ejecuta`}</code>
                        </pre>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          5.1) TEMPLATE LITERALS
      ========================= */}
      <section id="templates" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>5.1. 🔗 Template literals en condicionales</h2>
          <span className="topic-section__meta">templates</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--info">
              <p style={{ marginTop: 0 }}>
                <strong>¡Conectando condicionales con template literals!</strong>
              </p>
              <p className="muted" style={{ marginTop: ".35rem" }}>
                Son perfectos para crear mensajes dinámicos basados en resultados:
              </p>
              <ul style={{ marginBottom: 0 }}>
                <li>🎯 Mensajes personalizados según el resultado</li>
                <li>📊 Informes dinámicos con datos calculados</li>
                <li>✨ Código más limpio y fácil de leer</li>
              </ul>
            </div>

            <details className="topic-details" open style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Ejemplo: informe con nivel y mensaje
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let usuario = "Ana";
let puntos = 85;
let nivel = "";
let mensaje = "";

// Determinamos el nivel según los puntos
if (puntos >= 90) {
  nivel = "Experto";
} else if (puntos >= 70) {
  nivel = "Avanzado";
} else if (puntos >= 50) {
  nivel = "Intermedio";
} else {
  nivel = "Principiante";
}

// Creamos mensaje personalizado
mensaje = \`¡Felicidades \${usuario}! Has obtenido \${puntos} puntos y alcanzado el nivel \${nivel}.\`;

console.log(mensaje);
// Resultado: "¡Felicidades Ana! Has obtenido 85 puntos y alcanzado el nivel Avanzado."`}</code>
                  </pre>
                </div>

                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>🎯 ¿Cuándo usar “mensajes dinámicos”?</strong>
                  </p>
                  <ul style={{ marginBottom: 0 }}>
                    <li><strong>Mensajes personalizados:</strong> “Bienvenido, {`{nombre}` }”</li>
                    <li><strong>Resultados:</strong> “El total es: €{`{precio}` }”</li>
                    <li><strong>Informes:</strong> “Faltan {`{dias}` } días”</li>
                    <li><strong>Logs útiles:</strong> “Error en línea {`{linea}` }”</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          6) EJERCICIOS
      ========================= */}
      <section id="ejercicios" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>6. 🧪 Ejercicios prácticos: ¡Pon a prueba tus conocimientos!</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--ok">
              <p style={{ marginTop: 0 }}>
                <strong>¡Hora de aplicar lo aprendido!</strong>
              </p>
              <p className="muted" style={{ marginTop: ".35rem" }}>
                Estos ejercicios combinan: variables + operadores + condicionales + template literals.
              </p>
              <ul style={{ marginBottom: 0 }}>
                <li>✨ Variables para guardar información</li>
                <li>🧮 Operadores para calcular y comparar</li>
                <li>🤔 Condicionales para decidir</li>
                <li>🔗 Template literals para mensajes claros</li>
              </ul>
            </div>

            <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
              <p style={{ marginTop: 0 }}>
                <strong>💡 Regla de oro:</strong> intenta resolver antes de ver la solución.
                Si te atascas: mira pistas, vuelve a intentar, y luego revisa.
              </p>
            </div>

            {/* EJERCICIO 1 */}
            <div className="divider" style={{ marginTop: "1rem" }} />
            <h3 style={{ marginTop: "1rem" }}>🎓 Ejercicio 1: Sistema de calificaciones escolares</h3>

            <div className="callout callout--info">
              <h4 style={{ marginTop: 0 }}>📝 Tu misión</h4>
              <p>
                Crea un programa que evalúe si un estudiante aprueba o reprueba basándose en:
              </p>
              <ul>
                <li>📊 <strong>Nota final</strong> (0-10)</li>
                <li>📅 <strong>Asistencia</strong> (0-100%)</li>
                <li>📋 <strong>Trabajos entregados</strong> vs total de trabajos</li>
              </ul>

              <h4>🎯 Condiciones para aprobar</h4>
              <ul>
                <li>Nota &gt;= 5 Y asistencia &gt;= 80% Y trabajos &gt;= 70%</li>
              </ul>

              <h4>🏆 Clasificación de notas</h4>
              <ul>
                <li>9-10: “Excelente”</li>
                <li>7-8.9: “Muy Bien”</li>
                <li>5-6.9: “Aprobado”</li>
                <li>0-4.9: “Suspenso”</li>
              </ul>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Pistas y recordatorios
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <ul>
                  <li><strong>IF-ELSE IF</strong> para clasificar notas</li>
                  <li><strong>Operadores lógicos (&&)</strong> para combinar condiciones</li>
                </ul>

                <div className="code-example" style={{ marginTop: ".75rem" }}>
                  <pre>
                    <code>{`// IF-ELSE IF para múltiples opciones
if (condicion1) {
  // ...
} else if (condicion2) {
  // ...
} else {
  // ...
}

// Operador lógico Y (&&)
if (condicion1 && condicion2 && condicion3) {
  // ...
}`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🚫</span> ¡ALTO! Mira la solución SOLO si lo necesitas
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="callout callout--ok">
                  <p style={{ margin: 0 }}>
                    <strong>✅ Solución: Sistema de calificaciones</strong>
                  </p>
                </div>

                <div className="code-example" style={{ marginTop: ".75rem" }}>
                  <pre>
                    <code>{`// Datos del estudiante
let nombreEstudiante = "María";
let nota = 8.5;
let asistencia = 90; // porcentaje
let trabajosEntregados = 8;
let totalTrabajos = 10;

// Calculamos porcentaje de trabajos
let porcentajeTrabajos = (trabajosEntregados / totalTrabajos) * 100;

// Determinamos la calificación usando IF-ELSE IF
let calificacion = "";
if (nota >= 9) {
  calificacion = "Excelente";
} else if (nota >= 7) {
  calificacion = "Muy Bien";
} else if (nota >= 5) {
  calificacion = "Aprobado";
} else {
  calificacion = "Suspenso";
}

// Verificamos si puede aprobar el curso usando operadores lógicos
let estado = "";
if (nota >= 5 && asistencia >= 80 && porcentajeTrabajos >= 70) {
  estado = "APROBADO";
} else {
  estado = "REPROBADO";
}

// Creamos el informe usando template literals
let informe = \`=== INFORME ACADÉMICO ===
Estudiante: \${nombreEstudiante}
Nota final: \${nota}/10 (\${calificacion})
Asistencia: \${asistencia}%
Trabajos: \${trabajosEntregados}/\${totalTrabajos} (\${porcentajeTrabajos}%)
ESTADO: \${estado}\`;

console.log(informe);`}</code>
                  </pre>
                </div>

                <div className="callout callout--warning" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>🔬 Experimenta:</strong> cambia valores y observa:
                  </p>
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      <code>nota = 4</code> y <code>asistencia = 60</code>
                    </li>
                    <li>
                      <code>nota = 9.5</code> y <code>trabajosEntregados = 6</code>
                    </li>
                    <li>
                      <code>nota = 6</code>, <code>asistencia = 85</code>, <code>trabajosEntregados = 9</code>
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            {/* EJERCICIO 2 */}
            <div className="divider" style={{ marginTop: "1.25rem" }} />
            <h3 style={{ marginTop: "1rem" }}>🛍️ Ejercicio 2: Calculadora de descuentos</h3>

            <div className="callout callout--info">
              <h4 style={{ marginTop: 0 }}>📝 Tu misión</h4>
              <p>Crea una calculadora que aplique diferentes descuentos según:</p>
              <ul>
                <li>📦 <strong>Cantidad de productos</strong> comprados</li>
                <li>⭐ <strong>Estado VIP</strong> del cliente</li>
                <li>🎫 <strong>Código de descuento</strong> válido</li>
              </ul>

              <h4>🎯 Reglas de descuentos</h4>
              <ul>
                <li>
                  <strong>Por cantidad:</strong> 3-4 productos: 5% | 5-9 productos: 10% | 10+ productos: 15%
                </li>
                <li>
                  <strong>Cliente VIP:</strong> 10% adicional
                </li>
                <li>
                  <strong>Códigos:</strong> VERANO20: 20% | ESTUDIANTE: 15% | PRIMERA: 25%
                </li>
              </ul>

              <p style={{ marginBottom: 0 }}>
                <strong>¡Los descuentos se acumulan!</strong>
              </p>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Pistas y recordatorios
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <ul>
                  <li><strong>IF-ELSE IF</strong> para descuentos por cantidad</li>
                  <li><strong>IF simple</strong> para cliente VIP</li>
                  <li><strong>SWITCH</strong> para códigos de descuento</li>
                </ul>

                <div className="code-example" style={{ marginTop: ".75rem" }}>
                  <pre>
                    <code>{`// SWITCH para múltiples valores exactos
switch(variable) {
  case "valor1":
    // ...
    break;
  case "valor2":
    // ...
    break;
  default:
    // ...
}

// Los decimales en JavaScript se escriben con punto
let descuento = 0.15; // esto es 15%`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🚫</span> ¡ALTO! Mira la solución SOLO si lo necesitas
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="callout callout--ok">
                  <p style={{ margin: 0 }}>
                    <strong>✅ Solución: Calculadora de descuentos</strong>
                  </p>
                </div>

                <div className="code-example" style={{ marginTop: ".75rem" }}>
                  <pre>
                    <code>{`// Datos de la compra
let nombreCliente = "Carlos";
let precioBase = 120;
let cantidadProductos = 6;
let esClienteVIP = false;
let codigoDescuento = "VERANO20";

// Variables para cálculos
let descuentoCantidad = 0;
let descuentoVIP = 0;
let descuentoCodigo = 0;
let mensajesDescuentos = "";

// Descuento por cantidad usando IF-ELSE IF
if (cantidadProductos >= 10) {
  descuentoCantidad = 0.15; // 15%
  mensajesDescuentos += \`- Descuento por cantidad (10+ productos): 15%
\`;
} else if (cantidadProductos >= 5) {
  descuentoCantidad = 0.10; // 10%
  mensajesDescuentos += \`- Descuento por cantidad (5+ productos): 10%
\`;
} else if (cantidadProductos >= 3) {
  descuentoCantidad = 0.05; // 5%
  mensajesDescuentos += \`- Descuento por cantidad (3+ productos): 5%
\`;
}

// Descuento VIP usando IF simple
if (esClienteVIP) {
  descuentoVIP = 0.10; // 10% extra
  mensajesDescuentos += \`- Descuento VIP: 10%
\`;
}

// Descuento por código usando SWITCH
switch(codigoDescuento) {
  case "VERANO20":
    descuentoCodigo = 0.20;
    mensajesDescuentos += \`- Código VERANO20: 20%
\`;
    break;
  case "ESTUDIANTE":
    descuentoCodigo = 0.15;
    mensajesDescuentos += \`- Código ESTUDIANTE: 15%
\`;
    break;
  case "PRIMERA":
    descuentoCodigo = 0.25;
    mensajesDescuentos += \`- Código PRIMERA COMPRA: 25%
\`;
    break;
  default:
    mensajesDescuentos += \`- Sin código de descuento
\`;
}

// Cálculos finales
let descuentoTotal = descuentoCantidad + descuentoVIP + descuentoCodigo;
let montoDescuento = precioBase * descuentoTotal;
let precioFinal = precioBase - montoDescuento;

// Ticket de compra usando template literals
let ticket = \`🧾 === TICKET DE COMPRA ===
Cliente: \${nombreCliente}
Productos: \${cantidadProductos} unidades
Precio base: €\${precioBase}

📋 DESCUENTOS APLICADOS:
\${mensajesDescuentos}
💰 RESUMEN:
Descuento total: \${descuentoTotal * 100}%
Ahorro: €\${montoDescuento.toFixed(2)}
PRECIO FINAL: €\${precioFinal.toFixed(2)}\`;

console.log(ticket);`}</code>
                  </pre>
                </div>

                <div className="callout callout--warning" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>🔬 Experimenta:</strong>
                  </p>
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      <code>esClienteVIP = true</code> y <code>cantidadProductos = 12</code>
                    </li>
                    <li>
                      <code>codigoDescuento = "PRIMERA"</code> y <code>cantidadProductos = 2</code>
                    </li>
                    <li>
                      <code>precioBase = 200</code> y <code>codigoDescuento = "ESTUDIANTE"</code>
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            <div className="callout callout--ok" style={{ marginTop: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>🎉 ¡Felicidades!</h3>
              <p>
                <strong>Si completaste ambos ejercicios, eres oficialmente un maestro de los condicionales.</strong>
              </p>
              <ul style={{ marginBottom: 0 }}>
                <li>✅ Dominas <strong>IF-ELSE IF</strong> para múltiples condiciones</li>
                <li>✅ Usas <strong>operadores lógicos</strong> para combinar condiciones</li>
                <li>✅ Manejas <strong>SWITCH</strong> para valores exactos</li>
                <li>✅ Integras <strong>template literals</strong> con condicionales</li>
                <li>✅ Resuelves problemas reales con JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          7) RESUMEN
      ========================= */}
      <section id="resumen" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>7. 📝 Resumen: Todo lo que aprendiste</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--ok">
              <p style={{ margin: 0 }}>
                <strong>Ahora ya puedes hacer que tus programas tomen decisiones.</strong> Aquí tienes tu “chuleta”
                de condicionales:
              </p>
            </div>

            <div
              className="content-details"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: ".75rem",
                marginTop: ".9rem"
              }}
            >
              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>IF</h3>
                <p>Ejecuta código si la condición es verdadera</p>
                <code>if (condición) {'{ ... }'}</code>
              </div>

              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>ELSE</h3>
                <p>Se ejecuta si el IF es falso</p>
                <code>if (...) {'{...}'} else {'{...}'}</code>
              </div>

              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>ELSE IF</h3>
                <p>Para múltiples condiciones (en orden)</p>
                <code>else if (condición2) {'{ ... }'}</code>
              </div>

              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>SWITCH</h3>
                <p>Para muchas opciones exactas</p>
                <code>switch(x) {'{ case: ... }'}</code>
              </div>

              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>Ternario</h3>
                <p>IF-ELSE en una línea (si es simple)</p>
                <code>cond ? si : no</code>
              </div>

              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>Concatenación</h3>
                <p>Unir textos (o usar templates)</p>
                <code>"Hola " + nombre</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRÓXIMOS PASOS
      ========================= */}
      <section id="proximos" className="topic-section" style={{ marginTop: "1.25rem", marginBottom: "2rem" }}>
        <div className="topic-section__title">
          <h2>🚀 Próximos pasos</h2>
          <span className="topic-section__meta">siguiente</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--tip">
              <ul style={{ margin: 0 }}>
                <li>
                  <strong>Domina estos conceptos:</strong> son la base de toda programación.
                </li>
                <li>
                  <strong>Practica mensajes dinámicos:</strong> te obliga a pensar la lógica y mejora tu código.
                </li>
                <li>
                  <strong>Combina todo:</strong> variables + operadores + condicionales.
                </li>
                <li>
                  <strong>Siguiente tema:</strong> bucles (repetir código).
                </li>
              </ul>
            </div>

             {/* =========================
          ENLACES
      ========================= */}
       <section className="resources-box">
        <div className="resources-box__header">
          <h3 className="resources-box__title">🔗 Enlaces relacionados</h3>
          <p className="resources-box__hint">
            Revisa el resto del módulo
          </p>
        </div>

        <ul className="resources-list">
          <li>
            <a href="/5.3">➜ M5.3 · Saltos</a>
          </li>
          <li>
            <a href="/5.1">➜ M5.2 · Bucles</a>
          </li>
          <li>
            <a href="/tema5">➜ Volver a M5 · Estructuras de control</a>
          </li>
        </ul>
      </section>
           
          </div>
        </div>
      </section>
    </article>
  );
}
