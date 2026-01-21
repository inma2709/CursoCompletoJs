// src/pages/tema7/Tema7.jsx
export default function Tema7() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8</span>
          <h1>Funciones en JavaScript</h1>
          <p className="muted">
            Organiza, reutiliza y entiende tu código como un profesional: una función es “un botón” que
            ejecuta una tarea cuando tú quieras.
          </p>
        </div>
      </header>

      {/* =========================
          ¿QUÉ VAS A APRENDER?
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🎯 Qué vas a aprender aquí</h2>
          <span className="topic-section__meta">objetivo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Objetivos del tema
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Entender qué es una función y por qué existe.</li>
              <li>Declarar funciones y llamarlas (sin parámetros al principio).</li>
              <li>Usar parámetros y argumentos para hacer funciones flexibles.</li>
              <li>Entender <code>return</code>: devolver un valor para usarlo después.</li>
              <li>Conectar funciones a botones e inputs (eventos) sin “caos”.</li>
              <li>Introducción suave a <em>arrow functions</em> (sin drama con <code>this</code>).</li>
            </ul>

            <div className="divider" />

            <div className="callout callout--concept">
              <p className="callout__title">💡 Idea clave</p>
              <p className="muted" style={{ margin: 0 }}>
                Si tu código empieza a repetirse o se vuelve largo… es señal de que necesitas funciones.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ¿QUÉ ES UNA FUNCIÓN?
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🤔 ¿Qué es una función?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔧</span> Botón mágico: “haz esta tarea por mí”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una <strong>función</strong> es un <strong>bloque de código</strong> con un nombre, que hace una tarea
              concreta. Lo importante es que puedes ejecutarla <strong>cuando quieras</strong> y tantas veces como
              necesites, sin copiar y pegar el mismo código.
            </p>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">✅ ¿Para qué sirven?</p>
              <ul className="muted" style={{ margin: 0 }}>
                <li>
                  <strong>Reutilizar</strong> código: escribir una vez, usar muchas.
                </li>
                <li>
                  <strong>Organizar</strong> tareas: dividir un problema grande en pasos pequeños.
                </li>
                <li>
                  <strong>Evitar errores</strong>: si algo falla, lo arreglas en un solo sitio.
                </li>
                <li>
                  <strong>Leer mejor</strong> tu programa: el código se entiende “por bloques”.
                </li>
              </ul>
            </div>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🧠 Piensa así</h3>
            <p className="muted" style={{ marginTop: ".4rem" }}>
              Si en tu programa haces “lo mismo” varias veces (sumar, validar, pintar HTML…), ahí hay una función.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS BÁSICA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚡ Sintaxis básica</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧾</span> Declarar y llamar una función
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Una función tiene <strong>nombre</strong> y <strong>paréntesis</strong>. Para ejecutarla, la llamas con
              <code>()</code>.
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// 1) Declarar (crear) una función
function saludar() {
  console.log("¡Hola mundo!");
  console.log("Bienvenido/a a JavaScript");
}

// 2) Llamar (ejecutar) la función
saludar();
saludar(); // puedes llamarla todas las veces que quieras`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🔑 Importante</p>
              <p className="muted" style={{ margin: 0 }}>
                <strong>Declarar</strong> no ejecuta. Solo “crea” la función. Se ejecuta cuando la <strong>llamas</strong>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO + RETO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Tu primera función “útil”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea una función llamada <code>mostrarMensaje()</code> que muestre en consola un mensaje con{" "}
              <strong>template literals</strong>.
            </p>

            <ol>
              <li>Crea 2 variables: <code>nombre</code> y <code>curso</code>.</li>
              <li>Crea la función <code>mostrarMensaje()</code>.</li>
              <li>Dentro, imprime: <code>{`Hola, ${nombre}. Bienvenido/a a ${curso}`}</code>.</li>
              <li>Llama a la función 2 veces.</li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Añade otra función <code>mostrarDespedida()</code> que imprima: “Nos vemos mañana, …”.
              Llámala al final.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// Variables (las usará la función)
const nombre = "Ana";
const curso = "Funciones en JavaScript";

// 1) Función sin parámetros
function mostrarMensaje() {
  // Template literal: comillas invertidas + \${}
  console.log(\`Hola, \${nombre}. Bienvenido/a a \${curso}\`);
}

// 2) Llamadas
mostrarMensaje();
mostrarMensaje();

// Reto: otra función
function mostrarDespedida() {
  console.log(\`Nos vemos mañana, \${nombre} 👋\`);
}

mostrarDespedida();`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          MAPA DEL TEMA (ÍNDICE)
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧭 Ruta del tema</h2>
          <span className="topic-section__meta">indice</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📌</span> ¿Qué viene ahora?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                <strong>7.1</strong> — Introducción: qué es una función y por qué la necesitamos
              </li>
              <li>
                <strong>7.2</strong> — Declarar y llamar funciones (sin parámetros)
              </li>
              <li>
                <strong>7.3</strong> — Parámetros y argumentos
              </li>
              <li>
                <strong>7.4</strong> — <code>return</code>: devolver valores (el click)
              </li>
              <li>
                <strong>7.5</strong> — Funciones con eventos (botones e inputs)
              </li>
              <li>
                <strong>7.6</strong> — Arrow functions (introducción suave)
              </li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💪 Consejo</p>
              <p className="muted" style={{ margin: 0 }}>
                No intentes memorizar. Haz mini ejercicios. Las funciones se entienden con práctica.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
