// src/pages/tema8/Tema8.jsx
export default function Tema8() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9</span>
          <h1>DOM y Eventos: conectar JavaScript con HTML</h1>
          <p className="muted">
            Hasta ahora tu JavaScript vivía “en el aire”. En este módulo lo conectas con la página:
            vas a <strong>leer inputs</strong>, <strong>responder a clics</strong> y <strong>cambiar el HTML</strong>
            en tiempo real.
          </p>
        </div>
      </header>

      {/* =========================
          MAPA DEL MÓDULO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🗺️ Mapa del módulo</h2>
          <span className="topic-section__meta">overview</span>
        </div>

        <div className="topic-box" style={{ marginTop: ".75rem" }}>
          <p className="muted">
            Piensa en esto como un “puente”: <strong>HTML</strong> es la estructura, <strong>CSS</strong> el estilo,
            y <strong>JavaScript</strong> la lógica. El DOM es el mapa que el navegador crea para que puedas
            acceder a cada elemento como si fuera un objeto.
          </p>

          <div
            className="grid"
            style={{
              display: "grid",
              gap: ".75rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginTop: ".75rem",
            }}
          >
            <div className="card" style={{ padding: ".9rem" }}>
              <div className="badge" style={{ display: "inline-flex" }}>📺 DOM</div>
              <h3 style={{ marginTop: ".55rem" }}>Controlar elementos</h3>
              <p className="muted" style={{ marginTop: ".35rem" }}>
                Buscar nodos (<code>getElementById</code>, <code>querySelector</code>) y modificarlos.
              </p>
            </div>

            <div className="card" style={{ padding: ".9rem" }}>
              <div className="badge" style={{ display: "inline-flex" }}>⚡ Eventos</div>
              <h3 style={{ marginTop: ".55rem" }}>Responder al usuario</h3>
              <p className="muted" style={{ marginTop: ".35rem" }}>
                Clics, teclado, inputs… con <code>addEventListener</code>.
              </p>
            </div>

            <div className="card" style={{ padding: ".9rem" }}>
              <div className="badge" style={{ display: "inline-flex" }}>🌐 BOM</div>
              <h3 style={{ marginTop: ".55rem" }}>Control del navegador</h3>
              <p className="muted" style={{ marginTop: ".35rem" }}>
                <code>window</code>, <code>location</code>, <code>setTimeout</code> y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OBJETIVOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Objetivos</h2>
          <span className="topic-section__meta">objetivos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Qué vas a conseguir al terminar
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Entender qué es el <strong>DOM</strong> y por qué “todo es un objeto”.</li>
              <li>Seleccionar elementos con <code>getElementById</code>, <code>querySelector</code> y <code>querySelectorAll</code>.</li>
              <li>Modificar contenido con <code>textContent</code> e <code>innerHTML</code> (y saber cuándo usar cada uno).</li>
              <li>Escuchar acciones del usuario con <code>addEventListener</code>.</li>
              <li>Cambiar estilos con <code>style</code> y <code>classList</code>.</li>
              <li>Usar temporizadores: <code>setTimeout</code> / <code>setInterval</code> (BOM básico).</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          DIFERENCIA DOM vs BOM
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>DOM vs BOM</h2>
          <span className="topic-section__meta">dom-bom</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Dos siglas que vas a ver mil veces
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="friendly-box">
              <p style={{ marginTop: 0 }}>
                <strong>DOM (Document Object Model)</strong> = la representación del <strong>HTML</strong> en forma de árbol.
                Te permite acceder a títulos, párrafos, botones, inputs…
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>BOM (Browser Object Model)</strong> = lo que rodea a la página: el <strong>navegador</strong>.
                Ventana, URL, historial, temporizadores, etc.
              </p>
            </div>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// DOM: actúas sobre la página
document.querySelector("h1").textContent = "Hola DOM";

// BOM: actúas sobre el navegador
console.log(window.innerWidth);
setTimeout(() => console.log("2 segundos"), 2000);`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          MINI DEMO MENTAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>💡 Mini demo mental</h2>
          <span className="topic-section__meta">mini-demo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">👀</span> Si entiendes esto, ya tienes medio módulo
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Selecciono un elemento del HTML y lo guardo en una variable.</li>
              <li>Escucho un evento (por ejemplo, click).</li>
              <li>Cuando ocurre, cambio texto/HTML/estilo.</li>
            </ol>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`// 1) Selecciono
const btn = document.getElementById("btn");
const out = document.getElementById("out");

// 2) Escucho un evento
btn.addEventListener("click", function () {
  // 3) Modifico la página
  out.textContent = "¡Funciona! Has conectado JS con HTML.";
});`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".6rem" }}>
              En las siguientes lecciones lo haremos paso a paso, con mini ejercicios y retos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO (SIEMPRE)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Tu primer “puente” HTML ↔ JS
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Vas a imaginar este HTML:
            </p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btn">Pulsa</button>
<p id="out">Esperando...</p>`}</code>
              </pre>
            </div>

            <p style={{ marginTop: ".75rem" }}>
              Tu tarea: escribe JavaScript para que al pulsar el botón, el párrafo pase a decir:
              <strong> "¡Hola DOM!"</strong>
            </p>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Haz que el mensaje cambie alternando entre <code>"¡Hola DOM!"</code> y <code>"Esperando..."</code>
              cada vez que pulses (pista: usa un <code>if</code> y <code>textContent</code>).
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
                <code>{`// 1) Selecciono los elementos (una vez)
const btn = document.getElementById("btn");
const out = document.getElementById("out");

// 2) Escucho el click
btn.addEventListener("click", function () {
  // 3) Leo el texto actual y decido el siguiente
  if (out.textContent === "Esperando...") {
    out.textContent = "¡Hola DOM!";
  } else {
    out.textContent = "Esperando...";
  }
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* CIERRE */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">🚀 Siguiente paso</h2>
          <p className="muted">
            Empieza por <strong>8.1 DOM</strong>: aprenderás a “agarrar” elementos del HTML con selectores,
            como si tuvieras un mando a distancia.
          </p>
        </div>
      </section>
    </article>
  );
}
