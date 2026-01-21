// src/pages/tema7/Tema7_1.jsx
export default function Tema7_1() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.1</span>
          <h1>Introducción: qué es una función y por qué la necesitamos</h1>
          <p className="muted">
            Cuando tu código se repite o se hace largo, una función te ayuda a organizarlo y reutilizarlo
            sin copiar y pegar.
          </p>
        </div>
      </header>

      {/* =========================
          EL PROBLEMA: CÓDIGO REPETIDO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>😵 El problema: repetir código</h2>
          <span className="topic-section__meta">problema</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> “Lo mismo otra vez…”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Imagina que en tu programa necesitas mostrar el mismo mensaje 3 veces (por ejemplo, cuando
              el usuario acierta, cuando empieza el juego y cuando termina).
            </p>
            <p className="muted">
              Si copias y pegas el mismo <code>console.log</code> en varios sitios… tu código crece, se ensucia
              y es más fácil equivocarse.
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// ❌ Sin funciones: repetición
console.log("✅ Bienvenido/a al programa");
console.log("📌 Sigue las instrucciones con calma");

console.log("✅ Bienvenido/a al programa");
console.log("📌 Sigue las instrucciones con calma");

console.log("✅ Bienvenido/a al programa");
console.log("📌 Sigue las instrucciones con calma");`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🎯 Señal clara</p>
              <p className="muted" style={{ margin: 0 }}>
                Si repites un bloque 2 o 3 veces… probablemente necesitas una función.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          LA SOLUCIÓN: FUNCIÓN
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>✅ La solución: “un botón” que ejecutas cuando quieras</h2>
          <span className="topic-section__meta">solucion</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔧</span> Encapsular = guardar un bloque con nombre
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una función es como un <strong>botón</strong>: le pones un nombre y dentro guardas un bloque.
              Después lo ejecutas con <code>()</code>.
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// ✅ Con funciones: escribes una vez, usas muchas
function mostrarBienvenida() {
  console.log("✅ Bienvenido/a al programa");
  console.log("📌 Sigue las instrucciones con calma");
}

// Llamadas (ejecuciones)
mostrarBienvenida();
mostrarBienvenida();
mostrarBienvenida();`}</code>
              </pre>
            </div>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🔍 Qué estás ganando</h3>
            <ul className="muted" style={{ marginTop: ".5rem" }}>
              <li>
                <strong>Reutilización:</strong> no repites el bloque.
              </li>
              <li>
                <strong>Legibilidad:</strong> <code>mostrarBienvenida()</code> se entiende solo.
              </li>
              <li>
                <strong>Mantenimiento:</strong> si cambias el mensaje, lo cambias una vez.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS (SIN PARAMETROS)
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧾 La plantilla mínima (lo que tienes que memorizar)</h2>
          <span className="topic-section__meta">plantilla</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Declarar + llamar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// 1) Declarar (crear)
function nombreFuncion() {
  // código
}

// 2) Llamar (ejecutar)
nombreFuncion();`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Truco</p>
              <p className="muted" style={{ margin: 0 }}>
                Si no hay <code>()</code>, no se ejecuta.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ERRORES TÍPICOS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🚫 Errores típicos (para no tropezar)</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧯</span> Lo que más falla al empezar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function saludar() {
  console.log("Hola");
}

// ❌ ERROR 1: creer que esto ejecuta
saludar; // solo “nombra” la función, NO la ejecuta

// ✅ Correcto
saludar();

// ❌ ERROR 2: escribir la llamada antes de declarar (lo veremos mejor luego)
// saludar2();
// function saludar2() { console.log("..."); }`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              De momento quédate con esto: <strong>declaro la función</strong> y después la <strong>llamo</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO + RETO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio (guiado)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> “Mensajes de estado”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Vas a crear 2 funciones sin parámetros para organizar mensajes (como harías en un juego o una app).
            </p>

            <ol>
              <li>
                Crea una función <code>mostrarInicio()</code> que imprima 2 líneas en consola.
              </li>
              <li>
                Crea una función <code>mostrarFin()</code> que imprima otras 2 líneas.
              </li>
              <li>
                Llama a las dos funciones en este orden: inicio → fin.
              </li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Llama a <code>mostrarInicio()</code> 3 veces dentro del mismo archivo (sin copiar su contenido).
              Solo usando llamadas.
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
                <code>{`function mostrarInicio() {
  console.log("🟢 Programa iniciado");
  console.log("📌 Preparando todo...");
}

function mostrarFin() {
  console.log("🔴 Programa terminado");
  console.log("✅ Gracias por usarlo");
}

// Llamadas
mostrarInicio();
mostrarFin();

// Reto: sin copiar el bloque, solo llamadas
mostrarInicio();
mostrarInicio();`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>✅ Cierre</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📌</span> Qué te llevas de 7.1
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Una función es un bloque con nombre que puedes ejecutar cuando quieras.</li>
              <li>Sirve para reutilizar y organizar código.</li>
              <li>La llamada lleva <code>()</code>. Sin <code>()</code> no se ejecuta.</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Siguiente</p>
              <p className="muted" style={{ margin: 0 }}>
                En <strong>7.2</strong> practicaremos muchas funciones simples (sin parámetros) para coger soltura.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
