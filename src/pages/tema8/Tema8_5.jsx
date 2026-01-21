// src/pages/tema8/Tema8_5.jsx
export default function Tema8_5() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">8.5</span>
          <h1>BOM y window: controlar el navegador</h1>
          <p className="muted">
            Si el <strong>DOM</strong> controla la página, el <strong>BOM</strong> controla el{" "}
            <strong>navegador</strong>. Aquí vas a aprender lo más usado de <code>window</code>:
            <strong> alert</strong>, <strong>confirm</strong>, <strong>prompt</strong>,{" "}
            <strong> location</strong> y temporizadores como <strong>setTimeout</strong> /
            <strong> setInterval</strong>.
          </p>
        </div>
      </header>

      {/* =========================
          BOM: CONCEPTO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🌐 ¿Qué es el BOM?</h2>
          <span className="topic-section__meta">bom</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧭</span> BOM = Browser Object Model
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              El <strong>BOM</strong> (Browser Object Model) es el conjunto de objetos que te da el
              navegador para controlar cosas “de fuera” del HTML: la ventana, la URL, el historial,
              la pantalla, diálogos, temporizadores…
            </p>

            <div className="friendly-box">
              ✅ Idea clave: <strong>DOM</strong> → tu página. <strong>BOM</strong> → el navegador que
              muestra esa página.
            </div>

            <div className="code-example">
              <pre>
                <code>{`// Casi todo cuelga de window
console.log(window);

// Y muchas veces puedes omitir "window."
alert("Hola");        // window.alert(...)
setTimeout(() => {}, 1000); // window.setTimeout(...)`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          WINDOW + INFO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) window: el “jefe” del navegador</h2>
          <span className="topic-section__meta">window</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🪟</span> Tamaño, URL, navegación, pantalla
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>window</code> representa la ventana del navegador. Con él puedes consultar
              información útil:
            </p>

            <div className="code-example">
              <pre>
                <code>{`console.log("Ancho ventana:", window.innerWidth);
console.log("Alto ventana:", window.innerHeight);

console.log("URL actual:", window.location.href);
console.log("Dominio:", window.location.hostname);
console.log("Ruta:", window.location.pathname);`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">⚠️</span> Ojo: window.location cambia de página
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <p className="muted">
                  Cambiar <code>window.location</code> navega a otra URL (te saca de la página).
                  Úsalo solo cuando de verdad quieras redirigir.
                </p>

                <div className="code-example">
                  <pre>
                    <code>{`// Redirigir (cambia de página)
window.location.href = "https://example.com";

// Recargar
window.location.reload();`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          DIALOGOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) alert, confirm y prompt</h2>
          <span className="topic-section__meta">dialogos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">💬</span> Los diálogos clásicos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Son funciones muy conocidas. Bloquean la página mientras están abiertas (por eso en apps
              modernas se usan menos), pero para aprender vienen genial.
            </p>

            <ul>
              <li>
                <code>alert("mensaje")</code> → muestra un aviso.
              </li>
              <li>
                <code>confirm("pregunta")</code> → devuelve <code>true</code> o <code>false</code>.
              </li>
              <li>
                <code>prompt("pregunta")</code> → devuelve texto o <code>null</code> si cancelas.
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`alert("Hola 👋");

const ok = confirm("¿Quieres continuar?");
console.log(ok); // true/false

const nombre = prompt("¿Cómo te llamas?");
console.log(nombre); // string o null`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              ✅ Consejo: con <code>prompt</code>, valida siempre: puede venir vacío o <code>null</code>.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          TEMPORIZADORES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) setTimeout y setInterval</h2>
          <span className="topic-section__meta">tiempo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⏱️</span> Controlar el tiempo: “ahora” y “cada X”
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Los temporizadores sirven para ejecutar código después de un tiempo o repetidamente:
            </p>

            <ul>
              <li>
                <strong>setTimeout</strong>: ejecuta una vez tras X ms.
              </li>
              <li>
                <strong>setInterval</strong>: ejecuta cada X ms hasta que lo pares.
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`// 1) setTimeout: una vez
setTimeout(function () {
  console.log("Esto sale después de 2 segundos");
}, 2000);

// 2) setInterval: repetido
let contador = 0;
const id = setInterval(function () {
  contador++;
  console.log("Tick", contador);

  if (contador === 5) {
    clearInterval(id); // parar
  }
}, 1000);`}</code>
              </pre>
            </div>

            <div className="friendly-box">
              🧠 Pista: <code>setInterval</code> siempre se para con <code>clearInterval(id)</code>.
              Guarda el “id” en una variable.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 1: Confirm para “salir” o “quedarte”</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1️⃣</span> confirm() devuelve true/false
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un botón: al pulsarlo, preguntas con <code>confirm</code> si quiere salir.
              Si dice que sí, muestras un mensaje en pantalla (no redirijas todavía).
            </p>

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
                    <code>{`<button id="btnConfirm">¿Salir?</button>
<p id="msgConfirm">Pulsa el botón…</p>

<script>
const btn = document.getElementById("btnConfirm");
const msg = document.getElementById("msgConfirm");

btn.addEventListener("click", function () {
  const quiereSalir = confirm("¿Seguro que quieres salir?");
  msg.textContent = quiereSalir
    ? "Has dicho SÍ ✅ (en una app real aquí podrías redirigir)"
    : "Has dicho NO 🙌 te quedas aquí";
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
          EJERCICIO 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 2: Prompt + validación</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2️⃣</span> prompt() + trim() + null
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Pide el nombre con <code>prompt</code>. Si cancela o deja vacío, muestra un mensaje de aviso.
              Si escribe bien, saluda.
            </p>

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
                    <code>{`<button id="btnPrompt">Pedir nombre</button>
<p id="msgPrompt">Esperando…</p>

<script>
const btn = document.getElementById("btnPrompt");
const msg = document.getElementById("msgPrompt");

btn.addEventListener("click", function () {
  const nombre = prompt("¿Cómo te llamas?");
  if (nombre === null) {
    msg.textContent = "Has cancelado 🙅‍♀️";
    return;
  }

  const limpio = nombre.trim();
  if (limpio === "") {
    msg.textContent = "Escribe un nombre válido ✍️";
    return;
  }

  msg.textContent = "Hola, " + limpio + " 👋";
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
          EJERCICIO 3
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 3: Mensaje que desaparece (setTimeout)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">3️⃣</span> setTimeout para “auto-ocultar”
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Al pulsar un botón, muestras un mensaje y lo borras a los 2 segundos.
            </p>

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
                    <code>{`<button id="btnTimeout">Mostrar aviso</button>
<p id="msgTimeout"></p>

<script>
const btn = document.getElementById("btnTimeout");
const msg = document.getElementById("msgTimeout");

btn.addEventListener("click", function () {
  msg.textContent = "✅ Guardado correctamente (se irá en 2s)…";

  setTimeout(function () {
    msg.textContent = "";
  }, 2000);
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
          MINI APP
      ========================= */}
      <section className="topic-section">
        <div className="topic-box">
          <h2 className="section-title">🎯 Mini app: Temporizador (Start / Stop)</h2>
          <p className="muted">
            Mezclamos BOM + DOM: un contador que sube cada segundo y se puede parar.
          </p>

          <details className="topic-details" open style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">🧩</span> Código completo (orientativo)
              </span>
              <span className="chev" aria-hidden="true">⌄</span>
            </summary>

            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`<p id="reloj">⏱️ 0</p>
<button id="btnStart">Start</button>
<button id="btnStop">Stop</button>
<button id="btnReset">Reset</button>

<script>
let segundos = 0;
let intervalo = null;

const reloj = document.getElementById("reloj");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");

function pintar() {
  reloj.textContent = "⏱️ " + segundos;
}

btnStart.addEventListener("click", function () {
  if (intervalo) return; // ya está corriendo
  intervalo = setInterval(function () {
    segundos++;
    pintar();
  }, 1000);
});

btnStop.addEventListener("click", function () {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
  }
});

btnReset.addEventListener("click", function () {
  segundos = 0;
  pintar();
});

pintar();
</script>`}</code>
                </pre>
              </div>

              <div className="friendly-box">
                ✅ Fíjate en el patrón: guardo el <code>intervalo</code> en una variable,
                y así puedo pararlo. Si no guardas el id, no puedes hacer <code>clearInterval</code>.
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
            En <strong>8.6</strong> hacemos una sesión 100% práctica: actividades guiadas y mini apps
            mezclando DOM + eventos + estilos + BOM.
          </p>
        </div>
      </section>
    </article>
  );
}
