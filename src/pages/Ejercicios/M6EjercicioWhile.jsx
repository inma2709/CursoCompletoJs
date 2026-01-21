// src/pages/M6_Ejercicio_While.jsx
// Ejercicio React · bucle while
// Nota didáctica: usamos prompt() y alert() + console.log para centrarnos SOLO en la lógica.

export default function M6EjercicioWhile() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio = () => {
    // Inicializamos el contador
    let contador = 1;

    // Bucle while: se repite mientras la condición sea verdadera
    while (contador < 5) {
      alert("Contador: " + contador);
      console.log("Valor actual del contador: " + contador);

      // IMPORTANTE: incrementamos el contador
      contador++;
    }

    alert("El bucle ha terminado");
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M6 · Práctica</span>
        <h1>Ejercicio: Primer bucle while</h1>
        <p className="muted">
          En este ejercicio vas a aprender qué es un <strong>bucle</strong> y cómo funciona{" "}
          <strong>while</strong>. Repetiremos código automáticamente usando un{" "}
          <strong>contador</strong>.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio}>
            ▶ Empezar ejercicio
          </button>
          <span className="muted small">
            Abre la consola (F12) para ver los mensajes paso a paso.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* EXPLICACIÓN PASO A PASO */}
      <section className="card">
        <h2>¿Qué hace este programa?</h2>

        <ol>
          <li>
            Crea una variable llamada <code>contador</code> con valor inicial <strong>1</strong>.
          </li>
          <li>
            Entra en un bucle <strong>while</strong> que se ejecuta{" "}
            <strong>mientras contador sea menor que 5</strong>.
          </li>
          <li>
            En cada vuelta:
            <ul>
              <li>Muestra el valor del contador con <code>alert()</code>.</li>
              <li>Muestra el valor en consola con <code>console.log()</code>.</li>
              <li>Aumenta el contador en 1.</li>
            </ul>
          </li>
          <li>
            Cuando el contador llega a 5, la condición deja de cumplirse y el bucle termina.
          </li>
        </ol>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            Un bucle <strong>while</strong> repite código <strong>mientras una condición sea
            verdadera</strong>. Si la condición es falsa, el bucle no se ejecuta.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO COMENTADO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <p className="muted">
          Fíjate en tres cosas importantes: el valor inicial del contador, la condición del{" "}
          <code>while</code> y el incremento <code>contador++</code>.
        </p>

        <pre>
          <code>{`let contador = 1;

while (contador < 5) {
  alert("Contador: " + contador);
  console.log("Valor actual del contador: " + contador);

  contador++;
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Muy importante</div>
          <p>
            Si olvidas aumentar el contador (<code>contador++</code>), el bucle{" "}
            <strong>nunca termina</strong> y el navegador se quedará bloqueado.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* PROPUESTA DE NUEVO RETO */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para practicar más</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🔁 Reto: cuenta hasta 10</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Tu objetivo:</strong>
              <p className="links-desc">
                Modifica el ejercicio para que el contador empiece en 1 y llegue hasta 10.
              </p>
            </li>

            <li className="links-item">
              <strong>Sube un nivel:</strong>
              <p className="links-desc">
                Haz que el programa muestre solo los números pares.
              </p>
            </li>

            <li className="links-item">
              <strong>Pista:</strong>
              <p className="links-desc">
                Puedes cambiar la condición del <code>while</code> o aumentar el contador de 2 en 2.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* ENLACES */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Enlaces relacionados</h2>
          <span className="topic-section__meta">Para ampliar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">📎 Recursos</h3>

          <ul className="links-list">
            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · while
              </a>
              <p className="links-desc">
                Sintaxis y ejemplos básicos del bucle <code>while</code>.
              </p>
            </li>

            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/console/log"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · console.log()
              </a>
              <p className="links-desc">
                Cómo mostrar mensajes en la consola del navegador.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
