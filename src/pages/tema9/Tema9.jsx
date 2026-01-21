// src/pages/tema9/Tema9.jsx
export default function Tema9() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9</span>
          <h1>Tema 9 · Métodos útiles (Strings, Arrays y Math)</h1>
          <p className="muted">
            En este tema vas a aprender lo que te hace pasar de “sé JavaScript” a “lo uso con soltura”:
            métodos que te ahorran tiempo, evitan errores y te permiten crear mini-apps reales.
          </p>
        </div>
      </header>

      {/* =========================
          INTRO MOTIVADORA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🚀 ¿Por qué este tema es un antes y un después?</h2>
          <span className="topic-section__meta">intro</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> La “magia” real de JavaScript
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Hasta ahora has aprendido <strong>variables</strong>, <strong>condicionales</strong>,{" "}
              <strong>bucles</strong>, <strong>funciones</strong> y ya has conectado{" "}
              <strong>JavaScript con HTML</strong> (DOM, eventos y estilos).
            </p>

            <p>
              El siguiente salto es dominar <strong>métodos</strong>: pequeñas “herramientas” que vienen
              incluidas en el lenguaje para hacer cosas típicas de forma rápida y segura.
            </p>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Idea clave:</strong> un método es una función “pegada” a un tipo de dato.
                <br />
                Por ejemplo, los textos (strings) tienen métodos para <em>buscar</em>, <em>recortar</em> o{" "}
                <em>reemplazar</em>, y los arrays tienen métodos para <em>filtrar</em>, <em>transformar</em> o{" "}
                <em>encontrar</em> elementos.
              </p>
            </div>

            <div className="divider" />

            <p className="muted">
              Si entiendes este tema, vas a poder escribir código mucho más limpio, y te resultará natural
              hacer ejercicios “de verdad”: buscadores, listas, validaciones, pequeñas estadísticas, etc.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ¿QUÉ ES UN MÉTODO?
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔧 ¿Qué es un método? (sin líos)</h2>
          <span className="topic-section__meta">metodos</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> “Una función que vive dentro de algo”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>método</strong> es una función que se ejecuta sobre un valor. Por eso se escribe con
              un <strong>punto</strong>:
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// Un string (texto)
const nombre = "Inma";

// Un método del string:
const mayus = nombre.toUpperCase(); // "INMA"

// Un array (lista)
const numeros = [1, 2, 3];

// Un método del array:
numeros.push(4); // ahora es [1, 2, 3, 4]`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Truco mental:</strong> piensa que el dato te “ofrece” herramientas.
                <br />
                Texto → herramientas para texto. Array → herramientas para listas.
              </p>
            </div>

            <div className="divider" />

            <p>
              En este tema veremos métodos que usarás todo el tiempo:
              <strong> strings</strong>, <strong>arrays</strong> y <strong>Math</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MAPA DEL TEMA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🗺️ Mapa del Tema 9</h2>
          <span className="topic-section__meta">ruta</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📌</span> Qué vas a ver (y para qué sirve)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                <strong>9.1 · Strings</strong> — cortar, limpiar, buscar, reemplazar, comprobar.
              </li>
              <li>
                <strong>9.2 · Arrays básicos</strong> — push/pop, includes, slice/splice, join.
              </li>
              <li>
                <strong>9.3 · Arrays PRO</strong> — <code>map</code>, <code>filter</code>, <code>find</code> (pensar en “transformar” y “seleccionar”).
              </li>
              <li>
                <strong>9.4 · Numbers + Math</strong> — redondeos, aleatorios, límites, conversiones.
              </li>
              <li>
                <strong>9.5 · Métodos + DOM</strong> — mini interacciones: validaciones, buscadores y listas.
              </li>
              <li>
                <strong>9.6 · Ejercicios</strong> — una página solo de ejercicios de métodos (con solución explicada).
              </li>
            </ul>

            <div className="divider" />

            <div className="friendly-box">
              <p style={{ margin: 0 }}>
                <strong>Objetivo real:</strong> que puedas mirar un problema y pensar:
                <br />
                “Esto se resuelve con <code>includes</code> + <code>trim</code>” o “Aquí necesito un <code>filter</code>”.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          PRE-REGLAS IMPORTANTES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>⚠️ Dos reglas de oro (para no frustrarte)</h2>
          <span className="topic-section__meta">reglas</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Lo que siempre debes comprobar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>
                <strong>¿Qué tipo de dato tengo?</strong>{" "}
                (string, number, array…) → eso determina los métodos disponibles.
              </li>
              <li>
                <strong>¿Devuelve algo o modifica el original?</strong>{" "}
                <br />
                Por ejemplo: <code>toUpperCase()</code> devuelve un nuevo string, pero <code>push()</code> modifica el array.
              </li>
            </ol>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// String: NO se modifica, devuelve uno nuevo
let txt = "hola";
let nuevo = txt.toUpperCase();
console.log(txt);   // "hola"
console.log(nuevo); // "HOLA"

// Array: push() SÍ modifica el array original
let lista = ["a", "b"];
lista.push("c");
console.log(lista); // ["a","b","c"]`}</code>
              </pre>
            </div>

            <p className="muted">
              Si interiorizas esta diferencia, evitarás el 80% de errores típicos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MICRO-RETO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Micro-reto (para empezar con chispa)</h2>
          <span className="topic-section__meta">reto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Reto 60 segundos
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Tienes este texto: <code>"  hola mundo  "</code>
              <br />
              Quiero que salga: <code>"HOLA MUNDO"</code> (sin espacios extra).
            </p>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">👀</span> Ver pista
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p className="muted">
                  Piensa en dos métodos: uno para <strong>limpiar</strong> espacios, otro para <strong>pasar a mayúsculas</strong>.
                </p>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Ver solución
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const texto = "  hola mundo  ";
const resultado = texto.trim().toUpperCase();
console.log(resultado); // "HOLA MUNDO"`}</code>
                  </pre>
                </div>

                <p className="muted">
                  Fíjate en el orden: primero limpio con <code>trim()</code> y después convierto con <code>toUpperCase()</code>.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* CIERRE */}
      <section className="topic-section" style={{ marginBottom: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>➡️ ¿Listos?</h2>
          <span className="topic-section__meta">siguiente</span>
        </div>

        <div className="topic-box" style={{ marginTop: ".75rem" }}>
          <p style={{ margin: 0 }}>
            Siguiente: <strong>Tema 9.1</strong> — métodos de strings para limpiar, buscar y transformar texto.
          </p>
          
        </div>
      </section>
    </article>
  );
}
