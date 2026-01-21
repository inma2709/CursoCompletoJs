// src/pages/tema7/Tema7_3.jsx
export default function Tema7_3() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.3</span>
          <h1>Funciones con parámetros</h1>
          <p className="muted">
            Aprende a pasar información a una función para que haga cosas
            distintas según los datos que reciba.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧠 Idea clave del tema</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔑</span> Parámetros = datos de entrada
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una función con parámetros es como una <strong>máquina</strong> a la
              que le das datos para que los use.
            </p>

            <p>
              En lugar de hacer siempre lo mismo, la función se adapta a los
              valores que recibe.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Traducción mental</p>
              <p className="muted" style={{ margin: 0 }}>
                “Función + parámetros” = “misma acción, distintos resultados”
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS BÁSICA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧾 Sintaxis básica</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Declarar → pasar valores
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// Declaración (parámetros)
function saludar(nombre) {
  console.log("Hola " + nombre);
}

// Llamada (argumentos)
saludar("Ana");
saludar("Luis");`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              <strong>Parámetro</strong>: variable que usas dentro de la función.<br />
              <strong>Argumento</strong>: valor real que pasas al llamar a la función.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          EJEMPLOS PROGRESIVOS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>📈 Ejemplos progresivos</h2>
          <span className="topic-section__meta">ejemplos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">①</span> Un parámetro
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarEdad(edad) {
  console.log("Tienes " + edad + " años");
}

mostrarEdad(20);
mostrarEdad(35);`}</code>
              </pre>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">②</span> Varios parámetros
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarPersona(nombre, ciudad) {
  console.log(nombre + " vive en " + ciudad);
}

mostrarPersona("Marta", "Sevilla");
mostrarPersona("Carlos", "Madrid");`}</code>
              </pre>
            </div>

            <p className="muted">
              El <strong>orden importa</strong>: los valores se asignan en el
              mismo orden que los parámetros.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">③</span> Parámetros numéricos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function sumar(a, b) {
  console.log(a + b);
}

sumar(5, 3);
sumar(10, 20);`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CONDICIONALES DENTRO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🔀 Parámetros + condicionales</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚙️</span> Decidir según el dato recibido
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function comprobarEdad(edad) {
  if (edad >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }
}

comprobarEdad(16);
comprobarEdad(21);`}</code>
              </pre>
            </div>

            <p className="muted">
              La función usa el parámetro para tomar decisiones.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio (guiado)</h2>
          <span className="topic-section__meta">práctica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Saludos personalizados
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función <code>saludarPersona</code>.</li>
              <li>Debe recibir un <strong>nombre</strong>.</li>
              <li>Muestra un saludo usando ese nombre.</li>
              <li>Llama a la función con al menos 3 personas distintas.</li>
            </ol>

            <div className="divider" />

            <h3>🎯 Reto</h3>
            <p className="muted">
              Añade un segundo parámetro <code>idioma</code> y muestra el saludo
              en español o inglés según su valor.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function saludarPersona(nombre, idioma) {
  if (idioma === "en") {
    console.log("Hello " + nombre);
  } else {
    console.log("Hola " + nombre);
  }
}

saludarPersona("Ana", "es");
saludarPersona("John", "en");
saludarPersona("Lucía", "es");`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>✅ Cierre</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📌</span> Qué te llevas de 7.3
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Los parámetros permiten pasar datos a una función.</li>
              <li>Una misma función puede comportarse distinto según los valores.</li>
              <li>El orden de los argumentos importa.</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Siguiente</p>
              <p className="muted" style={{ margin: 0 }}>
                En <strong>7.4</strong> aprenderás a devolver resultados con <code>return</code>.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
