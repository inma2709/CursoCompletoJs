// src/pages/tema10/Tema10_3.jsx
import { useMemo, useState } from "react";

export default function Tema10_3() {
  // =========================
  // ESTADO (datos)
  // =========================
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([
    { id: 1, text: "Repasar variables (10 min)", done: false },
    { id: 2, text: "Hacer 3 ejercicios de if", done: true },
  ]);

  const [filtro, setFiltro] = useState("todas"); // todas | pendientes | hechas
  const [mensaje, setMensaje] = useState("");

  // =========================
  // DERIVADOS (sin estado extra)
  // =========================
  const resumen = useMemo(() => {
    const total = tareas.length;
    const hechas = tareas.filter((t) => t.done).length;
    const pendientes = total - hechas;
    return { total, hechas, pendientes };
  }, [tareas]);

  const tareasFiltradas = useMemo(() => {
    if (filtro === "pendientes") return tareas.filter((t) => !t.done);
    if (filtro === "hechas") return tareas.filter((t) => t.done);
    return tareas;
  }, [tareas, filtro]);

  // =========================
  // FUNCIONES: leer / validar / calcular / pintar
  // =========================
  function leer() {
    return String(texto).trim();
  }

  function validar(nuevoTexto) {
    if (!nuevoTexto) return { ok: false, error: "⚠️ Escribe una tarea antes de añadir." };
    if (nuevoTexto.length < 3) return { ok: false, error: "⚠️ Muy corta. Pon al menos 3 caracteres." };
    if (nuevoTexto.length > 60) return { ok: false, error: "⚠️ Muy larga. Máximo 60 caracteres." };
    return { ok: true };
  }

  function crearTarea(nuevoTexto) {
    // id simple basado en tiempo (suficiente para un ejercicio)
    return { id: Date.now(), text: nuevoTexto, done: false };
  }

  function pintar(msg) {
    setMensaje(msg);
    // se “auto borra” al poco (sin setTimeout aún, lo veremos en BOM)
    setTimeout(() => setMensaje(""), 1200);
  }

  // =========================
  // EVENTOS (handlers)
  // =========================
  function onAdd() {
    const nuevoTexto = leer();
    const v = validar(nuevoTexto);

    if (!v.ok) {
      pintar(v.error);
      return;
    }

    const nueva = crearTarea(nuevoTexto);

    // ✅ actualizar array sin mutar
    setTareas((prev) => [nueva, ...prev]);
    setTexto("");
    pintar("✅ Tarea añadida");
  }

  function onToggleDone(id) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function onDelete(id) {
    setTareas((prev) => prev.filter((t) => t.id !== id));
    pintar("🗑️ Tarea eliminada");
  }

  function onClearDone() {
    setTareas((prev) => prev.filter((t) => !t.done));
    pintar("🧹 Hechas eliminadas");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") onAdd();
  }

  return (
    <article className="topic">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M10 · 10.3</span>
          <h1>Mini proyecto: ToDo (lista de tareas)</h1>
          <p className="muted">
            Proyecto perfecto para afianzar <strong>arrays</strong>,{" "}
            <strong>map / filter</strong>, eventos y una estructura mental clara:
            <strong> leer → validar → actualizar estado → pintar</strong>.
          </p>
        </div>
      </header>

      {/* =========================
          OBJETIVOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Qué vas a practicar aquí</h2>
          <span className="topic-section__meta">objetivos</span>
        </div>

        <ul>
          <li>Controlar inputs con <code>useState</code>.</li>
          <li>Añadir elementos a un array sin mutarlo.</li>
          <li>Marcar como hecha usando <code>map()</code>.</li>
          <li>Borrar usando <code>filter()</code>.</li>
          <li>Filtrar vistas: todas / pendientes / hechas.</li>
        </ul>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Regla de oro (React)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p className="muted">
              En React, cuando trabajas con arrays/objetos, evita mutar el estado:
              <strong> no uses</strong> <code>push()</code>, <code>pop()</code>,{" "}
              <code>splice()</code> directamente sobre el array del estado.
              Mejor crea un array nuevo con <code>[...prev]</code>, <code>map()</code> o{" "}
              <code>filter()</code>.
            </p>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* =========================
          APP
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>La app</h2>
          <span className="topic-section__meta">app</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>✅ Mis tareas</h3>
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

          {/* FORM */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
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
                placeholder="Ej: Practicar map() 10 minutos"
                aria-label="Nueva tarea"
              />
            </label>

            <button type="button" className="btn btn-primary" onClick={onAdd}>
              Añadir
            </button>
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
              No hay tareas para este filtro.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: ".6rem" }}>
              {tareasFiltradas.map((t) => (
                <li
                  key={t.id}
                  className="card"
                  style={{
                    padding: ".75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: ".75rem",
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
                    {t.done ? "✅ Hecha" : "⬜ Pendiente"}
                  </button>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        textDecoration: t.done ? "line-through" : "none",
                        opacity: t.done ? 0.7 : 1,
                      }}
                    >
                      {t.text}
                    </div>
                    <div className="muted small">
                      id: <code>{t.id}</code>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn"
                    onClick={() => onDelete(t.id)}
                    aria-label="Eliminar tarea"
                    title="Eliminar"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    🗑️ Borrar
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div style={{ display: "flex", gap: ".75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn" onClick={onClearDone} disabled={resumen.hechas === 0}>
              🧹 Borrar hechas
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
          <h2>Lo importante del código</h2>
          <span className="topic-section__meta">claves</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">➕</span> Añadir sin mutar (spread)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`setTareas((prev) => [nueva, ...prev]);`}</code>
              </pre>
            </div>
            <p className="muted">
              Creamos un array nuevo: primero la tarea nueva, luego el resto.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Marcar hecha con map()
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`setTareas((prev) =>
  prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
);`}</code>
              </pre>
            </div>
            <p className="muted">
              <code>map()</code> recorre y devuelve un array nuevo. Solo cambiamos la tarea cuyo id coincide.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🗑️</span> Borrar con filter()
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`setTareas((prev) => prev.filter((t) => t.id !== id));`}</code>
              </pre>
            </div>
            <p className="muted">
              <code>filter()</code> se queda con los que cumplen la condición (los que NO tienen ese id).
            </p>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* =========================
          RETOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Retos (para mejorar la app)</h2>
          <span className="topic-section__meta">retos</span>
        </div>

        <ol>
          <li>
            Añade un botón <strong>“Editar”</strong> para cambiar el texto de una tarea.
          </li>
          <li>
            Guarda las tareas en <strong>localStorage</strong> (lo vemos en el Tema 11/12 si quieres).
          </li>
          <li>
            Añade prioridad: <code>alta / media / baja</code> con un <code>select</code>.
          </li>
        </ol>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Pista para “Editar”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>
              Idea sencilla: guarda en estado un <code>idEditando</code> y un <code>textoEdit</code>.
              Cuando pulses “Guardar”, haces un <code>map()</code> y cambias el texto del id.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
