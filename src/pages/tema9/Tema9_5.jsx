// src/pages/tema9/Tema9_5.jsx
export default function Tema9_5() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9.5</span>
          <h1>Tema 9.5 · Repaso + ejercicios MIX</h1>
          <p className="muted">
            Cerramos el tema 9 consolidando todo lo aprendido: arrays, objetos,
            condicionales, strings, DOM y eventos, aplicados a pequeños retos
            reales y guiados.
          </p>
        </div>
      </header>

      {/* =========================
          OBJETIVO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Objetivo del bloque</h2>
          <span className="topic-section__meta">repaso</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Qué vas a consolidar
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Manipular <strong>arrays de objetos</strong>.</li>
              <li>Usar <code>if / else</code> y operadores lógicos con sentido.</li>
              <li>Trabajar con <strong>strings</strong> y template literals.</li>
              <li>Actualizar la interfaz con <strong>DOM</strong>.</li>
              <li>Separar mentalmente: <strong>datos → lógica → render</strong>.</li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Este tema no introduce nada nuevo: sirve para que el alumno diga
                <strong> “vale, ya sé hacer cosas”</strong>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📝 Ejercicio 1 · Media de notas (arrays + objetos)</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1</span> Enunciado guiado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Dispones de un array de alumnos. Cada alumno es un objeto con:
              <strong> nombre</strong> y <strong> notas</strong> (array de números).
            </p>

            <div className="code-example">
              <pre>
                <code>{`const alumnos = [
  { nombre: "Ana", notas: [8, 7, 9] },
  { nombre: "Luis", notas: [5, 6, 4] },
  { nombre: "María", notas: [9, 8, 10] }
];`}</code>
              </pre>
            </div>

            <ol>
              <li>Calcula la media de cada alumno.</li>
              <li>Muestra el nombre y su media en pantalla.</li>
              <li>Indica si está <strong>APROBADO</strong> (≥ 6) o <strong>SUSPENSO</strong>.</li>
            </ol>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Pista
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <ul>
                  <li>Usa un <code>for</code> para sumar las notas.</li>
                  <li>La media es <code>suma / notas.length</code>.</li>
                  <li>Con un <code>if</code> decides aprobado o no.</li>
                </ul>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Posible solución
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const resultado = document.getElementById("resultado");
let html = "";

for (const alumno of alumnos) {
  let suma = 0;

  for (const nota of alumno.notas) {
    suma += nota;
  }

  const media = suma / alumno.notas.length;
  const estado = media >= 6 ? "APROBADO" : "SUSPENSO";

  html += \`\${alumno.nombre}: \${media.toFixed(2)} → \${estado}<br>\`;
}

resultado.innerHTML = html;`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🛍️ Ejercicio 2 · Mini tienda (objetos + condiciones)</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">2</span> Enunciado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Tienes un array de productos. Cada producto tiene
              <strong> nombre</strong>, <strong> precio</strong> y <strong> stock</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const productos = [
  { nombre: "Camiseta", precio: 12.99, stock: 4 },
  { nombre: "Taza", precio: 6.5, stock: 0 },
  { nombre: "Libro", precio: 18, stock: 7 },
  { nombre: "Gorra", precio: 9.99, stock: 2 }
];`}</code>
              </pre>
            </div>

            <ol>
              <li>Muestra solo los productos con <strong>stock &gt; 0</strong>.</li>
              <li>Indica si el producto es “barato” (precio ≤ 10).</li>
              <li>Pinta el resultado en HTML.</li>
            </ol>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Pista
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Usa <code>if</code> con operadores lógicos y template literals
                  para construir el texto.
                </p>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Posible solución
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let html = "";

for (const p of productos) {
  if (p.stock > 0) {
    const etiqueta = p.precio <= 10 ? "🟢 Barato" : "🔵 Normal";
    html += \`\${p.nombre} - \${p.precio}€ (\${etiqueta})<br>\`;
  }
}

document.getElementById("resultado").innerHTML = html;`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 3
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Ejercicio 3 · Reto final</h2>
          <span className="topic-section__meta">reto</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🚀</span> Un paso más
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Amplía uno de los ejercicios anteriores:
            </p>
            <ul>
              <li>Añade un <strong>input</strong> para filtrar por precio.</li>
              <li>Muestra un <strong>contador</strong> de resultados.</li>
              <li>Cambia el color del resultado según el estado.</li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Si sabes hacer esto, estás listo para el siguiente tema.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CIERRE
      ========================= */}
      <section className="topic-section">
        <div className="callout callout--concept">
          <p className="callout__title">✅ Cierre del Tema 9</p>
          <p className="muted">
            Ya sabes manejar datos reales con JavaScript. El siguiente paso es
            aprender a <strong>organizar mejor el código</strong> y prepararte
            para trabajar como en proyectos profesionales.
          </p>
          
        </div>
      </section>
    </article>
  );
}
