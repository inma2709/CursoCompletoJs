// src/pages/tema8/Tema8_6.jsx
export default function Tema8_6() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.6</span>
          <h1>Actividades guiadas y mini apps (DOM + Eventos + BOM)</h1>
          <p className="muted">
            Aquí consolidamos TODO lo visto en el Tema 8. No hay teoría nueva:
            <strong> practicar, entender y ganar confianza</strong>. Cada ejercicio tiene guía y una
            posible solución comentada.
          </p>
        </div>
      </header>

      {/* =========================
          ACTIVIDAD 1
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Actividad 1: Contador con botones</h2>
          <span className="topic-section__meta">dom-eventos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> click + textContent
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un contador que empiece en 0 y tenga tres botones:
              <strong> sumar</strong>, <strong>restar</strong> y <strong>reset</strong>.
            </p>

            <ol>
              <li>Crea un <code>&lt;p&gt;</code> para mostrar el número.</li>
              <li>Usa una variable <code>contador</code>.</li>
              <li>Actualiza el texto cada vez que pulses un botón.</li>
            </ol>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Posible solución comentada
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`<p id="contador">0</p>
<button id="sumar">+</button>
<button id="restar">-</button>
<button id="reset">Reset</button>

<script>
let valor = 0;

const p = document.getElementById("contador");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnReset = document.getElementById("reset");

function pintar() {
  p.textContent = valor;
}

btnSumar.addEventListener("click", function () {
  valor++;
  pintar();
});

btnRestar.addEventListener("click", function () {
  valor--;
  pintar();
});

btnReset.addEventListener("click", function () {
  valor = 0;
  pintar();
});

pintar();
</script>`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          ACTIVIDAD 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Actividad 2: Validar formulario simple</h2>
          <span className="topic-section__meta">input</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> input + condiciones
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Pide el nombre con un <code>&lt;input&gt;</code> y un botón.  
              Si el campo está vacío, muestra error.  
              Si está correcto, muestra un saludo.
            </p>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Posible solución comentada
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`<input id="nombre" placeholder="Tu nombre" />
<button id="saludar">Saludar</button>
<p id="mensaje"></p>

<script>
const input = document.getElementById("nombre");
const btn = document.getElementById("saludar");
const msg = document.getElementById("mensaje");

btn.addEventListener("click", function () {
  const valor = input.value.trim();

  if (valor === "") {
    msg.textContent = "❌ El nombre no puede estar vacío";
  } else {
    msg.textContent = "Hola, " + valor + " 👋";
  }
});
</script>`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          ACTIVIDAD 3
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Actividad 3: Cambiar estilos con classList</h2>
          <span className="topic-section__meta">estilos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">3️⃣</span> classList.toggle
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Al pulsar un botón, cambia el aspecto de una caja usando una clase CSS.
            </p>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Posible solución comentada
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`<style>
.caja {
  padding: 1rem;
  border: 2px solid #ccc;
}
.activa {
  background: #e3fcec;
  border-color: #13aa52;
}
</style>

<div id="caja" class="caja">Soy una caja</div>
<button id="toggle">Activar / Desactivar</button>

<script>
const caja = document.getElementById("caja");
const btn = document.getElementById("toggle");

btn.addEventListener("click", function () {
  caja.classList.toggle("activa");
});
</script>`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          MINI APP FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">🎯 Mini app final: Temporizador de descanso</h2>
          <p className="muted">
            Mezcla todo: DOM + eventos + BOM (<code>setInterval</code>).
          </p>

          <details className="topic-details" open style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">🏁</span> Código completo (guiado)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <p>
                Al pulsar <strong>Start</strong>, empieza a contar segundos.  
                Al llegar a 5, muestra un aviso y se para solo.
              </p>

              <div className="code-example">
                <pre>
                  <code>{`<p id="tiempo">⏱️ 0</p>
<button id="start">Start</button>

<script>
let segundos = 0;
let intervalo = null;

const p = document.getElementById("tiempo");
const btn = document.getElementById("start");

btn.addEventListener("click", function () {
  if (intervalo) return;

  intervalo = setInterval(function () {
    segundos++;
    p.textContent = "⏱️ " + segundos;

    if (segundos === 5) {
      clearInterval(intervalo);
      intervalo = null;
      alert("⏸️ Descanso terminado");
    }
  }, 1000);
});
</script>`}</code>
                </pre>
              </div>

              <div className="friendly-box">
                💡 Este ejercicio es clave: demuestra que ya sabes controlar
                <strong> la página</strong> y <strong>el tiempo</strong>.
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
          <h2 className="section-title">🎉 Fin del Tema 8</h2>
          <p className="muted">
            Ya sabes manipular el DOM, responder a eventos y usar el BOM.
            A partir de aquí, <strong>ya puedes crear interactividad real</strong>.
          </p>
          <p className="muted">
            👉 Siguiente gran salto: <strong>integrar todo en proyectos más grandes</strong> y empezar
            a pensar como desarrollador/a frontend.
          </p>
        </div>
      </section>
    </article>
  );
}
