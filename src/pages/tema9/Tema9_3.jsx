// src/pages/tema9/Tema9_3.jsx
export default function Tema9_3() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9.3</span>
          <h1>Tema 9.3 · Arrays + DOM</h1>
          <p className="muted">
            La combinación clave: recorrer un array y “pintarlo” en pantalla creando elementos HTML con JavaScript.
          </p>
        </div>
      </header>

      {/* =========================
          OBJETIVO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Qué vas a aprender aquí</h2>
          <span className="topic-section__meta">objetivo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Lo que vas a dominar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Convertir un array en una lista visible (<code>&lt;ul&gt;&lt;li&gt;</code>) usando JS.
              </li>
              <li>
                Crear elementos: <code>document.createElement()</code>.
              </li>
              <li>
                Insertarlos en el DOM: <code>appendChild()</code>.
              </li>
              <li>
                Limpiar antes de volver a pintar: <code>lista.innerHTML = ""</code>.
              </li>
              <li>
                Recorrer arrays para pintar: <code>for...of</code> y <code>forEach</code>.
              </li>
              <li>
                Diferencia práctica entre <code>textContent</code> e <code>innerHTML</code> al pintar.
              </li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Idea clave:</strong> en apps reales los datos viven en arrays/objetos y el DOM es
                “la pantalla”. Tú escribes una función que transforma datos → HTML.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          PATRÓN: DATOS -> PINTAR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧩 1) El patrón mental: datos → pintar → datos → repintar</h2>
          <span className="topic-section__meta">patron</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔁</span> La regla de oro
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>
                Tienes un <strong>array</strong> con datos (por ejemplo, tareas).
              </li>
              <li>
                Cambias el array (añadir/quitar).
              </li>
              <li>
                Llamas a una función <code>render()</code> que <strong>vuelve a dibujar</strong> la lista.
              </li>
            </ol>

            <div className="code-example">
              <pre>
                <code>{`// 1) Datos (estado)
let tareas = ["Estudiar arrays", "Practicar DOM"];

// 2) Render (pintar)
function renderTareas() {
  // (aquí dibujas en pantalla)
}

// 3) Cambias datos -> render
tareas.push("Hacer ejercicios");
renderTareas();`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Esto es exactamente lo que hará React más adelante, pero aquí lo hacemos “a mano” para entenderlo.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CREAR ELEMENTOS Y APPEND
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧱 2) Crear elementos: createElement + appendChild</h2>
          <span className="topic-section__meta">create</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧱</span> Construir un &lt;li&gt; desde cero
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted" style={{ marginTop: 0 }}>
              Este es el método más limpio y seguro para crear HTML dinámico: creas nodos y los insertas.
            </p>

            <div className="code-example">
              <pre>
                <code>{`// HTML: <ul id="lista"></ul>

const lista = document.getElementById("lista");

// 1) Crear el <li>
const li = document.createElement("li");

// 2) Poner texto
li.textContent = "Elemento creado desde JS";

// 3) Insertarlo en la lista
lista.appendChild(li);`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Tip:</strong> usa <code>textContent</code> para texto. Evita <code>innerHTML</code> si
                el contenido viene del usuario.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          RENDER LISTA COMPLETA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧼 3) Renderizar una lista completa (y limpiarla antes)</h2>
          <span className="topic-section__meta">render</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧼</span> El paso que evita duplicados
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Si repintas sin limpiar, te saldrán elementos repetidos. Lo típico es:
            </p>
            <ul>
              <li>
                <strong>1)</strong> Limpiar: <code>lista.innerHTML = ""</code>
              </li>
              <li>
                <strong>2)</strong> Recorrer el array
              </li>
              <li>
                <strong>3)</strong> Crear <code>&lt;li&gt;</code> y hacer <code>appendChild</code>
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`// HTML: <ul id="lista"></ul>

const lista = document.getElementById("lista");
const frutas = ["manzana", "pera", "uva"];

function renderFrutas() {
  // 1) limpiar
  lista.innerHTML = "";

  // 2) recorrer y crear <li>
  for (const fruta of frutas) {
    const li = document.createElement("li");
    li.textContent = fruta;
    lista.appendChild(li);
  }
}

renderFrutas();`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">👀</span> Variante con forEach
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`function renderFrutas() {
  lista.innerHTML = "";

  frutas.forEach(function (fruta) {
    const li = document.createElement("li");
    li.textContent = fruta;
    lista.appendChild(li);
  });
}`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJEMPLO GUIADO: LISTA COMPRA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🛒 4) Ejemplo guiado: Lista de la compra</h2>
          <span className="topic-section__meta">guiado</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🛒</span> Datos + botones + render
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Este patrón se repite siempre:
              <strong> input → array → render</strong>.
            </p>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧱</span> HTML mínimo
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`<input id="producto" placeholder="Escribe un producto..." />
<button id="btn-agregar">Añadir</button>
<button id="btn-borrar">Borrar último</button>

<ul id="lista-compra"></ul>

<p id="info"></p>`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">⚙️</span> JavaScript (completo)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`// ====== ESTADO (datos) ======
let compra = [];

// ====== REFERENCIAS DOM ======
const input = document.getElementById("producto");
const btnAgregar = document.getElementById("btn-agregar");
const btnBorrar = document.getElementById("btn-borrar");
const lista = document.getElementById("lista-compra");
const info = document.getElementById("info");

// ====== RENDER ======
function renderCompra() {
  lista.innerHTML = "";

  for (const producto of compra) {
    const li = document.createElement("li");
    li.textContent = producto;
    lista.appendChild(li);
  }

  info.textContent = "Total productos: " + compra.length;
}

// ====== ACCIONES ======
function agregarProducto() {
  const texto = input.value.trim();

  if (texto === "") {
    info.textContent = "⚠️ Escribe un producto primero.";
    return;
  }

  compra.push(texto);
  input.value = "";
  renderCompra();
}

function borrarUltimo() {
  if (compra.length === 0) {
    info.textContent = "⚠️ No hay nada que borrar.";
    return;
  }

  compra.pop();
  renderCompra();
}

// ====== EVENTOS ======
btnAgregar.addEventListener("click", agregarProducto);
btnBorrar.addEventListener("click", borrarUltimo);

// Enter para agregar
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") agregarProducto();
});

// Pintado inicial
renderCompra();`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Qué estás practicando:</strong> arrays (<code>push/pop</code>), DOM
                (<code>getElementById</code>, <code>createElement</code>, <code>appendChild</code>) y eventos
                (<code>addEventListener</code>).
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          INNERHTML VS CREATEELEMENT
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>⚠️ 5) innerHTML para pintar: cuándo sí y cuándo NO</h2>
          <span className="topic-section__meta">seguridad</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> Rápido vs seguro
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              A veces verás esto:
            </p>

            <div className="code-example">
              <pre>
                <code>{`// ❌ (para empezar puede servir, pero ojo si viene de usuario)
lista.innerHTML = "";

for (const producto of compra) {
  lista.innerHTML += "<li>" + producto + "</li>";
}`}</code>
              </pre>
            </div>

            <ul>
              <li>
                Es <strong>rápido de escribir</strong>.
              </li>
              <li>
                Pero si <code>producto</code> viene de un usuario, podría colar HTML “raro” (seguridad).
              </li>
              <li>
                En general, para aprender bien: <strong>createElement + textContent</strong>.
              </li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Regla fácil: si es texto del usuario → <code>textContent</code>. Si tú controlas el HTML →
                puedes usar <code>innerHTML</code> con cuidado.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO DEL TEMA (CON SOLUCIÓN)
      ========================= */}
      <section className="topic-section" style={{ marginBottom: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Ejercicio del tema · “Top 3 películas”</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎬</span> Practica arrays + DOM
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un input + botón para añadir películas a un array. En pantalla:
            </p>
            <ul>
              <li>Muestra la lista en un <code>&lt;ul&gt;</code>.</li>
              <li>Si hay más de 3, solo muestra las <strong>3 últimas</strong>.</li>
              <li>Incluye un botón “Borrar última”.</li>
            </ul>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Solución propuesta
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`// HTML (mínimo)
<input id="peli" placeholder="Añade una película..." />
<button id="btn-add">Añadir</button>
<button id="btn-del">Borrar última</button>
<ul id="ul-pelis"></ul>
<p id="msg"></p>

// JS
let pelis = [];

const input = document.getElementById("peli");
const add = document.getElementById("btn-add");
const del = document.getElementById("btn-del");
const ul = document.getElementById("ul-pelis");
const msg = document.getElementById("msg");

function render() {
  ul.innerHTML = "";

  const ultimas3 = pelis.slice(-3); // copia las 3 últimas (no modifica)
  for (const p of ultimas3) {
    const li = document.createElement("li");
    li.textContent = p;
    ul.appendChild(li);
  }

  msg.textContent = "Total guardadas: " + pelis.length;
}

function addPeli() {
  const texto = input.value.trim();
  if (!texto) {
    msg.textContent = "⚠️ Escribe una película.";
    return;
  }
  pelis.push(texto);
  input.value = "";
  render();
}

function delPeli() {
  if (pelis.length === 0) {
    msg.textContent = "⚠️ No hay películas.";
    return;
  }
  pelis.pop();
  render();
}

add.addEventListener("click", addPeli);
del.addEventListener("click", delPeli);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPeli();
});

render();`}</code>
                  </pre>
                </div>

                <div className="friendly-box" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Fíjate que usamos <code>slice(-3)</code> para mostrar solo las 3 últimas sin tocar el array original.
                  </p>
                </div>
              </div>
            </details>

            <div className="divider" />

            <p style={{ margin: 0 }}>
              Siguiente: <strong>Tema 9.4</strong> — Arrays de <strong>objetos</strong> (cada tarea con{" "}
              <code>{`{ id, texto, completada }`}</code>) y pintar una mini app más real.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
