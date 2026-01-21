// src/pages/Ejercicios/EjerciciosObjetos.jsx
import { useMemo, useState } from "react";

export default function EjerciciosObjetos() {
  // Datos base para el ejercicio mix (array de objetos)
  const productosBase = useMemo(
    () => [
      { id: 1, nombre: "Camiseta", precio: 12.99, stock: 4, categoria: "ropa" },
      { id: 2, nombre: "Taza", precio: 6.5, stock: 0, categoria: "hogar" },
      { id: 3, nombre: "Libro", precio: 18.0, stock: 7, categoria: "cultura" },
      { id: 4, nombre: "Gorra", precio: 9.99, stock: 2, categoria: "ropa" },
    ],
    []
  );

  // =========================
  // EJERCICIO 1: Ficha alumno
  // =========================
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [resultado1, setResultado1] = useState("");

  function ejecutarEj1() {
    // 1) Creamos un objeto con los valores de los inputs
    const alumno = {
      nombre: nombre.trim(),
      edad: Number(edad),
      ciudad: ciudad.trim(),
      activo: true,
    };

    // 2) Validación muy simple (condicional)
    if (!alumno.nombre || Number.isNaN(alumno.edad) || alumno.edad <= 0) {
      setResultado1("❌ Revisa los datos: nombre y edad válida (> 0).");
      return;
    }

    // 3) Usamos acceso con punto y con corchetes
    const claveDinamica = "ciudad";
    const ciudadLeida = alumno[claveDinamica]; // corchetes (clave en variable)

    // 4) Operador ternario sencillo
    const mayorEdad = alumno.edad >= 18 ? "Sí" : "No";

    // 5) 'in' para comprobar existencia
    const tieneActivo = "activo" in alumno ? "Sí" : "No";

    // 6) delete (borrar una propiedad)
    delete alumno.activo;

    setResultado1(
      `✅ Ficha creada:
- Nombre: ${alumno.nombre}
- Edad: ${alumno.edad} (¿Mayor de edad? ${mayorEdad})
- Ciudad (leída con []): ${ciudadLeida}
- ¿Tenía 'activo'? ${tieneActivo}
- Tras delete, 'activo' existe: ${"activo" in alumno ? "Sí" : "No"}`
    );
  }

  // =========================
  // EJERCICIO 2: Objeto + recorrido
  // =========================
  const [textoObjeto, setTextoObjeto] = useState("pan=1.2, leche=0.95, huevos=2.4");
  const [resultado2, setResultado2] = useState("");

  function ejecutarEj2() {
    // Convertimos un texto "pan=1.2, leche=0.95" en un objeto
    // { pan: 1.2, leche: 0.95 }
    const obj = {};

    const pares = textoObjeto
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    for (const par of pares) {
      const [k, v] = par.split("=").map((x) => x.trim());
      if (!k) continue;
      const precio = Number(v);
      obj[k] = Number.isNaN(precio) ? 0 : precio;
    }

    // Recorremos con for...in y calculamos total (operadores)
    let total = 0;
    let listado = "";

    for (const clave in obj) {
      total = total + obj[clave];
      listado += `• ${clave}: ${obj[clave]}€\n`;
    }

    // También mostramos keys/values/entries
    const claves = Object.keys(obj).join(", ");
    const valores = Object.values(obj).join(", ");

    setResultado2(
      `✅ Ticket:
${listado}
Total: ${total.toFixed(2)}€
Claves: ${claves}
Valores: ${valores}`
    );
  }

  // =========================
  // EJERCICIO 3: MIX (arrays + objetos + condicional + HTML)
  // =========================
  const [presupuesto, setPresupuesto] = useState("20");
  const [categoria, setCategoria] = useState("todas");
  const [resultado3, setResultado3] = useState("");

  function ejecutarEj3() {
    const dinero = Number(presupuesto);

    if (Number.isNaN(dinero) || dinero <= 0) {
      setResultado3("<p>❌ Introduce un presupuesto válido (mayor que 0).</p>");
      return;
    }

    // 1) Filtramos por categoría (condicional)
    const listaFiltrada =
      categoria === "todas"
        ? productosBase
        : productosBase.filter((p) => p.categoria === categoria);

    // 2) Nos quedamos con los productos con stock > 0 y precio <= presupuesto
    const disponibles = listaFiltrada.filter((p) => p.stock > 0 && p.precio <= dinero);

    // 3) Pintamos en HTML con innerHTML (aquí lo hacemos con string en React)
    if (disponibles.length === 0) {
      setResultado3(
        `<p>😅 No hay productos disponibles con stock y precio ≤ ${dinero.toFixed(
          2
        )}€ en la categoría seleccionada.</p>`
      );
      return;
    }

    const itemsHTML = disponibles
      .map((p) => {
        const etiquetaStock = p.stock <= 2 ? "⚠️ ¡Pocas unidades!" : "✅ Stock OK";
        return `
          <li class="friendly-box" style="margin:.5rem 0; padding:.75rem 1rem;">
            <strong>${p.nombre}</strong> — ${p.precio.toFixed(2)}€
            <div class="muted small">Categoría: ${p.categoria} · Stock: ${p.stock} · ${etiquetaStock}</div>
          </li>
        `;
      })
      .join("");

    // 4) Cálculo extra: ¿cuántos podría comprar como máximo? (operadores)
    // (sin stock real, solo por presupuesto)
    const masBarato = Math.min(...disponibles.map((p) => p.precio));
    const maxUnidades = Math.floor(dinero / masBarato);

    setResultado3(`
      <div class="friendly-box" style="padding:1rem;">
        <p style="margin:0 0 .5rem 0;">
          ✅ Productos recomendados (presupuesto: <strong>${dinero.toFixed(2)}€</strong>)
        </p>
        <ul style="margin:.5rem 0 0 1.1rem;">
          ${itemsHTML}
        </ul>
        <div class="divider" style="margin: .9rem 0;"></div>
        <p class="muted small" style="margin:0;">
          Extra: si compras el producto más barato de la lista (${masBarato.toFixed(
            2
          )}€), podrías comprar como máximo <strong>${maxUnidades}</strong> unidades con tu presupuesto.
        </p>
      </div>
    `);
  }

  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">Ejercicios · Objetos + mezcla</span>
          <h1>Práctica guiada: Objetos (y un mix con lo anterior)</h1>
          <p className="muted">
            Aquí vas a practicar con <strong>objetos</strong> y poco a poco los
            mezclaremos con <strong>operadores</strong>, <strong>condicionales</strong> y{" "}
            <strong>arrays</strong> usando un poquito de HTML (inputs + botones).
          </p>
        </div>
      </header>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧩 Ejercicio 1: Ficha de alumno (objeto básico)</h2>
          <span className="topic-section__meta">objetos-basico</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Guía paso a paso + resultado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Rellena los inputs y pulsa <strong>Crear ficha</strong>.</li>
              <li>
                El programa creará un objeto <code>alumno</code> y comprobará si la edad es válida.
              </li>
              <li>
                Verás acceso con <code>.</code> y con <code>[]</code>, un ternario y el uso de <code>in</code>.
              </li>
            </ol>

            <div className="divider" />

            <div className="grid" style={{ display: "grid", gap: ".75rem", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
              <label className="card" style={{ padding: ".9rem" }}>
                <span className="muted small">Nombre</span>
                <input className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Ana" />
              </label>

              <label className="card" style={{ padding: ".9rem" }}>
                <span className="muted small">Edad</span>
                <input className="input" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Ej: 22" />
              </label>

              <label className="card" style={{ padding: ".9rem" }}>
                <span className="muted small">Ciudad</span>
                <input className="input" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ej: Sevilla" />
              </label>
            </div>

            <div style={{ marginTop: ".9rem", display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
              <button type="button" className="btn btn-primary" onClick={ejecutarEj1}>
                Crear ficha
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setNombre("");
                  setEdad("");
                  setCiudad("");
                  setResultado1("");
                }}
              >
                Limpiar
              </button>
            </div>

            <div className="code-example" style={{ marginTop: ".9rem" }}>
              <pre>
                <code>{resultado1 || "Aquí aparecerá el resultado..."}</code>
              </pre>
            </div>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Añade una propiedad <code>nota</code> (0 a 10). Muestra un mensaje:
              <strong> Aprobado</strong> si nota ≥ 5, si no <strong>Suspenso</strong>.
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
                <code>{`// IDEA: añade "nota" al objeto alumno
// alumno.nota = Number(nota);

// Luego:
const mensaje = alumno.nota >= 5 ? "Aprobado" : "Suspenso";

// Y lo incluyes en el texto del resultado`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧾 Ejercicio 2: Ticket rápido (objeto + recorrido)</h2>
          <span className="topic-section__meta">recorrer-objetos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔁</span> for...in + Object.keys/values
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>
                Escribe productos y precios en formato <code>producto=precio</code> separados por comas.
              </li>
              <li>Pulsa <strong>Generar ticket</strong>.</li>
              <li>
                El programa crea un objeto y lo recorre con <code>for...in</code> para sumar el total.
              </li>
            </ol>

            <div className="divider" />

            <label className="card" style={{ padding: ".9rem" }}>
              <span className="muted small">Lista (ej: pan=1.2, leche=0.95, huevos=2.4)</span>
              <input
                className="input"
                value={textoObjeto}
                onChange={(e) => setTextoObjeto(e.target.value)}
              />
            </label>

            <div style={{ marginTop: ".9rem", display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
              <button type="button" className="btn btn-primary" onClick={ejecutarEj2}>
                Generar ticket
              </button>
              <button type="button" className="btn" onClick={() => setResultado2("")}>
                Limpiar
              </button>
            </div>

            <div className="code-example" style={{ marginTop: ".9rem" }}>
              <pre>
                <code>{resultado2 || "Aquí aparecerá tu ticket..."}</code>
              </pre>
            </div>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Muestra también cuál es el producto más caro y cuál el más barato.
              (Pista: usa <code>Object.entries()</code>).
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
                <code>{`// IDEA:
const entradas = Object.entries(obj); // [["pan",1.2],["leche",0.95]...]

// Ordena por precio:
entradas.sort((a, b) => a[1] - b[1]);

// Más barato:
const masBarato = entradas[0]; // ["leche", 0.95]

// Más caro:
const masCaro = entradas[entradas.length - 1];

// Lo añades al resultado final con masBarato[0], masBarato[1]...`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 3 (MIX)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🛍️ Ejercicio 3: Mini tienda (mix con arrays + objetos + condiciones)</h2>
          <span className="topic-section__meta">mix</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🌟</span> Mezcla lo que llevamos hasta ahora
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Introduce un presupuesto.</li>
              <li>Elige una categoría.</li>
              <li>Pulsa <strong>Buscar productos</strong>.</li>
              <li>
                El programa filtra un <strong>array de objetos</strong> usando condicionales y operadores,
                y pinta el resultado como HTML.
              </li>
            </ol>

            <div className="divider" />

            <div
              className="grid"
              style={{
                display: "grid",
                gap: ".75rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              <label className="card" style={{ padding: ".9rem" }}>
                <span className="muted small">Presupuesto (€)</span>
                <input
                  className="input"
                  value={presupuesto}
                  onChange={(e) => setPresupuesto(e.target.value)}
                  placeholder="Ej: 20"
                />
              </label>

              <label className="card" style={{ padding: ".9rem" }}>
                <span className="muted small">Categoría</span>
                <select className="input" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value="todas">Todas</option>
                  <option value="ropa">Ropa</option>
                  <option value="hogar">Hogar</option>
                  <option value="cultura">Cultura</option>
                </select>
              </label>
            </div>

     <div className="topic-details__content">
  <div className="code-example">
    <pre>
      <code>{`<!-- HTML: input para mínimo stock -->
<label>
  Mínimo stock
  <input id="minStock" type="number" value="1">
</label>

<button id="buscar">Buscar productos</button>

<div id="resultado"></div>

<script>
  // Array de productos (objetos)
  const productos = [
    { nombre: "Camiseta", precio: 12.99, stock: 4, categoria: "ropa" },
    { nombre: "Taza", precio: 6.5, stock: 0, categoria: "hogar" },
    { nombre: "Libro", precio: 18, stock: 7, categoria: "cultura" },
    { nombre: "Gorra", precio: 9.99, stock: 2, categoria: "ropa" },
  ];

  // Valores fijos para el ejemplo
  const presupuesto = 20;
  const categoria = "todas";

  // Referencias al DOM
  const resultado = document.getElementById("resultado");
  const inputMinStock = document.getElementById("minStock");

  document.getElementById("buscar").addEventListener("click", () => {

    // 1️⃣ Leer el mínimo stock y convertirlo a número
    const minimo = Number(inputMinStock.value);

    // 2️⃣ Validación básica
    if (Number.isNaN(minimo) || minimo < 1) {
      resultado.innerHTML = "❌ El mínimo stock debe ser 1 o más";
      return;
    }

    // 3️⃣ Filtrar por categoría
    const listaFiltrada =
      categoria === "todas"
        ? productos
        : productos.filter(p => p.categoria === categoria);

    // 4️⃣ NUEVO: filtrar por stock mínimo + presupuesto
    const disponibles = listaFiltrada.filter(p => {
      const cumpleStock = p.stock >= minimo;
      const cumplePrecio = p.precio <= presupuesto;
      return p.stock > 0 && cumpleStock && cumplePrecio;
    });

    // 5️⃣ Pintar resultado
    let html = "";

    for (const p of disponibles) {
      html += p.nombre + " - " + p.precio + "€ (stock: " + p.stock + ")<br>";
    }

    resultado.innerHTML = html || "No hay productos disponibles";
  });
</script>`}</code>
    </pre>
  </div>
</div>


</div>

        </details>
      </section>
    </article>
  );
}
