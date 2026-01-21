// src/pages/Ejercicios/EjercicioBoletinNotas.jsx
// Página para tu manual: enunciado + pista + posible solución (oculta)

export default function EjercicioBoletinNotas() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">🧩 Ejercicio MIX</span>
          <h1>Boletín de notas (arrays + objetos + condicionales + template literals)</h1>
          <p className="muted">
            Vas a crear un mini “boletín” donde el usuario añade <strong>asignaturas</strong> y{" "}
            <strong>notas</strong> y el programa calcula la <strong>media</strong> y muestra un{" "}
            <strong>veredicto</strong> (aprobado/suspenso…).
          </p>
        </div>
      </header>

      {/* =========================
          ENUNCIADO
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>📌 Enunciado</h2>
          <span className="topic-section__meta">ejercicio</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Qué tienes que construir
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea una página (HTML + JavaScript) con un <strong>formulario sencillo</strong> y un área de resultados.
              El objetivo es que el usuario pueda ir añadiendo notas y luego generar un boletín final.
            </p>

            <ol>
              <li>
                Crea 3 campos: <strong>Nombre</strong>, <strong>Asignatura</strong> y <strong>Nota (0 a 10)</strong>.
              </li>
              <li>
                Botón <strong>Agregar nota</strong>: guarda cada registro dentro de un{" "}
                <strong>array</strong> como un <strong>objeto</strong>:
                <code>{` { nombre, asignatura, nota } `}</code>.
              </li>
              <li>
                Botón <strong>Calcular boletín</strong>: recorre el array y calcula:
                <ul>
                  <li>La <strong>media</strong> de las notas</li>
                  <li>La <strong>nota más alta</strong> y la <strong>más baja</strong></li>
                  <li>Un <strong>veredicto</strong> según la media</li>
                </ul>
              </li>
              <li>
                Muestra todo en pantalla dentro de un <code>&lt;div id="salida"&gt;</code> usando{" "}
                <strong>template literals</strong> (comillas invertidas).
              </li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>✅ Reglas del veredicto</h3>
            <ul>
              <li>Media ≥ 9 → 🏆 Matrícula</li>
              <li>Media ≥ 7 → ⭐ Notable</li>
              <li>Media ≥ 5 → ✅ Aprobado</li>
              <li>Si no → ❌ Suspenso</li>
            </ul>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto (opcional)</h3>
            <p className="muted">
              Añade un botón <strong>Reiniciar</strong> que borre el array y limpie el formulario y la salida.
            </p>
          </div>
        </details>

        {/* =========================
            PISTA
        ========================= */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">💡</span> Pista (sin darte todo hecho)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul className="muted">
              <li>
                Empieza creando <code>const registro = [];</code> para guardar notas.
              </li>
              <li>
                Cada vez que pulses “Agregar nota”, crea un objeto y haz <code>registro.push(objeto)</code>.
              </li>
              <li>
                Para la media: suma con un acumulador <code>suma = suma + nota</code> y divide entre{" "}
                <code>registro.length</code>.
              </li>
              <li>
                Para max/min: arranca con <code>max = -Infinity</code> y <code>min = Infinity</code>, y actualiza con{" "}
                <code>if</code>.
              </li>
              <li>
                Para mostrar resultados, construye una string <code>html += ...</code> y luego{" "}
                <code>salida.innerHTML = html</code>.
              </li>
            </ul>
          </div>
        </details>

        {/* =========================
            SOLUCIÓN (OCULTA)
        ========================= */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Esta solución es una referencia. Intenta hacerlo primero tú. Si te atascas, úsala para comparar.
            </p>

            <div className="code-example">
              <pre>
                <code>{`<!-- HTML mínimo -->
<input id="nombre" placeholder="Nombre">
<input id="asignatura" placeholder="Asignatura">
<input id="nota" type="number" min="0" max="10" placeholder="Nota">
<button id="agregar">Agregar nota</button>
<button id="calcular">Calcular boletín</button>

<div id="salida"></div>

<script>
  // Array donde guardamos objetos con las notas
  const registro = [];

  // Referencias DOM
  const nombreInput = document.getElementById("nombre");
  const asignaturaInput = document.getElementById("asignatura");
  const notaInput = document.getElementById("nota");
  const salida = document.getElementById("salida");

  // 1) Agregar nota (crear objeto + push)
  document.getElementById("agregar").addEventListener("click", () => {
    const nombre = nombreInput.value.trim();
    const asignatura = asignaturaInput.value.trim();
    const nota = Number(notaInput.value);

    // Validaciones
    if (!nombre || !asignatura) {
      salida.innerHTML = "Completa nombre y asignatura";
      return;
    }
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      salida.innerHTML = "Nota inválida (0 a 10)";
      return;
    }

    // Objeto y push al array
    registro.push({ nombre, asignatura, nota });

    salida.innerHTML = \`✅ Añadida: \${asignatura} (\${nota}) · Total: \${registro.length}\`;
  });

  // 2) Calcular boletín (recorrer array)
  document.getElementById("calcular").addEventListener("click", () => {
    if (registro.length === 0) {
      salida.innerHTML = "No hay notas aún";
      return;
    }

    let suma = 0;
    let max = -Infinity;
    let min = Infinity;
    let lista = "";

    for (const item of registro) {
      suma = suma + item.nota;

      if (item.nota > max) max = item.nota;
      if (item.nota < min) min = item.nota;

      lista += \`<li>\${item.asignatura}: <strong>\${item.nota}</strong></li>\`;
    }

    const media = suma / registro.length;

    // Veredicto según media
    let veredicto = "";
    if (media >= 9) veredicto = "🏆 Matrícula";
    else if (media >= 7) veredicto = "⭐ Notable";
    else if (media >= 5) veredicto = "✅ Aprobado";
    else veredicto = "❌ Suspenso";

    salida.innerHTML = \`
      <h3>Boletín de \${registro[0].nombre}</h3>
      <ul>\${lista}</ul>
      <p>Media: <strong>\${media.toFixed(2)}</strong> · \${veredicto}</p>
      <p>Máx: <strong>\${max}</strong> · Mín: <strong>\${min}</strong></p>
    \`;
  });
</script>`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
