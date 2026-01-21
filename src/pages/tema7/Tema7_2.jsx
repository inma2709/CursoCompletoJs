// src/pages/tema7/Tema7_2.jsx
export default function Tema7_2() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.2</span>
          <h1>Declarar y llamar funciones (sin parámetros)</h1>
          <p className="muted">
            Antes de pasar datos a una función, vamos a dominar lo esencial:
            crear funciones simples y ejecutarlas correctamente.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧠 Idea clave del tema</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔑</span> Una función = una tarea concreta
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              En este punto todavía <strong>NO</strong> vamos a usar parámetros.
              Queremos aprender a:
            </p>
            <ul>
              <li>Crear funciones con un nombre claro</li>
              <li>Leer funciones como si fueran frases</li>
              <li>Llamarlas en el orden correcto</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Regla de oro</p>
              <p className="muted" style={{ margin: 0 }}>
                Si puedes explicar qué hace una función leyendo su nombre, vas bien.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          PLANTILLA BÁSICA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧾 Plantilla básica (memorízala)</h2>
          <span className="topic-section__meta">plantilla</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Declarar → llamar
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// 1) Declarar la función
function nombreFuncion() {
  // código que se ejecuta
}

// 2) Llamar a la función
nombreFuncion();`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              Una función puede llamarse <strong>una vez</strong>, <strong>dos veces</strong> o
              <strong> cien veces</strong> sin copiar su contenido.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          EJEMPLOS PROGRESIVOS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>📈 Ejemplos progresivos</h2>
          <span className="topic-section__meta">ejemplos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">①</span> Ejemplo 1: mensaje simple
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarHola() {
  console.log("Hola 👋");
}

mostrarHola();`}</code>
              </pre>
            </div>

            <p className="muted">
              La función hace <strong>una sola cosa</strong>: mostrar un mensaje.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">②</span> Ejemplo 2: varias líneas
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarInicio() {
  console.log("🟢 Programa iniciado");
  console.log("📦 Cargando datos...");
  console.log("✅ Listo");
}

mostrarInicio();`}</code>
              </pre>
            </div>

            <p className="muted">
              Una función puede ejecutar <strong>varias instrucciones</strong>.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">③</span> Ejemplo 3: reutilización real
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarError() {
  console.log("❌ Ha ocurrido un error");
  console.log("Inténtalo de nuevo");
}

// Reutilizar la MISMA función
mostrarError();
mostrarError();
mostrarError();`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🎯 Observa</p>
              <p className="muted" style={{ margin: 0 }}>
                No se copia el código. Solo se llama a la función.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ORDEN Y LECTURA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>📖 Orden de lectura y ejecución</h2>
          <span className="topic-section__meta">orden</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧭</span> Primero se declara, luego se llama
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              JavaScript <strong>lee el archivo de arriba a abajo</strong>.
              Primero encuentra la función, y cuando ve <code>()</code>, la ejecuta.
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// Declaración
function despedirse() {
  console.log("Hasta luego 👋");
}

// Llamada
despedirse();`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Truco mental</p>
              <p className="muted" style={{ margin: 0 }}>
                Declarar = definir el botón · Llamar = pulsar el botón
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
          <h2>🧪 Mini ejercicio (guiado)</h2>
          <span className="topic-section__meta">práctica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> “Panel de mensajes”
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un pequeño “panel” de mensajes usando funciones sin parámetros.
            </p>

            <ol>
              <li>
                Crea una función <code>mostrarExito()</code> que imprima un mensaje positivo.
              </li>
              <li>
                Crea una función <code>mostrarAviso()</code> que imprima un aviso.
              </li>
              <li>
                Crea una función <code>mostrarError()</code> que imprima un error.
              </li>
              <li>
                Llama a las tres funciones en este orden.
              </li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Llama a <code>mostrarAviso()</code> dos veces sin copiar su contenido.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarExito() {
  console.log("✅ Operación realizada correctamente");
}

function mostrarAviso() {
  console.log("⚠️ Revisa los datos introducidos");
}

function mostrarError() {
  console.log("❌ Algo ha salido mal");
}

// Llamadas
mostrarExito();
mostrarAviso();
mostrarError();

// Reto: reutilizar
mostrarAviso();
mostrarAviso();`}</code>
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
              <span className="badge">📌</span> Qué te llevas de 7.2
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Una función sin parámetros ejecuta siempre la misma tarea.</li>
              <li>Se declara una vez y se llama todas las veces que quieras.</li>
              <li>El nombre de la función debe explicar lo que hace.</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Siguiente</p>
              <p className="muted" style={{ margin: 0 }}>
                En <strong>7.3</strong> aprenderás a pasar información a las funciones con parámetros.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
