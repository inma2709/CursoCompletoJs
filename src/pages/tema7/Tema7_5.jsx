// src/pages/tema7/Tema7_5.jsx
export default function Tema7_5() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.5</span>
          <h1>Parámetros con valores por defecto</h1>
          <p className="muted">
            Aprende a crear funciones más flexibles usando valores por defecto
            cuando no se pasan todos los datos.
          </p>
        </div>
      </header>

      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧠 Idea clave</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Valores por defecto
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              A veces llamamos a una función <strong>sin pasar todos los
              parámetros</strong>.
            </p>
            <p>
              Los <strong>valores por defecto</strong> permiten que la función
              siga funcionando sin errores.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Idea mental</p>
              <p className="muted" style={{ margin: 0 }}>
                “Si no me dices nada, uso este valor”.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧾 Sintaxis</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Parámetro = valor
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function saludar(nombre = "Amigo") {
  console.log("Hola " + nombre);
}

saludar("Ana");
saludar();`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              Si no se pasa el parámetro, JavaScript usa el valor por defecto.
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
              <span className="badge">①</span> Un parámetro opcional
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mostrarMensaje(texto = "Mensaje vacío") {
  console.log(texto);
}

mostrarMensaje("Hola mundo");
mostrarMensaje();`}</code>
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
                <code>{`function crearUsuario(nombre = "Anónimo", edad = 18) {
  console.log(nombre + " tiene " + edad + " años");
}

crearUsuario("Laura", 30);
crearUsuario("Pedro");
crearUsuario();`}</code>
              </pre>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">③</span> Con return
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function calcularPrecio(precio, iva = 0.21) {
  return precio + precio * iva;
}

console.log(calcularPrecio(100));
console.log(calcularPrecio(100, 0.1));`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Consejo</p>
              <p className="muted" style={{ margin: 0 }}>
                Los parámetros obligatorios suelen ir primero; los opcionales,
                después.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          ERROR COMÚN
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚠️ Error común</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">❌</span> Orden incorrecto
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// ❌ No recomendado
function ejemplo(modo = "simple", nombre) {
  console.log(nombre, modo);
}`}</code>
              </pre>
            </div>

            <p className="muted">
              Primero los parámetros obligatorios, después los que tienen valor
              por defecto.
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
              <span className="badge">🎯</span> Saludo flexible
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función <code>saludar</code>.</li>
              <li>Debe recibir un nombre (por defecto “Amigo”).</li>
              <li>Debe recibir un saludo (por defecto “Hola”).</li>
              <li>Muestra el mensaje completo por consola.</li>
            </ol>

            <div className="divider" />

            <h3>🎯 Reto</h3>
            <p className="muted">
              Haz que la función devuelva el texto en lugar de mostrarlo.
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
                <code>{`function saludar(nombre = "Amigo", saludo = "Hola") {
  return saludo + " " + nombre;
}

const mensaje = saludar();
console.log(mensaje);

console.log(saludar("Inma", "Buenas"));`}</code>
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
              <span className="badge">📌</span> Qué te llevas de 7.5
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Puedes definir valores por defecto en los parámetros.</li>
              <li>Las funciones son más flexibles y seguras.</li>
              <li>Evitas errores cuando faltan datos.</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Siguiente</p>
              <p className="muted" style={{ margin: 0 }}>
                En <strong>7.6</strong> veremos funciones flecha y cuándo usarlas.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
