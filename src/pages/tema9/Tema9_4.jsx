// src/pages/tema9/Tema9_4.jsx
export default function Tema9_4() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9.4</span>
          <h1>Tema 9.4 · Arrays de objetos</h1>
          <p className="muted">
            Pasamos de listas simples (strings) a datos “de verdad”: cada elemento tiene varias propiedades
            (id, texto, completada…). Así nacen las mini-apps.
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
              <span className="badge">🧠</span> Objetivos del módulo
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Qué es un <strong>objeto</strong> y por qué lo metemos dentro de un array.
              </li>
              <li>
                Crear elementos como: <code>{`{ id, texto, completada }`}</code>.
              </li>
              <li>
                Buscar elementos con <code>find()</code>.
              </li>
              <li>
                Filtrar elementos con <code>filter()</code>.
              </li>
              <li>
                Transformar arrays con <code>map()</code> (lo usaremos para “pintar” o preparar datos).
              </li>
              <li>
                Patrón completo: <strong>estado (array)</strong> → <strong>render</strong> → <strong>eventos</strong>.
              </li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Idea clave:</strong> un array de strings se te queda corto rápido. En una app real,
                cada “cosa” tiene más información: estado, fecha, prioridad, etc. Eso es un objeto.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          DE STRING A OBJETO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧱 1) De array de strings a array de objetos</h2>
          <span className="topic-section__meta">base</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧱</span> ¿Por qué objetos?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted" style={{ marginTop: 0 }}>
              Con strings solo guardas texto. Con objetos guardas “la ficha completa”.
            </p>

            <div className="code-example">
              <pre>
                <code>{`// Antes (solo texto)
let tareas = ["Estudiar", "Hacer ejercicios"];

// Ahora (cada tarea tiene propiedades)
let tareasObj = [
  { id: 1, texto: "Estudiar", completada: false },
  { id: 2, texto: "Hacer ejercicios", completada: true }
];`}</code>
              </pre>
            </div>

            <ul>
              <li>
                <code>id</code> sirve para identificar una tarea aunque haya textos repetidos.
              </li>
              <li>
                <code>completada</code> guarda el estado sin inventarnos trucos.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          FIND / FILTER / MAP
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔍 2) Métodos clave: find, filter y map</h2>
          <span className="topic-section__meta">metodos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> Los 3 que te salvan la vida
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🎯</span> find() · encontrar 1 elemento
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const tarea = tareasObj.find(t => t.id === 2);
// Devuelve el objeto con id 2 (o undefined si no existe)`}</code>
                  </pre>
                </div>
                <p className="muted" style={{ margin: 0 }}>
                  Úsalo cuando quieres “la tarea concreta” para cambiarla (toggle, editar…).
                </p>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧹</span> filter() · quedarte con algunos
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const pendientes = tareasObj.filter(t => t.completada === false);
// Devuelve un NUEVO array solo con las tareas pendientes`}</code>
                  </pre>
                </div>
                <p className="muted" style={{ margin: 0 }}>
                  Úsalo para borrar, para filtrar vistas, para “limpiar completadas”, etc.
                </p>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">✨</span> map() · transformar elementos
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const textos = tareasObj.map(t => t.texto);
// Devuelve ["Estudiar", "Hacer ejercicios"]`}</code>
                  </pre>
                </div>
                <p className="muted" style={{ margin: 0 }}>
                  Úsalo cuando quieres crear “otra versión” del array (por ejemplo, solo textos, o un HTML, o datos para pintar).
                </p>
              </div>
            </details>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Ojo:</strong> <code>find</code> devuelve 1 elemento, <code>filter</code> devuelve un array,
                <code>map</code> devuelve un array transformado.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          MINI APP: TODO (VANILLA)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>✅ 3) Mini app real: ToDo con estado “completada”</h2>
          <span className="topic-section__meta">miniapp</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Arrays de objetos + DOM + eventos
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Vamos a hacer una mini app con:
              <strong> añadir</strong> · <strong> marcar como completada</strong> · <strong> borrar</strong> ·{" "}
              <strong> limpiar completadas</strong>.
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
                    <code>{`<input id="todo-input" placeholder="Nueva tarea..." />
<button id="todo-add">Añadir</button>
<button id="todo-clear">Limpiar completadas</button>

<ul id="todo-list"></ul>
<p id="todo-info"></p>`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} open>
              <summary>
                <span className="summary-left">
                  <span className="badge">⚙️</span> JavaScript (completo y explicado)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`// =======================
// 1) ESTADO (datos)
// =======================
let todos = [];
let nextId = 1;

// =======================
// 2) DOM (referencias)
// =======================
const input = document.getElementById("todo-input");
const btnAdd = document.getElementById("todo-add");
const btnClear = document.getElementById("todo-clear");
const ul = document.getElementById("todo-list");
const info = document.getElementById("todo-info");

// =======================
// 3) RENDER (pintar UI)
// =======================
function renderTodos() {
  // Limpio la lista para no duplicar
  ul.innerHTML = "";

  // Pinto cada tarea
  for (const t of todos) {
    const li = document.createElement("li");

    // Estilo simple (si está completada, la "tachamos")
    li.style.cssText = \`
      display:flex; justify-content:space-between; align-items:center;
      padding:10px; margin:8px 0; border:1px solid rgba(255,255,255,.12);
      border-radius:12px;
      \${t.completada ? "opacity:.6; text-decoration: line-through;" : ""}
    \`;

    // Izquierda: texto
    const span = document.createElement("span");
    span.textContent = t.texto;

    // Derecha: botones
    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "8px";

    const btnToggle = document.createElement("button");
    btnToggle.textContent = t.completada ? "↩️" : "✅";
    btnToggle.title = t.completada ? "Marcar como pendiente" : "Marcar como completada";
    btnToggle.style.cssText =
      "padding:6px 10px; border-radius:10px; border:1px solid rgba(255,255,255,.18); cursor:pointer;";

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️";
    btnDelete.title = "Borrar tarea";
    btnDelete.style.cssText =
      "padding:6px 10px; border-radius:10px; border:1px solid rgba(255,255,255,.18); cursor:pointer;";

    // Eventos por cada botón (usamos el id del objeto)
    btnToggle.addEventListener("click", () => toggleTodo(t.id));
    btnDelete.addEventListener("click", () => deleteTodo(t.id));

    actions.appendChild(btnToggle);
    actions.appendChild(btnDelete);

    li.appendChild(span);
    li.appendChild(actions);
    ul.appendChild(li);
  }

  // Estadísticas
  const total = todos.length;
  const completadas = todos.filter(x => x.completada).length;
  info.textContent = \`Total: \${total} · Completadas: \${completadas} · Pendientes: \${total - completadas}\`;
}

// =======================
// 4) ACCIONES (modifican datos)
// =======================
function addTodo() {
  const texto = input.value.trim();
  if (!texto) {
    info.textContent = "⚠️ Escribe una tarea.";
    return;
  }

  const nueva = {
    id: nextId++,
    texto: texto,
    completada: false,
  };

  todos.push(nueva);
  input.value = "";
  renderTodos();
}

function toggleTodo(id) {
  // find: localizar 1 objeto
  const tarea = todos.find(t => t.id === id);
  if (!tarea) return;

  tarea.completada = !tarea.completada;
  renderTodos();
}

function deleteTodo(id) {
  // filter: crear un nuevo array sin ese id
  todos = todos.filter(t => t.id !== id);
  renderTodos();
}

function clearCompleted() {
  todos = todos.filter(t => !t.completada);
  renderTodos();
}

// =======================
// 5) EVENTOS GENERALES
// =======================
btnAdd.addEventListener("click", addTodo);
btnClear.addEventListener("click", clearCompleted);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

// Pintado inicial
renderTodos();`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Fíjate: los botones no “tocan” el DOM directamente. Llaman a funciones que cambian el array y luego
                <strong> renderiza</strong>. Ese orden te mantiene el control.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ACTIVIDAD GUIADA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Actividad guiada</h2>
          <span className="topic-section__meta">actividad</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Hazlo tú (con pistas)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un array de objetos de “alumnos”:
            </p>
            <div className="code-example">
              <pre>
                <code>{`let alumnos = [
  { id: 1, nombre: "Ana", aprobado: true },
  { id: 2, nombre: "Luis", aprobado: false },
  { id: 3, nombre: "María", aprobado: true }
];`}</code>
              </pre>
            </div>

            <ol>
              <li>Pinta la lista en pantalla.</li>
              <li>Que cada alumno tenga un botón para cambiar <code>aprobado</code> (true/false).</li>
              <li>Añade un botón “Mostrar solo aprobados” usando <code>filter()</code>.</li>
              <li>Añade un contador de aprobados y suspensos.</li>
            </ol>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Pista: funciones mínimas
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`function renderAlumnos(listaAlumnos) {
  // limpiar ul, crear li, botones, y pintar stats
}

function toggleAprobado(id) {
  // find + cambiar aprobado + render
}

function soloAprobados() {
  // filter y render
}`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="divider" />

            <p style={{ margin: 0 }}>
              Siguiente: <strong>Tema 9.5</strong> — repaso y ejercicios “mix” (arrays + strings + condicionales + DOM).
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
