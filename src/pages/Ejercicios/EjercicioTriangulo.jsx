// src/pages/Ejercicios/EjercicioTriangulo.jsx
// Ejercicio React · Triángulo con símbolos
// Nivel: introducción a bucles anidados (for dentro de for)

export default function EjercicioTriangulo() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio = () => {
    let altura = prompt("Introduce la altura del triángulo:");

    if (altura === null) {
      alert("Has cancelado el ejercicio.");
      return;
    }

    altura = Number(altura);

    if (Number.isNaN(altura) || altura <= 0) {
      alert("Debes introducir un número válido mayor que 0.");
      return;
    }

    // Construimos el triángulo línea a línea
    for (let i = 1; i <= altura; i++) {
      let espacios = "";
      let simbolos = "";

      // Espacios (cada fila tiene uno menos)
      for (let j = 1; j <= altura - i; j++) {
        espacios = espacios + " ";
      }

      // Símbolos (cada fila tiene uno más)
      for (let k = 1; k <= i; k++) {
        simbolos = simbolos + "😁";
      }

      alert(espacios + simbolos);
      console.log("Fila " + i + ":", espacios + simbolos);
    }

    alert("✅ Triángulo completado");
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E12 · Práctica</span>
        <h1>Ejercicio: Triángulo con símbolos</h1>
        <p className="muted">
          En este ejercicio aprenderás a usar <strong>bucles anidados</strong> para
          construir un triángulo alineado usando espacios y símbolos.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio}>
            ▶ Empezar ejercicio
          </button>
          <span className="muted small">
            Consejo: piensa cada fila por separado.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO */}
      <section className="card">
        <h2>Enunciado</h2>
        <p className="muted">
          El programa debe pedir la <strong>altura</strong> del triángulo y mostrar un
          resultado similar a este:
        </p>

        <pre>
          <code>{`   😁
  😁😁
 😁😁😁
😁😁😁😁`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            Cada fila se compone de <strong>espacios + símbolos</strong>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EXPLICACIÓN */}
      <section className="card">
        <h2>¿Cómo funciona el triángulo?</h2>

        <ol>
          <li>
            El bucle exterior (<code>i</code>) controla las <strong>filas</strong>.
          </li>
          <li>
            El primer bucle interior crea los <strong>espacios</strong>.
          </li>
          <li>
            El segundo bucle interior crea los <strong>símbolos</strong>.
          </li>
          <li>
            En cada fila hay menos espacios y más símbolos.
          </li>
        </ol>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Muy importante</div>
          <p>
            Los bucles interiores se ejecutan <strong>completamente</strong> en cada vuelta
            del bucle exterior.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <pre>
          <code>{`for (let i = 1; i <= altura; i++) {
  let espacios = "";
  let simbolos = "";

  for (let j = 1; j <= altura - i; j++) {
    espacios = espacios + " ";
  }

  for (let k = 1; k <= i; k++) {
    simbolos = simbolos + "😁";
  }

  alert(espacios + simbolos);
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
          <h3 className="links-box__title">🚀 Mejora el triángulo</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Cambia el símbolo 😁 por <code>*</code> o <code>#</code>.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Haz el triángulo invertido.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Intenta hacer un rombo (pista: dos triángulos).
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
