// src/pages/Ejercicios/EjercicioFor.jsx
// Ejercicio React · bucle for (básico + dos variables + rango con prompt)
// Nivel inicial: entender inicio / condición / incremento

export default function EjercicioFor() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio1 = () => {
    // FOR BÁSICO: 0 -> 4
    for (let contador = 0; contador < 5; contador++) {
      alert("El valor del contador es: " + contador);
      console.log("FOR básico → contador:", contador);
    }
    alert("✅ Fin del for básico");
  };

  const ejecutarEjercicio2 = () => {
    // FOR CON 2 VARIABLES: i sube, j baja
    for (let i = 0, j = 10; i <= 10; i++, j--) {
      alert("i = " + i + " | j = " + j);
      console.log("FOR doble → i:", i, "j:", j);
    }
    alert("✅ Fin del for con 2 variables");
  };

  const ejecutarEjercicio3 = () => {
    // FOR CON RANGO PEDIDO AL USUARIO
    let inicio = prompt("Introduce el inicio del bucle (por ejemplo 3):");
    if (inicio === null) {
      alert("Has cancelado el inicio.");
      return;
    }

    let final = prompt("Introduce el final del bucle (por ejemplo 8):");
    if (final === null) {
      alert("Has cancelado el final.");
      return;
    }

    inicio = Number(inicio);
    final = Number(final);

    if (Number.isNaN(inicio) || Number.isNaN(final)) {
      alert("Debes introducir números válidos.");
      return;
    }

    if (inicio > final) {
      alert("El inicio no puede ser mayor que el final (todavía). Prueba al revés 🙂");
      return;
    }

    for (let x = inicio; x <= final; x++) {
      alert("Vuelta nº " + x);
      console.log("FOR rango → vuelta:", x);
    }

    alert("✅ Fin del for con rango");
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E9 · Práctica</span>
        <h1>Ejercicio: Bucle for (contador y rango)</h1>
        <p className="muted">
          Vas a aprender el bucle <strong>for</strong>, el más usado cuando sabemos{" "}
          <strong>cuántas vueltas</strong> queremos dar. Practicaremos 3 versiones:
          for básico, for con dos variables y for con inicio/fin.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio1}>
            ▶ For básico (0→4)
          </button>
          <button className="btn btn-ghost" onClick={ejecutarEjercicio2}>
            ↕ For con 2 variables
          </button>
          <button className="btn btn-ghost" onClick={ejecutarEjercicio3}>
            🔢 For con inicio/fin
          </button>
          <span className="muted small">
            Consejo: abre consola (F12) para ver el rastro de cada vuelta.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO + EXPLICACIÓN */}
      <section className="card">
        <h2>¿Qué es un for?</h2>

        <p className="muted">
          Un <strong>for</strong> es un bucle con 3 partes que se leen así:
        </p>

        <ul>
          <li>
            <strong>Inicio:</strong> creamos el contador (por ejemplo <code>let i = 0</code>).
          </li>
          <li>
            <strong>Condición:</strong> mientras sea true, repetimos (por ejemplo <code>i &lt; 5</code>).
          </li>
          <li>
            <strong>Actualización:</strong> cambiamos el contador en cada vuelta (por ejemplo <code>i++</code>).
          </li>
        </ul>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Traducción rápida</div>
          <p>
            “Empieza en 0, repite mientras sea menor que 5, y suma 1 en cada vuelta”.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* PASO A PASO */}
      <section className="card">
        <h2>Ejercicio 1: For básico</h2>
        <p className="muted">
          Queremos mostrar el contador desde 0 hasta 4 (5 vueltas en total).
        </p>

        <pre>
          <code>{`for (let contador = 0; contador < 5; contador++) {
  alert("El valor del contador es: " + contador);
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Pregunta típica</div>
          <p>
            Si empieza en 0 y llega hasta 4… ¿cuántas vueltas son?{" "}
            <strong>Son 5</strong> (0, 1, 2, 3, 4).
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="card">
        <h2>Ejercicio 2: For con dos variables (i sube, j baja)</h2>
        <p className="muted">
          Esto es un extra muy útil: en un <code>for</code> puedes manejar{" "}
          <strong>dos contadores</strong> a la vez.
        </p>

        <pre>
          <code>{`for (let i = 0, j = 10; i <= 10; i++, j--) {
  alert("i = " + i + " | j = " + j);
}`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧩 ¿Para qué sirve?</div>
          <p>
            Para recorrer dos cosas a la vez: una sube y otra baja (muy típico en ejercicios de lógica).
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="card">
        <h2>Ejercicio 3: For con inicio y final (lo decide el usuario)</h2>
        <p className="muted">
          Aquí el alumno controla cuántas vueltas dará el bucle, eligiendo inicio y final con{" "}
          <code>prompt()</code>.
        </p>

        <pre>
          <code>{`let inicio = Number(prompt("Introduce el inicio del bucle"));
let final = Number(prompt("Introduce el final del bucle"));

for (let x = inicio; x <= final; x++) {
  alert("Vuelta nº " + x);
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Ojo</div>
          <p>
            Si el usuario escribe letras, <code>Number()</code> devuelve{" "}
            <code>NaN</code>. Por eso lo comprobamos con <code>Number.isNaN()</code>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* TU VERSIÓN “WEB CLÁSICA” */}
      <section className="card">
        <h2>Tu versión original (modo HTML + document.write)</h2>
        <p className="muted">
          En ejercicios antiguos se usa <code>document.write</code> para “pintar” texto en pantalla.
          En React no lo usamos, pero aquí tienes tu ejemplo para entenderlo.
        </p>

        <pre>
          <code>{`for (let i = 0, j = 10; i <= 10; i++, j--) {
  document.write(\`El valor de i es: \${i} y el valor de j es: \${j}<br>\`);
}

let inicio = Number(prompt("Introduce el inicio del bucle"));
let final = Number(prompt("Introduce el final del bucle"));

for (let x = inicio; x <= final; x++) {
  document.write("Vuelta nº " + x + "<br>");
}`}</code>
        </pre>
      </section>

      <div className="divider" />

      {/* RETO */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para practicar más</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🏁 Reto: cuenta atrás</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Tu objetivo:</strong>
              <p className="links-desc">
                Crea un <code>for</code> que empiece en 10 y llegue a 0 mostrando cada número.
              </p>
            </li>

            <li className="links-item">
              <strong>Más retador:</strong>
              <p className="links-desc">
                Pide al usuario un número (por ejemplo 7) y haz una cuenta atrás desde ese número hasta 0.
              </p>
            </li>

            <li className="links-item">
              <strong>Pista:</strong>
              <p className="links-desc">
                El contador puede ir bajando con <code>i--</code>.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
