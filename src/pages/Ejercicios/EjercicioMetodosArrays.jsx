// src/pages/Ejercicios/EjercicioMetodosArrays.jsx
// M6 · Métodos básicos de Arrays
// Nivel: básico → medio → reto

export default function EjercicioMetodosArrays() {
  // =========================
  // EJERCICIO 1 · push / pop
  // =========================
  const ejercicioBasico = () => {
    let frutas = ["manzana", "plátano", "naranja"];

    console.clear();
    console.log("Array inicial:", frutas);

    frutas.push("kiwi");
    console.log("Después de push('kiwi'):", frutas);

    frutas.pop();
    console.log("Después de pop():", frutas);

    alert("Ejercicio 1 terminado. Mira la consola (F12)");
  };

  // =========================
  // EJERCICIO 2 · length
  // =========================
  const ejercicioMedio = () => {
    let alumnos = ["Ana", "Luis", "María", "Carlos"];

    alert("Hay " + alumnos.length + " alumnos en el array");
    console.log("Alumnos:", alumnos);
    console.log("Total alumnos:", alumnos.length);
  };

  // =========================
  // EJERCICIO 3 · shift / unshift
  // =========================
  const ejercicioReto = () => {
    let cola = ["cliente1", "cliente2", "cliente3"];

    console.log("Cola inicial:", cola);

    cola.shift();
    console.log("Después de shift():", cola);

    cola.unshift("clienteVIP");
    console.log("Después de unshift('clienteVIP'):", cola);

    alert("Ejercicio 3 terminado. Mira la consola (F12)");
  };

  // =========================
  // UI / EXPLICACIÓN
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M6 · Práctica</span>
        <h1>Ejercicios: Métodos básicos de Arrays</h1>
        <p className="muted">
          En estos ejercicios aprenderás a <strong>modificar arrays</strong> usando
          métodos básicos como <code>push</code>, <code>pop</code>, <code>shift</code>,
          <code>unshift</code> y <code>length</code>.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejercicioBasico}>
            ▶ Ejercicio 1 · push / pop
          </button>
          <button className="btn btn-ghost" onClick={ejercicioMedio}>
            ▶ Ejercicio 2 · length
          </button>
          <button className="btn btn-ghost" onClick={ejercicioReto}>
            ▶ Ejercicio 3 · shift / unshift
          </button>
          <span className="muted small">
            Consejo: observa siempre el array antes y después del método.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* EJERCICIO 1 */}
      <section className="card">
        <h2>Ejercicio 1 · push() y pop()</h2>
        <p className="muted">
          <code>push()</code> añade un elemento al final del array y
          <code>pop()</code> elimina el último elemento.
        </p>

        <pre>
          <code>{`let frutas = ["manzana", "plátano", "naranja"];

frutas.push("kiwi");
frutas.pop();`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            <code>push</code> y <code>pop</code> trabajan siempre con el
            <strong> final del array</strong>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EJERCICIO 2 */}
      <section className="card">
        <h2>Ejercicio 2 · length</h2>
        <p className="muted">
          El método <code>length</code> nos dice cuántos elementos tiene un array.
        </p>

        <pre>
          <code>{`let alumnos = ["Ana", "Luis", "María", "Carlos"];

console.log(alumnos.length);`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Ojo</div>
          <p>
            <code>length</code> no es una función, no lleva paréntesis.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EJERCICIO 3 */}
      <section className="card">
        <h2>Ejercicio 3 · shift() y unshift()</h2>
        <p className="muted">
          Estos métodos trabajan con el <strong>inicio del array</strong>.
        </p>

        <pre>
          <code>{`let cola = ["cliente1", "cliente2", "cliente3"];

cola.shift();      // elimina el primero
cola.unshift("VIP"); // añade al principio`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧩 Comparación rápida</div>
          <p>
            <strong>push/pop</strong> → final del array<br />
            <strong>shift/unshift</strong> → inicio del array
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* RETOS EXTRA */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Retos extra</h2>
          <span className="topic-section__meta">Para practicar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Mejora los ejercicios</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Crea un array vacío y añade 5 elementos usando <code>push()</code>.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Simula una cola de espera usando <code>shift()</code> y
                <code>push()</code>.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Elimina todos los elementos de un array uno a uno usando
                <code>pop()</code>.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
