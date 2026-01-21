// src/pages/Ejercicios/EjercicioForOf.jsx
// Ejercicio React · for...of con arrays
// Nivel: primer contacto real con arrays + recorrido limpio

export default function EjercicioForOf() {
  // =========================
  // EJERCICIO 1 · RECORRER ARRAY
  // =========================
  const ejecutarEjercicioBasico = () => {
    const frutas = ["manzana", "plátano", "cereza", "naranja"];

    console.clear();
    alert("Mira la consola para ver el resultado");

    // Acceso directo a una posición
    console.log("Fruta en la posición 2:", frutas[2]);

    // Recorrido con for...of
    for (let fruta of frutas) {
      console.log("Fruta:", fruta);
    }

    alert("✅ Revisa la consola (F12)");
  };

  // =========================
  // EJERCICIO 2 · RETO VISUAL
  // =========================
  const ejecutarReto = () => {
    const frutas = ["manzana", "plátano", "cereza", "naranja", "kiwi", "mango"];

    let resultado = "";

    for (let fruta of frutas) {
      resultado += "📦 " + fruta + "\n";
    }

    alert("Frutas en cajas:\n\n" + resultado);
    console.log("Resultado final:\n" + resultado);
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E13 · Práctica</span>
        <h1>Ejercicio: for...of con arrays</h1>
        <p className="muted">
          En este ejercicio aprenderás a recorrer <strong>arrays</strong> usando{" "}
          <strong>for...of</strong>, una forma más sencilla y legible que el{" "}
          <strong>for clásico</strong>.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicioBasico}>
            ▶ Ejercicio 1 · Recorrer frutas
          </button>
          <button className="btn btn-ghost" onClick={ejecutarReto}>
            🍓 Reto · Frutas en cajas
          </button>
          <span className="muted small">
            Consejo: abre la consola para entender mejor lo que pasa.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* EJERCICIO 1 */}
      <section className="card">
        <h2>Ejercicio 1: Recorriendo un array con for...of</h2>

        <p className="muted">
          Partimos de un array de frutas. Primero accedemos a una posición concreta
          y luego recorremos todas las frutas usando <code>for...of</code>.
        </p>

        <pre>
          <code>{`let frutas = ["manzana", "plátano", "cereza", "naranja"];

console.log(frutas[2]); // acceso directo

for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            <code>for...of</code> recorre directamente los <strong>valores</strong> del array,
            sin usar índices ni <code>length</code>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* COMPARACIÓN */}
      <section className="card">
        <h2>Comparación: for clásico vs for...of</h2>

        <pre>
          <code>{`// FOR clásico
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// FOR...OF
for (let fruta of frutas) {
  console.log(fruta);
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Importante</div>
          <p>
            Con <code>for...of</code> no tienes el índice automáticamente. Si lo necesitas,
            de momento usa el <code>for</code> clásico.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* RETO */}
      <section className="card">
        <h2>Reto: Frutas en cajas (primer paso hacia el DOM)</h2>

        <p className="muted">
          En este reto usamos <code>for...of</code> para construir un resultado visual.
          En HTML clásico se haría con <code>innerHTML</code>. Aquí lo simulamos
          para centrarnos en la lógica.
        </p>

        <pre>
          <code>{`let frutas = ["manzana", "plátano", "cereza", "naranja", "kiwi", "mango"];
let resultado = "";

for (let fruta of frutas) {
  resultado += "📦 " + fruta + "\\n";
}

alert(resultado);`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧩 Lo importante aquí</div>
          <p>
            No es el HTML todavía. Es entender que usamos un{" "}
            <strong>bucle + acumulador</strong> para construir contenido.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* RETOS EXTRA */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Retos extra</h2>
          <span className="topic-section__meta">Para pensar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Mejora el ejercicio</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Cambia el array por nombres de personas.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Muestra también cuántas frutas hay en total.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Añade un emoji distinto a cada fruta (pista: condicionales).
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
