// src/pages/tema10/Tema10_5.jsx
import { useEffect, useMemo, useState } from "react";

export default function Tema10_5() {
  // =========================
  // ESTADO
  // =========================
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([
    { id: 1, text: "Aprender métodos de strings", done: false, tag: "estudio", createdAt: Date.now() - 86400000 },
    { id: 2, text: "Hacer 10 min de práctica DOM", done: true, tag: "practica", createdAt: Date.now() - 3600000 },
  ]);
  const [filtro, setFiltro] = useState("todas"); // todas | pendientes | hechas
  const [tag, setTag] = useState("todas"); // todas | estudio | practica | vida
  const [busqueda, setBusqueda] = useState("");
  const [mensaje, setMensaje] = useState("");

  // =========================
  // PERSISTENCIA (localStorage)
  // =========================
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tema10_todo_pro");
      if (!raw) return;

      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return;

      // tareas
      if (Array.isArray(data.tareas)) {
        const saneadas = data.tareas
          .filter((t) => t && typeof t === "object")
          .map((t) => ({
            id: typeof t.id === "number" ? t.id : Date.now(),
            text: typeof t.text === "string" ? t.text : "Tarea sin texto",
            done: !!t.done,
            tag: typeof t.tag === "string" ? t.tag : "estudio",
            createdAt: typeof t.createdAt === "number" ? t.createdAt : Date.now(),
          }));
        setTareas(saneadas);
      }

      // filtros
      if (typeof data.filtro === "string") setFiltro(data.filtro);
      if (typeof data.tag === "string") setTag(data.tag);
      if (typeof data.busqueda === "string") setBusqueda(data.busqueda);
    } catch {
      // noop
    }
  }, []);

  useEffect(() => {
    try {
      const payload = { tareas, filtro, tag, busqueda };
      localStorage.setItem("tema10_todo_pro", JSON.stringify(payload));
    } catch {
      // noop
    }
  }, [tareas, filtro, tag, busqueda]);

  // =========================
  // DERIVADOS
  // =========================
  const resumen = useMemo(() => {
    const total = tareas.length;
    const hechas = tareas.filter((t) => t.done).length;
    const pendientes = total - hechas;
    return { total, hechas, pendientes };
  }, [tareas]);

  const tareasFiltradas = useMemo(() => {
    // 1) por estado
    let base = tareas;
    if (filtro === "pendientes") base = base.filter((t) => !t.done);
    if (filtro === "hechas") base = base.filter((t) => t.done);

    // 2) por tag
    if (tag !== "todas") base = base.filter((t) => t.tag === tag);

    // 3) búsqueda (métodos de strings)
    const q = busqueda.trim().toLowerCase();
    if (q) base = base.filter((t) => t.text.toLowerCase().includes(q));

    // 4) orden: pendientes arriba y luego por fecha (más nuevas primero)
    return [...base].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      return b.createdAt - a.createdAt;
    });
  }, [tareas, filtro, tag, busqueda]);

  // =========================
  // HELPERS
  // =========================
  function toast(msg) {
    setMensaje(msg);
    window.setTimeout(() => setMensaje(""), 1400);
  }

  function normalizar(s) {
    // pequeño extra: trim + colapsar espacios dobles
    return String(s).trim().replace(/\s+/g, " ");
  }

  function validar(textoNuevo) {
    if (!textoNuevo) return { ok: false, error: "⚠️ Escribe una tarea antes de añadir." };
    if (textoNuevo.length < 3) return { ok: false, error: "⚠️ Muy corta (mínimo 3 caracteres)." };
    if (textoNuevo.length > 70) return { ok: false, error: "⚠️ Muy larga (máximo 70)." };
    return { ok: true };
  }

  function crearTarea(textoNuevo) {
    return {
      id: Date.now(),
      text: textoNuevo,
      done: false,
      tag: "estudio",
      createdAt: Date.now(),
    };
  }

  function formatearFecha(ts) {
    try {
      return new Date(ts).toLocaleString();
    } catch {
      return "—";
    }
  }

  // =========================
  // EVENTOS
  // =========================
  function onAdd() {
    const limpio = normalizar(texto);
    const v = validar(limpio);
    if (!v.ok) return toast(v.error);

    setTareas((prev) => [crearTarea(limpio), ...prev]);
    setTexto("");
    toast("✅ Añadida y guardada");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") onAdd();
  }

  function onToggleDone(id) {
    setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function onDelete(id) {
    setTareas((prev) => prev.filter((t) => t.id !== id));
    toast("🗑️ Eliminada");
  }

  function onChangeTag(id, nuevaTag) {
    setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, tag: nuevaTag } : t)));
  }

  function onEdit(id) {
    const actual = tareas.find((t) => t.id === id);
    if (!actual) return;

    const nuevo = window.prompt("Edita el texto de la tarea:", actual.text);
    if (nuevo === null) return;

    const limpio = normalizar(nuevo);
    const v = validar(limpio);
    if (!v.ok) return toast(v.error);

    setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, text: limpio } : t)));
    toast("✏️ Editada");
  }

  function onClearDone() {
    setTareas((prev) => prev.filter((t) => !t.done));
    toast("🧹 Hechas borradas");
  }

  function onResetDemo() {
    const demo = [
      { id: 201, text: "Hacer un mini buscador con includes()", done: false, tag: "practica", createdAt: Date.now() - 200000 },
      { id: 202, text: "Repasar localStorage + JSON", done: true, tag: "estudio", createdAt: Date.now() - 800000 },
      { id: 203, text: "Salir a caminar 20 min", done: false, tag: "vida", createdAt: Date.now() - 5000000 },
    ];
    setTareas(demo);
    setFiltro("todas");
    setTag("todas");
    setBusqueda("");
    toast("🔁 Demo cargada");
  }

  function onClearAll() {
    if (!window.confirm("¿Seguro que quieres borrar TODO (tareas + filtros)?")) return;
    setTareas([]);
    setFiltro("todas");
    setTag("todas");
    setBusqueda("");
    try {
      localStorage.removeItem("tema10_todo_pro");
    } catch {}
    toast("🧨 Todo borrado");
  }

  // =========================
  // UI
  // =========================
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M10 · 10.5</span>
          <h1>Mini App real: ToDo PRO (filtros + búsqueda + editar)</h1>
          <p className="muted">
            Aquí mezclamos todo lo importante: <strong>estado</strong>, <strong>eventos</strong>,
            <strong> métodos</strong> (strings/arrays) y <strong>persistencia</strong> con{" "}
            <code>localStorage</code>.
          </p>
        </div>
      </header>

      {/* =========================
          TEORÍA RÁPIDA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Qué estás entrenando aquí</h2>
          <span className="topic-section__meta">objetivo</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <ul style={{ margin: 0 }}>
            <li>
              <strong>Strings</strong>: <code>trim()</code>, <code>toLowerCase()</code>,{" "}
              <code>includes()</code>.
            </li>
            <li>
              <strong>Arrays</strong>: <code>filter()</code>, <code>map()</code>, <code>sort()</code>.
            </li>
            <li>
              <strong>DOM/Eventos</strong>: input, click, Enter.
            </li>
            <li>
              <strong>BOM</strong>: <code>prompt()</code>, <code>confirm()</code>, <code>setTimeout()</code>.
            </li>
            <li>
              <strong>Persistencia</strong>: guardar tareas + filtros en <code>localStorage</code>.
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          APP
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>ToDo PRO</h2>
          <span className="topic-section__meta">app</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          {/* HEADER + RESUMEN */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>📌 Lista</h3>
              <p className="muted" style={{ marginTop: ".25rem" }}>
                Total: <strong>{resumen.total}</strong> · Pendientes:{" "}
                <strong>{resumen.pendientes}</strong> · Hechas:{" "}
                <strong>{resumen.hechas}</strong>
              </p>
            </div>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className={`btn ${filtro === "todas" ? "btn-primary" : ""}`}
                onClick={() => setFiltro("todas")}
              >
                Todas
              </button>
              <button
                type="button"
                className={`btn ${filtro === "pendientes" ? "btn-primary" : ""}`}
                onClick={() => setFiltro("pendientes")}
              >
                Pendientes
              </button>
              <button
                type="button"
                className={`btn ${filtro === "hechas" ? "btn-primary" : ""}`}
                onClick={() => setFiltro("hechas")}
              >
                Hechas
              </button>
            </div>
          </div>

          <div className="divider" />

          {/* CONTROLES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 220px",
              gap: ".75rem",
              alignItems: "end",
            }}
          >
            <label className="field">
              <span className="muted small">Nueva tarea</span>
              <input
                className="input"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ej: Practicar includes()"
                aria-label="Nueva tarea"
              />
            </label>

            <button type="button" className="btn btn-primary" onClick={onAdd}>
              Añadir
            </button>

            <label className="field">
              <span className="muted small">Buscar (includes)</span>
              <input
                className="input"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Ej: json"
                aria-label="Buscar tareas"
              />
            </label>

            <label className="field">
              <span className="muted small">Filtrar por etiqueta</span>
              <select
                className="input"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                aria-label="Filtrar por etiqueta"
              >
                <option value="todas">Todas</option>
                <option value="estudio">Estudio</option>
                <option value="practica">Práctica</option>
                <option value="vida">Vida</option>
              </select>
            </label>
          </div>

          {mensaje && (
            <div className="callout" style={{ marginTop: "1rem" }}>
              <p style={{ margin: 0 }}>{mensaje}</p>
            </div>
          )}

          <div className="divider" />

          {/* LISTA */}
          {tareasFiltradas.length === 0 ? (
            <p className="muted" style={{ margin: 0 }}>
              No hay resultados con estos filtros/búsqueda.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: ".6rem" }}>
              {tareasFiltradas.map((t) => (
                <li
                  key={t.id}
                  className="card"
                  style={{
                    padding: ".75rem",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: ".75rem",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onToggleDone(t.id)}
                    aria-label={t.done ? "Marcar como pendiente" : "Marcar como hecha"}
                    title={t.done ? "Marcar como pendiente" : "Marcar como hecha"}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {t.done ? "✅" : "⬜"} {t.done ? "Hecha" : "Pend."}
                  </button>

                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        textDecoration: t.done ? "line-through" : "none",
                        opacity: t.done ? 0.7 : 1,
                      }}
                    >
                      {t.text}
                    </div>

                    <div className="muted small" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                      <span>
                        Etiqueta: <strong>{t.tag}</strong>
                      </span>
                      <span>
                        Creada: <span>{formatearFecha(t.createdAt)}</span>
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <select
                      className="input"
                      value={t.tag}
                      onChange={(e) => onChangeTag(t.id, e.target.value)}
                      aria-label="Cambiar etiqueta"
                      style={{ padding: ".45rem .6rem" }}
                    >
                      <option value="estudio">estudio</option>
                      <option value="practica">práctica</option>
                      <option value="vida">vida</option>
                    </select>

                    <button type="button" className="btn" onClick={() => onEdit(t.id)} title="Editar">
                      ✏️
                    </button>

                    <button type="button" className="btn" onClick={() => onDelete(t.id)} title="Borrar">
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div
            style={{
              display: "flex",
              gap: ".75rem",
              marginTop: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button type="button" className="btn" onClick={onClearDone} disabled={resumen.hechas === 0}>
              🧹 Borrar hechas
            </button>
            <button type="button" className="btn" onClick={onResetDemo}>
              🔁 Cargar demo
            </button>
            <button type="button" className="btn" onClick={onClearAll}>
              🧨 Borrar todo
            </button>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          CÓDIGO CLAVE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Código clave que debes entender</h2>
          <span className="topic-section__meta">claves</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔎</span> Búsqueda con includes()
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`const q = busqueda.trim().toLowerCase();
if (q) base = base.filter(t => t.text.toLowerCase().includes(q));`}</code>
              </pre>
            </div>
            <p className="muted">
              Convertimos ambos a minúsculas para que “JSON” y “json” coincidan.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Orden con sort()
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`return [...base].sort((a, b) => {
  if (a.done !== b.done) return a.done ? 1 : -1; // pendientes primero
  return b.createdAt - a.createdAt; // más nuevas primero
});`}</code>
              </pre>
            </div>
            <p className="muted">
              Importante: copiamos con <code>[...base]</code> para no mutar el array original.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">💾</span> Guardar tareas + filtros
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`useEffect(() => {
  const payload = { tareas, filtro, tag, busqueda };
  localStorage.setItem("tema10_todo_pro", JSON.stringify(payload));
}, [tareas, filtro, tag, busqueda]);`}</code>
              </pre>
            </div>
            <p className="muted">
              Así el usuario vuelve mañana y lo encuentra todo igual.
            </p>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* =========================
          EJERCICIO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Ejercicio (para entregar)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <ol>
          <li>
            Añade un botón “⭐ Favorita” que marque una tarea como favorita y muestre las favoritas arriba.
          </li>
          <li>
            Añade un contador: “Mostrando X de Y”.
          </li>
          <li>
            Añade un “modo compacto” usando <code>classList</code> (en React sería una clase condicional).
          </li>
        </ol>
      </section>
    </article>
  );
}
