// src/pages/Ejercicios/EjercicioEscalera.jsx
// Ejercicio React · Escalera de símbolos con for
// Nivel: iniciación a bucles + acumuladores

export default function EjercicioEscalera() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio = () => {
    let altura = prompt("Introduce la altura de la escalera:");

    if (altura === null) {
      alert("Has cancelado el ejercicio.");
      return;
    }

    altura = Number(altura);

    if (Number.isNaN(altura) || altura <= 0) {
      alert("Debes introducir un número válido mayor que 0.");
      return;
    }

    let linea = "";

    for (let i = 1; i <= altura; i++) {
      linea = linea + "😊";
      alert(linea);
      console.log("Línea " + i + ": " + linea);
    }

    alert("✅ Escalera completada");
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E11 · Práctica</span>
        <h1>Ejercicio: Escalera de símbolos</h1>
        <p className="muted">
          En este ejercicio vas a usar un <strong>bucle for</strong> y una{" "}
          <strong>variable acumuladora</strong> para construir una escalera línea a línea.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio}>
            ▶ Empezar ejercicio
          </button>
          <span className="muted small">
            Consejo: fíjate cómo crece la variable <code>linea</code>.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO */}
      <section className="card">
        <h2>Enunciado</h2>
        <p className="muted">
          Crea un programa que pida al usuario la <strong>altura</strong> de una escalera y
          muestre el siguiente resultado:
        </p>

        <pre>
          <code>{`😊
😊😊
😊😊😊
😊😊😊😊`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            No reiniciamos la línea en cada vuelta. Vamos <strong>añadiendo</strong> un símbolo
            en cada iteración.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EXPLICACIÓN */}
      <section className="card">
        <h2>¿Cómo funciona?</h2>

        <ol>
          <li>
            Pedimos la altura con <code>prompt()</code>.
          </li>
          <li>
            Creamos una variable <code>linea</code> vacía (<code>""</code>).
          </li>
          <li>
            En cada vuelta del <code>for</code>, añadimos un símbolo:
            <br />
            <code>linea = linea + "😊"</code>
          </li>
          <li>
            Mostramos el contenido actual de <code>linea</code>.
          </li>
        </ol>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Error típico</div>
          <p>
            Si reinicias <code>linea</code> dentro del bucle, la escalera{" "}
            <strong>no crecerá</strong>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <pre>
          <code>{`let altura = Number(prompt("Introduce la altura"));
let linea = "";

for (let i = 1; i <= altura; i++) {
  linea = linea + "😊";
  alert(linea);
}`}</code>
        </pre>
      </section>

      <div className="divider" />

      {/* RETO */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para practicar más</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Mejora la escalera</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Cambia el símbolo 😊 por <code>*</code> o <code>#</code>.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Haz una escalera inversa (empieza con muchos símbolos y ve quitando).
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Pide al usuario el símbolo que quiere usar.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
