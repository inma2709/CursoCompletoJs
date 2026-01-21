// src/pages/tema10/Tema10_6.jsx
import { useEffect, useMemo, useState } from "react";

export default function Tema10_6() {
  // =========================================================
  // APP 1: Quiz + Repaso guiado (métodos + pensamiento)
  // =========================================================
  const quiz = useMemo(
    () => [
      {
        id: 1,
        q: "¿Qué devuelve 'hola'.toUpperCase() ?",
        options: ["hola", "HOLA", "Hola"],
        correct: 1,
        explain:
          "toUpperCase() transforma el string a mayúsculas (NO modifica el original; devuelve uno nuevo).",
      },
      {
        id: 2,
        q: "¿Qué hace trim() en '  ok  ' ?",
        options: ["Quita espacios al principio y al final", "Quita todos los espacios", "No hace nada"],
        correct: 0,
        explain: "trim() solo quita espacios de los extremos (inicio y final).",
      },
      {
        id: 3,
        q: "Si arr = [1,2], ¿qué hace arr.push(3) ?",
        options: ["Devuelve un array nuevo [1,2,3]", "Añade 3 al final y devuelve la nueva longitud", "Quita el último elemento"],
        correct: 1,
        explain: "push() MODIFICA el array y devuelve la nueva longitud.",
      },
      {
        id: 4,
        q: "¿Qué método es mejor para transformar todos los elementos de un array?",
        options: ["map()", "filter()", "find()"],
        correct: 0,
        explain: "map() crea un array nuevo transformando cada elemento.",
      },
      {
        id: 5,
        q: "¿Qué devuelve find() si no encuentra nada?",
        options: ["null", "undefined", "false"],
        correct: 1,
        explain: "find() devuelve undefined si no encuentra coincidencias.",
      },
      {
        id: 6,
        q: "¿Qué hace Number('12.5') ?",
        options: ["Devuelve 12", "Devuelve 12.5", "Devuelve '12.5'"],
        correct: 1,
        explain: "Number() convierte a número (si puede).",
      },
      {
        id: 7,
        q: "¿Cómo saco un número aleatorio entre 1 y 10 (incluidos)?",
        options: [
          "Math.random() * 10 + 1",
          "Math.floor(Math.random() * 10) + 1",
          "Math.floor(Math.random() * 11)",
        ],
        correct: 1,
        explain:
          "Math.random() da [0,1). Multiplico por 10 ⇒ [0,10) y con floor ⇒ 0..9. +1 ⇒ 1..10.",
      },
    ],
    []
  );

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({}); // { [id]: selectedIndex }
  const [quizShowExplain, setQuizShowExplain] = useState(false);

  const current = quiz[quizIndex];
  const selected = quizAnswers[current.id];

  const quizScore = useMemo(() => {
    let ok = 0;
    for (const item of quiz) {
      const sel = quizAnswers[item.id];
      if (sel === item.correct) ok++;
    }
    return ok;
  }, [quiz, quizAnswers]);

  function quizSelect(idx) {
    setQuizAnswers((prev) => ({ ...prev, [current.id]: idx }));
    setQuizShowExplain(true);
  }
  function quizNext() {
    setQuizShowExplain(false);
    setQuizIndex((i) => Math.min(i + 1, quiz.length - 1));
  }
  function quizPrev() {
    setQuizShowExplain(false);
    setQuizIndex((i) => Math.max(i - 1, 0));
  }
  function quizReset() {
    setQuizIndex(0);
    setQuizAnswers({});
    setQuizShowExplain(false);
  }

  // =========================================================
  // APP 2: Mini “Data Lab” (Strings + Arrays + Numbers)
  // =========================================================
  const [rawNames, setRawNames] = useState("  ana,  LUIS, mArIa,  pepe ,  lucía  ");
  const [query, setQuery] = useState("a");
  const [minLen, setMinLen] = useState(3);

  const names = useMemo(() => {
    // 1) separar por coma
    // 2) limpiar espacios con trim()
    // 3) quitar vacíos
    // 4) normalizar “Ana” (primera mayúscula y resto minúscula)
    const parts = rawNames.split(",").map((s) => s.trim()).filter(Boolean);

    const normalized = parts.map((n) => {
      const lower = n.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return normalized;
  }, [rawNames]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return names
      .filter((n) => n.length >= Number(minLen))
      .filter((n) => (q ? n.toLowerCase().includes(q) : true));
  }, [names, query, minLen]);

  // Estadísticas (Numbers)
  const stats = useMemo(() => {
    const total = names.length;
    const shown = filtered.length;
    const ratio = total === 0 ? 0 : (shown / total) * 100;
    return { total, shown, ratio };
  }, [names, filtered]);

  // =========================================================
  // APP 3: Mini “Carrito” (map/filter/reduce) — muy visual
  // =========================================================
  const [cart, setCart] = useState([
    { id: 1, name: "Camiseta", price: 12.99, qty: 1 },
    { id: 2, name: "Libro JS", price: 19.5, qty: 1 },
    { id: 3, name: "Ratón", price: 9.99, qty: 2 },
  ]);
  const [coupon, setCoupon] = useState("DEV10"); // DEV10 => 10%

  const subtotal = useMemo(() => {
    // reduce: sumar price * qty
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  const discount = useMemo(() => {
    const c = coupon.trim().toUpperCase();
    if (c === "DEV10") return subtotal * 0.1;
    if (c === "DEV20") return subtotal * 0.2;
    return 0;
  }, [coupon, subtotal]);

  const total = useMemo(() => {
    // toFixed para mostrar bonito
    return Math.max(subtotal - discount, 0);
  }, [subtotal, discount]);

  function incQty(id) {
    setCart((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  }
  function decQty(id) {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(it.qty - 1, 0) } : it))
        .filter((it) => it.qty > 0)
    );
  }
  function removeItem(id) {
    setCart((prev) => prev.filter((it) => it.id !== id));
  }
  function resetCart() {
    setCart([
      { id: 1, name: "Camiseta", price: 12.99, qty: 1 },
      { id: 2, name: "Libro JS", price: 19.5, qty: 1 },
      { id: 3, name: "Ratón", price: 9.99, qty: 2 },
    ]);
    setCoupon("DEV10");
  }

  // =========================================================
  // TIP: guardado opcional de la parte "Data Lab" (ejemplo)
  // =========================================================
  useEffect(() => {
    try {
      const payload = { rawNames, query, minLen };
      localStorage.setItem("tema10_datalab", JSON.stringify(payload));
    } catch {}
  }, [rawNames, query, minLen]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("tema10_datalab");
      if (!raw) return;
      const data = JSON.parse(raw);
      if (typeof data?.rawNames === "string") setRawNames(data.rawNames);
      if (typeof data?.query === "string") setQuery(data.query);
      if (typeof data?.minLen === "number") setMinLen(data.minLen);
    } catch {}
  }, []);

  // =========================================================
  // RENDER
  // =========================================================
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M10 · 10.6</span>
          <h1>Repaso final + Mini Apps (modo entrenamiento)</h1>
          <p className="muted">
            Hoy cerramos el tema con práctica real: <strong>quiz</strong> + <strong>data lab</strong> +{" "}
            <strong>carrito</strong>. Si esto te sale, vas volando.
          </p>
        </div>
      </header>

      {/* =========================
          BLOQUE 1: QUIZ
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) Quiz rápido (métodos esenciales)</h2>
          <span className="topic-section__meta">quiz</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <p style={{ margin: 0 }}>
              Pregunta <strong>{quizIndex + 1}</strong> / {quiz.length} · Puntos:{" "}
              <strong>{quizScore}</strong>/{quiz.length}
            </p>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <button type="button" className="btn" onClick={quizPrev} disabled={quizIndex === 0}>
                ◀ Anterior
              </button>
              <button
                type="button"
                className="btn"
                onClick={quizNext}
                disabled={quizIndex === quiz.length - 1}
              >
                Siguiente ▶
              </button>
              <button type="button" className="btn" onClick={quizReset}>
                Reiniciar
              </button>
            </div>
          </div>

          <div className="divider" />

          <h3 style={{ marginTop: 0 }}>{current.q}</h3>

          <div style={{ display: "grid", gap: ".5rem" }}>
            {current.options.map((opt, idx) => {
              const isChosen = selected === idx;
              const isCorrect = idx === current.correct;
              const show = quizShowExplain && selected !== undefined;

              return (
                <button
                  key={idx}
                  type="button"
                  className={`btn ${isChosen ? "btn-primary" : ""}`}
                  onClick={() => quizSelect(idx)}
                  style={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    gap: ".6rem",
                    alignItems: "center",
                  }}
                >
                  <span style={{ width: 22, textAlign: "center" }}>{idx + 1}</span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {show && isCorrect && <span aria-hidden="true">✅</span>}
                  {show && isChosen && !isCorrect && <span aria-hidden="true">❌</span>}
                </button>
              );
            })}
          </div>

          {quizShowExplain && selected !== undefined && (
            <div className="callout" style={{ marginTop: "1rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Explicación:</strong> {current.explain}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          BLOQUE 2: DATA LAB
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) Data Lab (strings + arrays)</h2>
          <span className="topic-section__meta">lab</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <p className="muted" style={{ marginTop: 0 }}>
            Escribe nombres separados por comas. Esta mini app hace: <code>split</code> →{" "}
            <code>trim</code> → normalizar mayúsculas → <code>filter</code> por longitud →{" "}
            <code>includes</code> por búsqueda.
          </p>

          <label className="field">
            <span className="muted small">Lista (separada por comas)</span>
            <textarea
              className="input"
              rows={3}
              value={rawNames}
              onChange={(e) => setRawNames(e.target.value)}
              style={{ resize: "vertical" }}
            />
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 220px",
              gap: ".75rem",
              marginTop: ".75rem",
            }}
          >
            <label className="field">
              <span className="muted small">Buscar (includes)</span>
              <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>

            <label className="field">
              <span className="muted small">Mínimo de letras</span>
              <input
                className="input"
                type="number"
                min={0}
                value={minLen}
                onChange={(e) => setMinLen(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="divider" />

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div className="card" style={{ padding: ".75rem", minWidth: 220 }}>
              <p className="muted small" style={{ margin: 0 }}>
                Total nombres
              </p>
              <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>{stats.total}</div>
            </div>
            <div className="card" style={{ padding: ".75rem", minWidth: 220 }}>
              <p className="muted small" style={{ margin: 0 }}>
                Mostrando
              </p>
              <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>{stats.shown}</div>
            </div>
            <div className="card" style={{ padding: ".75rem", minWidth: 220 }}>
              <p className="muted small" style={{ margin: 0 }}>
                % visible (toFixed)
              </p>
              <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>{stats.ratio.toFixed(1)}%</div>
            </div>
          </div>

          <div style={{ marginTop: ".75rem" }}>
            {filtered.length === 0 ? (
              <p className="muted" style={{ margin: 0 }}>
                No hay resultados con esos filtros.
              </p>
            ) : (
              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {filtered.map((n, i) => (
                  <li key={`${n}-${i}`}>{n}</li>
                ))}
              </ul>
            )}
          </div>

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">🧩</span> Pista: transformación completa
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`const parts = raw.split(",")
  .map(s => s.trim())
  .filter(Boolean);

const normalized = parts.map(n => {
  const lower = n.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
});`}</code>
                </pre>
              </div>
            </div>
          </details>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          BLOQUE 3: CARRITO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) Mini Carrito (map/filter/reduce + toFixed)</h2>
          <span className="topic-section__meta">app</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <p className="muted" style={{ marginTop: 0 }}>
            Un caso real para entender por qué <code>map</code>, <code>filter</code> y{" "}
            <code>reduce</code> son oro.
          </p>

          <div style={{ display: "grid", gap: ".6rem" }}>
            {cart.map((it) => (
              <div
                key={it.id}
                className="card"
                style={{
                  padding: ".75rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: ".75rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900 }}>{it.name}</div>
                  <div className="muted small">
                    Precio: <strong>{it.price.toFixed(2)}€</strong>
                  </div>
                </div>

                <div style={{ display: "flex", gap: ".35rem", alignItems: "center" }}>
                  <button type="button" className="btn" onClick={() => decQty(it.id)}>
                    −
                  </button>
                  <span style={{ minWidth: 24, textAlign: "center", fontWeight: 900 }}>{it.qty}</span>
                  <button type="button" className="btn" onClick={() => incQty(it.id)}>
                    +
                  </button>
                </div>

                <div style={{ display: "flex", gap: ".5rem", justifyContent: "flex-end" }}>
                  <div style={{ fontWeight: 900 }}>{(it.price * it.qty).toFixed(2)}€</div>
                  <button type="button" className="btn" onClick={() => removeItem(it.id)} title="Quitar">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 280px",
              gap: ".75rem",
              alignItems: "end",
            }}
          >
            <label className="field">
              <span className="muted small">Cupón (DEV10 o DEV20)</span>
              <input className="input" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
            </label>

            <div className="card" style={{ padding: ".75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: ".75rem" }}>
                <span className="muted">Subtotal</span>
                <strong>{subtotal.toFixed(2)}€</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: ".75rem", marginTop: ".25rem" }}>
                <span className="muted">Descuento</span>
                <strong>−{discount.toFixed(2)}€</strong>
              </div>
              <div className="hr" style={{ margin: ".6rem 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", gap: ".75rem" }}>
                <span style={{ fontWeight: 900 }}>Total</span>
                <span style={{ fontWeight: 900, fontSize: "1.1rem" }}>{total.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: ".75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <button type="button" className="btn" onClick={resetCart}>
              🔁 Reiniciar carrito
            </button>
          </div>

          <details className="topic-details" style={{ marginTop: "1rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">🧠</span> Código clave: reduce (subtotal)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="topic-details__content">
              <div className="code-example">
                <pre>
                  <code>{`const subtotal = cart.reduce((acc, item) => {
  return acc + item.price * item.qty;
}, 0);`}</code>
                </pre>
              </div>
            </div>
          </details>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          RETO FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Reto final (para entregar)</h2>
          <span className="topic-section__meta">reto</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <ol style={{ margin: 0 }}>
            <li>
              En el <strong>Data Lab</strong>, añade un botón “🎲 Aleatorio” que seleccione un nombre al azar con{" "}
              <code>Math.random()</code>.
            </li>
            <li>
              En el <strong>Carrito</strong>, crea un producto nuevo con un formulario (nombre + precio + qty) y añádelo al
              array con <code>setCart</code>.
            </li>
            <li>
              En el <strong>Quiz</strong>, añade un resumen final: “Te falta repasar…” según fallos (si fallas strings,
              mostrar ‘repasa trim/includes’).
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
}
