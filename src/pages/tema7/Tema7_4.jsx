// src/pages/tema7/Tema7_4.jsx
export default function Tema7_4() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.4</span>
          <h1>Funciones con return</h1>
          <p className="muted">
            Aprende a hacer que una función devuelva un resultado para poder
            usarlo más adelante en tu programa.
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
              <span className="badge">🔑</span> return = devolver un valor
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Hasta ahora, las funciones <strong>mostraban cosas</strong> en
              pantalla.  
              Con <code>return</code>, una función puede <strong>entregar un
              resultado</strong>.
            </p>

            <p>
              Ese resultado se puede:
            </p>
            <ul>
              <li>Guardar en una variable</li>
              <li>Usar en cálculos</li>
              <li>Pasar a otra función</li>
            </ul>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Traducción mental</p>
              <p className="muted" style={{ margin: 0 }}>
                <code>return</code> es como decir: “toma este resultado y úsalo”.
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
          <h2>🧾 Sintaxis básica</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Calcular → devolver
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function nombreFuncion() {
  const resultado = 10 + 5;
  return resultado;
}

const valor = nombreFuncion();
console.log(valor);`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              Cuando JavaScript encuentra <code>return</code>, la función
              <strong>termina</strong> y devuelve ese valor.
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
              <span className="badge">①</span> Devolver un número
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function sumar(a, b) {
  return a + b;
}

const resultado = sumar(4, 6);
console.log(resultado); // 10`}</code>
              </pre>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">②</span> Usar el resultado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function calcularIVA(precio) {
  return precio * 0.21;
}

const iva = calcularIVA(100);
const total = 100 + iva;

console.log("IVA:", iva);
console.log("Total:", total);`}</code>
              </pre>
            </div>

            <p className="muted">
              El valor devuelto se puede usar en otras operaciones.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">③</span> return + condicional
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorEdad(16)); // false
console.log(esMayorEdad(25)); // true`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Truco</p>
              <p className="muted" style={{ margin: 0 }}>
                Una función puede devolver números, textos o valores booleanos.
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
              <span className="badge">❌</span> Confundir console.log con return
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function malEjemplo() {
  console.log(10);
}

const valor = malEjemplo();
console.log(valor); // undefined`}</code>
              </pre>
            </div>

            <p className="muted">
              <code>console.log</code> muestra algo, pero <strong>no devuelve</strong>
              nada.
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
              <span className="badge">🎯</span> Calculadora simple
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función <code>calcularDescuento</code>.</li>
              <li>Debe recibir un precio.</li>
              <li>Devuelve el precio con un 10% de descuento.</li>
              <li>Guarda el resultado en una variable y muéstralo.</li>
            </ol>

            <div className="divider" />

            <h3>🎯 Reto</h3>
            <p className="muted">
              Haz que la función devuelva <code>0</code> si el precio es negativo.
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
                <code>{`function calcularDescuento(precio) {
  if (precio < 0) {
    return 0;
  }

  const descuento = precio * 0.1;
  return precio - descuento;
}

const final = calcularDescuento(50);
console.log("Precio final:", final);`}</code>
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
              <span className="badge">📌</span> Qué te llevas de 7.4
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li><code>return</code> devuelve un valor.</li>
              <li>Ese valor se puede guardar y reutilizar.</li>
              <li>Una función termina cuando encuentra <code>return</code>.</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Siguiente</p>
              <p className="muted" style={{ margin: 0 }}>
                En <strong>7.5</strong> veremos valores por defecto y pequeñas mejoras.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
