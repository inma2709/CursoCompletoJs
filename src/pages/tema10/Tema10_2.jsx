// src/pages/tema10/Tema10_1.jsx
export default function Tema10_1() {
  return (
    <article className="topic">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M10 · 10.1</span>
          <h1>Pensar antes de programar</h1>
          <p className="muted">
            El error típico del principiante es escribir código “a ver si funciona”.
            El objetivo aquí es aprender el paso previo:{" "}
            <strong>pensar la solución</strong> con claridad antes de tocar el teclado.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>La idea clave</h2>
          <span className="topic-section__meta">clave</span>
        </div>

        <p>
          Programar no es “saber sintaxis”. Programar es{" "}
          <strong>resolver un problema</strong>.  
          Y para resolverlo, necesitas un plan.
        </p>

        <div className="callout">
          <strong>Regla de oro:</strong> si no puedes explicar tu solución en español
          (paso a paso), tampoco podrás codificarla bien.
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          MAPA MENTAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>El mapa mental en 4 preguntas</h2>
          <span className="topic-section__meta">mapa</span>
        </div>

        <p className="muted">
          Antes de programar, responde esto. Siempre.
        </p>

        <ol>
          <li>
            <strong>¿Qué entra?</strong> (inputs)
            <br />
            Datos que me da el usuario o el sistema: texto, número, clic, lista…
          </li>
          <li>
            <strong>¿Qué sale?</strong> (outputs)
            <br />
            Qué quiero mostrar o devolver: mensaje, resultado, lista, cambio visual…
          </li>
          <li>
            <strong>¿Qué pasos hay en medio?</strong> (lógica)
            <br />
            Comparar, calcular, filtrar, repetir, transformar…
          </li>
          <li>
            <strong>¿Dónde se ve?</strong> (DOM)
            <br />
            En qué elemento HTML se pinta el resultado: <code>p</code>, <code>div</code>, lista…
          </li>
        </ol>
      </section>

      <div className="divider" />

      {/* =========================
          PLANTILLA UNIVERSAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Plantilla universal (la usarás siempre)</h2>
          <span className="topic-section__meta">plantilla</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> 1) Escribe el plan en español (sin código)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Ejemplo de plan (sin escribir una sola línea de JavaScript):
            </p>
            <ul>
              <li>Leer el texto del input.</li>
              <li>Limpiar espacios con <code>trim()</code>.</li>
              <li>Si está vacío, mostrar error.</li>
              <li>Si no, mostrar saludo.</li>
            </ul>

            <div className="callout">
              Si el plan tiene más de 6–8 pasos, probablemente necesitas{" "}
              <strong>dividirlo en funciones pequeñas</strong>.
            </div>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">📦</span> 2) Decide tus datos: variables, arrays u objetos
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Pregúntate: ¿voy a guardar <strong>un dato</strong> o{" "}
              <strong>muchos</strong>?
            </p>

            <ul>
              <li>
                Un dato → variable (<code>let nombre</code>, <code>let total</code>)
              </li>
              <li>
                Muchos datos del mismo tipo → array (<code>let tareas = []</code>)
              </li>
              <li>
                Datos con estructura → objeto (<code>let usuario = &#123; nombre: "", edad: 0 &#125;</code>)
              </li>
            </ul>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⚙️</span> 3) Escribe funciones pequeñas (1 tarea = 1 función)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Si una función hace “muchas cosas”, se vuelve difícil de mantener.
              Mejor dividir:
            </p>

            <ul>
              <li><strong>leerDatos()</strong> → recoge inputs</li>
              <li><strong>validar()</strong> → decide si es válido</li>
              <li><strong>calcular()</strong> → lógica pura</li>
              <li><strong>pintar()</strong> → muestra en el DOM</li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`// ✅ Ejemplo de estructura mental (todavía simple)
function leerNombre() { ... }
function validarNombre(nombre) { ... }
function crearSaludo(nombre) { ... }
function pintarMensaje(texto) { ... }`}</code>
              </pre>
            </div>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🖱️</span> 4) Conecta con el DOM (eventos)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              El DOM no debe ser el centro de tu lógica.  
              Primero piensas, luego calculas… y al final pintas.
            </p>

            <div className="callout">
              <strong>Orden recomendado:</strong>  
              evento → leer → validar → calcular → pintar
            </div>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* =========================
          EJEMPLO COMPLETO GUIADO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Ejemplo guiado: Saludo inteligente</h2>
          <span className="topic-section__meta">ejemplo</span>
        </div>

        <p className="muted">
          En este ejemplo aplicamos el método: plan → datos → funciones → DOM.
        </p>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Plan (sin código)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <ol>
              <li>Leer el nombre del input.</li>
              <li>Quitar espacios con <code>trim()</code>.</li>
              <li>Si está vacío, mostrar “Escribe tu nombre”.</li>
              <li>Si tiene contenido, mostrar “Hola, NOMBRE”.</li>
              <li>Opcional: poner el nombre en mayúsculas.</li>
            </ol>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">💻</span> Código (DOM + funciones)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// HTML (idea)
<input id="nombre" />
<button id="btn">Saludar</button>
<p id="salida"></p>

// JS (pasos claros)
const inputNombre = document.getElementById("nombre");
const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

function leerNombre() {
  return inputNombre.value.trim();
}

function crearMensaje(nombre) {
  if (nombre === "") return "⚠️ Escribe tu nombre, por favor.";
  return "👋 Hola, " + nombre.toUpperCase();
}

function pintar(texto) {
  salida.textContent = texto;
}

btn.addEventListener("click", function () {
  const nombre = leerNombre();
  const mensaje = crearMensaje(nombre);
  pintar(mensaje);
});`}</code>
              </pre>
            </div>

            <div className="callout">
              Fíjate en el orden:{" "}
              <strong>evento → leer → crearMensaje → pintar</strong>.
              Esa estructura es la que queremos automatizar en tu cabeza.
            </div>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* =========================
          PRACTICA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Mini práctica (sin solución todavía)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <p>
          Escribe en un folio o en comentarios el <strong>plan en español</strong>
          para este ejercicio:
        </p>

        <div className="callout">
          <strong>Ejercicio:</strong> “Calculadora de propina”  
          El usuario escribe el total de la cuenta y un % de propina.  
          Al pulsar un botón, mostrar el total final.
        </div>

        <ul>
          <li>¿Qué entra?</li>
          <li>¿Qué sale?</li>
          <li>¿Qué pasos hay en medio?</li>
          <li>¿En qué elemento lo mostrarías?</li>
        </ul>

        <p className="muted">
          En el 10.2 lo convertimos en código con estructura profesional 😉
        </p>
      </section>
    </article>
  );
}
