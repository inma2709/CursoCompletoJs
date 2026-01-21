// src/pages/M5_Ejercicio_Condicionales.jsx
// Ejercicio React · if / else if / else con prompt()
// Nota didáctica: usamos prompt() para practicar condicionales SIN formularios todavía.

export default function M5EjercicioCondicionales() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio = () => {
    // 1) Pedimos la edad (prompt siempre devuelve TEXTO)
    let edad = prompt("Introduce tu edad:");

    // Si cancela, prompt devuelve null
    if (edad === null) {
      alert("Has cancelado el ejercicio.");
      return;
    }

    // 2) Convertimos a número
    edad = Number(edad);

    // Si no es un número válido
    if (Number.isNaN(edad)) {
      alert("Debes introducir un número válido para la edad.");
      return;
    }

    // 3) Evaluamos con if / else if / else (EN ORDEN)
    if (edad < 16) {
      alert("No puedes acceder al curso. Eres menor de 16 años.");
      return;
    }

    if (edad < 18) {
      alert("Tienes 16 o 17 años: necesitas autorización para acceder al curso.");
      return;
    }

    // 4) Si llega aquí, edad >= 18, pedimos estudios
    let estudios = prompt("Introduce tu nivel de estudios (ESO, bachillerato, grado):");

    if (estudios === null) {
      alert("Has cancelado la parte de estudios.");
      return;
    }

    // Normalizamos (truco de calidad para evitar fallos por mayúsculas/espacios)
    estudios = estudios.trim().toLowerCase();

    // 5) Decisión final
    if (estudios === "bachillerato" || estudios === "grado") {
      alert("✅ Puedes acceder al curso. Cumples edad y nivel de estudios.");
    } else {
      alert("❌ No cumples el nivel de estudios requerido (bachillerato o grado).");
    }
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M5 · Práctica</span>
        <h1>Ejercicio: Acceso al curso con condicionales</h1>
        <p className="muted">
          Vas a practicar <strong>if</strong>, <strong>else if</strong> y <strong>else</strong>{" "}
          usando <strong>prompt()</strong>. No usamos formularios todavía: el objetivo es
          entrenar la lógica.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio}>
            ▶ Empezar ejercicio
          </button>
          <span className="muted small">
            Consejo: prueba edades distintas (15, 16, 17, 18, 25…) y distintos estudios.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* EXPLICACIÓN PASO A PASO */}
      <section className="card">
        <h2>¿Qué hace el programa?</h2>

        <ol>
          <li>
            Pide la <strong>edad</strong> con <code>prompt()</code>.
          </li>
          <li>
            Convierte esa edad a número con <code>Number()</code>.
          </li>
          <li>
            Evalúa la edad con <strong>if / else if / else</strong>:
            <ul>
              <li>Si es menor de 16 → no puede acceder.</li>
              <li>Si tiene 16 o 17 → necesita autorización.</li>
              <li>Si tiene 18 o más → pide estudios.</li>
            </ul>
          </li>
          <li>
            Si la edad es ≥ 18, pide el <strong>nivel de estudios</strong> y decide:
            <ul>
              <li>
                Si es <code>bachillerato</code> o <code>grado</code> → puede acceder.
              </li>
              <li>Si es otra cosa → no cumple el requisito.</li>
            </ul>
          </li>
        </ol>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            Los condicionales se evalúan <strong>en orden</strong>. Cuando una condición es
            verdadera, se ejecuta su bloque y el programa sigue (o termina si hacemos{" "}
            <code>return</code>).
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO COMENTADO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <p className="muted">
          Fíjate en estas ideas: <strong>prompt devuelve texto</strong>, por eso convertimos con{" "}
          <code>Number()</code>. También controlamos errores (cancelar o escribir letras).
        </p>

        <pre>
          <code>{`const ejecutarEjercicio = () => {
  let edad = prompt("Introduce tu edad:");

  if (edad === null) {
    alert("Has cancelado el ejercicio.");
    return;
  }

  edad = Number(edad);

  

  if (edad < 16) {
    alert("No puedes acceder al curso.");
    return;
  }

  if (edad < 18) {
    alert("Necesitas autorización.");
    return;
  }

  let estudios = prompt("Nivel de estudios (ESO, bachillerato, grado):");

  if (estudios === null) {
    alert("Has cancelado la parte de estudios.");
    return;
  }

  estudios = estudios.trim().toLowerCase();

  if (estudios === "bachillerato" || estudios === "grado") {
    alert("Puedes acceder al curso.");
  } else {
    alert("No cumples el nivel de estudios requerido.");
  }
};`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Ojo con esto</div>
          <p>
            Si no conviertes la edad a número, JavaScript puede comparar como texto y dar resultados raros.
            Por eso usamos <code>Number()</code> y comprobamos con <code>Number.isNaN()</code>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* PROPUESTA DE NUEVO RETO */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para practicar más</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚗 Haz otro ejercicio similar: “Edad para sacarse el carnet”</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Tu objetivo:</strong>
              <p className="links-desc">
                Crear un programa con <code>prompt()</code> que pida la edad y muestre:
                <br />
                - Si es menor de 18 → “Aún no puedes sacarte el carnet”
                <br />
                - Si es 18 o más → “Ya puedes sacarte el carnet”
              </p>
            </li>

            <li className="links-item">
              <strong>Sube un nivel:</strong>
              <p className="links-desc">
                Añade un <code>else if</code> para diferenciar:
                <br />
                - Menor de 16 → “Te faltan muchos años”
                <br />
                - 16 o 17 → “Te queda poco”
                <br />
                - 18 o más → “Ya puedes”
              </p>
            </li>

            <li className="links-item">
              <strong>Pista importante:</strong>
              <p className="links-desc">
                Convierte la edad a número con <code>Number()</code> y controla si el usuario cancela.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* ENLACES DE DOCUMENTACIÓN */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Enlaces relacionados</h2>
          <span className="topic-section__meta">Documentación para ampliar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">📎 Recursos oficiales</h3>

          <ul className="links-list">
            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · if...else
              </a>
              <p className="links-desc">
                Sintaxis, ejemplos y buenas prácticas para condicionales.
              </p>
            </li>

            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · Number() y conversiones
              </a>
              <p className="links-desc">
                Entiende por qué <code>prompt()</code> devuelve texto y cómo convertirlo a número.
              </p>
            </li>

            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · Number.isNaN()
              </a>
              <p className="links-desc">
                Comprobar si el usuario ha escrito algo que no es un número.
              </p>
            </li>

            <li className="links-item">
              <a
                href="https://developer.mozilla.org/es/docs/Web/API/Window/prompt"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN · prompt()
              </a>
              <p className="links-desc">
                Uso de <code>prompt()</code>, valores de retorno y casos de cancelación.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
