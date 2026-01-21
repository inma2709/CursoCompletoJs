// src/pages/Ejercicios/EjercicioCalculadoraInteligente.jsx
// Ejercicio · Calculadora inteligente (suma + par/impar + signo)
// Nivel: básico/intermedio (introduce % y condicionales)
// Nota: primero lo hacemos SIN DOM (prompt/alert). Luego un EXTRA visual opcional.
//
// ✅ INCLUYE: ejercicio guiado + conceptos + summary con solución + extra + reto extra
// ✅ LISTO para copiar/pegar en tu proyecto

export default function EjercicioCalculadoraInteligente() {
  // =========================
  // LÓGICA (VERSIÓN FÁCIL SIN DOM)
  // =========================
  const ejecutarFacil = () => {
    // 1) PEDIR DATOS (prompt devuelve TEXTO)
    let n1 = prompt("🧮 Calculadora fácil\nIntroduce el primer número:");
    if (n1 === null) return alert("Has cancelado el ejercicio.");

    let n2 = prompt("Introduce el segundo número:");
    if (n2 === null) return alert("Has cancelado el ejercicio.");

    // 2) CONVERTIR A NÚMERO
    n1 = Number(n1);
    n2 = Number(n2);

    // 3) VALIDAR (si escriben letras, Number() da NaN)
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      alert("⚠️ Debes introducir números válidos (no letras).");
      return;
    }

    // 4) CALCULAR
    const suma = n1 + n2;

    // 5) PAR / IMPAR (con %)
    // Nota: par/impar tiene sentido sobre todo con enteros, aquí lo usamos para practicar el operador %
    const paridad = suma % 2 === 0 ? "PAR 📊" : "IMPAR 🔢";

    // 6) SIGNO (if / else if / else)
    let signo = "NEUTRO ⚖️";
    if (suma > 0) signo = "POSITIVO 📈";
    else if (suma < 0) signo = "NEGATIVO 📉";

    // 7) MOSTRAR RESULTADO
    alert(
      `✅ Resultado\n\n${n1} + ${n2} = ${suma}\n\n• Paridad: ${paridad}\n• Signo: ${signo}`
    );
  };

  // =========================
  // EXTRA VISUAL (DOM MINIMO)
  // =========================
  // OJO: esto ya usa DOM, pero MUY controlado:
  // - Solo 1 id
  // - Solo innerHTML
  // - Sin formularios ni eventos complejos
  const ejecutarVisual = () => {
    // 1) PEDIR DATOS
    let n1 = prompt("🎨 Versión visual\nIntroduce el primer número:");
    if (n1 === null) return alert("Has cancelado el ejercicio.");

    let n2 = prompt("Introduce el segundo número:");
    if (n2 === null) return alert("Has cancelado el ejercicio.");

    // 2) CONVERTIR
    n1 = Number(n1);
    n2 = Number(n2);

    // 3) VALIDAR
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      alert("⚠️ Debes introducir números válidos (no letras).");
      return;
    }

    // 4) CALCULAR
    const suma = n1 + n2;

    // 5) PAR / IMPAR + clase para pintar bonito
    const paridad =
      suma % 2 === 0
        ? { text: "PAR 📊", cls: "par" }
        : { text: "IMPAR 🔢", cls: "impar" };

    // 6) SIGNO + clase para pintar bonito
    let signo = { text: "NEUTRO ⚖️", cls: "neutro" };
    if (suma > 0) signo = { text: "POSITIVO 📈", cls: "positivo" };
    else if (suma < 0) signo = { text: "NEGATIVO 📉", cls: "negativo" };

    // 7) ESCRIBIR EN PANTALLA (DOM mínimo)
    const caja = document.getElementById("resultado-calc");
    if (!caja) return; // por si el div no existe por algún motivo

    caja.innerHTML = `
      <div class="resultado-principal">📊 <strong>${n1} + ${n2} = ${suma}</strong></div>
      <div class="resultado-detalle ${paridad.cls}">✨ Es <strong>${paridad.text}</strong></div>
      <div class="resultado-detalle ${signo.cls}">🎯 Es <strong>${signo.text}</strong></div>
    `;
  };

  // =========================
  // RETO EXTRA (SIN DOM)
  // =========================
  // Extra: añadir elección de operación (+ - * /) y repetir con bucle
  const ejecutarRetoExtra = () => {
    alert(
      "🚀 Reto extra\n\nEn esta versión tú eliges la operación y el programa puede repetirse.\n\nLee las instrucciones en la sección 'Reto extra' 👇"
    );
  };

  // =========================
  // UI / MANUAL
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M4/M5 · Práctica</span>
        <h1>Reto: Calculadora inteligente (par/impar + signo)</h1>
        <p className="muted">
          Vas a sumar dos números y decidir con <strong>condicionales</strong> si el resultado es{" "}
          <strong>par/impar</strong> y <strong>positivo/negativo/neutro</strong>. Primero lo hacemos{" "}
          <strong>sin DOM</strong> (solo <code>prompt()</code> y <code>alert()</code>). Luego tienes un{" "}
          <strong>extra visual</strong> opcional.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejecutarFacil}>
            ▶ Empezar (versión fácil)
          </button>

          <button className="btn btn-ghost" onClick={ejecutarVisual}>
            ✨ Extra visual (opcional)
          </button>

          <button className="btn btn-ghost" onClick={ejecutarRetoExtra}>
            🚀 Reto extra (ideas)
          </button>

          <span className="muted small">
            Consejo: prueba con 10 y 5, con -3 y -7, y con 5 y -5.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO + GUÍA */}
      <section className="card">
        <h2>Enunciado (lo que tienes que conseguir)</h2>

        <p className="muted">
          Crea un programa que pida dos números, los sume y muestre:
        </p>

        <ul>
          <li>La suma (<code>n1 + n2</code>).</li>
          <li>Si el resultado es <strong>PAR</strong> o <strong>IMPAR</strong>.</li>
          <li>
            Si el resultado es <strong>POSITIVO</strong>, <strong>NEGATIVO</strong> o{" "}
            <strong>NEUTRO (0)</strong>.
          </li>
        </ul>

        <div className="callout callout--tip">
          <div className="callout__title">🎯 ¿Qué se ejercita aquí?</div>
          <p className="muted" style={{ marginBottom: ".5rem" }}>
            En este ejercicio practicas lo más importante para empezar a programar:
          </p>
          <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>
              <strong>Entrada de datos</strong> con <code>prompt()</code> (y entender que llega como texto).
            </li>
            <li>
              <strong>Conversión</strong> con <code>Number()</code>.
            </li>
            <li>
              <strong>Validación</strong> con <code>Number.isNaN()</code> (evitar letras).
            </li>
            <li>
              <strong>Operador %</strong> para decidir <strong>par / impar</strong>.
            </li>
            <li>
              <strong>Condicionales</strong> <code>if / else if / else</code> para el{" "}
              <strong>signo</strong>.
            </li>
            <li>
              <strong>Salida</strong> con <code>alert()</code> (y en el extra, un toque de DOM).
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* CONCEPTOS NUEVOS */}
      <section className="card">
        <h2>Conceptos nuevos (explicados fácil)</h2>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1</span> prompt() devuelve texto → hay que convertir
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>
              <code>prompt()</code> siempre devuelve <strong>texto</strong>. Si quieres sumar, necesitas números:
            </p>
            <pre>
              <code>{`let n1 = Number(prompt("Dame un número"));
let n2 = Number(prompt("Dame otro número"));`}</code>
            </pre>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">2</span> NaN: cuando lo que escriben NO es un número
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>
              Si el usuario escribe letras, <code>Number("hola")</code> produce <code>NaN</code>. Lo comprobamos con{" "}
              <code>Number.isNaN()</code>:
            </p>
            <pre>
              <code>{`if (Number.isNaN(n1) || Number.isNaN(n2)) {
  alert("Debes introducir números válidos");
  return;
}`}</code>
            </pre>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">3</span> El operador % (módulo) para par/impar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>
              <code>%</code> devuelve el <strong>resto</strong>. Un número es par si al dividir entre 2 el resto es 0:
            </p>
            <pre>
              <code>{`if (suma % 2 === 0) {
  // PAR
} else {
  // IMPAR
}`}</code>
            </pre>

            <div className="callout callout--warning" style={{ marginTop: ".75rem" }}>
              <div className="callout__title">⚠️ Nota importante</div>
              <p className="muted" style={{ margin: 0 }}>
                Par/impar tiene sentido sobre todo con <strong>enteros</strong>. Aquí lo usamos para practicar el operador.
              </p>
            </div>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">4</span> Signo (positivo / negativo / neutro)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>Usamos condiciones encadenadas:</p>
            <pre>
              <code>{`let signo = "NEUTRO";
if (suma > 0) signo = "POSITIVO";
else if (suma < 0) signo = "NEGATIVO";`}</code>
            </pre>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* SOLUCIÓN EN SUMMARY (incluida) */}
      <section className="card">
        <h2>Solución posible (para corregir)</h2>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Ver solución (paso a paso)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Esta es una solución típica (no es la única). Lo importante es: convertir a número, validar y usar
              condicionales correctamente.
            </p>

            <pre>
              <code>{`// ✅ Solución (versión fácil sin DOM)
const ejecutarFacil = () => {
  let n1 = prompt("Introduce el primer número:");
  if (n1 === null) return alert("Has cancelado.");

  let n2 = prompt("Introduce el segundo número:");
  if (n2 === null) return alert("Has cancelado.");

  n1 = Number(n1);
  n2 = Number(n2);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    alert("Debes introducir números válidos.");
    return;
  }

  const suma = n1 + n2;

  const paridad = (suma % 2 === 0) ? "PAR" : "IMPAR";

  let signo = "NEUTRO";
  if (suma > 0) signo = "POSITIVO";
  else if (suma < 0) signo = "NEGATIVO";

  alert(\`\${n1} + \${n2} = \${suma}\\nParidad: \${paridad}\\nSigno: \${signo}\`);
};`}</code>
            </pre>

            <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
              <div className="callout__title">🧠 Comprobación rápida</div>
              <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                <li>
                  <strong>10 + 5 = 15</strong> → IMPAR + POSITIVO
                </li>
                <li>
                  <strong>8 + 4 = 12</strong> → PAR + POSITIVO
                </li>
                <li>
                  <strong>-3 + -7 = -10</strong> → PAR + NEGATIVO
                </li>
                <li>
                  <strong>5 + -5 = 0</strong> → PAR + NEUTRO
                </li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <div className="divider" />

      {/* EXTRA VISUAL (opcional, DOM mínimo) */}
      <section className="card">
        <h2>Extra visual (opcional): ver el resultado en la página</h2>
        <p className="muted">
          Esto ya toca un poquito el DOM, pero es muy simple: solo usamos un <code>div</code> con un <code>id</code>{" "}
          para escribir el resultado.
        </p>

        {/* Caja donde escribimos el resultado */}
        <div id="resultado-calc" className="resultado-caja">
          <p className="muted" style={{ margin: 0 }}>
            Pulsa “Extra visual” para mostrar el resultado aquí ✨
          </p>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">DOM</span> ¿Qué parte es “DOM” aquí?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>
          <div className="topic-details__content">
            <p>Solo estas dos líneas (muy controladas):</p>
            <pre>
              <code>{`const caja = document.getElementById("resultado-calc");
caja.innerHTML = "Aquí pongo el resultado";`}</code>
            </pre>
            <p className="muted">
              Más adelante haréis formularios y manejo de DOM “de verdad”. De momento, esto es un extra opcional.
            </p>
          </div>
        </details>

        {/* Estilos locales SOLO para este ejercicio (no rompe tu CSS global) */}
        <style>{`
          /* Caja resultado extra visual */
          .resultado-caja{
            margin-top: .75rem;
            padding: 1rem;
            border-radius: 12px;
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.12);
          }

          /* Mini estilos del resultado (se usan en innerHTML) */
          .resultado-principal{
            font-weight: 800;
            font-size: 1.05rem;
            margin-bottom: .5rem;
          }
          .resultado-detalle{
            display: inline-block;
            padding: .45rem .75rem;
            border-radius: 999px;
            margin: .25rem;
            border: 1px solid rgba(255,255,255,.14);
            background: rgba(255,255,255,.08);
          }

          /* Clases de color por estado */
          .par { border-color: rgba(76,175,80,.35); }
          .impar { border-color: rgba(255,152,0,.35); }
          .positivo { border-color: rgba(33,150,243,.35); }
          .negativo { border-color: rgba(244,67,54,.35); }
          .neutro { border-color: rgba(158,158,158,.35); }
        `}</style>
      </section>

      <div className="divider" />

      {/* RETO EXTRA */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Reto extra</h2>
          <span className="topic-section__meta">Para subir nivel</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Sube dificultad (sin DOM)</h3>
          <ul className="links-list">
            <li className="links-item">
              <strong>1) Operación elegida</strong>
              <p className="links-desc">
                En lugar de sumar siempre, pregunta con <code>prompt()</code> qué operación quiere:{" "}
                <code> + , - , * , /</code> y realiza esa operación.
              </p>
            </li>

            <li className="links-item">
              <strong>2) Control de división</strong>
              <p className="links-desc">
                Si elige dividir y el segundo número es 0, muestra un mensaje de error y no dividas.
              </p>
            </li>

            <li className="links-item">
              <strong>3) Repetir el programa</strong>
              <p className="links-desc">
                Al final pregunta: “¿Quieres calcular otra vez? (s/n)” y repite con un bucle <code>while</code>.
              </p>
            </li>

            <li className="links-item">
              <strong>4) Extra pro (opcional)</strong>
              <p className="links-desc">
                Muestra también si la suma es <strong>mayor, menor o igual</strong> a 100.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* GUÍA: PASOS PARA EL ALUMNO (muy guiado) */}
      <section className="card">
        <h2>Guía paso a paso (para hacerlo tú)</h2>

        <ol className="muted" style={{ paddingLeft: "1.25rem" }}>
          <li>
            Crea dos variables: <code>n1</code> y <code>n2</code> con <code>prompt()</code>.
          </li>
          <li>
            Convierte ambas con <code>Number()</code>.
          </li>
          <li>
            Valida con <code>Number.isNaN()</code> (si falla, <code>alert()</code> y <code>return</code>).
          </li>
          <li>
            Calcula la suma: <code>const suma = n1 + n2</code>.
          </li>
          <li>
            Paridad: si <code>suma % 2 === 0</code> es PAR, si no IMPAR.
          </li>
          <li>
            Signo: si <code>suma &gt; 0</code> POSITIVO, si <code>suma &lt; 0</code> NEGATIVO, si no NEUTRO.
          </li>
          <li>
            Muestra todo con un <code>alert()</code> final.
          </li>
        </ol>

        <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
          <div className="callout__title">✅ Cuando esté bien hecho...</div>
          <p className="muted" style={{ margin: 0 }}>
            Tu programa debe funcionar con números positivos, negativos y con el caso especial de <strong>0</strong>.
          </p>
        </div>
      </section>
    </article>
  );
}
