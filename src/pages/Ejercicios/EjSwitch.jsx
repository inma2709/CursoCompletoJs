// src/pages/Ejercicios/EjercicioSwitch.jsx

export default function EjercicioSwitch() {
  /* =========================
     EJERCICIO 1 · SWITCH CLÁSICO
     ========================= */
  const ejercicio1 = () => {
    let opcion = prompt(
      "Elige una opción:\n1. Saludar\n2. Despedirse\n3. Dar las gracias"
    );

    opcion = Number(opcion);

    switch (opcion) {
      case 1:
        alert("👋 Hola, bienvenido/a");
        break;

      case 2:
        alert("👋 Hasta luego, ¡nos vemos!");
        break;

      case 3:
        alert("🙏 Gracias por participar");
        break;

      default:
        alert("❌ Opción incorrecta");
    }
  };

  /* =========================
     EJERCICIO 2 · SWITCH(TRUE)
     ========================= */
  const ejercicio2 = () => {
    let nota = prompt("Introduce tu nota (0 a 10)");
    nota = Number(nota);

    switch (true) {
      case nota < 0 || nota > 10:
        alert("❌ Nota incorrecta");
        break;

      case nota < 5:
        alert("❌ Insuficiente");
        break;

      case nota === 5:
        alert("⚠️ Suficiente");
        break;

      case nota === 6:
        alert("🙂 Bien");
        break;

      case nota >= 7 && nota <= 8:
        alert("😊 Notable");
        break;

      case nota >= 9 && nota <= 10:
        alert("🏆 Sobresaliente");
        break;

      default:
        alert("⚠️ Nota incorrecta");
    }
  };

  return (
    <article className="wrap">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <span className="badge">E5 · Switch</span>
        <h1>Ejercicios con switch</h1>
        <p className="muted">
          Practica <strong>switch</strong> en dos situaciones distintas:
          opciones cerradas y rangos de valores.
        </p>
      </header>

      <div className="divider" />

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="card">
        <h2>Ejercicio 1 · switch clásico</h2>

        <p>
          Usa <code>switch</code> para ejecutar una acción según la opción elegida.
        </p>

        <ul>
          <li>1 → Saludar</li>
          <li>2 → Despedirse</li>
          <li>3 → Dar las gracias</li>
        </ul>

        <button
          className="btn btn-primary"
          onClick={ejercicio1}
          style={{ marginTop: ".75rem" }}
        >
          ▶ Probar ejercicio 1
        </button>

        <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
          <p className="callout__title">💡 Qué debes aprender</p>
          <p>
            Este <code>switch</code> compara valores exactos. Es ideal para menús,
            opciones y decisiones cerradas.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="card">
        <h2>Ejercicio 2 · switch(true)</h2>

        <p>
          Ahora usamos <code>switch(true)</code> para trabajar con{" "}
          <strong>rangos</strong>, como haríamos con <code>if / else if</code>.
        </p>

        <ul>
          <li>Menor de 5 → Insuficiente</li>
          <li>5 → Suficiente</li>
          <li>6 → Bien</li>
          <li>7–8 → Notable</li>
          <li>9–10 → Sobresaliente</li>
        </ul>

        <button
          className="btn btn-primary"
          onClick={ejercicio2}
          style={{ marginTop: ".75rem" }}
        >
          ▶ Probar ejercicio 2
        </button>

        <div className="callout callout--warning" style={{ marginTop: "1rem" }}>
          <p className="callout__title">⚠️ Ojo con el orden</p>
          <p>
            En <code>switch(true)</code> el orden de los <code>case</code> es clave:
            el primero que sea <code>true</code> se ejecuta.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* =========================
          CIERRE DIDÁCTICO
      ========================= */}
      <section className="card">
        <h2>Conclusión</h2>

        <ul>
          <li>
            Usa <code>switch</code> clásico cuando compares valores concretos.
          </li>
          <li>
            Usa <code>switch(true)</code> cuando necesites rangos o condiciones.
          </li>
        </ul>

        <div className="callout callout--summary">
          <p className="callout__title">🧠 Idea final</p>
          <p>
            Si dudas entre <code>if</code> y <code>switch(true)</code>, elige el que
            haga el código más claro.
          </p>
        </div>
      </section>
    </article>
  );
}
