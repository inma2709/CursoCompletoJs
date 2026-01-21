// src/pages/tema8/Tema8_4.jsx
export default function Tema8_4() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.4</span>
          <h1>Modificar estilos con JavaScript</h1>
          <p className="muted">
            Ahora que ya sabes escuchar eventos, toca lo más visual:{" "}
            <strong>cambiar estilos en tiempo real</strong>. Vamos a aprender a:
            <strong> style</strong>, <strong>classList</strong> y{" "}
            <strong>toggle</strong> con ejercicios cortos y muy prácticos.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧠 Dos formas de cambiar el aspecto</h2>
          <span className="topic-section__meta">fundamento</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎨</span> style vs classList
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para cambiar estilos desde JavaScript tienes dos caminos:
            </p>

            <ul>
              <li>
                <strong>1) style</strong>: cambia estilos directamente (rápido para pruebas).
              </li>
              <li>
                <strong>2) classList</strong>: añades/quitas clases CSS (lo más profesional).
              </li>
            </ul>

            <div className="friendly-box">
              ✅ Regla docente: <strong>usa classList</strong> cuando el estilo se
              repite o va a crecer. Usa <strong>style</strong> para cambios puntuales.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          STYLE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) style: cambiar CSS desde JavaScript</h2>
          <span className="topic-section__meta">style</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚡</span> Cambios rápidos (color, fondo, tamaño…)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>element.style</code> te deja modificar propiedades CSS desde JS.
              Las propiedades con guiones se escriben en <strong>camelCase</strong>:
            </p>

            <ul>
              <li>
                <code>background-color</code> → <code>backgroundColor</code>
              </li>
              <li>
                <code>font-size</code> → <code>fontSize</code>
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const caja = document.getElementById("caja");
caja.style.backgroundColor = "yellow";
caja.style.color = "black";
caja.style.padding = "12px";
caja.style.borderRadius = "12px";`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              💡 Truco: con <strong>style</strong> escribes el CSS “en línea” como si lo pusieras
              en el HTML. Va bien para aprender, pero en proyectos grandes mejor con clases.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CLASSLIST
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) classList: la forma pro</h2>
          <span className="topic-section__meta">classList</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🏷️</span> Añadir y quitar clases
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Con <code>classList</code> no “pintas” estilos en JS:{" "}
              <strong>pones clases</strong> que ya existen en CSS.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const caja = document.getElementById("caja");

// añade una clase
caja.classList.add("destacado");

// quita una clase
caja.classList.remove("destacado");

// comprueba si existe
console.log(caja.classList.contains("destacado"));`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              ✅ Esto es lo que haces en React y en proyectos reales:
              el CSS vive en CSS, y JS solo decide <strong>qué clase</strong> poner.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          TOGGLE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) toggle: el interruptor</h2>
          <span className="topic-section__meta">toggle</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔀</span> Si está, la quita; si no está, la pone
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>toggle</code> es el típico “modo ON/OFF”.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const caja = document.getElementById("caja");
caja.classList.toggle("destacado");`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              🧠 Ideal para: mostrar/ocultar, activar/desactivar, modo oscuro, marcar como completado, etc.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 1: Cambiar color con style</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> style.color y style.backgroundColor
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Objetivo: al hacer clic, cambia el fondo y el color del texto.</p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btnColor">Cambiar color</button>
<p id="textoColor">Soy un texto que cambiará</p>`}</code>
              </pre>
            </div>

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
                    <code>{`const btn = document.getElementById("btnColor");
const texto = document.getElementById("textoColor");

btn.addEventListener("click", function () {
  texto.style.backgroundColor = "yellow";
  texto.style.color = "black";
  texto.style.padding = "10px";
  texto.style.borderRadius = "12px";
});`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 2: Añadir una clase con classList.add</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> classList.add() y remove()
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Objetivo: un botón activa el estilo “destacado” y otro lo quita.
            </p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btnOn">Activar</button>
<button id="btnOff">Quitar</button>

<div id="caja" class="caja-demo">Caja demo</div>

/* CSS */
.caja-demo { padding: 14px; border: 1px solid #ddd; border-radius: 12px; }
.destacado { background: #ff9800; color: white; font-weight: bold; }`}</code>
              </pre>
            </div>

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
                    <code>{`const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const caja = document.getElementById("caja");

btnOn.addEventListener("click", function () {
  caja.classList.add("destacado");
});

btnOff.addEventListener("click", function () {
  caja.classList.remove("destacado");
});`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 3
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 3: Toggle (modo ON/OFF)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">3️⃣</span> classList.toggle()
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Objetivo: con un solo botón, activa y desactiva el estilo.
            </p>

            <div className="code-example">
              <pre>
                <code>{`<button id="btnToggle">Activar / desactivar</button>
<p id="textoToggle" class="texto-demo">Soy un texto normal</p>

/* CSS */
.texto-demo { padding: 12px; border-radius: 12px; border: 1px solid #ddd; }
.activo { background: #4caf50; color: white; font-weight: 700; }`}</code>
              </pre>
            </div>

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
                    <code>{`const btn = document.getElementById("btnToggle");
const texto = document.getElementById("textoToggle");

btn.addEventListener("click", function () {
  texto.classList.toggle("activo");
});`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          RETO PRACTICO
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">🎯 Reto práctico: “Modo oscuro” (mini)</h2>
          <p className="muted">
            Haz un botón que active/desactive un modo oscuro en la página.
          </p>

          <ul>
            <li>Cuando esté activado: fondo oscuro + texto claro</li>
            <li>Cuando esté desactivado: fondo claro + texto oscuro</li>
            <li>Usa <code>classList.toggle()</code></li>
          </ul>

          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">✅</span> Solución orientativa
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`/* HTML */
<button id="btnDark">Modo oscuro</button>

/* CSS */
.dark-mode { background: #111; color: #f2f2f2; }

/* JS */
const btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});`}</code>
                </pre>
              </div>

              <div className="friendly-box">
                💡 Esto es exactamente el patrón real:
                <strong> un botón</strong> + <strong>toggle</strong> + <strong>una clase</strong>.
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">➡️ Siguiente paso</h2>
          <p className="muted">
            En <strong>8.5</strong> entramos en el navegador:{" "}
            <strong>window</strong>, <strong>alert/prompt</strong> y{" "}
            <strong>setTimeout</strong>. (Aquí ya puedes montar mini apps “de verdad”.)
          </p>
        </div>
      </section>
    </article>
  );
}
