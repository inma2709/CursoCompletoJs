// src/pages/Ejercicios/EjercicioFuncionesMix.jsx
export default function EjercicioFuncionesMix() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">E19</span>
          <h1>Ejercicios: Mix (funciones + objetos + arrays + condiciones + HTML)</h1>
          <p className="muted">
            Aquí ya mezclamos conceptos como en un mini-proyecto real.
            Siempre guiado y con solución oculta.
          </p>
        </div>
      </header>

      {/* =========================
          EJERCICIO 1 (MIX)
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧾 Ejercicio 1: Boletín de notas (mix)</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🌟</span> Calcula media, estado y pinta HTML
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Vas a trabajar con: <strong>array</strong> de <strong>objetos</strong>, operadores, condicionales,
              template literals y <code>innerHTML</code>.
            </p>

            <h3>✅ Enunciado</h3>
            <ol>
              <li>
                Crea un array <code>alumnos</code> con objetos como:
                <code>{` { nombre: "Ana", notas: [7, 8, 6] } `}</code>
              </li>
              <li>
                Crea una función <code>media3</code> que reciba 3 notas (n1, n2, n3) y devuelva la media.
              </li>
              <li>
                Recorre el array y para cada alumno:
                <ul>
                  <li>Calcula su media usando <code>media3</code></li>
                  <li>Decide si está <strong>Aprobado</strong> (≥5) o <strong>Suspenso</strong></li>
                  <li>Genera una tarjeta HTML y súmala en un string</li>
                </ul>
              </li>
              <li>
                Mete el resultado en un <code>div</code> con <code>id="resultado"</code>.
              </li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Añade una condición extra: si la media es ≥ 9, que el estado sea <strong>“Sobresaliente”</strong>.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">💡 Pista</p>
              <p className="muted" style={{ margin: 0 }}>
                Construye el HTML con template literals: <code>{'`<div>...</div>`'}</code> y después
                <code>resultado.innerHTML = html</code>.
              </p>
            </div>
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
                <code>{`// 1) Datos: array de objetos
const alumnos = [
  { nombre: "Ana", notas: [7, 8, 6] },
  { nombre: "Luis", notas: [4, 5, 3] },
  { nombre: "Marta", notas: [9, 9, 10] },
];

// 2) Función: calcula la media de 3 notas
function media3(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// 3) “Pintar” HTML en pantalla
const resultado = document.getElementById("resultado");
let html = "";

// 4) Recorro el array
for (const a of alumnos) {
  const m = media3(a.notas[0], a.notas[1], a.notas[2]);

  // 5) Condiciones: estado
  let estado = "Suspenso";
  if (m >= 9) estado = "Sobresaliente"; // reto
  else if (m >= 5) estado = "Aprobado";

  // 6) Tarjeta HTML (template literal)
  html += \`
    <article class="card" style="padding:.9rem">
      <strong>\${a.nombre}</strong><br>
      Notas: \${a.notas.join(", ")}<br>
      Media: \${m.toFixed(2)}<br>
      Estado: <span style="font-weight:700">\${estado}</span>
    </article>
  \`;
}

// 7) Lo meto en el DOM
resultado.innerHTML = html;`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">✅ Para ejecutarlo rápido</p>
              <p className="muted" style={{ margin: 0 }}>
                Asegúrate de tener en tu HTML un <code>{`<div id="resultado"></div>`}</code>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2 (MIX)
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🛍️ Ejercicio 2: Mini tienda (funciones + filtros)</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Filtrar productos con condiciones
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Aquí el foco es aprender a “pensar por pasos” y usar una función que
              te devuelva los productos disponibles.
            </p>

            <h3>✅ Enunciado</h3>
            <ol>
              <li>Crea un array <code>productos</code> de objetos con: <code>nombre</code>, <code>precio</code>, <code>stock</code>, <code>categoria</code>.</li>
              <li>Crea una función <code>disponibles</code> que reciba <code>dinero</code> y <code>categoria</code>.</li>
              <li>La función debe devolver un array con los productos que cumplan:</li>
              <ul>
                <li><code>stock &gt; 0</code></li>
                <li><code>precio &lt;= dinero</code></li>
                <li>si categoría es <code>"todas"</code>, no filtra por categoría</li>
              </ul>
              <li>Muestra el resultado en HTML dentro de <code>#resultado2</code>.</li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Añade un “mínimo stock” y filtra por <code>stock &gt;= minimo</code>.
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
                <code>{`const productos = [
  { nombre: "Camiseta", precio: 12.99, stock: 4, categoria: "ropa" },
  { nombre: "Taza", precio: 6.5, stock: 0, categoria: "hogar" },
  { nombre: "Libro", precio: 18, stock: 7, categoria: "cultura" },
  { nombre: "Gorra", precio: 9.99, stock: 2, categoria: "ropa" },
];

// Función que devuelve productos disponibles según filtros
function disponibles(dinero, categoria, minimoStock = 1) {
  let lista = productos;

  // filtro de categoría (si no es "todas")
  if (categoria !== "todas") {
    lista = lista.filter((p) => p.categoria === categoria);
  }

  // filtro principal (precio + stock)
  const filtrados = lista.filter((p) => {
    const cumplePrecio = p.precio <= dinero;
    const cumpleStock = p.stock >= minimoStock; // reto incluido
    return p.stock > 0 && cumplePrecio && cumpleStock;
  });

  return filtrados;
}

// “Simulación” de entrada (luego esto vendrá de inputs)
const dinero = 15;
const categoria = "ropa";
const minimoStock = 2;

const lista = disponibles(dinero, categoria, minimoStock);

// Pintar HTML
const resultado2 = document.getElementById("resultado2");
let html = "";

for (const p of lista) {
  html += \`<div>\${p.nombre} - \${p.precio}€ (stock: \${p.stock})</div>\`;
}

resultado2.innerHTML = html || "<p>No hay productos disponibles</p>";`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
