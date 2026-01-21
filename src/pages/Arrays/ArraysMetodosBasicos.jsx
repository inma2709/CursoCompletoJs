// src/pages/Arrays/ArraysMetodosBasicos.jsx
import { Link } from "react-router-dom";

export default function ArraysMetodosBasicos() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Arrays · Métodos básicos</h1>
          <p className="muted">
            Aquí aprendes los métodos que más vas a usar en el día a día:{" "}
            <strong>push, pop, unshift, shift, indexOf, includes</strong> y{" "}
            <strong>splice</strong>. Con esto ya puedes “gestionar listas”.
          </p>
        </div>
      </header>

      {/* VIDEO */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video: Métodos básicos de arrays</h2>
          <p className="muted">
            Recomendación para ver los métodos en acción antes de practicar.
          </p>

          <div
            className="video-container"
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/1O5JL9mC3Gc"
              title="Video: Métodos básicos de arrays"
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* =========================
          CONTENIDO EN DETAILS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        {/* 1) IDEA GENERAL */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧰</span> ¿Para qué sirven estos métodos?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un array no es solo una lista “quieta”. Normalmente lo vas a usar como una lista viva:
              añades elementos, quitas, buscas, reemplazas… Para eso existen los métodos.
            </p>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Regla rápida</p>
              <ul className="muted">
                <li>
                  <strong>Final del array:</strong> <code>push()</code> (añade) y <code>pop()</code> (quita)
                </li>
                <li>
                  <strong>Inicio del array:</strong> <code>unshift()</code> (añade) y <code>shift()</code> (quita)
                </li>
                <li>
                  <strong>Buscar:</strong> <code>indexOf()</code> / <code>includes()</code>
                </li>
                <li>
                  <strong>Cirugía (quitar/poner en medio):</strong> <code>splice()</code>
                </li>
              </ul>
            </div>
          </div>
        </details>

        {/* 2) TABLA RESUMEN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📋</span> Tabla resumen (para memorizar)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Método</th>
                    <th>Qué hace</th>
                    <th>¿Modifica el array?</th>
                    <th>Devuelve</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>push()</code></td>
                    <td>Añade al final</td>
                    <td>Sí</td>
                    <td>Nueva longitud</td>
                    <td><code>arr.push("x")</code></td>
                  </tr>
                  <tr>
                    <td><code>pop()</code></td>
                    <td>Quita del final</td>
                    <td>Sí</td>
                    <td>Elemento quitado</td>
                    <td><code>arr.pop()</code></td>
                  </tr>
                  <tr>
                    <td><code>unshift()</code></td>
                    <td>Añade al inicio</td>
                    <td>Sí</td>
                    <td>Nueva longitud</td>
                    <td><code>arr.unshift("x")</code></td>
                  </tr>
                  <tr>
                    <td><code>shift()</code></td>
                    <td>Quita del inicio</td>
                    <td>Sí</td>
                    <td>Elemento quitado</td>
                    <td><code>arr.shift()</code></td>
                  </tr>
                  <tr>
                    <td><code>indexOf()</code></td>
                    <td>Busca la posición</td>
                    <td>No</td>
                    <td>Índice o <code>-1</code></td>
                    <td><code>arr.indexOf("x")</code></td>
                  </tr>
                  <tr>
                    <td><code>includes()</code></td>
                    <td>¿Existe?</td>
                    <td>No</td>
                    <td><code>true</code> / <code>false</code></td>
                    <td><code>arr.includes("x")</code></td>
                  </tr>
                  <tr>
                    <td><code>splice()</code></td>
                    <td>Quita/añade/reemplaza</td>
                    <td>Sí</td>
                    <td>Array de eliminados</td>
                    <td><code>arr.splice(1, 2)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Importante</p>
              <p className="muted">
                <strong>push/pop/shift/unshift/splice</strong> modifican el array original.  
                Si en el futuro trabajas con React/estado, esto será clave (ya lo veremos).
              </p>
            </div>
          </div>
        </details>

        {/* 3) PUSH / POP */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">➕</span> 1) push() y pop() (trabajar con el final)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Estos dos son el “pack” más usado: añadir al final y quitar del final.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📤 push() · añadir al final</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja"];
console.log(frutas);

// Añadir al final
frutas.push("plátano");
console.log(frutas); // ["manzana", "naranja", "plátano"]

// push devuelve la nueva longitud
let nuevaLongitud = frutas.push("fresa");
console.log(nuevaLongitud); // 4
console.log(frutas);`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📤 pop() · quitar el último</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];
console.log(frutas);

// Quitar del final
let ultima = frutas.pop();

console.log("Quitado:", ultima); // "plátano"
console.log("Ahora:", frutas);   // ["manzana", "naranja"]

// Si está vacío
let vacio = [];
console.log(vacio.pop()); // undefined`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Truco de memoria</p>
              <p className="muted">
                <strong>push</strong> empuja hacia dentro (mete al final).  
                <strong>pop</strong> hace “pop!” y saca el último.
              </p>
            </div>
          </div>
        </details>

        {/* 4) UNSHIFT / SHIFT */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📥</span> 2) unshift() y shift() (trabajar con el inicio)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Son la versión “al principio”. Se usan menos que push/pop, pero son muy útiles.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📥 unshift() · añadir al principio</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja"];
console.log(frutas);

// Añadir al inicio
frutas.unshift("cereza");
console.log(frutas); // ["cereza", "manzana", "naranja"]

// Devuelve la nueva longitud
let len = frutas.unshift("pera");
console.log(len);`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📥 shift() · quitar el primero</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];
console.log(frutas);

// Quitar del inicio
let primera = frutas.shift();

console.log("Quitado:", primera); // "manzana"
console.log("Ahora:", frutas);    // ["naranja", "plátano"]

// Los índices se reorganizan
console.log(frutas[0]); // "naranja"`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🧠 Lo que debes entender</p>
              <p className="muted">
                Cuando quitas del principio con <code>shift()</code>, el resto se “mueve” y los índices cambian.
                Por eso a veces es más cómodo trabajar con el final (push/pop).
              </p>
            </div>
          </div>
        </details>

        {/* 5) BUSCAR: indexOf / includes */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> 3) Buscar elementos (indexOf / includes)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para saber si algo existe en el array, puedes usar <code>indexOf()</code> o <code>includes()</code>.
              <strong>includes</strong> es más fácil de leer.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📍 indexOf() · devuelve la posición o -1</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano", "naranja"];

console.log(frutas.indexOf("naranja")); // 1 (primera vez que aparece)
console.log(frutas.indexOf("plátano")); // 2
console.log(frutas.indexOf("kiwi"));    // -1 (no está)

// Validar existencia con indexOf
let frutaBuscada = "manzana";
if (frutas.indexOf(frutaBuscada) !== -1) {
  console.log("✅ Está en la lista");
} else {
  console.log("❌ No está");
}`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>✅ includes() · devuelve true/false</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("kiwi"));    // false

if (frutas.includes("naranja")) {
  console.log("🍊 Hay naranja");
}`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Recomendación</p>
              <p className="muted">
                Si solo quieres saber “¿está o no está?”, usa <code>includes()</code>.  
                Si necesitas “¿en qué posición está?”, usa <code>indexOf()</code>.
              </p>
            </div>
          </div>
        </details>

        {/* 6) SPLICE */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">✂️</span> 4) splice() (el “cuchillo suizo”)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>splice()</code> sirve para <strong>eliminar</strong>, <strong>insertar</strong> o <strong>reemplazar</strong>
              elementos en cualquier posición. Lo más importante: <strong>modifica el array original</strong>.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">📌 Sintaxis</p>
              <p className="muted">
                <code>arr.splice(inicio, cantidadAEliminar, ...elementosAInsertar)</code>
              </p>
              <ul className="muted">
                <li><strong>inicio:</strong> desde qué índice empiezas</li>
                <li><strong>cantidadAEliminar:</strong> cuántos quitas (puede ser 0)</li>
                <li><strong>elementosAInsertar:</strong> opcional (lo que quieres meter)</li>
              </ul>
            </div>

            {/* Caso 1 */}
            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>✂️ Caso 1: solo eliminar</h4>
              <pre>
                <code className="language-js">{`let frutas = ["🍎", "🍊", "🍌", "🍓", "🍇"];
console.log("Inicial:", frutas);

// Eliminar 1 elemento en posición 1
let eliminado1 = frutas.splice(1, 1);
console.log("Eliminado:", eliminado1); // ["🍊"]
console.log("Ahora:", frutas);         // ["🍎", "🍌", "🍓", "🍇"]

// Eliminar 2 elementos desde posición 2
let eliminado2 = frutas.splice(2, 2);
console.log("Eliminado:", eliminado2); // ["🍓", "🍇"]
console.log("Final:", frutas);         // ["🍎", "🍌"]`}</code>
              </pre>
            </div>

            {/* Caso 2 */}
            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>➕ Caso 2: solo insertar (sin eliminar)</h4>
              <pre>
                <code className="language-js">{`let frutas = ["🍎", "🍇"];
console.log("Inicial:", frutas);

// Insertar en posición 1 sin eliminar nada (segundo parámetro = 0)
frutas.splice(1, 0, "🍊", "🍌");
console.log("Insertado:", frutas); // ["🍎", "🍊", "🍌", "🍇"]

// Insertar al principio
frutas.splice(0, 0, "🥝");
console.log("Al inicio:", frutas);`}</code>
              </pre>
            </div>

            {/* Caso 3 */}
            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🔄 Caso 3: reemplazar (eliminar + insertar)</h4>
              <pre>
                <code className="language-js">{`let frutas = ["🍎", "🍊", "🍌"];
console.log("Inicial:", frutas);

// Reemplazar 1 por 1
frutas.splice(1, 1, "🍓");
console.log("Naranja → Fresa:", frutas); // ["🍎","🍓","🍌"]

// Reemplazar 1 por 2
frutas.splice(0, 1, "🥝", "🍑");
console.log("Manzana → Kiwi y Melocotón:", frutas);`}</code>
              </pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Súper importante</p>
              <p className="muted">
                <code>splice()</code> modifica el array original. No es una copia.
              </p>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📋 Tabla rápida de “recetas”</h4>
              <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Lo que quiero hacer</th>
                      <th>splice()</th>
                      <th>Qué pasa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Eliminar 2 desde índice 1</td>
                      <td><code>splice(1, 2)</code></td>
                      <td>Quita dos elementos</td>
                    </tr>
                    <tr>
                      <td>Insertar "X" en índice 1</td>
                      <td><code>splice(1, 0, "X")</code></td>
                      <td>No elimina, solo inserta</td>
                    </tr>
                    <tr>
                      <td>Reemplazar índice 1 por "Y"</td>
                      <td><code>splice(1, 1, "Y")</code></td>
                      <td>Elimina 1 e inserta 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎮 Practica mental</p>
              <p className="muted">Tengo: <code>["A","B","C","D","E"]</code></p>
              <ul className="muted">
                <li>
                  <code>arr.splice(2, 1)</code> → ¿qué elimina y cómo queda?
                </li>
                <li>
                  <code>arr.splice(1, 0, "X")</code> → ¿dónde se inserta?
                </li>
                <li>
                  <code>arr.splice(0, 2, "Z")</code> → ¿qué reemplaza?
                </li>
              </ul>

              <details className="topic-details" style={{ marginTop: ".75rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">🔍</span> Ver respuestas
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <p className="muted">
                    ✅ <code>splice(2, 1)</code> elimina "C" → queda <code>["A","B","D","E"]</code>
                  </p>
                  <p className="muted">
                    ✅ <code>splice(1, 0, "X")</code> inserta "X" en índice 1 → queda{" "}
                    <code>["A","X","B","C","D","E"]</code>
                  </p>
                  <p className="muted">
                    ✅ <code>splice(0, 2, "Z")</code> quita "A" y "B" e inserta "Z" → queda{" "}
                    <code>["Z","C","D","E"]</code>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </details>

        {/* 7) EJERCICIO GUIADO (Lista de la compra) */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Ejercicio guiado: lista de la compra (push/pop/shift/unshift)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Vas a crear una lista y usar métodos para añadir/quitar tanto al principio como al final. Luego lo
              pintas en pantalla.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📘 Enunciado</h4>
              <ul className="muted">
                <li>Crea un array <code>compra</code> con 3 elementos.</li>
                <li>Usa <code>push()</code> para añadir 1 elemento al final.</li>
                <li>Usa <code>unshift()</code> para añadir 1 elemento al inicio.</li>
                <li>Usa <code>pop()</code> para quitar el último y mostrar cuál quitaste.</li>
                <li>Usa <code>shift()</code> para quitar el primero y mostrar cuál quitaste.</li>
              </ul>

              <h5 style={{ marginTop: ".75rem" }}>🧩 Código base (HTML + JS)</h5>
              <pre>
                <code className="language-html">{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejercicio métodos arrays</title>
  <style>
    body { font-family: system-ui, Arial, sans-serif; padding: 16px; }
    .box { border: 1px solid #ddd; border-radius: 12px; padding: 12px; margin-top: 10px; }
    .muted { color: #666; }
    code { background: #f6f6f6; padding: 2px 6px; border-radius: 6px; }
  </style>
</head>
<body>
  <h2>🧪 Métodos básicos</h2>

  <div class="box">
    <p><strong>Lista actual:</strong> <span id="lista"></span></p>
    <p class="muted">Quitado por pop(): <span id="pop"></span></p>
    <p class="muted">Quitado por shift(): <span id="shift"></span></p>
  </div>

  <script>
    // 1) Crea un array con 3 elementos
    let compra = ["pan", "leche", "huevos"];

    // 2) push: añade al final

    // 3) unshift: añade al principio

    // 4) pop: quita el último y guárdalo en una variable

    // 5) shift: quita el primero y guárdalo en una variable

    // Pintar resultados
    document.getElementById("lista").textContent = compra.join(", ");
    document.getElementById("pop").textContent = "(aquí va lo quitado)";
    document.getElementById("shift").textContent = "(aquí va lo quitado)";
  </script>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">💡 Pista útil</p>
              <p className="muted">
                Para pintar bonito una lista usa <code>join(", ")</code> (convierte el array en texto separado por comas).
              </p>
            </div>
          </div>
        </details>

        {/* 8) RESUMEN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Resumen (lo imprescindible)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="grid grid-3" style={{ gap: "1rem" }}>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>Final</h3>
                <p className="muted">Añadir / quitar</p>
                <code>push() · pop()</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Inicio</h3>
                <p className="muted">Añadir / quitar</p>
                <code>unshift() · shift()</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Buscar</h3>
                <p className="muted">posición / existe</p>
                <code>indexOf() · includes()</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Cirugía</h3>
                <p className="muted">quitar/poner en medio</p>
                <code>splice()</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Recuerda</h3>
                <p className="muted">modifican el original</p>
                <code>push/pop/shift/unshift/splice</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Regla</h3>
                <p className="muted">si dudas…</p>
                <code>includes() para “¿está?”</code>
              </div>
            </div>
          </div>
        </details>

        {/* NAV FINAL */}
        <div
          className="card"
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/arrays/recorrer" className="btn btn-ghost">
            ← Recorrer
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡Nivel subiendo! 🚀</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Ahora ya puedes gestionar listas como un pro.
            </p>
          </div>

          <Link to="/arrays/transformar" className="btn btn-primary">
            Siguiente: Transformar →
          </Link>
        </div>
      </section>
    </article>
  );
}
