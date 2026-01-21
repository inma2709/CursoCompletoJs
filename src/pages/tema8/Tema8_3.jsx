// src/pages/tema8/Tema8_3.jsx
export default function Tema8_3() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.3</span>
          <h1>Eventos y addEventListener</h1>
          <p className="muted">
            Hasta ahora cambiábamos el contenido “a mano”.
            Ahora vamos a hacer que <strong>la página reaccione al usuario</strong>:
            clics, escritura, cambios… aquí empieza la interactividad real.
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
              <span className="badge">🎯</span> Qué es un evento
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>evento</strong> es algo que hace el usuario:
            </p>

            <ul>
              <li>Hacer clic</li>
              <li>Escribir en un input</li>
              <li>Elegir una opción</li>
              <li>Pasar el ratón</li>
            </ul>

            <div className="friendly-box">
              JavaScript puede <strong>escuchar</strong> esos eventos y
              ejecutar código cuando ocurren.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ADD EVENT LISTENER
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎧 addEventListener()</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> La forma correcta de escuchar eventos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Sintaxis general:</p>

            <div className="code-example">
              <pre>
                <code>{`elemento.addEventListener("evento", function () {
  // código que se ejecuta
});`}</code>
              </pre>
            </div>

            <p className="muted">
              📌 Importante: <strong>no se ejecuta al cargar la página</strong>,
              solo cuando ocurre el evento.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 1: Primer clic</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> Escuchar un botón
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>HTML de partida:</p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btnSaludar">Saludar</button>
<p id="mensaje"></p>`}</code>
              </pre>
            </div>

            <p>
              👉 Al hacer clic en el botón, debe aparecer un mensaje en el párrafo.
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
                <code>{`const boton = document.getElementById("btnSaludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Hola! Has hecho clic en el botón";
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 2: Contador de clics</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> Usando variables + eventos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cada clic debe aumentar un número y mostrarlo en pantalla.
            </p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btnContar">Clics</button>
<p id="contador">Clics: 0</p>`}</code>
              </pre>
            </div>
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
                <code>{`const boton = document.getElementById("btnContar");
const contador = document.getElementById("contador");

let clicks = 0;

boton.addEventListener("click", function () {
  clicks++;
  contador.textContent = "Clics: " + clicks;
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 3 (INPUT)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 3: Reaccionar al input</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">3️⃣</span> Evento input
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cada vez que el alumno escriba, el texto debe aparecer en pantalla.
            </p>

            <div className="code-example">
              <pre>
                <code>{`<input id="nombre" placeholder="Escribe tu nombre" />
<p id="saludo"></p>`}</code>
              </pre>
            </div>
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
                <code>{`const input = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

input.addEventListener("input", function () {
  saludo.textContent = "Hola " + input.value;
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          RETO
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">🎯 Reto</h2>
          <p className="muted">
            Crea un botón que:
          </p>
          <ul>
            <li>Empiece mostrando “Mostrar mensaje”</li>
            <li>Al hacer clic, muestre un texto</li>
            <li>Si vuelves a hacer clic, lo oculte</li>
          </ul>

          <div className="friendly-box">
            💡 Pista: usa una variable booleana (<code>true / false</code>)
            y un condicional.
          </div>
        </div>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">➡️ Siguiente paso</h2>
          <p className="muted">
            En <strong>8.4</strong> vamos a trabajar con
            <strong> eventos + condiciones + HTML dinámico</strong>
            (mini ejercicios tipo app).
          </p>
        </div>
      </section>
    </article>
  );
}
