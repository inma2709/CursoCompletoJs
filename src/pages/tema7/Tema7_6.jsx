// src/pages/tema7/Tema7_6.jsx
export default function Tema7_6() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M8 · 7.6</span>
          <h1>Funciones flecha (arrow functions)</h1>
          <p className="muted">
            Una forma más corta de escribir funciones. La idea es la misma: lo importante es
            entender qué entra (parámetros) y qué sale (return).
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
              <span className="badge">🔑</span> Mismo concepto, otra escritura
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Las <strong>funciones flecha</strong> no son “otra cosa distinta”.
              Son una forma más corta de escribir funciones.
            </p>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Consejo de profe</p>
              <p className="muted" style={{ margin: 0 }}>
                Si ya entiendes 7.3 (parámetros) y 7.4 (return), aquí solo estás cambiando la forma.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          COMPARATIVA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🆚 Comparativa: normal vs flecha</h2>
          <span className="topic-section__meta">comparativa</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Dos formas, mismo resultado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// ✅ Función normal
function sumar(a, b) {
  return a + b;
}

// ✅ Función flecha (equivalente)
const sumar2 = (a, b) => {
  return a + b;
}

console.log(sumar(2, 3));  // 5
console.log(sumar2(2, 3)); // 5`}</code>
              </pre>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              ¿Ves? La lógica es la misma: recibe <code>a</code> y <code>b</code> y devuelve la suma.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS PASO A PASO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧭 Cómo se escribe (paso a paso)</h2>
          <span className="topic-section__meta">pasos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">①</span> Estructura mínima
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// (1) Guardas la función en una constante:
const nombre = () => {
  // código
};`}</code>
              </pre>
            </div>

            <ul className="muted">
              <li><strong>const</strong> → la función se guarda en una variable.</li>
              <li><strong>()</strong> → parámetros (vacío si no hay).</li>
              <li><strong>=&gt;</strong> → la “flecha”.</li>
              <li><strong>{}</strong> → el bloque de código.</li>
            </ul>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">②</span> Con parámetros
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`const saludar = (nombre) => {
  console.log("Hola " + nombre);
};

saludar("Inma");`}</code>
              </pre>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">③</span> Return implícito (forma corta)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Si tu función devuelve <strong>una sola expresión</strong>, puedes escribirla en una línea.
            </p>

            <div className="code-example">
              <pre>
                <code>{`// Forma larga
const doble = (n) => {
  return n * 2;
};

// Forma corta (return implícito)
const doble2 = (n) => n * 2;

console.log(doble(4));  // 8
console.log(doble2(4)); // 8`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🧠 Pista</p>
              <p className="muted" style={{ margin: 0 }}>
                Si hay llaves <code>{`{}`}</code>, normalmente necesitas <code>return</code>.
                Si NO hay llaves, el return es implícito.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CUÁNDO USARLAS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🎯 ¿Cuándo usar funciones flecha?</h2>
          <span className="topic-section__meta">uso</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Reglas prácticas para principiantes
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                ✅ <strong>Úsalas</strong> cuando quieras una función corta y clara
                (por ejemplo, cálculos simples).
              </li>
              <li>
                ✅ <strong>Úsalas</strong> mucho en React (callbacks, handlers).
              </li>
              <li>
                ⚠️ <strong>Evita complicarte</strong>: si la función tiene mucha lógica,
                usa la forma normal (más legible al empezar).
              </li>
            </ul>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">📌 Para tu manual</p>
              <p className="muted" style={{ margin: 0 }}>
                En este curso inicial: entiende primero <strong>función normal</strong>,
                y luego usa flecha como “atajo”.
              </p>
            </div>
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
              <span className="badge">🎯</span> Convertidor de precio (con IVA)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>
                Crea una función flecha <code>precioConIVA</code> que reciba <code>precio</code>.
              </li>
              <li>
                Debe devolver el precio con IVA del 21% (usa <code>return</code> o forma corta).
              </li>
              <li>
                Prueba con 3 precios distintos.
              </li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Añade un segundo parámetro opcional <code>iva</code> con valor por defecto <code>0.21</code>.
              (Sí: estás mezclando 7.5 + 7.6 😉)
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
                <code>{`// ✅ Forma corta (return implícito)
const precioConIVA = (precio, iva = 0.21) => precio + precio * iva;

console.log(precioConIVA(10));       // 12.1
console.log(precioConIVA(50));       // 60.5
console.log(precioConIVA(100, 0.1)); // 110 (IVA 10%)`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Nota</p>
              <p className="muted" style={{ margin: 0 }}>
                Si prefieres hacerlo “largo”, también vale: llaves + return.
              </p>
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
              <span className="badge">📌</span> Qué te llevas de 7.6
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Una arrow function es otra forma de escribir una función.</li>
              <li>Puede llevar parámetros y return como cualquier otra.</li>
              <li>Si es una sola expresión, puedes usar return implícito.</li>
            </ul>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">➡️ Próximo paso sugerido</p>
              <p className="muted" style={{ margin: 0 }}>
                Ahora encaja perfecto un bloque de <strong>ejercicios de funciones</strong> (guiados + reto),
                antes de saltar a DOM o eventos.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
