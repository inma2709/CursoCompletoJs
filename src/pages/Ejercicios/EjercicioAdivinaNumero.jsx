// src/pages/Ejercicios/EjercicioAdivinaNumero.jsx
// Juego: Adivina el número
// Nivel: iniciación a lógica completa con while

export default function EjercicioAdivinaNumero() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarJuego = () => {
    // 1️⃣ Generamos un número aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let numeroUsuario = null;
    let intentos = 0;

    // 2️⃣ Mientras no acierte, seguimos preguntando
    while (numeroUsuario !== numeroAleatorio) {
      numeroUsuario = prompt("Introduce un número entre 1 y 100:");

      // Si cancela
      if (numeroUsuario === null) {
        alert("Has cancelado el juego.");
        return;
      }

      numeroUsuario = Number(numeroUsuario);

      // Validación básica
      if (Number.isNaN(numeroUsuario)) {
        alert("Debes introducir un número válido.");
        continue;
      }

      intentos++;

      if (numeroUsuario < numeroAleatorio) {
        alert("📈 El número es MÁS ALTO");
      }

      if (numeroUsuario > numeroAleatorio) {
        alert("📉 El número es MÁS BAJO");
      }
    }

    // 3️⃣ Cuando acierta
    alert(`🎉 ¡Correcto! Has adivinado el número en ${intentos} intentos`);
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E10 · Juego</span>
        <h1>Ejercicio: Adivina el número</h1>
        <p className="muted">
          Vas a crear un <strong>juego completo</strong> usando JavaScript. El programa
          piensa un número y tú debes adivinarlo con ayuda de pistas.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarJuego}>
            ▶ Empezar juego
          </button>
          <span className="muted small">
            Consejo: piensa en el rango y usa la lógica “más alto / más bajo”.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO */}
      <section className="card">
        <h2>Enunciado</h2>
        <p className="muted">
          El programa genera un número aleatorio entre <strong>1 y 100</strong> que el
          usuario no conoce.
        </p>

        <ul>
          <li>El usuario introduce números mediante <code>prompt()</code>.</li>
          <li>
            Si el número es menor → se muestra <strong>“Más alto”</strong>.
          </li>
          <li>
            Si el número es mayor → se muestra <strong>“Más bajo”</strong>.
          </li>
          <li>El proceso se repite hasta que el usuario acierta.</li>
          <li>
            Al acertar, se muestra el número de <strong>intentos</strong>.
          </li>
        </ul>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            El bucle <strong>while</strong> es perfecto cuando no sabemos cuántas veces se
            repetirá algo.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EXPLICACIÓN */}
      <section className="card">
        <h2>¿Qué conceptos estás usando?</h2>

        <ol>
          <li>
            <strong>Número aleatorio:</strong> <code>Math.random()</code>
          </li>
          <li>
            <strong>Bucle while:</strong> se repite hasta acertar
          </li>
          <li>
            <strong>Condicionales:</strong> para dar pistas
          </li>
          <li>
            <strong>Contador:</strong> para contar intentos
          </li>
        </ol>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Muy importante</div>
          <p>
            <code>prompt()</code> devuelve texto. Por eso lo convertimos a número con{" "}
            <code>Number()</code>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <pre>
          <code>{`const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroUsuario;

while (numeroUsuario !== numeroAleatorio) {
  numeroUsuario = Number(prompt("Introduce un número"));

  intentos++;

  if (numeroUsuario < numeroAleatorio) {
    alert("Más alto");
  }

  if (numeroUsuario > numeroAleatorio) {
    alert("Más bajo");
  }
}

alert("Correcto en " + intentos + " intentos");`}</code>
        </pre>
      </section>

      <div className="divider" />

      {/* RETO */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para pensar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Mejora el juego</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Limita el número máximo de intentos a 7.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Muestra un mensaje si el usuario escribe un número fuera del rango (1–100).
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Cambia el rango a 1–50 o 1–1000.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
