// src/pages/tema8/Tema8_1.jsx
export default function Tema8_1() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.1</span>
          <h1>El DOM: seleccionar elementos del HTML</h1>
          <p className="muted">
            En esta lección aprendes a <strong>acceder al HTML desde JavaScript</strong>.
            Es el primer paso para que tu código pueda <strong>leer y modificar la página</strong>.
          </p>
        </div>
      </header>

      {/* =========================
          ¿QUÉ ES EL DOM?
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🌳 ¿Qué es el DOM?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> La idea clave
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              El <strong>DOM (Document Object Model)</strong> es la representación del HTML
              que crea el navegador para que JavaScript pueda trabajar con él.
            </p>

            <div className="friendly-box">
              <p style={{ margin: 0 }}>
                👉 Cada etiqueta HTML se convierte en un <strong>objeto</strong>.<br />
                👉 Todos esos objetos forman un <strong>árbol</strong>.<br />
                👉 JavaScript puede recorrer ese árbol y modificarlo.
              </p>
            </div>

            <p style={{ marginTop: ".75rem" }}>
              Si no sabes acceder al DOM, JavaScript <strong>no puede tocar la página</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          PRIMER SELECTOR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 getElementById</h2>
          <span className="topic-section__meta">selector</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> El más sencillo
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>getElementById</code> sirve para seleccionar <strong>un elemento concreto</strong>
              usando su atributo <code>id</code>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`// HTML
<h1 id="titulo">Hola</h1>

// JavaScript
const titulo = document.getElementById("titulo");

console.log(titulo);`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              <strong>Regla importante:</strong>
              <ul>
                <li>Un <code>id</code> debe ser <strong>único</strong></li>
                <li>Devuelve <strong>un solo elemento</strong></li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          QUERYSELECTOR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔎 querySelector</h2>
          <span className="topic-section__meta">selector</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> El más usado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>querySelector</code> permite usar <strong>selectores CSS</strong>.
              Devuelve <strong>el primer elemento</strong> que encuentra.
            </p>

            <div className="code-example">
              <pre>
                <code>{`// HTML
<p class="mensaje">Hola</p>

// JavaScript
const mensaje = document.querySelector(".mensaje");`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              <p style={{ margin: 0 }}>
                Puedes usar:
              </p>
              <ul>
                <li><code>#id</code></li>
                <li><code>.clase</code></li>
                <li><code>etiqueta</code></li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          QUERYSELECTORALL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📦 querySelectorAll</h2>
          <span className="topic-section__meta">selector</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">3️⃣</span> Para varios elementos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>querySelectorAll</code> devuelve <strong>una lista de elementos</strong>
              (NodeList).
            </p>

            <div className="code-example">
              <pre>
                <code>{`// HTML
<li class="item">Uno</li>
<li class="item">Dos</li>

// JavaScript
const items = document.querySelectorAll(".item");

console.log(items);`}</code>
              </pre>
            </div>

            <p className="muted">
              Más adelante recorrerás esta lista con <code>for</code> o <code>forEach</code>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Primer contacto real con el DOM
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Imagina este HTML:</p>

            <div className="code-example">
              <pre>
                <code>{`<h2 id="titulo">Título original</h2>
<button id="btn">Cambiar</button>`}</code>
              </pre>
            </div>

            <p>
              👉 Selecciona el <code>h2</code> y el botón.<br />
              👉 Cuando pulses el botón, cambia el texto del título.
            </p>

            <div className="divider" />

            <h3>🎯 Reto</h3>
            <p className="muted">
              Haz que el texto del título alterne entre
              <code>"Título original"</code> y <code>"Título cambiado"</code>.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`const titulo = document.getElementById("titulo");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (titulo.textContent === "Título original") {
    titulo.textContent = "Título cambiado";
  } else {
    titulo.textContent = "Título original";
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
          <h2 className="section-title">➡️ Siguiente paso</h2>
          <p className="muted">
            En <strong>8.2</strong> aprenderás a <strong>modificar contenido</strong>:
            <code>textContent</code> vs <code>innerHTML</code> y cuándo usar cada uno.
          </p>
        </div>
      </section>
    </article>
  );
}
