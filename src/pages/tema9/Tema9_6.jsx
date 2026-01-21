// src/pages/tema9/Tema9_6.jsx
// Tema 9.6 — Ejercicios guiados + mini apps (métodos en acción)
// Estilo: tu sistema (wrap, hero, card, topic-section, details/summary, code-example, callout, etc.)

import { useMemo, useState } from "react";

export default function Tema9_6() {
  // ===============================
  // MINI APP 1: Buscador de alumnos
  // ===============================
  const alumnosBase = useMemo(
    () => [
      { id: 1, nombre: "Ana López", curso: "JS", nivel: "Inicial" },
      { id: 2, nombre: "Luis García", curso: "JS", nivel: "Inicial" },
      { id: 3, nombre: "María Pérez", curso: "JS", nivel: "Intermedio" },
      { id: 4, nombre: "Carlos Ruiz", curso: "React", nivel: "Inicial" },
      { id: 5, nombre: "Lucía Sánchez", curso: "JS", nivel: "Inicial" },
      { id: 6, nombre: "David Romero", curso: "Node", nivel: "Intermedio" },
      { id: 7, nombre: "Elena Martín", curso: "JS", nivel: "Inicial" },
      { id: 8, nombre: "Pablo Torres", curso: "React", nivel: "Intermedio" },
    ],
    []
  );

  const [qAlumno, setQAlumno] = useState("");
  const [qCurso, setQCurso] = useState("Todos");

  const alumnosFiltrados = useMemo(() => {
    const q = qAlumno.trim().toLowerCase();
    return alumnosBase
      .filter((a) => (qCurso === "Todos" ? true : a.curso === qCurso))
      .filter((a) => (q ? a.nombre.toLowerCase().includes(q) : true))
      .map((a) => ({
        ...a,
        // ejemplo de método de string: mostrar iniciales
        iniciales: a.nombre
          .trim()
          .split(" ")
          .filter(Boolean)
          .map((p) => p.slice(0, 1).toUpperCase())
          .join(""),
      }));
  }, [alumnosBase, qAlumno, qCurso]);

  // ==================================
  // MINI APP 2: Lista de compras (DOM)
  // ==================================
  const [items, setItems] = useState([
    { id: 1, nombre: "Leche", precio: 1.35 },
    { id: 2, nombre: "Pan", precio: 0.95 },
    { id: 3, nombre: "Manzanas", precio: 2.4 },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.precio, 0),
    [items]
  );

  function addItem() {
    const name = nuevoNombre.trim();
    const price = Number(String(nuevoPrecio).replace(",", "."));

    if (!name) return;
    if (Number.isNaN(price) || price <= 0) return;

    setItems((prev) => [
      ...prev,
      { id: Date.now(), nombre: name, precio: price },
    ]);
    setNuevoNombre("");
    setNuevoPrecio("");
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function clearList() {
    setItems([]);
  }

  // ==================================
  // MINI APP 3: Sorteo (Math.random)
  // ==================================
  const [semilla, setSemilla] = useState("Ana, Luis, María, Carlos, Lucía");
  const [ganador, setGanador] = useState(null);

  function sortear() {
    const participantes = semilla
      .split(",")
      .map((n) => n.trim())
      .filter(Boolean);

    if (participantes.length === 0) {
      setGanador(null);
      return;
    }

    const idx = Math.floor(Math.random() * participantes.length);
    setGanador(participantes[idx]);
  }

  // ==================================
  // RETO FINAL: Mezcla métodos + DOM
  // ==================================
  const [texto, setTexto] = useState("   Hola clase, hoy practicamos MÉTODOS.   ");
  const analisis = useMemo(() => {
    const original = texto;
    const limpio = original.trim();
    const mayus = limpio.toUpperCase();
    const incluye = mayus.includes("MÉTODOS");
    const preview = limpio.slice(0, 20);

    return { original, limpio, mayus, incluye, preview };
  }, [texto]);

  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">Tema 9 · 9.6</span>
        <h1 style={{ marginTop: ".55rem" }}>Ejercicios guiados + mini apps</h1>
        <p className="muted">
          Aquí no venimos a “leer” métodos: venimos a <strong>usarlos</strong>.
          Vas a practicar <code>trim</code>, <code>includes</code>,{" "}
          <code>slice</code>, <code>filter</code>, <code>map</code>,{" "}
          <code>reduce</code>, <code>Number()</code>, <code>toFixed</code> y{" "}
          <code>Math.random</code> en ejemplos reales.
        </p>
      </header>

      {/* OBJETIVOS */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🎯 Objetivos de esta unidad</h2>
          <span className="topic-section__meta">objetivos</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>
              Practicar métodos de <strong>Strings</strong> con sentido (limpiar,
              buscar, recortar, transformar).
            </li>
            <li>
              Practicar métodos de <strong>Arrays</strong> para filtrar, mapear y
              encontrar datos.
            </li>
            <li>
              Usar <strong>Numbers</strong> y <strong>Math</strong> en cálculos
              y formatos.
            </li>
            <li>
              Ver cómo todo esto se traduce en <strong>interfaz</strong> y{" "}
              <strong>DOM</strong> (en React: estado + render).
            </li>
          </ul>
        </div>
      </section>

      {/* EJERCICIO GUIADO 1 */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Ejercicio 1: Buscador de alumnos (filter + includes + map)</h2>
          <span className="topic-section__meta">mini-app</span>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Lo que practicas aquí
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Vas a filtrar una lista por curso y por texto. Esto es lo que hacen
              buscadores, listas de productos, tablas, etc.
            </p>

            <ul>
              <li>
                <code>trim()</code> + <code>toLowerCase()</code> para limpiar
                entrada.
              </li>
              <li>
                <code>includes()</code> para búsquedas sencillas.
              </li>
              <li>
                <code>filter()</code> para quedarte con los que cumplen.
              </li>
              <li>
                <code>map()</code> para transformar datos (añadimos{" "}
                <em>iniciales</em>).
              </li>
            </ul>

            <div className="callout" style={{ marginTop: ".75rem" }}>
              <strong>Idea clave:</strong> primero filtras, luego transformas. Y
              cuanto más limpio esté el texto, menos bugs.
            </div>
          </div>
        </details>

        <div className="card" style={{ marginTop: ".9rem" }}>
          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "1fr",
            }}
          >
            <div>
              <label className="muted" htmlFor="buscarAlumno">
                Buscar por nombre
              </label>
              <input
                id="buscarAlumno"
                className="input"
                value={qAlumno}
                onChange={(e) => setQAlumno(e.target.value)}
                placeholder="Ej: ana, mar, lopez..."
                style={{ width: "100%", marginTop: ".35rem" }}
              />
            </div>

            <div>
              <label className="muted" htmlFor="cursoAlumno">
                Filtrar por curso
              </label>
              <select
                id="cursoAlumno"
                className="input"
                value={qCurso}
                onChange={(e) => setQCurso(e.target.value)}
                style={{ width: "100%", marginTop: ".35rem" }}
              >
                <option>Todos</option>
                <option>JS</option>
                <option>React</option>
                <option>Node</option>
              </select>
            </div>
          </div>

          <div className="divider" style={{ margin: "1rem 0" }} />

          <p className="muted" style={{ marginTop: 0 }}>
            Resultados: <strong>{alumnosFiltrados.length}</strong>
          </p>

          <div
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {alumnosFiltrados.map((a) => (
              <div
                key={a.id}
                className="card"
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <div
                    className="badge"
                    style={{
                      minWidth: "44px",
                      textAlign: "center",
                      padding: ".35rem .55rem",
                    }}
                    title="Iniciales generadas con métodos de string"
                  >
                    {a.iniciales}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800 }}>{a.nombre}</div>
                    <div className="muted" style={{ fontSize: ".95rem" }}>
                      {a.curso} · {a.nivel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">💡</span> Solución explicada (métodos usados)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`const q = qAlumno.trim().toLowerCase();

const resultado = alumnosBase
  .filter(a => qCurso === "Todos" ? true : a.curso === qCurso)
  .filter(a => q ? a.nombre.toLowerCase().includes(q) : true)
  .map(a => ({
    ...a,
    iniciales: a.nombre
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(p => p.slice(0, 1).toUpperCase())
      .join("")
  }));`}</code>
                </pre>
              </div>

              <div className="callout" style={{ marginTop: ".75rem" }}>
                <strong>Reto rápido:</strong> añade un filtro por <code>nivel</code> y
                que el buscador también funcione por curso (por ejemplo, escribir “react”).
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* EJERCICIO GUIADO 2 */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧾 Ejercicio 2: Lista de compras (push + filter + reduce + toFixed)</h2>
          <span className="topic-section__meta">mini-app</span>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🛒</span> Lo que practicas aquí
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Convertir strings a número con <code>Number()</code>.
              </li>
              <li>
                Formatear con <code>toFixed(2)</code> (dinero).
              </li>
              <li>
                Sumar con <code>reduce()</code>.
              </li>
              <li>
                Añadir y borrar elementos (en arrays: <code>push</code> /{" "}
                <code>filter</code>).
              </li>
            </ul>
            <div className="callout">
              <strong>Regla oro:</strong> en interfaces reales, casi todo llega como
              texto. Si necesitas números, conviértelo y valida.
            </div>
          </div>
        </details>

        <div className="card" style={{ marginTop: ".9rem" }}>
          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "1.2fr .8fr auto",
              alignItems: "end",
            }}
          >
            <div>
              <label className="muted" htmlFor="nombreItem">
                Producto
              </label>
              <input
                id="nombreItem"
                className="input"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                placeholder="Ej: Yogur"
                style={{ width: "100%", marginTop: ".35rem" }}
              />
            </div>

            <div>
              <label className="muted" htmlFor="precioItem">
                Precio (€)
              </label>
              <input
                id="precioItem"
                className="input"
                value={nuevoPrecio}
                onChange={(e) => setNuevoPrecio(e.target.value)}
                placeholder="Ej: 1.20"
                inputMode="decimal"
                style={{ width: "100%", marginTop: ".35rem" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addItem();
                }}
              />
            </div>

            <button className="btn btn-primary" onClick={addItem}>
              Añadir
            </button>
          </div>

          <div className="divider" style={{ margin: "1rem 0" }} />

          <div
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "1fr",
            }}
          >
            {items.length === 0 ? (
              <p className="muted" style={{ margin: 0 }}>
                Lista vacía. Añade un producto arriba 👆
              </p>
            ) : (
              items.map((it) => (
                <div
                  key={it.id}
                  className="card"
                  style={{
                    padding: "12px 14px",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800 }}>{it.nombre}</div>
                    <div className="muted" style={{ fontSize: ".95rem" }}>
                      {it.precio.toFixed(2)} €
                    </div>
                  </div>
                  <button className="btn" onClick={() => removeItem(it.id)}>
                    🗑️ Quitar
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="divider" style={{ margin: "1rem 0" }} />

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="muted">Total</div>
              <div style={{ fontWeight: 900, fontSize: "1.15rem" }}>
                {total.toFixed(2)} €
              </div>
            </div>

            <button className="btn" onClick={clearList} disabled={items.length === 0}>
              Vaciar lista
            </button>
          </div>

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">✅</span> Solución explicada (métodos usados)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`// Convertimos el precio (string) a Number y validamos
const price = Number(String(nuevoPrecio).replace(",", "."));
if (Number.isNaN(price) || price <= 0) return;

// "Push" en React = setItems(prev => [...prev, nuevoItem])
setItems(prev => [...prev, { id: Date.now(), nombre: name, precio: price }]);

// Total con reduce:
const total = items.reduce((acc, it) => acc + it.precio, 0);

// Formato dinero:
total.toFixed(2);`}</code>
                </pre>
              </div>

              <div className="callout" style={{ marginTop: ".75rem" }}>
                <strong>Reto:</strong> añade un botón “Aplicar descuento 10%” y
                guarda el precio original en cada item.
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* EJERCICIO GUIADO 3 */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🎲 Ejercicio 3: Sorteo (Math.random + split + trim)</h2>
          <span className="topic-section__meta">mini-app</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <p className="muted" style={{ marginTop: 0 }}>
            Escribe nombres separados por comas. Usamos{" "}
            <code>split</code> + <code>trim</code> para limpiarlos, y{" "}
            <code>Math.random</code> para sacar un índice aleatorio.
          </p>

          <label className="muted" htmlFor="semilla">
            Participantes (separados por comas)
          </label>
          <textarea
            id="semilla"
            className="input"
            value={semilla}
            onChange={(e) => setSemilla(e.target.value)}
            rows={3}
            style={{ width: "100%", marginTop: ".35rem" }}
          />

          <div style={{ display: "flex", gap: "10px", marginTop: ".75rem" }}>
            <button className="btn btn-primary" onClick={sortear}>
              Sortear 🎉
            </button>
            <button className="btn" onClick={() => setGanador(null)}>
              Limpiar
            </button>
          </div>

          <div className="divider" style={{ margin: "1rem 0" }} />

          {ganador ? (
            <div className="callout">
              <strong>Ganador/a:</strong> {ganador}
            </div>
          ) : (
            <p className="muted" style={{ margin: 0 }}>
              Aún no hay ganador. Pulsa “Sortear”.
            </p>
          )}

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">👀</span> Código clave explicado
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`const participantes = semilla
  .split(",")          // separa por comas
  .map(n => n.trim())  // limpia espacios
  .filter(Boolean);    // quita vacíos

const idx = Math.floor(Math.random() * participantes.length);
setGanador(participantes[idx]);`}</code>
                </pre>
              </div>

              <div className="callout" style={{ marginTop: ".75rem" }}>
                <strong>Reto:</strong> evita que salga el mismo ganador dos veces
                seguidas (guarda el anterior y repite si coincide).
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* RETO FINAL */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🏁 Reto final: Analizador de texto (métodos + render)</h2>
          <span className="topic-section__meta">reto</span>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔥</span> Enunciado
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Tienes un texto y quieres mostrar “estadísticas” y transformaciones.
              Esto es muy típico en formularios, validaciones y buscadores.
            </p>

            <ul>
              <li>Recorta espacios con <code>trim()</code></li>
              <li>Pasa a mayúsculas con <code>toUpperCase()</code></li>
              <li>Comprueba si contiene una palabra con <code>includes()</code></li>
              <li>Muestra un preview con <code>slice()</code></li>
            </ul>

            <div className="callout">
              <strong>Importante:</strong> aquí React hace de “DOM”: cambias estado y la UI se actualiza.
            </div>
          </div>
        </details>

        <div className="card" style={{ marginTop: ".9rem" }}>
          <label className="muted" htmlFor="textoAnalisis">
            Escribe tu texto
          </label>
          <textarea
            id="textoAnalisis"
            className="input"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={3}
            style={{ width: "100%", marginTop: ".35rem" }}
          />

          <div className="divider" style={{ margin: "1rem 0" }} />

          <div
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <Stat label="Texto original" value={analisis.original} />
            <Stat label="Trim" value={analisis.limpio} />
            <Stat label="Mayúsculas" value={analisis.mayus} />
            <Stat
              label='Incluye "MÉTODOS"'
              value={analisis.incluye ? "✅ Sí" : "❌ No"}
            />
            <Stat label="Preview (slice 0..20)" value={analisis.preview} />
            <Stat label="Longitud (length)" value={String(analisis.limpio.length)} />
          </div>

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">✅</span> Solución (métodos usados)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`const limpio = texto.trim();
const mayus = limpio.toUpperCase();
const incluye = mayus.includes("MÉTODOS");
const preview = limpio.slice(0, 20);
const len = limpio.length;`}</code>
                </pre>
              </div>

              <div className="callout" style={{ marginTop: ".75rem" }}>
                <strong>Reto extra:</strong> cuenta cuántas palabras tiene el texto
                (pista: <code>split(" ")</code> + <code>filter(Boolean)</code>).
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CIERRE */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>✅ Cierre: lo que ya sabes hacer</h2>
          <span className="topic-section__meta">cierre</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>
              Convertir texto del usuario en algo “usable” con{" "}
              <code>trim</code>, <code>toLowerCase</code> y <code>includes</code>.
            </li>
            <li>
              Construir listados que cambian con <code>filter</code> + <code>map</code>.
            </li>
            <li>
              Sumar y calcular totales con <code>reduce</code> y formatear con{" "}
              <code>toFixed</code>.
            </li>
            <li>
              Hacer “funcionalidades reales” (buscador, lista de compras, sorteo).
            </li>
          </ul>

          <div className="divider" style={{ margin: "1rem 0" }} />

          <div className="callout">
            <strong>Siguiente paso:</strong> en el Tema 10 empezamos a combinar
            todo en prácticas más largas (y a escribir código más limpio).
          </div>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card" style={{ padding: "12px 14px", borderRadius: "16px" }}>
      <div className="muted" style={{ fontSize: ".9rem" }}>
        {label}
      </div>
      <div style={{ fontWeight: 900, marginTop: ".35rem", wordBreak: "break-word" }}>
        {value}
      </div>
    </div>
  );
}
