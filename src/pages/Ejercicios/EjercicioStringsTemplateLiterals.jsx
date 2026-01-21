// src/pages/Ejercicios/EjercicioStringsTemplateLiterals.jsx
// Ejercicio · Strings y Template Literals
// Nivel: básico (refuerzo) + extra opcional
// Nota: primero SIN DOM (console). Extra visual opcional (muy controlado).

export default function EjercicioStringsTemplateLiterals() {
  // =========================================================
  // ✅ EJERCICIO 1 (Template Literals) — SIN DOM
  // =========================================================
  const ejecutarTemplateLiterals = () => {
    // 1) Declara variables (puedes cambiar los valores)
    let nombre = "Marta";
    let edad = 28;
    let hobby = "programar";

    // 2) Crea un mensaje con Template Literals (backticks ` `)
    //    👉 Fíjate: las variables van dentro de ${ }
    let presentacion = `Hola, soy ${nombre}, tengo ${edad} años y me encanta ${hobby}.`;

    // 3) Bonus: multi-línea (sin \n)
    let mensajeMultilinea = `Hola, soy ${nombre}.
En mi tiempo libre me gusta ${hobby}.`;

    // 4) Mostrar por consola (SIN DOM)
    console.clear();
    console.log("✅ EJERCICIO 1 · Template Literals");
    console.log(presentacion);
    console.log("—");
    console.log(mensajeMultilinea);

    alert("✅ He mostrado la solución en la consola.\n\nAbre DevTools → Console 😉");
  };

  // =========================================================
  // ✅ EJERCICIO 2 (Strings) — SIN DOM
  // =========================================================
  const ejecutarStrings = () => {
    // 1) Crea la frase
    let frase = "JavaScript es genial";

    // 2) Longitud
    let longitud = frase.length;

    // 3) Mayúsculas / minúsculas
    let mayus = frase.toUpperCase();
    let minus = frase.toLowerCase();

    // 4) Primer y último carácter
    let primero = frase[0];
    let ultimo = frase[frase.length - 1];

    // 5) ¿Contiene "genial"?
    let contieneGenial = frase.includes("genial");

    console.clear();
    console.log("✅ EJERCICIO 2 · Strings");
    console.log("Frase:", frase);
    console.log("Longitud:", longitud);
    console.log("Mayúsculas:", mayus);
    console.log("Minúsculas:", minus);
    console.log("Primero:", primero);
    console.log("Último:", ultimo);
    console.log('¿Incluye "genial"?', contieneGenial);

    alert("✅ He mostrado los resultados en la consola.\n\nAbre DevTools → Console 😉");
  };

  // =========================================================
  // ✨ EXTRA VISUAL (DOM MINIMO) — opcional
  // =========================================================
  const ejecutarExtraVisual = () => {
    // Pedimos una frase para practicar (sin inputs, para mantenerlo sencillo)
    let frase = prompt("✨ Extra visual\nEscribe una frase corta (ej: JavaScript es genial):");
    if (frase === null) return alert("Has cancelado el extra.");

    // Validación mínima
    frase = frase.trim();
    if (frase.length === 0) return alert("⚠️ Escribe alguna frase (no puede ir vacía).");

    // Calculamos datos
    const longitud = frase.length;
    const primero = frase[0];
    const ultimo = frase[frase.length - 1];
    const contieneJs = frase.toLowerCase().includes("javascript");

    // DOM mínimo: escribir en un div
    const caja = document.getElementById("resultado-strings");
    if (!caja) return;

    caja.innerHTML = `
      <div class="resultado-principal">🧾 <strong>Frase:</strong> ${frase}</div>
      <div class="resultado-detalle">📏 Longitud: <strong>${longitud}</strong></div>
      <div class="resultado-detalle">🔤 Primero: <strong>${primero}</strong> · Último: <strong>${ultimo}</strong></div>
      <div class="resultado-detalle ${contieneJs ? "ok" : "warn"}">
        🔎 ¿Contiene "javascript"? <strong>${contieneJs ? "Sí ✅" : "No ❌"}</strong>
      </div>
    `;
  };

  // =========================================================
  // UI / MANUAL (misma estructura que tus páginas)
  // =========================================================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M3/M4 · Práctica</span>
        <h1>📝 Ejercicios: Strings y Template Literals</h1>
        <p className="muted">
          En esta práctica vas a dominar dos cosas clave:
          <strong> crear mensajes dinámicos</strong> con <strong>template literals</strong> y
          <strong> manipular texto</strong> con métodos básicos de strings.
          Primero trabajamos <strong>sin DOM</strong> (consola). Luego tienes un <strong>extra visual</strong> opcional.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejecutarTemplateLiterals}>
            ▶ Ejecutar Ejercicio 1 (Template Literals)
          </button>
          <button className="btn btn-primary" onClick={ejecutarStrings}>
            ▶ Ejecutar Ejercicio 2 (Strings)
          </button>
          <button className="btn btn-ghost" onClick={ejecutarExtraVisual}>
            ✨ Extra visual (opcional)
          </button>
          <span className="muted small">Tip: abre la consola (F12) para ver los resultados.</span>
        </div>
      </header>

      <div className="divider" />

      {/* INTRO */}
      <section className="card">
        <h2>🎮 ¡Vamos a dominar los strings!</h2>

        <div className="callout callout--tip">
          <div className="callout__title">🌟 ¿Qué son los Template Literals?</div>
          <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>Usan comillas invertidas: <code>`texto aquí`</code></li>
            <li>Incluyen variables con: <code>${"{variable}"}</code></li>
            <li>Permiten múltiples líneas (sin <code>{"\\n"}</code>)</li>
            <li>Son más legibles que concatenar con <code>+</code></li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* COMPARACIÓN */}
      <section className="card">
        <h2>🆚 Template Literals vs Concatenación</h2>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">😰</span> Método antiguo: concatenación con +
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`let nombre = "Ana";
let edad = 25;
let ciudad = "Madrid";

// Muchos + y comillas
let mensaje = "Hola, soy " + nombre +
             " y tengo " + edad +
             " años. Vivo en " + ciudad + ".";`}</code>
            </pre>

            <div className="callout callout--warning" style={{ marginTop: ".75rem" }}>
              <div className="callout__title">Problemas</div>
              <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                <li>Difícil de leer</li>
                <li>Fácil equivocarte con espacios</li>
                <li>Más “ruido” (muchos +)</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">😍</span> Método moderno: Template Literals
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`let nombre = "Ana";
let edad = 25;
let ciudad = "Madrid";

// Claro y directo
let mensaje = \`Hola, soy \${nombre} y tengo \${edad} años. Vivo en \${ciudad}.\`;`}</code>
            </pre>

            <div className="callout callout--success" style={{ marginTop: ".75rem" }}>
              <div className="callout__title">Ventajas</div>
              <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                <li>Más legible</li>
                <li>Menos errores</li>
                <li>Más profesional</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* EJERCICIO 1 */}
      <section className="card">
        <h2>📝 Ejercicio 1: Presentación con Template Literals</h2>

        <div className="callout callout--tip">
          <div className="callout__title">🎯 Enunciado</div>
          <p className="muted" style={{ marginBottom: ".5rem" }}>
            Declara tres variables: <code>nombre</code>, <code>edad</code> y <code>hobby</code>. Luego crea un string con
            Template Literals que diga algo así:
          </p>
          <pre style={{ margin: 0 }}>
            <code>{`"Hola, soy Marta, tengo 28 años y me encanta programar."`}</code>
          </pre>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">💡</span> Ver solución
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <pre>
              <code>{`let nombre = "Marta";
let edad = 28;
let hobby = "programar";

// ✅ Template Literal con backticks
let presentacion = \`Hola, soy \${nombre}, tengo \${edad} años y me encanta \${hobby}.\`;
console.log(presentacion);

// Bonus: multi-línea
let mensaje = \`Hola, soy \${nombre}.
En mi tiempo libre me gusta \${hobby}.\`;
console.log(mensaje);`}</code>
            </pre>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <div className="callout__title">¿Qué estás practicando?</div>
              <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                <li>Variables</li>
                <li>Template literals: <code>` `</code> y <code>${"{ }"}</code></li>
                <li>Salida por consola</li>
              </ul>
            </div>
          </div>
        </details>

        <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
          <div className="callout__title">🚀 Reto extra</div>
          <p className="muted" style={{ margin: 0 }}>
            Cambia los valores de las variables y crea tu propia “tarjeta de presentación”.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EJERCICIO 2 */}
      <section className="card">
        <h2>🧩 Ejercicio 2: Juega con los Strings</h2>

        <div className="callout callout--tip">
          <div className="callout__title">🎯 Enunciado</div>
          <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>
              Crea una variable <code>frase</code> con el texto <em>"JavaScript es genial"</em>.
            </li>
            <li>Muestra en consola la longitud de la frase.</li>
            <li>Convierte la frase a mayúsculas y minúsculas.</li>
            <li>Accede al primer y al último carácter.</li>
            <li>
              Comprueba si la frase contiene la palabra <em>"genial"</em>.
            </li>
          </ul>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">💡</span> Ver solución
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <pre>
              <code>{`let frase = "JavaScript es genial";

// Longitud
console.log(frase.length);

// Mayúsculas / minúsculas
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// Primer y último carácter
console.log(frase[0]);
console.log(frase[frase.length - 1]);

// ¿Incluye "genial"?
console.log(frase.includes("genial"));`}</code>
            </pre>
          </div>
        </details>

        <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
          <div className="callout__title">📋 Chuleta rápida de Strings</div>
          <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>
              <code>texto.length</code> → número de caracteres
            </li>
            <li>
              <code>texto[i]</code> → carácter en la posición <em>i</em> (empieza en 0)
            </li>
            <li>
              <code>texto.toUpperCase()</code> → MAYÚSCULAS
            </li>
            <li>
              <code>texto.toLowerCase()</code> → minúsculas
            </li>
            <li>
              <code>texto.indexOf("palabra")</code> → posición o -1
            </li>
            <li>
              <code>texto.includes("palabra")</code> → true / false
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* EXTRA VISUAL */}
      <section className="card">
        <h2>✨ Extra visual (opcional)</h2>
        <p className="muted">
          Esto es un extra para verlo “bonito” en la página. Solo usamos un <code>div</code> con <code>id</code> y{" "}
          <code>innerHTML</code> (DOM mínimo).
        </p>

        <div id="resultado-strings" className="resultado-caja">
          <p className="muted" style={{ margin: 0 }}>
            Pulsa “Extra visual” para mostrar un análisis rápido aquí ✨
          </p>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">DOM</span> ¿Qué parte es DOM aquí?
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`const caja = document.getElementById("resultado-strings");
caja.innerHTML = "Aquí pongo el resultado";`}</code>
            </pre>
          </div>
        </details>

        <style>{`
          .resultado-caja{
            margin-top: .75rem;
            padding: 1rem;
            border-radius: 12px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.12);
          }
          .resultado-principal{
            font-weight: 800;
            margin-bottom: .5rem;
          }
          .resultado-detalle{
            display: inline-block;
            padding: .45rem .75rem;
            border-radius: 999px;
            margin: .25rem .25rem 0 0;
            border: 1px solid rgba(255,255,255,.14);
            background: rgba(255,255,255,.08);
          }
          .ok{ border-color: rgba(76,175,80,.35); }
          .warn{ border-color: rgba(255,152,0,.35); }
        `}</style>
      </section>

      <div className="divider" />

      {/* RETO FINAL */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>🚀 Reto final</h2>
          <span className="topic-section__meta">extra</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">Sube nivel (sin DOM)</h3>
          <ul className="links-list">
            <li className="links-item">
              <strong>1) Pide datos por prompt</strong>
              <p className="links-desc">
                Pide por <code>prompt()</code> el nombre, la edad y el hobby, y genera la presentación con template literals.
              </p>
            </li>
            <li className="links-item">
              <strong>2) Valida</strong>
              <p className="links-desc">
                Si el usuario deja algo vacío, muestra un <code>alert()</code> de error.
              </p>
            </li>
            <li className="links-item">
              <strong>3) Extra pro</strong>
              <p className="links-desc">
                Muestra también cuántos caracteres tiene el nombre (<code>nombre.length</code>) y el hobby en mayúsculas.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
