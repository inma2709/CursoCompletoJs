// src/pages/Arrays/Arrays.jsx
import { Link } from "react-router-dom";

export default function Arrays() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Arrays en JavaScript</h1>
          <p className="muted">
            Aprende a guardar <strong>listas de datos</strong> (nombres, notas, productos…) y a recorrerlas,
            modificarlas y transformarlas sin volverte loco.
          </p>
        </div>
      </header>

      {/* VIDEO */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video: Arrays desde cero</h2>
          <p className="muted">
            Este vídeo te ayuda a entender <strong>qué es un array</strong>, cómo se usan los índices y cómo
            recorrer listas con ejemplos muy visuales.
          </p>

          <div
            className="video-container"
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/wCwfIf_NDoI"
              title="Video: Arrays en JavaScript"
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        {/* 1) MAPA / ÍNDICE */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧭</span> Mapa del módulo (por páginas)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Para que no se haga eterno, Arrays está dividido en varias páginas (como hicimos con bucles).
              Empieza por <strong>Intro</strong> y ve bajando en orden.
            </p>

            <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".75rem" }}>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>1) Intro</h3>
                <p className="muted">Qué es un array, índices, length, leer/escribir valores.</p>
                <Link className="btn btn-primary" to="/arrays/intro">
                  Ir a Intro →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>2) Recorrer arrays</h3>
                <p className="muted">for, for..of, forEach. Cuándo usar cada uno.</p>
                <Link className="btn btn-primary" to="/arrays/recorrer">
                  Ir a Recorrer →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>3) Métodos básicos</h3>
                <p className="muted">push/pop/shift/unshift, includes, join, slice/splice…</p>
                <Link className="btn btn-primary" to="/arrays/metodos-basicos">
                  Ir a Métodos →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>4) Transformar</h3>
                <p className="muted">map, filter, find, reduce (nivel “pro” pero explicado fácil).</p>
                <Link className="btn btn-primary" to="/arrays/transformar">
                  Ir a Transformar →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>5) Arrays de objetos</h3>
                <p className="muted">Caso real: alumnos, productos, renderizado en React.</p>
                <Link className="btn btn-primary" to="/arrays/objetos">
                  Ir a Objetos →
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>6) Ejercicios</h3>
                <p className="muted">Ejercicios guiados + soluciones en acordeón.</p>
                <Link className="btn btn-primary" to="/arrays/ejercicios">
                  Ir a Ejercicios →
                </Link>
              </div>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Consejo de profe</p>
              <p className="muted">
                Si entiendes bien <strong>índice</strong> y <strong>length</strong>, ya tienes el 60% del tema.
                El resto es práctica con métodos.
              </p>
            </div>
          </div>
        </details>

        {/* 2) QUÉ ES UN ARRAY */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">📦</span> ¿Qué es un array?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>array</strong> es una “caja grande” que guarda <strong>varios valores</strong> en orden.
              En vez de crear 10 variables (nombre1, nombre2, nombre3…), usamos una lista.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">🧠 Piensa en una estantería</p>
              <ul className="muted">
                <li>Cada hueco de la estantería es una posición: <strong>índice</strong>.</li>
                <li>El primer hueco es el índice <code>0</code> (esto al principio choca, pero te acostumbras).</li>
                <li>La cantidad total de huecos se mira con <code>length</code>.</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplo súper básico</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "pera", "plátano"];

console.log(frutas[0]); // "manzana"
console.log(frutas[1]); // "pera"
console.log(frutas.length); // 3`}</code>
              </pre>
            </div>
          </div>
        </details>

        {/* 3) MINI DEMO */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Mini demo (para entender índice + length)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Fíjate en esto: si un array tiene <code>length = 3</code>, los índices van de{" "}
              <code>0</code> a <code>2</code>.
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Índice</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>0</code></td>
                    <td>primer elemento</td>
                  </tr>
                  <tr>
                    <td><code>1</code></td>
                    <td>segundo elemento</td>
                  </tr>
                  <tr>
                    <td><code>2</code></td>
                    <td>tercer elemento</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🔎 Código de ejemplo</h4>
              <pre>
                <code className="language-js">{`let alumnos = ["Ana", "Juan", "Marta"];

// ✅ último elemento = length - 1
let ultimo = alumnos[alumnos.length - 1];

console.log("Lista:", alumnos);
console.log("Total:", alumnos.length);
console.log("Último:", ultimo);`}</code>
              </pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Error típico</p>
              <p className="muted">
                Esto NO funciona porque te sales del array:
                <code>alumnos[alumnos.length]</code> → devuelve <code>undefined</code>.
                El último siempre es <code>length - 1</code>.
              </p>
            </div>
          </div>
        </details>

        {/* 4) EJERCICIO RÁPIDO */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Ejercicio rápido (calentamiento)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Este ejercicio es para que “te haga clic” lo de índice + length.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📘 Enunciado</h4>
              <ul className="muted">
                <li>Crea un array con 4 nombres.</li>
                <li>Muestra el primer nombre en consola.</li>
                <li>Muestra el último nombre usando <code>length - 1</code>.</li>
                <li>Muestra cuántos nombres hay en total.</li>
              </ul>

              <h5 style={{ marginTop: ".75rem" }}>🧩 Código base</h5>
              <pre>
                <code className="language-js">{`// 1) Crea el array con 4 nombres
let nombres = [];

// 2) Muestra el primero

// 3) Muestra el último (length - 1)

// 4) Muestra el total (length)`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">💡 Pista</p>
              <p className="muted">
                Si el array tiene 4 elementos, <code>length</code> vale 4, pero el último índice es 3.
              </p>
            </div>
          </div>
        </details>

        {/* NAV FINAL */}
        <div
          className="card"
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/tema5" className="btn btn-ghost">
            ← Estructuras de control
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Listo para empezar Arrays 🚀</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Entra ahora en “Intro” y vamos paso a paso.
            </p>
          </div>

          <Link to="/arrays/intro" className="btn btn-primary">
            Empezar por Intro →
          </Link>
        </div>
      </section>
    </article>
  );
}
