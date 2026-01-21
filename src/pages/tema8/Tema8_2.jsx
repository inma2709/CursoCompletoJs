// src/pages/tema8/Tema8_2.jsx
export default function Tema8_2() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.2</span>
          <h1>Modificar contenido: textContent vs innerHTML</h1>
          <p className="muted">
            Ahora que ya sabes <strong>seleccionar elementos del DOM</strong>,
            vamos a aprender a <strong>cambiar lo que muestran</strong>.
            Este es el primer paso real hacia la interactividad.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧠 Idea clave</h2>
          <span className="topic-section__meta">fundamento</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Qué vas a aprender aquí
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una vez que tienes un elemento HTML en una variable,
              puedes <strong>cambiar su contenido</strong>.
            </p>

            <div className="friendly-box">
              <ul style={{ margin: 0 }}>
                <li><code>textContent</code> → solo texto</li>
                <li><code>innerHTML</code> → texto + HTML</li>
              </ul>
            </div>

            <p style={{ marginTop: ".75rem" }}>
              Parecen similares, pero <strong>no se usan para lo mismo</strong>.
              Saber elegir bien evita errores y problemas de seguridad.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          TEXTCONTENT
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>✏️ textContent</h2>
          <span className="topic-section__meta">contenido</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> Solo texto, sin HTML
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>textContent</code> cambia <strong>únicamente el texto</strong>
              de un elemento. Si escribes etiquetas HTML, el navegador
              <strong>no las interpreta</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const parrafo = document.getElementById("mensaje");

parrafo.textContent = "Hola mundo";
parrafo.textContent = "<strong>Hola</strong>";`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              <strong>Resultado:</strong><br />
              Se mostrará literalmente: <br />
              <code>&lt;strong&gt;Hola&lt;/strong&gt;</code>
            </div>

            <p className="muted">
              ✅ Es seguro <br />
              ✅ Es rápido <br />
              ✅ Es la opción por defecto cuando solo quieres texto
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          INNERHTML
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧩 innerHTML</h2>
          <span className="topic-section__meta">contenido</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> Texto + etiquetas HTML
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>innerHTML</code> permite insertar <strong>HTML real</strong>
              dentro de un elemento.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const parrafo = document.getElementById("mensaje");

parrafo.innerHTML = "<strong>Hola</strong> <em>mundo</em>";`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              <strong>Resultado:</strong><br />
              El texto aparece con <strong>negrita</strong> y <em>cursiva</em>.
            </div>

            <p className="muted">
              ⚠️ Debes usarlo con cuidado si el contenido viene del usuario.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          COMPARACIÓN
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">⚖️ Comparación rápida</h2>

          <div className="friendly-box">
            <ul>
              <li>
                <strong>textContent</strong>: texto plano, seguro
              </li>
              <li>
                <strong>innerHTML</strong>: interpreta HTML
              </li>
              <li>
                Si dudas → usa <strong>textContent</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          EJERCICIO GUIADO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio guiado</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Cambiando mensajes
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>HTML de partida:</p>

            <div className="code-example">
              <pre>
                <code>{`<p id="texto">Texto original</p>
<button id="btnTexto">Cambiar texto</button>
<button id="btnHTML">Cambiar con HTML</button>`}</code>
              </pre>
            </div>

            <p>
              👉 El primer botón debe usar <code>textContent</code><br />
              👉 El segundo botón debe usar <code>innerHTML</code>
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
                <code>{`const texto = document.getElementById("texto");
const btnTexto = document.getElementById("btnTexto");
const btnHTML = document.getElementById("btnHTML");

btnTexto.addEventListener("click", function () {
  texto.textContent = "Texto cambiado con textContent";
});

btnHTML.addEventListener("click", function () {
  texto.innerHTML = "<strong>Texto</strong> cambiado con <em>innerHTML</em>";
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">➡️ Siguiente paso</h2>
          <p className="muted">
            En <strong>8.3</strong> aprenderás a <strong>reaccionar al usuario</strong>:
            eventos y <code>addEventListener</code>.
          </p>
        </div>
      </section>
    </article>
  );
}
