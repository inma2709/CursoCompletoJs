// src/pages/Ejercicios/EjercicioDoWhile.jsx
// Ejercicio React · diferencia real entre do...while y while
// Nivel inicial: entender cuándo se ejecuta un bucle al menos una vez

export default function EjercicioDoWhile() {
  // =========================
  // LÓGICA DEL EJERCICIO
  // =========================
  const ejecutarEjercicio = () => {
    /* ===== do...while ===== */
    let numero = 5; 
    // Aunque la condición sea falsa desde el principio,
    // el do...while se ejecuta al menos una vez

    do {
      numero = prompt("DO...WHILE → Introduce un número mayor o igual que 10");
    } while (numero < 10);

    alert("DO...WHILE ejecutado. El número final es: " + numero);

    /* ===== while ===== */
    let numeros = 15;
    // Aquí la condición es falsa desde el inicio,
    // por tanto el while NO se ejecuta ni una sola vez

    while (numeros < 0) {
      numeros = prompt("WHILE → Introduce un número positivo");
    }

    alert("WHILE NO se ha ejecutado porque la condición era falsa desde el principio");
  };

  // =========================
  // UI / EXPLICACIÓN DIDÁCTICA
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">E8 · Práctica</span>
        <h1>Ejercicio: Diferencia entre do...while y while</h1>
        <p className="muted">
          En este ejercicio vas a ver la <strong>diferencia real</strong> entre{" "}
          <strong>do...while</strong> y <strong>while</strong> cuando la condición es falsa
          desde el principio.
        </p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <button className="btn btn-primary" onClick={ejecutarEjercicio}>
            ▶ Empezar ejercicio
          </button>
          <span className="muted small">
            Lee con calma los mensajes y piensa cuándo se ejecuta cada bucle.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* ENUNCIADO */}
      <section className="card">
        <h2>Enunciado</h2>
        <p className="muted">
          Vamos a comparar dos bucles que parecen iguales, pero no lo son:
        </p>

        <ul>
          <li>
            <strong>do...while</strong>: se ejecuta <strong>al menos una vez</strong>.
          </li>
          <li>
            <strong>while</strong>: solo se ejecuta si la condición es verdadera desde el inicio.
          </li>
        </ul>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            La diferencia está en <strong>cuándo se comprueba la condición</strong>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EXPLICACIÓN PASO A PASO */}
      <section className="card">
        <h2>¿Qué ocurre en este ejercicio?</h2>

        <ol>
          <li>
            En el <strong>do...while</strong>, el programa pide un número{" "}
            <strong>antes de comprobar la condición</strong>.
          </li>
          <li>
            Aunque la condición sea falsa al principio, el código{" "}
            <strong>se ejecuta al menos una vez</strong>.
          </li>
          <li>
            En el <strong>while</strong>, la condición se comprueba{" "}
            <strong>antes de entrar</strong>.
          </li>
          <li>
            Como la condición es falsa desde el inicio, el bucle{" "}
            <strong>no se ejecuta nunca</strong>.
          </li>
        </ol>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Muy importante</div>
          <p>
            Si necesitas que un bloque se ejecute al menos una vez,{" "}
            <strong>no uses while</strong>: usa <strong>do...while</strong>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CÓDIGO */}
      <section className="card">
        <h2>El código (para entenderlo)</h2>

        <pre>
          <code>{`/* ===== do...while ===== */
let numero = 5;

do {
  numero = prompt("DO...WHILE → Introduce un número mayor o igual que 10");
} while (numero < 10);

/* ===== while ===== */
let numeros = 15;

while (numeros < 0) {
  numeros = prompt("WHILE → Introduce un número positivo");
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
          <h3 className="links-box__title">🔁 Reto: valida un número</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Tu objetivo:</strong>
              <p className="links-desc">
                Usa <strong>do...while</strong> para pedir un número hasta que el usuario
                escriba uno mayor que 0.
              </p>
            </li>

            <li className="links-item">
              <strong>Sube un nivel:</strong>
              <p className="links-desc">
                Muestra un mensaje distinto si el usuario escribe letras o cancela.
              </p>
            </li>

            <li className="links-item">
              <strong>Pista:</strong>
              <p className="links-desc">
                Recuerda que <code>prompt()</code> devuelve texto. Más adelante veremos cómo
                validar correctamente.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
